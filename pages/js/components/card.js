import { toggle } from '../main.js'

const clickFront = (elem) => {
  const audio = elem.currentTarget.childNodes[elem.currentTarget.childNodes.length - 1]

  if (!elem.target.classList.contains('item-button')) {
    audio.play()
  }
}


const clickItemBtn = (elem) => {
  elem.path[2].childNodes.forEach(elem => {
    if (elem.classList.contains('front')) {
      elem.classList.add('front_rotate')
    } else {
      elem.classList.add('back_rotate')
    }
  })
}


const mouseOutBack = (elem, translateWindows) => {
  elem.currentTarget.classList.remove('back_rotate')
  elem.currentTarget.previousSibling.classList.remove('front_rotate')
}


export { clickFront, clickItemBtn, mouseOutBack }