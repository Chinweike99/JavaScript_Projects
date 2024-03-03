let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");



const apiURL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

function genarateQr(){
    if(qrText.value.length > 0){
        qrImage.src = apiURL + qrText.value;
        imgBox.classList.add("show-img");
    }else{
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }

}