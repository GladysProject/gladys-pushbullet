

module.exports = function(sails) {
    
    var notify = require('./lib/notify.js');
    var install = require('./lib/install.js');

    return {
        notify,
        install
    };
};