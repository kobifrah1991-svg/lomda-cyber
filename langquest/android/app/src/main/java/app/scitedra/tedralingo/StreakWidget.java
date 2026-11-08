package app.scitedra.tedralingo;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.widget.RemoteViews;

/** Home-screen widget: the streak, today's goal and one tap back into the next lesson. */
public class StreakWidget extends AppWidgetProvider {
    static final String PREFS = "tedralingo_widget";

    @Override
    public void onUpdate(Context ctx, AppWidgetManager mgr, int[] ids) {
        SharedPreferences p = ctx.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
        int streak = p.getInt("streak", 0);
        int goalPct = p.getInt("goalPct", 0);
        boolean done = p.getBoolean("doneToday", false);
        String title = p.getString("title", "");
        String sub = p.getString("sub", "");
        String cta = p.getString("cta", "");

        Intent open = new Intent(ctx, MainActivity.class);
        open.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
        PendingIntent pi = PendingIntent.getActivity(ctx, 0, open, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);

        for (int id : ids) {
            RemoteViews v = new RemoteViews(ctx.getPackageName(), R.layout.widget_streak);
            v.setTextViewText(R.id.w_streak, String.valueOf(streak));
            v.setTextViewText(R.id.w_flame, done ? "\uD83D\uDD25" : "\u2728"   /* 🔥 once today's goal is met, ✨ before */);
            v.setTextViewText(R.id.w_title, title.isEmpty() ? ctx.getString(R.string.app_name) : title);
            v.setTextViewText(R.id.w_sub, sub.isEmpty() ? ctx.getString(R.string.widget_hint) : sub);
            v.setTextViewText(R.id.w_cta, cta.isEmpty() ? ctx.getString(R.string.widget_open) : cta);
            v.setProgressBar(R.id.w_goal, 100, goalPct, false);
            v.setOnClickPendingIntent(R.id.w_root, pi);
            mgr.updateAppWidget(id, v);
        }
    }
}
