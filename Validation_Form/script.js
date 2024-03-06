
var submitBtn = document.getElementById("button");



var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");


function validateName(){
    var fullName = document.getElementById("name").value;

    if(fullName.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (!fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    var phoneNo = document.getElementById("phone").value;

    if (phoneNo.length == 0){
        phoneError.innerHTML = "Add phone number";
        return false;
    }
    if (phoneNo.length !== 10){
        phoneError.innerHTML = "Phone number should be 10";
        return false;
    }
    if (!phoneNo.match(/^\d{10}$/)){
        phoneError.innerHTML = "Must be numbers";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    var emailId = document.getElementById("email").value;

    if(emailId.length == 0){
        emailError.innerHTML = "Email required";
        return false;
    }
    if(!emailId.match(/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.[a-zA-Z]{2,})+$/)){
        emailError.innerHTML = "Email Invalid";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validateMessage(){
    var required = 30;
    var addMessage = document.getElementById("message").value;
    var messagelen = required - addMessage.length;

    if(addMessage.length == 0){
        messageError.innerHTML = "Enter message";
        return false;
    }
    if (messagelen > 0){
        messageError.innerHTML = messagelen + " more required";
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function Validate(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = "Fix all errors";
        setTimeout(function(){
            submitError.style.display = 'none';
        }, 1000)
        return false;
    }
}