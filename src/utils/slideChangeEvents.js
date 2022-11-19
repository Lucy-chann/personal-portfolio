import getElements from "../elements";

const counter = {
  elements: {
    prevCounter: document.querySelector(".prev-counter"),
    currentCounter: document.querySelector(".current-counter"),
    nextCounter: document.querySelector(".next-counter"),
  },
  countNumber: 1,
  reorderDuration: 1500,
  renderCounter() {
    this.elements.prevCounter.children[0].innerText = this.countNumber - 1;
    this.elements.currentCounter.children[0].innerText = this.countNumber;
    this.elements.nextCounter.children[0].innerText = this.countNumber + 1;
  },
  handleAnimation(element, className, counterColor) {
    element.classList.add(className);

    setTimeout(() => {
      this.elements.currentCounter.children[0].innerText = this.countNumber;
    }, this.reorderDuration - 300);

    setTimeout(() => {
      this.renderCounter(counterColor);
      element.classList.remove(className);
    }, this.reorderDuration);
  },
  changeCurrentCounterColor(color, changeDuration = this.reorderDuration) {
    if (changeDuration === 0) {
      this.elements.currentCounter.style.color = color;
    } else {
      setTimeout(() => {
        this.elements.currentCounter.style.color = color;
      }, changeDuration - 300);
    }
  },
  sharedConditions(index, counterElement) {
    switch (index) {
      case 1:
        this.changeCurrentCounterColor("#000");
        this.elements[counterElement].style.color = "#000";
        break;
      case 2:
        this.changeCurrentCounterColor("#fff");
        this.elements[counterElement].style.color = "#fff";
        break;
      case 3:
        this.changeCurrentCounterColor("#000");
        this.elements[counterElement].style.color = "#000";
    }
  },
  increaseCounter(sliderIndex) {
    this.countNumber++;
    this.handleAnimation(this.elements.currentCounter, "animate-up");
    this.handleAnimation(this.elements.nextCounter, "animate-up");

    if (sliderIndex === 4) {
      this.changeCurrentCounterColor("#fff");
      this.elements.nextCounter.style.color = "#fff";
    } else this.sharedConditions(sliderIndex, "nextCounter");
  },
  reduceCounter(sliderIndex) {
    this.countNumber--;
    this.handleAnimation(this.elements.currentCounter, "animate-down");
    this.handleAnimation(this.elements.prevCounter, "animate-down");

    if (sliderIndex === 0) {
      this.changeCurrentCounterColor("#fff");
      this.elements.prevCounter.style.color = "#fff";
    } else this.sharedConditions(sliderIndex, "prevCounter");
  },
};

counter.renderCounter();
counter.changeCurrentCounterColor("#fff", 0);

const slideChangeEventHandler = function (sliderIndex, lastIndex, sections) {
  const { sectionCounter } = getElements();

  const { letterWrapper } = getElements();

  switch (sliderIndex + "") {
    case "0": {
      const { nameTitleContainer } = getElements();

      setTimeout(() => {
        nameTitleContainer.classList.add("name-title-active");
      }, 600);

      break;
    }
    case "1": {
      setTimeout(() => {
        letterWrapper.forEach((el, idx) => {
          el.style.transform = "translate(0)";
        });
      }, 750);
      break;
    }
    case "2": {
      break;
    }
    case "3": {
      break;
    }
    case "4": {
      break;
    }

    default:
      console.log("slider index is not valid");
  }

  sliderIndex > lastIndex
    ? counter.increaseCounter(sliderIndex)
    : counter.reduceCounter(sliderIndex);
};

export default slideChangeEventHandler;
