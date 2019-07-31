module.exports = function(app,path) {

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

}