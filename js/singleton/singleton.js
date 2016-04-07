define(function() {
    'use strict';

    var Singleton = function(name) {
        this.name = name;
    }

    var singleton;

    return {
        getInstance: function(name) {
            (!singleton) ?
                singleton = new Singleton(name)
                :
                console.log('already created');
            return singleton;
        }
    }
});
