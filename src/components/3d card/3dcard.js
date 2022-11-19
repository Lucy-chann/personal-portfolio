import "./3dcard.css";

const card3d = (cardDatas = {}) => {
  const { imageSrc = "", title = "", paragraph = "" } = cardDatas;

  return `
  <div class="card-container">
    <div class="card">
        <section class="image-section">
            <img src=${imageSrc} alt="card image">
        </section>
        <section class="description-section">
            <h1>${title}</h1>
            <p>${paragraph}</p>
        </section>
    </div>
    <div class="card-border"></div>
    <div class="card-border-blur"></div>
  </div>
`;
};

export default card3d;
