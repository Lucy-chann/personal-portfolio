import getElements from "../elements";

const slideChangeEventHandler = function (sliderIndex, lastIndex, sections) {
  const { sectionCounter } = getElements();

  const { letterWrapper } = getElements();

  switch (sliderIndex + "") {
    case "0": {
      sectionCounter.style.color = "#fff";
      sectionCounter.textContent = "1";

      const { nameTitleContainer } = getElements();

      setTimeout(() => {
        nameTitleContainer.classList.add("name-title-active");
      }, 600);

      break;
    }
    case "1": {
      sectionCounter.style.color = "#121413";
      sectionCounter.textContent = "2";

      setTimeout(() => {
        letterWrapper.forEach(({ children }, idx) => {
          children[0].style.transform = "translate(0)";
        });
      }, 750);
      break;
    }
    case "2": {
      sectionCounter.style.color = "#121413";
      sectionCounter.textContent = "3";
      break;
    }
    case "3": {
      sectionCounter.style.color = "#121413";
      sectionCounter.textContent = "4";
      break;
    }
    case "4": {
      sectionCounter.style.color = "#fff";
      sectionCounter.textContent = "5";
      break;
    }

    default:
      console.log("slider index not found");
  }
};

export default slideChangeEventHandler;
