$( document ).ready(function(){
    $("#loginform").submit(function(event){
    
        event.preventDefault();
        console.log("submitting form..");
        ajaxPost();
    
    })
    console.log("we start here");



    function ajaxPost(){
    
        let formData = {
    
            email : $("email").val(),
            parword : $("parword").val()
    
        }
        $.ajax({
            type : "POST",
            contentType : "application/json",
            url : window.location + "/login/attempt",
            data : JSON.stringify(formData),
            dataType : 'json',
            success : function(result) {
    
                if (result.ok == true){
                    console.log("true");
                    app.get('/account', function (req, res) {
                        let filepath = path.resolve('www/account.html');
                        res.sendFile(filepath);
                    });
                    
                } else {
                    console.log("flase");
                    $("#loginplace").removeClass("hidemessage");
                    $("#loginplace").addClass("showmessage");
    
                }
            },
            error : function(e) {
                alert("Error!");
                console.log("ERROR: " + e);
            }
        });
        console.log("end");
        $("#email").val("");
        $("#parword").val("");
    
    }
})






