$(document).ready(function(){
    var user, pass;
    $("#submit").click(function() {
        user = $("#email").val();
        pass = $("#password").val();
        $.post("http://localhost:3000/login", {
            user: user,
            password: pass
        }, function(data) {
            console.log(data);
            if(data.ok == true) {
                location.href = "/account.html";
            }else {
                alert('Login failed')
            }
        });
    });
});
