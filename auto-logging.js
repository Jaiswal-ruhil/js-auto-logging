
var logger = require('logger').createLogger();
var wrap = require('decorator-wrap').wrap;

// var logclass = (...args) => {
//   console.log('\nClass  ', ...args);
//   return args;
// };

// var logger = require('logger.js').logger;

var logmethod = (callback, args, name, type) => {
    logger.info('Method:', name, " args: ", args);
    return callback();
};

// exports.logclass = logclass
exports.logmethod = wrap(logmethod)
