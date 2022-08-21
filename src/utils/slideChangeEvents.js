const slideChangeEventHandler = function (sliderIndex, lastIndex, sections) {
  switch (sliderIndex + "") {
    case "0": {
      const nameTitleContainer = document.querySelector(
        ".name-title-container"
      );

      setTimeout(() => {
        nameTitleContainer.classList.add("name-title-active");
      }, 100);

      break;
    }
    case "1": {
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
      console.log("slider index not found");
  }
};

export default slideChangeEventHandler;
