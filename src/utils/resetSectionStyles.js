const resetSectionStyles = () => {
  const nameTitle = document.getElementsByClassName('name-title-container')[0]

  nameTitle.classList.remove('name-title-first-active')

  nameTitle.classList.remove('name-title-active')

  for (let i = 0; i < nameTitle.children.length; i++) {
    const child = nameTitle.children[i]

    child.style.transitionDelay = '0'
  }
}

export default resetSectionStyles
