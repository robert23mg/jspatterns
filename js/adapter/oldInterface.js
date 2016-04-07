define(function() {
    'use strict';

    var OldInterface = function() {

    };

    OldInterface.prototype.doSomethingOld = function() {
        console.log('I am an old method');
    };

    return new OldInterface();
})
