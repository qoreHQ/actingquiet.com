document.getElementById("copyright-year").outerHTML =
  new Date().getYear() + 1900;

var startTime, time;
var duration = 4000;
var startX = 0,
  endX = 200;
var obj = document.getElementsByClassName("canvas")[0];
var lettering = document.getElementsByClassName("lettering")[0];
var heightoffset = 0;

var run = function() {
  time = new Date().getTime() - startTime;
  time = time / duration;

  var r = 50;
  var x = 0;
  var scrollpos = window.pageYOffset;
  var y = 50 * time - scrollpos;
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
