const progressBar = document.createElement("div");
const progressInner = document.createElement("div");
progressBar.appendChild(progressInner);

const body = document.querySelector("#page-top");
body.prepend(progressBar);

function initialize() {
  progressBar.style.position = "fixed";
  progressBar.style.top = "0";
  progressBar.style.left = "0";
  progressBar.style.zIndex = "9999";
  progressBar.style.backgroundColor = "lightgray";
  progressBar.style.borderRadius = "5px";
  progressBar.style.width = "100%";
  progressBar.style.height = "10px";

  progressInner.style.width = "0%";
  progressInner.style.height = "100%";
  progressInner.style.borderRadius = "5px";
  progressInner.style.backgroundColor = "orange";
  progressInner.style.transition = "width 0.3s ease";
}

initialize();

function onScroll() {
  let s = window.scrollY;
  let d = document.documentElement.scrollHeight;
  let c = window.innerHeight;
  let scrollPercent = (s / (d - c)) * 100;
  let position = scrollPercent;

  progressInner.style.width = `${position}%`;
  console.log("hello");
}

window.addEventListener("scroll", _.throttle(onScroll, 200));
