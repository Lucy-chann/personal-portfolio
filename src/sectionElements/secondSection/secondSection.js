import triangle from "../../components/triangle/triangle";
import "./section-2-styles.css";

const secondViewTitle = "My skills & Capabilities";

const triangleDatas = [
  {
    x: "calc(100% - 102px)",
    y: "39px",
    scale: 2,
    rotation: 190,
  },
  {
    x: "calc(100% - 138px)",
    y: "50px",
    scale: 2,
    rotation: -113,
  },
  {
    x: "calc(100% - 23px)",
    y: "20px",
    scale: 1,
    rotation: 69,
  },
  {
    x: "calc(100% - 85px)",
    y: "63px",
    scale: 2,
    rotation: -3,
  },
  {
    x: "calc(100% - 55px)",
    y: "12px",
    scale: 3,
    rotation: 10,
  },
  {
    x: "calc(100% - 52px)",
    y: "63px",
    scale: 1,
    rotation: 47,
  },
  {
    x: "calc(100% - 27px)",
    y: "65px",
    scale: 1,
    rotation: 69,
  },
  {
    x: "calc(100% - 112px)",
    y: "72px",
    scale: 3,
    rotation: 47,
  },
  {
    x: "calc(100% - 62px)",
    y: "108px",
    scale: 2,
    rotation: 64,
  },
];

function splitWords(text) {
  const splittedWords = text.split(" ").map((word, index) => {
    const wordLetters = word.split("");

    const wrapLetters = () => {
      let allWordLetters = "";
      for (let i = 0; i < wordLetters.length; i++) {
        allWordLetters += `<h1
        class="second-section-title-letter letter-${index + 1}"
      >
        ${wordLetters[i]}
      </h1>`;
      }

      return allWordLetters;
    };
    let wordContainer =
      "<div class='second-title-word-container'>" + wrapLetters() + "</div>";

    return wordContainer;
  });

  return splittedWords.join("");
}

const createListElements = (skillDatas) => {
  let mainTag = "";

  const filterSkills = (fieldVal) => {
    return skillDatas.filter(({ field }) => field === fieldVal);
  };

  const createListTags = (listTagDatas) => {
    const fieldTag = `<section>${listTagDatas
      .map(({ skill }, idx) => `<li><h2>${skill}</h2></li>`)
      .join("")}
      </section>`;

    return fieldTag;
  };

  const fields = [filterSkills("left-field"), filterSkills("right-field")];

  for (let i = 0; i < fields.length; i++) {
    mainTag += createListTags(fields[i]);
  }

  return mainTag;
};

const secondSectionElements = (skillDatasObj, fluidImageDatas) => {
  const skillsSection = `
    <ul class="skills-list">
    ${createListElements(skillDatasObj)}
    </ul>`;

  return `
    <div class="second-section-container">
    <div class="section-2-title-container">
    <div class="section-2-letters-container">
    ${splitWords(secondViewTitle)}
    </div>
    </div>
    <div class="skill-box-container">${skillsSection}</div>
    </div>
    <img src="${
      fluidImageDatas[2].img
    }" alt="fluid shape" class="section-2-circle">
    <img src="${
      fluidImageDatas[3].img
    }" alt="fluid shape" class="section-2-triangle">
    <div class="triangles-container">
    ${triangleDatas.map((data) => triangle(data)).join("")}
    </div>
    `;
};

export default secondSectionElements;
