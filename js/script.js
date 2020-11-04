// Set copyright notice year
document.getElementById("copyright-year").outerHTML =
  new Date().getYear() + 1900;

// Page animatioon
const speed = 0.025;
const startTime = new Date().getTime();

// Size variables
const obj = document.getElementsByClassName("canvas")[0];
let { clientWidth } = obj;
let { pageYOffset, innerHeight } = window;

window.addEventListener("scroll", () => {
  pageYOffset = window.pageYOffset;
});
window.addEventListener("resize", () => {
  innerHeight = window.innerHeight;
  clientWidth = obj.clientWidth;
});

function run() {
  // Time elapsed since pageload
  const time = new Date().getTime() - startTime;

  // Y position of background image
  const y = time * speed - pageYOffset;

  const heightoffset =
    0.5 * innerHeight - 0.5 * clientWidth + 0.8 * pageYOffset;

  obj.style["background-position"] = "0 " + heightoffset + "px, 0 " + y + "px";

  // Loop at next animation frame
  requestAnimationFrame(run);
}

run();
