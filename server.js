let http = require('http');
let routes = require('./route.js');

http.createServer(routes.handleRequest).listen(3000);