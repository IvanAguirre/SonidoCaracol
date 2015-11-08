cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
        "id": "org.apache.cordova.splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/network.js",
        "id": "org.apache.cordova.network-information.network",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/Connection.js",
        "id": "org.apache.cordova.network-information.Connection",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/com.native5.plugins.datepicker/scripts/datePickerPlugin.js",
        "id": "com.native5.plugins.datepicker.datePicker",
        "clobbers": [
            "datePicker"
        ]
    },
    {
        "file": "plugins/com.native5.plugins.datepicker/scripts/share.js",
        "id": "com.native5.plugins.datepicker.share",
        "clobbers": [
            "share"
        ]
    },
    {
        "file": "plugins/nl.moreapps.datepicker/www/datepicker.js",
        "id": "nl.moreapps.datepicker.Datepicker",
        "clobbers": [
            "window.datePicker"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.splashscreen": "1.0.0",
    "org.apache.cordova.network-information": "0.2.15",
    "com.native5.plugins.datepicker": "0.1.1",
    "nl.moreapps.datepicker": "1.0.2"
}
// BOTTOM OF METADATA
});