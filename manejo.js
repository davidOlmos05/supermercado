window.onload= function(){
    //validacion de nombre
    var form = document.getElementById("form");
    form.onsubmit=function(event){
        event.preventDefault();
        var nameInput = document.getElementById("name");
        if (nameInput.value.trim() === ""){
            alert("digite el nombre");
            return false;
        }
        //validacion de gmail
        var emailInput = document.getElementById("email");
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            alert("Digite un email válido");
            return false;
        }
        var passwordInput = document.getElementById("password");
        if (passwordInput.value.trim().length <8){
            alert("digitar una contraseña valida");
            return false;
        }
       
   

    }
}