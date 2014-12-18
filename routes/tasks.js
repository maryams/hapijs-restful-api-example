// Options can be passed to plugins on registration
exports.register = function(server, options, next) {
    server.route([
        {
            method: 'GET',
            path: '/tasks',
            handler: function (request, reply) {
                reply('Do all the things!');
            }
        }
    ]);
 
    // Callback, completes the registration process
    next();
}
 
// Required for all plugins
// If this were a npm module, one could do this:
// exports.register.attributes = require('package.json')
exports.register.attributes = {
    name: 'tasks-route', // Must be unique
    version: '1.0.0'
};