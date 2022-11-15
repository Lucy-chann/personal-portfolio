const getElements = function () {
  const container = document.getElementById("container"),
    nameTitle = document.getElementsByClassName("name-title-container")[0],
    sectionCounter = document.getElementById("section-counter"),
    letterWrapper = document.querySelectorAll(".second-section-title-letter"),
    nameTitleContainer = document.querySelector(".name-title-container");

  return {
    container,
    sectionCounter,
    letterWrapper,
    nameTitleContainer,
    nameTitle,
  };
};

export default getElements;
