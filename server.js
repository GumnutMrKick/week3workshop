let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

let app = express();
let http = require('http').Server(app);

app.use(express.static(__dirname+'/www'));
app.use(bodyParser.json());

//routes
require('./routes/accountroute.js')(app,path);
require('./routes/loginroute.js')(app,path);
require('./routes/loginattempt.js')(app,path);


let server = http.listen(3000, function () {

    let host = server.address().address;
    let port = server.address().port;
    console.log("My First Nodejs Server!");
    console.log("Server listening on: " + host + " port: " + port);

});

app.post('/login/attempt', function (req, res) {
        
    if (!req.body){
        return res.sendStatus(400);
    }

    let result = {};

    console.log("look at me just after result init");

    if (req.body.email == "test1" && req.body.parword == "testpar1"
        || req.body.email == "test2" && req.body.parword == "testpar2"
        || req.body.email == "test3" && req.body.parword == "testpar3") {
    
        
        console.log("I'm here too");
        result.ok = true;
    
    } else {

        result.ok = false;

    }
    
    res.send(result);

});