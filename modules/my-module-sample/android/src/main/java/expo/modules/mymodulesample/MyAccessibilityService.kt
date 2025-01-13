package com.example

import android.accessibilityservice.AccessibilityService
import android.view.accessibility.AccessibilityEvent
import android.util.Log

class MyAccessibilityService : AccessibilityService() {

    override fun onAccessibilityEvent(event: AccessibilityEvent?) {
        Log.d("MyAccessibilityService", "Event received: ${event?.eventType}")
    }

    override fun onInterrupt() {
        Log.d("MyAccessibilityService", "Service interrupted")
    

    override fun onServiceConnected() {
        super.onServiceConnected()
        Log.d("MyAccessibilityService", "Service connected")
    }
}
