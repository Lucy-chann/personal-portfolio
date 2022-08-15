import viewSectionDatas from "./viewSectionDatas";
import { start } from "./app";

/* adding all the section tags into the container tag or element */

function createSectionTags() {
  return viewSectionDatas.map(({ id, background }) => {
    const sectionTag = document.createElement("section");

    sectionTag.className = `view-section view-${id} ${background}${
      id === 1 ? " active" : ""
    }`;

    return sectionTag;
  });
}

const container = document.getElementById("container");

createSectionTags().forEach((element) => container.append(element));

start();
