const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes.handler);

//server config

server.listen(3000);
