let express = require('express');
let app = express();
let http = require('http').Server(app);
app.use(express.static(__dirname+'/www'));

//routes
require('./routes/accountroute.js')(app,path);
require('./routes/loginroute.js')(app,path);

let server = http.listen(3000, function () {

    let host = server.address().address;
    let port = server.address().port;
    console.log("My First Nodejs Server!");
    console.log("Server listening on: " + host + " port: " + port);

});
