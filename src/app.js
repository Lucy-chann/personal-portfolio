import viewSectionDatas from "./viewSectionDatas";
import utils from "./utils/utilityFuncs";

/* creates and return page section tags */

/* scroll between sections handlers */

const container = document.getElementById("container");

const slider = {
  sections: document.getElementsByClassName("view-section"),
  handle: null,
  idle: true,
  activeIndex: 0,
  total: viewSectionDatas.length / 2,
};

const stopAutoPlay = function () {
  setTimeout(() => {
    slider.idle = true;
  }, 1000);
};

const checkSections = function () {
  for (let i = 0; i < viewSectionDatas.length; i++) {
    const childElement = container.children;

    if (i === slider.activeIndex) {
      childElement[i].style.transform = "";
    } else if (i > slider.activeIndex) {
      childElement[i].style.transform = "translate3d(0,100%,0)";
    } else if (i < slider.activeIndex) {
      childElement[i].style.transform = "translate3d(0,-100%,0)";
    }
  }
};

const changeSection = (direction) => {
  slider.idle = false;
  slider.sections[slider.activeIndex].classList.remove("active");
  if (direction === "down") {
    slider.activeIndex =
      slider.activeIndex + 1 > viewSectionDatas.length - 1
        ? slider.activeIndex
        : slider.activeIndex + 1;
  } else {
    slider.activeIndex =
      slider.activeIndex - 1 < 0 ? slider.activeIndex : slider.activeIndex - 1;
  }
  slider.sections[slider.activeIndex].classList.add("active");
  checkSections();
  console.log(slider.activeIndex);
};

const wheelControl = () => {
  container.addEventListener("wheel", (e) => {
    if (slider.idle) {
      const direction = e.deltaY > 0 ? "down" : "up";
      stopAutoPlay();
      changeSection(direction);
    }
  });
};

const touchControl = function () {
  const touchStart = (e) => {
    slider.ts = parseInt(e.changedTouches[0].clientY);
  };

  const touchMove = (e) => {
    slider.tm = parseInt(e.changedTouches[0].clientY);
    const delta = slider.tm - slider.ts;

    if (slider.idle) {
      const direction = delta < 0 ? "down" : "up";
      stopAutoPlay();
      changeSection(direction);
    }
  };

  container.addEventListener("touchstart", touchStart);
  container.addEventListener("touchmove", touchMove);
};

const start = function () {
  wheelControl();
  window.innerWidth <= 1024 && touchControl();

  checkSections();
};

export { start };
