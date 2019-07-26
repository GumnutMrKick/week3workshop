module.exports = function(app,path) {

    app.get('/login', function (req, res) {
        var filepath = path.resolve('../www/login.html');
        res.sendFile(filepath);
    });

}