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

    app.androidProjectNumber = '829404370623'; // Put your Google API project number here

    app.constants = {
        NO_APP_ID_MESSAGE: '<h3>Telerik Platform <strong>App ID</strong> is not set.</h3><p><span>App ID</span> ' +
        'links the sample mobile app to a Telerik Platform app.</p><p>To set the <span>App ID</span> ' +
        'open the <span>/scripts/config.js</span> file and replace <strong>$TELERIK_APP_ID$</strong> with the ' +
        '<span>App ID</span> of your Telerik app.</p>',

        NO_GOOGLE_API_PROJECT_NUMBER: '<h3>Missing Google API Project Number!</h3> ' +
        '<p>It appears that you have not filled in your Google API project number. ' +
        'It is required for push notifications on Androod.</p> ' +
        '<p>Please go to <span>/scripts/config.js</span> and replace <strong>$ANDROOD_PROJECT_NUMBER$</strong> with the ' +
        '<span>Google API project number</span> at the beginning of the file.</p>',

        SUCCESS_TEXT: 'SUCCESS!<br /><br />The device has been registered for push notifications.<br /><br />',
        UNREGISTERED_TEXT: 'Device successfully unregistered.',
        EMULATOR_MODE: false
    };
}(window));
