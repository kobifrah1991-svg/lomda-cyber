package app.scitedra.tedralingo;

import android.appwidget.AppWidgetManager;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

/**
 * The web app tells the home-screen widget what to show (js/native.js → TedraWidget.update):
 * streak, today's goal progress and the next step, already in the learner's language.
 */
@CapacitorPlugin(name = "TedraWidget")
public class WidgetPlugin extends Plugin {

    @PluginMethod
    public void update(PluginCall call) {
        Context ctx = getContext();
        SharedPreferences.Editor e = ctx.getSharedPreferences(StreakWidget.PREFS, Context.MODE_PRIVATE).edit();
        e.putInt("streak", Math.max(0, call.getInt("streak", 0)));
        e.putInt("goalPct", Math.max(0, Math.min(100, call.getInt("goalPct", 0))));
        e.putBoolean("doneToday", Boolean.TRUE.equals(call.getBoolean("doneToday", false)));
        e.putString("title", clip(call.getString("title", "")));
        e.putString("sub", clip(call.getString("sub", "")));
        e.putString("cta", clip(call.getString("cta", "")));
        e.apply();

        AppWidgetManager mgr = AppWidgetManager.getInstance(ctx);
        int[] ids = mgr.getAppWidgetIds(new ComponentName(ctx, StreakWidget.class));
        if (ids.length > 0) {
            Intent i = new Intent(ctx, StreakWidget.class);
            i.setAction(AppWidgetManager.ACTION_APPWIDGET_UPDATE);
            i.putExtra(AppWidgetManager.EXTRA_APPWIDGET_IDS, ids);
            ctx.sendBroadcast(i);
        }
        call.resolve();
    }

    private static String clip(String s) {
        if (s == null) return "";
        return s.length() > 80 ? s.substring(0, 80) : s;
    }
}
