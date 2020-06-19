

let songs = [];
let currentSong = 0;
const title = document.querySelector('h1');
const input = document.querySelector('input');
const label = document.querySelector('label');
const prev = document.querySelector('#prev');
const play = document.querySelector('#play');
const next = document.querySelector('#next');
const player = document.querySelector('audio');
player.volume = 0.3;



let getSongs = (event) => {
    songs = event.target.files;
    playSong();
    label.innerText = songs[currentSong].name.slice(0, -4);
    title.innerText = 'Spotifake Player 🤘 '
}

let playSong = () => {
    let song = URL.createObjectURL(songs[currentSong]);
    label.innerText = songs[currentSong].name.slice(0, -4);
    label.style.backgroundColor = "#fb5607"
    player.setAttribute('src', song);
    player.play();
    play.innerText = '⏸';
    play.onclick = pause;
}

let pause = () => {
    play.innerText = '▶️';
    player.pause();
    play.onclick = playCurrent;
}
let playCurrent = () => {
    play.innerText = '⏸';
    player.play();
    play.onclick = pause;
}

let nextSong = () => {
    if (currentSong + 1 < songs.length) {
        currentSong++
        playSong();
    }

}
let prevSong = () => {
    if (currentSong - 1 >= 0) {
        currentSong--
        playSong();
    }

}

input.onchange = getSongs;
next.onclick = nextSong;
prev.onclick = prevSong;
