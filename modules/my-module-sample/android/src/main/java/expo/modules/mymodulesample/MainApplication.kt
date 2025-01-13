import com.accessibilitytoggleapp.AccessibilityServiceModule

override fun getPackages(): List<ReactPackage> {
    return listOf(
        MainReactPackage(),
        AccessibilityServiceModule() // Register the new module
    )
}
