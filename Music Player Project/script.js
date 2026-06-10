const title = document.getElementById("title");
const artist = document.getElementById("artist");

const audio = document.getElementById("audio");
const play = document.getElementById("play");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const progress = document.getElementById("progress");
const current = document.getElementById("current");
const durationText = document.getElementById("duration");

const mainImg = document.getElementById("mainImg");
const cover = document.getElementById("cover");

/* SONGS COLLECTION */
let songs = [
  {
    title: "Wraz Me Warkara Zamake La",
    artist: "Fayaz Kheshgi",
    src: "./songs/Wraz-Mi-Warka-Zmake-La.mp3",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl7kmiCx1GPBp76GI9K0RXwmdeJdixyqBwZw&s",
  },
  {
    title: "Humdard",
    artist: "Arijit Singh",
    src: "./songs/Humdard-Full-Video-Song-Ek-Villain.mp3",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTt6Iaa2Pp6LVRflpHGcCki2cX17EecUkjzA&s",
  },
  {
    title: "Channa Mereya",
    artist: "Arijit Singh",
    src: "./songs/Channa-Mereya-Lyric-Video.mp3",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6N7ca5Xb4nHGS_Cowb1Onv4Vgm1x4SrN6kA&s",
  },
  {
    title: "Phir bhi Tum ko chahunga",
    artist: "Arijit Singh",
    src: "./songs/Phir bhi Tum ko chahunga.mp3",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTt6Iaa2Pp6LVRflpHGcCki2cX17EecUkjzA&s",
  },
];

let songIndex = 0;
let isPlaying = false;

/* LOAD SONG */
function loadSong(song) {
  title.innerText = song.title;
  artist.innerText = song.artist;

  audio.src = song.src;
  mainImg.src = song.cover;
  cover.style.backgroundImage = `url(${song.cover})`;

  // Reset progress and timers safely before new track loads
  progress.value = 0;
  current.innerText = "0:00";
  durationText.innerText = "0:00";
}

// Bootstrap initial execution
loadSong(songs[songIndex]);

/* PLAY */
function playSong() {
  audio.play();
  isPlaying = true;
  play.classList.replace("fa-play", "fa-pause");
  mainImg.classList.add("active");
}

/* PAUSE */
function pauseSong() {
  audio.pause();
  isPlaying = false;
  play.classList.replace("fa-pause", "fa-play");
  mainImg.classList.remove("active");
}

/* BUTTON CLICK ACCELERATOR */
play.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

/* NEXT */
next.addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
});

/* PREV */
prev.addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
});

/* PROGRESS BAR TRACKING ENGINE */
audio.addEventListener("timeupdate", (e) => {
  const { duration, currentTime } = e.target;
  progress.value = (currentTime / duration) * 100 || 0;

  // Format Elapsed Playback Display
  let min = Math.floor(currentTime / 60);
  let sec = Math.floor(currentTime % 60);
  if (sec < 10) sec = "0" + sec;
  current.innerText = `${min}:${sec}`;

  // Format Total Duration Target Safely
  if (!isNaN(duration)) {
    let dmin = Math.floor(duration / 60);
    let dsec = Math.floor(duration % 60);
    if (dsec < 10) dsec = "0" + dsec;
    durationText.innerText = `${dmin}:${dsec}`;
  }
});

/* SEEK TRACK TARGET POSITION */
progress.addEventListener("input", () => {
  if (audio.duration) {
    audio.currentTime = (progress.value / 100) * audio.duration;
  }
});

/* AUTO PLAYLIST PROGRESSION */
audio.addEventListener("ended", () => {
  next.click();
});
