document.getElementById("copyright-year").outerHTML =
  new Date().getYear() + 1900;

let startTime, time;
let duration = 4000;
let startX = 0,
  endX = 200;
let obj = document.getElementsByClassName("canvas")[0];
let lettering = document.getElementsByClassName("lettering")[0];
let heightoffset = 0;

let run = function() {
  time = new Date().getTime() - startTime;
  time = time / duration;

  let r = 50;
  let x = 0;
  let scrollpos = window.pageYOffset;
  let y = 50 * time - scrollpos;
  heightoffset =
    0.5 * window.innerHeight - 0.5 * obj.clientWidth + 0.8 * scrollpos;

  requestAnimationFrame(run);
  setPos(x, y, heightoffset);
};

var setPos = function(x, y, heightoffset) {
  obj.style["background-position"] =
    "0 " + heightoffset + "px, " + x + "px " + y + "px";
};

startTime = new Date().getTime();

run();

// setInterval(() => {
//   run();
// }, 1);
