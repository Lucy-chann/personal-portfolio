import getElements from "../elements";

const resetSectionStyles = () => {
  const { nameTitle, letterWrapper } = getElements();

  letterWrapper.forEach((el, idx) => {
    el.style.transform = "translate(0,100%)";
  });

  nameTitle.classList.remove("name-title-first-active");

  nameTitle.classList.remove("name-title-active");

  for (let i = 0; i < nameTitle.children.length; i++) {
    const child = nameTitle.children[i];

    child.style.transitionDelay = "0";
  }
};

export default resetSectionStyles;
