const quote = document.getElementById("quote");
const authored = document.getElementById("author");

const api_url = "https://api.quotable.io/random";

async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();

    quote.innerHTML = data.content;
    authored.innerHTML = data.author;
}
getQuote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " _____by " + `"${authored.innerHTML}"`, "tweet Window", "width=600, heigth=300");
}