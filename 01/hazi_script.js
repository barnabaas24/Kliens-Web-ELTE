const progressBar = document.querySelector("#progressBar");

window.addEventListener("scroll", function () {
  var s = window.scrollY,
    d = document.documentElement.scrollHeight,
    c = window.innerHeight;
  var scrollPercent = (s / (d - c)) * 100;
  var position = scrollPercent;

  progressBar.value = position;
});
