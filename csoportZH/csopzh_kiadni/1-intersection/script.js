const progressProperties = [
  {
    id: "group-test",
    backgroundColor: "#FF9B9B",
    motivationalText: "You can do it!",
    motivationalTextHungarian: "Minden kezdet nehéz!",
  },
  {
    id: "react-assignment-1",
    backgroundColor: "#FFC97E",
    motivationalText: "Keep going!",
    motivationalTextHungarian: "Csak így tovább!",
  },
  {
    id: "react-assignment-2",
    backgroundColor: "#A0E7E5",
    motivationalText: "Almost there!",
    motivationalTextHungarian: "Majdnem kész vagy!",
  },
  {
    id: "end-term",
    backgroundColor: "#B5EAD7",
    motivationalText: "You are so close!",
    motivationalTextHungarian: "Már nagyon közel vagy!",
  },
  {
    id: "finish",
    backgroundColor: "#7BFF78",
    motivationalText: "You did it!",
    motivationalTextHungarian: "Tárgy teljesítve!",
  },
];

const milestones = document.querySelectorAll("section.milestone");
const motivationTitle = document.querySelector("h1#motivation");

function onObserve(entries) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      const progressProperty = progressProperties.find((item) => {
        return item.id === entry.target.id;
      });
      document.body.style.backgroundColor = progressProperty.backgroundColor;
      motivationTitle.innerHTML = progressProperty.motivationalText;
    }
  }
}

const milestoneObserver = new IntersectionObserver(onObserve, {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
});

milestones.forEach((milestone) => {
  milestoneObserver.observe(milestone);
});
