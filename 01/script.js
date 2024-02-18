// const links = document.querySelectorAll("nav a");

// links.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();

//     const id = e.target.href.split("#")[1];
//     document.querySelector(`#${id}`).scrollIntoView({ behavior: "smooth" });
//   });
// });

//with delegation:
const nav = document.querySelector("nav");
// nav.addEventListener("click", (e) => {
//   if (!e.target.matches("a")) {
//     return;
//   }
//   e.preventDefault();

//   const id = e.target.href.split("#")[1];
//   document.querySelector(`#${id}`).scrollIntoView({ behavior: "smooth" });
// });

//Scroll lock:

// let lock = false;
// document.addEventListener("scroll", (e) => {
//   if (!lock) {
//     lock = true;
//     setTimeout(() => (lock = false), 200);
//     console.log("asdasd");
//   }
// });

//loDash solution:
function onScroll() {
  console.log("asdf");
  nav.classList.toggle("navbar-scrolled", scrollY > 200);
}
document.addEventListener("scroll", _.throttle(onScroll, 200));

const options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 1.0,
};

function onObserver(entries) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      console.log("asd");
      entry.target.classList.add(
        "animate__animated",
        `animate__${entry.target.dataset.scrollAnimation}`
      );
    }
  }
}

const observer = new IntersectionObserver(onObserver, options);

document.querySelectorAll("[data-scroll]").forEach((element) => {
  observer.observe(element);
});

function onCounterObserve(entries) {
  for (const entry of entries) {
    if (entry.isIntersecting && "started" in entry.target.dataset) {
      const counter = entry.target;
      const number = Number.parseInt(counter.dataset.countTo, 10);

      for (let i = 0; i < number; i++) {
        setTimeout(() => (counter.innerText = i), 200);
      }
    }
  }
}

const counterObserver = new IntersectionObserver(onCounterObserve, options);

function smartCounter(counter, counterObserver) {
  counterObserver.observe(counter);
  counter.dataset.started = "";
}

document.querySelectorAll("[data-count-to]").forEach((e) => {
  smartCounter(e, counterObserver);
});
