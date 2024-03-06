
var emailId = document.getElementById("email");
var addMessage = document.getElementById("message");
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
    if (!phoneNo.match(/^[0-9]{10}*$/)){
        phoneError.innerHTML = "Must be numbers";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}




