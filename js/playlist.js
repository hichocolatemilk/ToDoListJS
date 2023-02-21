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
  },
];
const song = document.querySelector("#playlist span:first-child");
const singer = document.querySelector("#playlist span:last-child");

const todayPlaylist = playlist[Math.floor(Math.random() * playlist.length)];

song.innerText = todayPlaylist.song;
singer.innerText = todayPlaylist.singer;
