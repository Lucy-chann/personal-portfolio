const fluidImageDatas = [
  {
    imageId: 1,
    id: "empty-center-square-img",
    fileName: "main-square-fluid.png",
  },
  {
    imageId: 2,
    id: "cylinder-img",
    fileName: "main-cylinder-fluid.png",
  },
  {
    imageId: 3,
    id: "circle-img",
    fileName: "main-circle-fluid.png",
  },
  {
    imageId: 4,
    id: "empty-center-triangle-img",
    fileName: "shape-triangle-emptyCenter.png",
  },
];

const firstViewImages = fluidImageDatas.map(({ id, fileName }) => {
  return `<img src="/src/assets/parallax shapes/${fileName}" id=${id} class="parallax-img" alt="fluid_shape" />`;
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
