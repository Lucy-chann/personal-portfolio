const getElements = function () {
  const container = document.getElementById('container')
  const nameTitle = document.getElementsByClassName('name-title-container')[0]
  const sectionCounter = document.getElementById('section-counter')
  const letterWrapper = document.querySelectorAll('.letter-wrapper')
  const nameTitleContainer = document.querySelector('.name-title-container')

  return {
    container,
    sectionCounter,
    letterWrapper,
    nameTitleContainer,
    nameTitle
  }
}

export default getElements
