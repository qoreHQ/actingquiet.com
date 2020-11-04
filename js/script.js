// Set copyright notice year
document.getElementById("copyright-year").outerHTML =
  new Date().getYear() + 1900;

// Page animatioon
const speed = 0.025;

let startTime, time;
let heightoffset = 0;

// Size variables
const obj = document.getElementsByClassName("canvas")[0];
let objWidth = obj.clientWidth;
let { pageYOffset, innerHeight } = window;
window.addEventListener("scroll", () => {
  pageYOffset = window.pageYOffset;
});
window.addEventListener("resize", () => {
  innerHeight = window.innerHeight;
  objWidth = obj.clientWidth;
});

function run() {
  // Time elapsed since pageload
  time = new Date().getTime() - startTime;

  const y = time * speed - pageYOffset;
  heightoffset = 0.5 * innerHeight - 0.5 * objWidth + 0.8 * pageYOffset;

  obj.style["background-position"] = "0 " + heightoffset + "px, 0 " + y + "px";

  // Loop at next animation frame
  requestAnimationFrame(run);
}

startTime = new Date().getTime();

run();
