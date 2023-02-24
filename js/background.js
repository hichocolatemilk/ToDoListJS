const gif = ["01.gif", "02.gif"];
const CLASSNAME = "bgimg";

const chosenGif = gif[Math.floor(Math.random() * gif.length)];

const bgGif = document.createElement("img");
bgGif.classList.add(CLASSNAME);

bgGif.src = `img/${chosenGif}`;
document.body.appendChild(bgGif);
