import squareImg from "./assets/parallax shapes/main-square-fluid.png";
import cylinderImg from "./assets/parallax shapes/main-cylinder-fluid.png";
import circleImg from "./assets/parallax shapes/main-circle-fluid.png";
import emptyCenterTriangleImg from "./assets/parallax shapes/shape-triangle-emptyCenter.png";

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

const firstViewImages = fluidImageDatas.map(({ id, img }) => {
  return `<img src=${img} id=${id} class="parallax-img" alt="fluid_shape" />`;
});

const viewSectionDatas = [
  {
    id: 1,
    background: "main-black",
    contentHTML: `<div class="name-title-container name-title-first-active">
    <h1>mohammad saleh amani</h1>
    <h4>junior front end developer</h4>
    </div>
    ${firstViewImages.join("")}`,
  },
  { id: 2, background: "main-white", contentHTML: `` },
  { id: 3, background: "main-gradient", contentHTML: `` },
  { id: 4, background: "main-white", contentHTML: `` },
  { id: 5, background: "main-black", contentHTML: `` },
];

export default viewSectionDatas;
