const imag = document.getElementById("eyeIcon");
const password = document.getElementById("password");

imag.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        imag.src = "icons/eye-solid.svg";
    }else{
        password.type = "password";
        imag.src = "icons/eye-slash.svg";
    }
}