package com.accessibilitytoggleapp

import android.content.Context
import android.provider.Settings
import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class AccessibilityServiceModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "AccessibilityServiceModule"
    }

    @ReactMethod
    fun toggleTalkBack(enable: Boolean) {
        try {
            val context: Context = reactApplicationContext
            Settings.Secure.putInt(
                context.contentResolver,
                Settings.Secure.ACCESSIBILITY_ENABLED,
                if (enable) 1 else 0
            )
            Log.d("AccessibilityServiceModule", "TalkBack toggled: $enable")
        } catch (e: Exception) {
            Log.e("AccessibilityServiceModule", "Error toggling TalkBack: ${e.message}")
        }
    }
}
