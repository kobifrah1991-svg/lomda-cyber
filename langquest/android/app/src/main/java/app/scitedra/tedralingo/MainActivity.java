package app.scitedra.tedralingo;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(WidgetPlugin.class);   // the home-screen widget's bridge (js/native.js)
        super.onCreate(savedInstanceState);
    }
}
