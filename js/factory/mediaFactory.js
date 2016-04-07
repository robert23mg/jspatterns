define(function (require) {
    'use strict';

    var media = {
        Image: require('factory/image'),
        Video: require('factory/video')
    }

    return {
        createMedia: function(type, attributes) {
            var MediaType = media[type];

            return new MediaType(attributes);
        }
    };
});
