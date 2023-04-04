package com.thebestapps.gallery;

import com.getcapacitor.BridgeActivity;
import java.util.ArrayList;
import android.os.Bundle;

import com.getcapacitor.Plugin;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {
            {

                // add(jp.rdlabo.capacitor.plugin.facebook.FacebookLogin.class);
                add(com.getcapacitor.community.facebooklogin.FacebookLogin.class);

            }
        });
    }

}
