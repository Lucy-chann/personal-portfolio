import viewSectionDatas from './viewSectionDatas'
import slideChangeEventHandler from './utils/slideChangeEvents'
import resetSectionStyles from './utils/resetSectionStyles'
import getElements from './elements'

/* scroll between sections handlers */

const { container } = getElements()

const slider = {
  sections: document.getElementsByClassName('view-section'),
  handle: null,
  idle: true,
  activeIndex: 0,
  total: viewSectionDatas.length / 2
}

const stopAutoPlay = function () {
  setTimeout(() => {
    slider.idle = true
  }, 1575)
}

const checkSections = function (lastIndex) {
  for (let i = 0; i < viewSectionDatas.length; i++) {
    const childElement = container.children

    if (i === slider.activeIndex) {
      childElement[i].style.transform = ''
      slideChangeEventHandler(slider.activeIndex, lastIndex, slider.sections)
    } else if (i > slider.activeIndex) {
      childElement[i].style.transform = 'translate3d(0,100%,0)'
    } else if (i < slider.activeIndex) {
      childElement[i].style.transform = 'translate3d(0,-100%,0)'
    }
  }
}

const changeSection = (direction) => {
  slider.idle = false
  const lastIndex = slider.activeIndex
  slider.sections[slider.activeIndex].classList.remove('active')
  if (direction === 'down') {
    slider.activeIndex =
      slider.activeIndex + 1 > viewSectionDatas.length - 1
        ? slider.activeIndex
        : slider.activeIndex + 1
  } else {
    slider.activeIndex =
      slider.activeIndex - 1 < 0 ? slider.activeIndex : slider.activeIndex - 1
  }
  slider.sections[slider.activeIndex].classList.add('active')

  resetSectionStyles()
  checkSections(lastIndex)
}

const wheelControl = () => {
  container.addEventListener('wheel', (e) => {
    if (slider.idle) {
      const direction = e.deltaY > 0 ? 'down' : 'up'
      if (
        !(
          (slider.activeIndex === 0 && direction === 'up') ||
          (slider.activeIndex === viewSectionDatas.length - 1 &&
            direction === 'down')
        )
      ) {
        stopAutoPlay()
        changeSection(direction)
      }
    }
  })
}

const touchControl = function () {
  const touchStart = (e) => {
    slider.ts = parseInt(e.changedTouches[0].clientY)
  }

  const touchMove = (e) => {
    slider.tm = parseInt(e.changedTouches[0].clientY)
    const delta = slider.tm - slider.ts

    if (slider.idle) {
      const direction = delta < 0 ? 'down' : 'up'
      if (
        !(
          (slider.activeIndex === 0 && direction === 'up') ||
          (slider.activeIndex === viewSectionDatas.length - 1 &&
            direction === 'down')
        )
      ) {
        stopAutoPlay()
        changeSection(direction)
      }
    }
  }

  container.addEventListener('touchstart', touchStart)
  container.addEventListener('touchmove', touchMove)
}

const start = function () {
  wheelControl()
  window.innerWidth <= 1024 && touchControl()

  checkSections(slider.activeIndex)

  const { letterWrapper } = getElements()

  letterWrapper.forEach((wrapper, idx) => {
    wrapper.children[0].style.transitionDelay = `calc(.03s * ${idx + 1})`
  })

  document.querySelectorAll('img').forEach((img) => (img.draggable = false))
}

export { start }
