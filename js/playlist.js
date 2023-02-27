const playlist = [
  {
    song: "creep",
    singer: "Radio Head",
  },
  {
    song: "Beat it",
    singer: "Michael Jackson",
  },
  {
    song: "Stay With Me",
    singer: "Matsubara Miki",
    link: "https://www.youtube.com/watch?v=VEe_yIbW64w&ab_channel=MikiMatsubara-Topic",
  },
];
const song = document.querySelector("#playlist span:nth-child(2)");
const singer = document.querySelector("#playlist span:nth-child(3)");
const link = document.querySelector("#playlist a");

const todayPlaylist = playlist[Math.floor(Math.random() * playlist.length)];

song.innerText = todayPlaylist.song;
singer.innerText = todayPlaylist.singer;
