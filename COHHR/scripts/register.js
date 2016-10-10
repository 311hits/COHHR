(function (global) {
    'use strict';

    var app = global.app = global.app || {};
   
    app.config = {
        everlive: {
            appId: 'vdrlc9q5d82he4rz', // Put your Backend Services App ID here
            scheme: 'http'
        },
        views: {
            init: '#initView'
        }
    };
    app.androidProjectNumber = '829404370623';
    app.MainViewModel = (function () {

        var _onDeviceIsRegistered = function () {
            app.hideLoading();

           // $('#registerButton').hide();
            $('#unregisterButton').show();
            $('#message').html(app.constants.SUCCESS_TEXT);
        };

        var _onDeviceUnregistered = function() {
            app.hideLoading();

            $('#message').html(app.constants.UNREGISTERED_TEXT);
           // $('#registerButton').show();
            $('#unregisterButton').hide();
        };
        
        var onAndroidPushReceived = function(args) {
            alert('1 Android notification received: ' + JSON.stringify(args));
        };
        
        var onIosPushReceived = function(args) {
            alert('2 iOS notification received: ' + JSON.stringify(args));
        };
        
        var onWP8PushReceived = function (args) {
            alert('3 Windows Phone notification received: ' + JSON.stringify(args));
        };

function registerForPush() {

            var pushSettings = {
                android: {
                     senderID: app.androidProjectNumber
                },
                iOS: {
                    badge: 'true',
                    sound: 'true',
                    alert: 'true'
                },
                wp8: {
                    channelName: 'EverlivePushChannel'
                },
                notificationCallbackAndroid : onAndroidPushReceived,
                notificationCallbackIOS: onIosPushReceived,
                notificationCallbackWP8: onWP8PushReceived,
                customParameters: {
                    Age: 21
                }
            };

            app.showLoading();

            app.everlive.push.register(pushSettings)
                .then(
                    _onDeviceIsRegistered,
                    function (err) {
                        app.hideLoading();
                        alert('REGISTER ERROR: ' + JSON.stringify(err));
                    }
                );
        };

        var unregisterFromPush = function() {
            app.showLoading();

            app.everlive.push.unregister()
                .then(
                    _onDeviceUnregistered,
                    function(err) {
                        app.hideLoading();
                        alert('UNREGISTER ERROR: ' + JSON.stringify(err));
                    }
                );
        };

        return {
            registerForPush: registerForPush,
            unregisterFromPush: unregisterFromPush,
            getYear: app.getYear
        };
    }());
}(window));
    
