import secondSectionElements from "./sectionElements/secondSection/secondSection";
import firstSectionElements from "./sectionElements/firstSection/firstSection";
import squareImg from "./assets/parallax shapes/main-square-fluid.png";
import cylinderImg from "./assets/parallax shapes/main-cylinder-fluid.png";
import circleImg from "./assets/parallax shapes/main-circle-fluid.png";
import emptyCenterTriangleImg from "./assets/parallax shapes/shape-triangle-emptyCenter.png";
import thirdSectionElements from "./sectionElements/thirdSection/thirdSection";

const fluidImageDatas = [
  {
    imageId: 1,
    id: "empty-center-square-img",
    img: squareImg,
  },
  {
    imageId: 2,
    id: "cylinder-img",
    img: cylinderImg,
  },
  {
    imageId: 3,
    id: "circle-img",
    img: circleImg,
  },
  {
    imageId: 4,
    id: "empty-center-triangle-img",
    img: emptyCenterTriangleImg,
  },
];

const skillsData = [
  {
    id: 1,
    skill: "HTML",
    field: "left-field",
  },
  {
    id: 2,
    skill: "CSS",
    field: "left-field",
  },
  {
    id: 3,
    skill: "SCSS",
    field: "left-field",
  },
  {
    id: 4,
    skill: "JavaScript",
    field: "left-field",
  },
  {
    id: 5,
    skill: "React.js",
    field: "right-field",
  },
  {
    id: 6,
    skill: "Git & Github",
    field: "right-field",
  },
  {
    id: 7,
    skill: "npm & Webpack & Babel",
    field: "right-field",
  },
];

const viewSectionDatas = [
  {
    id: 1,
    background: "main-black",
    contentHTML: firstSectionElements(fluidImageDatas),
  },
  {
    id: 2,
    background: "main-white",
    contentHTML: secondSectionElements(skillsData, fluidImageDatas),
  },
  { id: 3, background: "main-gradient", contentHTML: thirdSectionElements },
  { id: 4, background: "main-white", contentHTML: "" },
  { id: 5, background: "main-black", contentHTML: "" },
];

export default viewSectionDatas;
