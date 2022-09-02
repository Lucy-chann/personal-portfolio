const firstSectionElements = (fluidShapeImageDatas) => {
  const firstViewImages = fluidShapeImageDatas.map(({ id, img }) => {
    return `<img src=${img} id=${id} class="parallax-img" alt="fluid_shape" />`;
  });

  return `<div class="name-title-container name-title-first-active">
      <h1>mohammad saleh amani</h1>
      <h4>junior front end developer</h4>
      </div>
      ${firstViewImages}`;
};

export default firstSectionElements;
