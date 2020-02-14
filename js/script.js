document.getElementById("copyright-year").outerHTML =
  new Date().getYear() + 1900;

var startTime, time;
var duration = 4000;
var startX = 0,
  endX = 200;
var obj = document.getElementsByClassName("canvas")[0];
var lettering = document.getElementsByClassName("lettering")[0];

var run = function() {
  time = new Date().getTime() - startTime;
  time = time / duration;
  requestAnimationFrame(run);

  var r = 50;
  // var x = Math.floor(r * Math.cos(time));
  var x = 0;
  // var y = Math.floor(r * Math.sin(time) - window.pageYOffset);
  var y = 50 * time - window.pageYOffset;
  var heightoffset = 0.35 * window.innerHeight - 0.5 * obj.clientWidth;

  setPos(x, y, heightoffset);
};

var setPos = function(x, y, heightoffset) {
  obj.style["background-position"] =
    "0 " + window.pageYOffset * 0.9 + "px, " + x + "px " + y + "px";
};

startTime = new Date().getTime();
run();
