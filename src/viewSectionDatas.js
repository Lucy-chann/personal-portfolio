import squareImg from './assets/parallax shapes/main-square-fluid.png'
import cylinderImg from './assets/parallax shapes/main-cylinder-fluid.png'
import circleImg from './assets/parallax shapes/main-circle-fluid.png'
import emptyCenterTriangleImg from './assets/parallax shapes/shape-triangle-emptyCenter.png'

const fluidImageDatas = [
  {
    imageId: 1,
    id: 'empty-center-square-img',
    img: squareImg
  },
  {
    imageId: 2,
    id: 'cylinder-img',
    img: cylinderImg
  },
  {
    imageId: 3,
    id: 'circle-img',
    img: circleImg
  },
  {
    imageId: 4,
    id: 'empty-center-triangle-img',
    img: emptyCenterTriangleImg
  }
]

const skillsData = [
  {
    id: 1,
    skill: 'HTML',
    field: 'left-field'
  },
  {
    id: 2,
    skill: 'CSS',
    field: 'left-field'
  },
  {
    id: 3,
    skill: 'SCSS',
    field: 'left-field'
  },
  {
    id: 4,
    skill: 'JavaScript',
    field: 'left-field'
  },
  {
    id: 5,
    skill: 'React.js',
    field: 'right-field'
  },
  {
    id: 6,
    skill: 'Git & Github',
    field: 'right-field'
  },
  {
    id: 7,
    skill: 'npm & Webpack & Babel',
    field: 'right-field'
  }
]

const firstViewImages = fluidImageDatas.map(({ id, img }) => {
  return `<img src=${img} id=${id} class="parallax-img" alt="fluid_shape" />`
})

const secondViewTitle = 'My skills & Capabilities'
  .split('')
  .map((letter, index) => {
    const innerTag =
      letter !== ' '
        ? `<h1 class="second-section-title-letter letter-${
            index + 1
          }">${letter}</h1>`
        : '<span class="letter-space">&nbsp;</span>'

    return `<div class="letter-wrapper">${innerTag}</div>`
  })

const createListTags = () => {
  let mainTag = ''

  const filterSkills = (fieldVal) => {
    return skillsData.filter(({ field }) => field === fieldVal)
  }

  const createListTags = (listTagDatas) => {
    const fieldTag = `<section>${listTagDatas
      .map(({ skill }, idx) => `<li><h3>${skill}</h3></li>`)
      .join('')}
    </section>`

    return fieldTag
  }

  const fields = [filterSkills('left-field'), filterSkills('right-field')]

  for (let i = 0; i < fields.length; i++) {
    mainTag += createListTags(fields[i])
  }

  return mainTag
}

const skillsSection = `
<ul>
${createListTags()}
</ul>`

const viewSectionDatas = [
  {
    id: 1,
    background: 'main-black',
    contentHTML: `<div class="name-title-container name-title-first-active">
    <h1>mohammad saleh amani</h1>
    <h4>junior front end developer</h4>
    </div>
    ${firstViewImages}`
  },
  {
    id: 2,
    background: 'main-white',
    contentHTML: `
    <div class="section-2-title-container">
    <div class="section-2-letters-container">
    ${secondViewTitle.join('')}
    </div>
    </div>
    <div class="skill-box-container">${skillsSection}</div>`
  },
  { id: 3, background: 'main-gradient', contentHTML: '' },
  { id: 4, background: 'main-white', contentHTML: '' },
  { id: 5, background: 'main-black', contentHTML: '' }
]

export default viewSectionDatas
