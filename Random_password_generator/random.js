const pwdBox = document.getElementById("password");
const pwdLen = 15;
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const symbol = ">~!@#%^&*()_+=/*\|<[]{}-";
const numb = "0123456789";
const allChars = uCase + lCase + symbol + numb;

function createPasssword(){
    let pwd = '';
    pwd += uCase[Math.floor(Math.random() * uCase.length)];
    pwd += lCase[Math.floor(Math.random() * lCase.length)];
    pwd += numb[Math.floor(Math.random() * numb.length)];
    pwd += symbol[Math.floor(Math.random() * symbol.length)];

    while (pwdLen > pwd.length){
        pwd += allChars[Math.floor(Math.random() * allChars.length)];
    }
    pwdBox.value = pwd;
}

function copyPwd(){
    pwdBox.select();
    document.execCommand("copy");
}
