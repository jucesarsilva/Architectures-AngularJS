(function __blocks_exception(){
    
    //~SETTER
    angular
        .module('blocks.exception', [])
        .config(exceptionConfig);
    
    exceptionConfig.$inject = ['$provide'];
    extendExceptionHandler.$inject = ['$delegate', '$log'];
    
    function exceptionConfig($provide) {
        $provide.decorator('$exceptionHandler', extendExceptionHandler);
    };

    function extendExceptionHandler($delegate, $log) {
        return function(exception, cause) {
            $delegate(exception, cause);
            var errorData = {
                exception: exception,
                cause: cause
            };
            
            $log.debug(exception.msg, errorData);
        };
    };
    
})();