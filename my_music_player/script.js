const backBtn = document.getElementById("backBtn");
const songPlay = document.getElementById("songPlay");
const selectSong = document.getElementById("selectSong");
const hide = document.getElementsByClassName("hide");
const tracks = document.getElementsByClassName("tracks");
const songList = document.getElementById("songList");
const barIcon = document.getElementById("barIcon");
const song = document.getElementById("song");
const songRange = document.getElementById("songRange");
const playSong = document.getElementsByClassName("playSong");
const playMusic = document.getElementById("playMusic");
const navigation = document.getElementsByClassName("navigation");
const background2 = document.getElementById("background2");
const backIcon = document.getElementById("backIcon");


const songs = [
    document.getElementById("song1"),
    document.getElementById("song2"),
    document.getElementById("song3"),
    document.getElementById("song4"),
];

let currentSong = 0;

function playNextSong(){
    songs[currentSong].pause();
    currentSong =  (currentSong + 1) % songs.length;
    songs[currentSong].play();
    songs[currentSong].currentTime = 0;
}

function playPreviousSong(){
    songs[currentSong].pause();
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    songs[currentSong].play();
    songs[currentSong].currentTime = 0;
}

function pausePlay(){
    if(songs[currentSong].paused){
        songs[currentSong].play();
        playMusic.classList.add("fa-pause");
        playMusic.classList.remove("fa-play");
    }else{
        songs[currentSong].pause();
        playMusic.classList.add("fa-play");
        playMusic.classList.remove("fa-pause");
    }
}


// songRange.onchange = function(){
//     songs[currentSong].play();
//     songs[currentSong].currentTime = songRange.value;
// }

songRange.oninput = function(){
    songs[currentSong].currentTime = this.value;
};

// Updating the slider
songs.forEach(function(song){
    song.ontimeupdate = function(){
        songRange.value = this.currentTime
    }
})

document.getElementById("bIcon").addEventListener("click", playPreviousSong);
document.getElementById("nIcon").addEventListener("click", playNextSong);


// Function to add song and set range to original song duration
song.onloadedmetadata = function(){
    songRange.max = song.duration;
    songRange.value = song.currentTime;
}

if(song.play()){
    setInterval(()=>{
        songRange.value = song.currentTime;
    }, 600)
}

// Function to rotate hamburger menu and show song list
selectSong.onclick = function(){
    //songList.classList.toggle("hide");
    barIcon.classList.toggle("rotate");
    barIcon.classList.add("openSong");
}

// function to show songs onclicking button
function toggleSongList(){
    if (songList.classList.contains("openSong")){
        songList.classList.remove("openSong");
    }else{
        songList.classList.add("openSong")
    }
}


function mvBack(){
    if(background2.classList.contains("showBackground")){
        background2.classList.remove("showBackground");
    }else{
        background2.classList.add("showBackground");
    }
}

// Tracks function
for(option of tracks){
    option.onclick = function(){
        songPlay.innerHTML = this.textContent;
        barIcon.classList.toggle("rotate");
        songList.classList.remove("openSong");
    }
}