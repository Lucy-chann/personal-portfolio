const secondViewTitle = "My skills & Capabilities";

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

const secondSectionElements = (skillDatasObj) => {
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
    </div>`;
};

export default secondSectionElements;
