define(function (require) {
    'use strict';

    var pubSub = require('pubsub/pubsub'),
        subscription;

    subscription = pubSub.subscribe('atopic', function(data) {
        console.log('atopic published with %o', data);
        subscription.dispose();
    });
});
