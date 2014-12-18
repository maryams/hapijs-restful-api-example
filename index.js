// Require the Hapi node module
var Hapi = require('hapi');
 
// Create a server instance
var server = new Hapi.Server();
 
// Create a connection which will listen on port 8000
server.connection({
    host: 'localhost',
    port: 8000
});
 
// Add a GET endpoint /hello
server.route({
    method: 'GET',
    path: '/hello',
    handler: function (request, reply) {
        reply('world');
    }
 });
 
// Start the server
server.start();