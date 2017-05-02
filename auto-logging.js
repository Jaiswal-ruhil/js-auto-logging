/*
module to log invocations
*/

var logger = require('logger').createLogger();
var wrap = require('decorator-wrap').wrap;

var logmethod = (callback, args, name, type) => {
    logger.info('Method:', name, " args: ", args);
    return callback();
};

function logfunction(wrapperFunction) {
    return function(...args) {
        logger.info('Function:', wrapperFunction.name, " args: ", args);
        return wrapperFunction.apply(this, args)
    };
}


// exports.logclass = logclass
exports.logmethod = wrap(logmethod)
exports.logfunction = logfunction
