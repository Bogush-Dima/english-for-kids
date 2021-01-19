import { toggle, toggleSlider, toggleText, indicators, startGameBtns, itemBtns, fronts, starsLine, cardCurtains, starsLineInner } from '../main.js'


const clickToggle = () => {
  toggle.classList.toggle('mode-toggle_play')
  toggleSlider.classList.toggle('mode-toggle__slider_play')
  toggleText.classList.toggle('mode-toggle__text_play')

  if (toggleText.classList.contains('mode-toggle__text_play')) {
    toggleText.innerText = 'play'
    starsLine.style.opacity = '1'
    indicators.forEach(elem => {
      elem.style.background = '#1849AB'
    })
    startGameBtns.forEach(elem => {
      elem.style.display = 'block'
    })
    itemBtns.forEach(elem => {
      elem.style.display = 'none'
    })
    fronts.forEach(elem => {
      elem.childNodes[2].style.display = 'none'
      elem.childNodes[1].style.height = '250px'
    })


  } else {
    toggleText.innerText = 'train'
    cardCurtains.forEach(elem => {
      elem.style.opacity = '0'
      elem.style.display = 'none'
    })
    startGameBtns.forEach(elem => {
      elem.innerText = 'start game'
    })
    starsLine.style.opacity = '0'
    starsLineInner.innerHTML = ''
    indicators.forEach(elem => {
      elem.style.background = '#6E6E6E'
    })
    startGameBtns.forEach(elem => {
      elem.style.display = 'none'
      elem.innerText = 'start game'
    })
    itemBtns.forEach(elem => {
      elem.style.display = 'inline-block'
    })
    fronts.forEach(elem => {
      elem.childNodes[2].style.display = 'block'
      elem.childNodes[1].style.height = ''
    })
  }
}


export { clickToggle }