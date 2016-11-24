module.exports = function (app) {

    'use strict';

    angular
       .module(app.modules.filters)
       .filter('minimize', $minimize);

    function $minimize() {
        var DEFAULT_SIZE = 20;
        return function (value, size, pattern) {
            var _pattern = pattern || "...";
            var _len = parseInt(size || DEFAULT_SIZE);
            if (typeof value === 'string') {
                if (value.length > _len)
                    return value.substring(0, _len).concat(_pattern);
                else
                    return value;
            }
            else {
                return '';
            }
        }
    };
    
    return $minimize;
};