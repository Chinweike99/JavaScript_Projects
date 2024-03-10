const backBtn = document.getElementById("backBtn");
const songPlay = document.getElementById("songPlay");
const selectSong = document.getElementById("selectSong");
const hide = document.getElementsByClassName("hide");
const tracks = document.getElementsByClassName("tracks");
const songList = document.getElementById("songList");
const barIcon = document.getElementById("barIcon");

selectSong.onclick = function(){
    songList.classList.toggle("hide");
    barIcon.classList.toggle("rotate");
}

for(option of tracks){
    option.onclick = function(){
        songPlay.innerHTML = this.textContent;
        songList.classList.toggle("hide");
        barIcon.classList.toggle("rotate");
    }
}