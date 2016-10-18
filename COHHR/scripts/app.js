'use strict';

(function() {
    var app = {
        data: {}
    };

    var bootstrap = function() {
        $(function() {
            app.mobileApp = new kendo.mobile.Application(document.body, {
                transition: 'none',
                skin: 'nova',
                initial: 'components/home/view.html'
            });
        });
    };
    
    if (window.cordova) {
    document.addEventListener('deviceready', function() {
     if (navigator && navigator.splashscreen) {
               navigator.splashscreen.hide(); 
             
                 /* Push notifications Code */
  //   if (isAndroid) {
                
                var everlive = new Everlive({
                    appId: 'vdrlc9q5d82he4rz',
                });

                var devicePushSettings = {
                    iOS: {
                        badge: 'true',
                        sound: 'true',
                        alert: 'true'
                    },
                    android: {
                        projectNumber: '829404370623'
                    },
                    wp8: {
                        channelName: 'EverlivePushChannel'
                    },

                    notificationCallbackIOS: function (args) {
                    var str = JSON.stringify(args);
                    var obj = $.parseJSON(str);
                    navigator.notification.alert("COH HR Message: " + obj.alert);
                     },

                    notificationCallbackAndroid: function (args) {
                    var str = JSON.stringify(args);
                    var obj = $.parseJSON(str);
                    alert("COH HR Message: " + obj.message);
                    },

                    notificationCallbackWP8: function (args) {
                    var str = JSON.stringify(args);
                    var obj = $.parseJSON(str);
                    alert("COH HR Message: " + obj.message);
                }
                
                };

                everlive.push.register(devicePushSettings, function() {
               // alert("Successful registration in Telerik Platform. You are ready to receive push notifications.");
                }, function(err) {
                    alert("Error: " + err.message);
                });                 

                  //push notifications code ends here  //    }
                               
           } 
         bootstrap();
       }, false);
   } else {
      bootstrap();
} 

    app.keepActiveState = function _keepActiveState(item) {
        var currentItem = item;
        $('#navigation-container li.active').removeClass('active');
        currentItem.addClass('active');
    };

    window.app = app;

    app.isOnline = function() {
        if (!navigator || !navigator.connection) {
            return true;
        } else {
            return navigator.connection.type !== 'none';
        }
    };

    app.openLink = function(url) {
        if (url.substring(0, 4) === 'geo:' && device.platform === 'iOS') {
            url = 'http://maps.apple.com/?ll=' + url.substring(4, url.length);
        }

        window.open(url, '_system');
        if (window.event) {
            window.event.preventDefault && window.event.preventDefault();
            window.event.returnValue = false;
        }
    }; 

         /*   var onAndroidPushReceived = function (args) {
            alert('Notification received: ' + JSON.stringify(args));
             };   */ 

             
}());

// START_CUSTOM_CODE_kendoUiMobileApp
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// Handle the button
function onButtonDown() {
    // Exit the app!
    alert("Exiting App");
   if (navigator.app && navigator.app.exitApp) {
    navigator.app.exitApp();
} else if (navigator.device && navigator.device.exitApp) {
    navigator.device.exitApp();
}
}

function closeApp(buttonIndex) {
    if (buttonIndex == 1) {
        navigator.app.exitApp()
    }
    else {
   //     alert('Glad you are staying! ');
    }
}

 function openNav() {
           document.getElementById("mySidenav").style.width = "270px";
            }

 function closeNav() {
           document.getElementById("mySidenav").style.width = "0";
            }

// END_CUSTOM_CODE_kendoUiMobileApp