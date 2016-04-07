define(function (require) {
    'use strict';

    return {
        init: function() {
            var single = require('singleton/singleton');
            var single1, single2;

            single1 = single.getInstance('maricel');
            single2 = single.getInstance('bambam');
            console.log(single1.name);
            console.log(single2.name);
        }
    };
});
