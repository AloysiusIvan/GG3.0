document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("send");
    const emailmust = /@.*\./;
    button.addEventListener("click", function() {
        var pass = document.getElementById("pass").value;
        var email = document.getElementById("email").value;
        if(email === ""){
            alert("Email tidak boleh kosong!");
        } else{
            if(!emailmust.test(email)){
                alert("Email belum sesuai");
            }
        }
        if(pass === ""){
            alert("Password tidak boleh kosong!");
        } else {
            if(pass.length < 6){
                alert("Password minimal 6");
            }
        }
    });
});