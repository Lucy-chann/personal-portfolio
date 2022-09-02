import "./index.css";
import "./app.css";
import "./section-2-styles.css";
import viewSectionDatas from "./viewSectionDatas";
import { start } from "./app";

/* adding all the section tags into the container tag or element */

// creates and return page section tags

function createSectionTags() {
  return viewSectionDatas.map(({ id, background, contentHTML }) => {
    const sectionTag = document.createElement("section");

    sectionTag.className = `view-section view-${id} ${background}${
      id === 1 ? " active" : ""
    }`;

    if (id !== 1) sectionTag.style.transform = "translate3d(0,100%,0)";

    sectionTag.innerHTML = contentHTML;

    return sectionTag;
  });
}

const container = document.getElementById("container");

createSectionTags().forEach((element) => container.append(element));

start();
