import "./thirdSection.css";
import card3d from "../../components/3d card/3dcard";

const cardDatas = [
  {
    title: "card 1 title",
    paragraph: "this is a test card paragraph - card 1",
  },
  {
    title: "card 2 title",
    paragraph: "this is a test card paragraph - card 2",
  },
  {
    title: "card 3 title",
    paragraph: "this is a test card paragraph - card 3",
  },
];

const thirdSectionElements = `
<div class="third-section-container">
<h1 id="third-section-title">My projects</h1>
<section class="cards-container">
${cardDatas.map((cardData) => card3d(cardData)).join("")}
</section>
</div>
`;

export default thirdSectionElements;
