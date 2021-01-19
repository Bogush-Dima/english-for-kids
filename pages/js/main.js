'use strict'

//* Import Data
import { categories, clickCategory, clickCategoryInMenu, createCategoriesCards } from './components/categories.js'

import { animals, createAnimals } from './components/animals.js'

import { clothes, createClothes } from './components/clothes.js'

import { emotion, createEmotion } from './components/emotion.js'

import { family, createFamily } from './components/family.js'

import { home, createHome } from './components/home.js'

import { numbers, createNumbers } from './components/numbers.js'

import { school, createSchool } from './components/school.js'

import { colors, createColors } from './components/colors.js'

import { clickFront, clickItemBtn, mouseOutBack } from './components/card.js'

import { createMenuList, clickBurger } from './components/aside-menu.js'

import { clickToggle } from './components/toggle.js'

import { clickStartGameBtn, clickAnswer } from './components/game.js'


//* DOM For First Create Page
const categoriesBox = document.querySelector('.categories-box'),
  categoryAnimals = document.querySelector('.category-animals'),
  categoryClothes = document.querySelector('.category-clothes'),
  categoryEmotion = document.querySelector('.category-emotion'),
  categoryFamily = document.querySelector('.category-family'),
  categoryHome = document.querySelector('.category-home'),
  categoryNumbers = document.querySelector('.category-numbers'),
  categorySchool = document.querySelector('.category-school'),
  categoryColors = document.querySelector('.category-colors'),
  menuList = document.querySelector('.menu-list')

//* Generate Page
createCategoriesCards(categoriesBox, categories)
createMenuList(menuList, categories)
createAnimals(categoryAnimals, animals)
createClothes(categoryClothes, clothes)
createEmotion(categoryEmotion, emotion)
createFamily(categoryFamily, family)
createHome(categoryHome, home)
createNumbers(categoryNumbers, numbers)
createSchool(categorySchool, school)
createColors(categoryColors, colors)


//* DOM Elements Before Create Items
const burger = document.querySelector('.menu-burger'),
  burgerInnerLine = document.querySelector('.menu-burger__inner'),
  backArea = document.querySelector('.backarea'),
  toggle = document.querySelector('.mode-toggle'),
  toggleSlider = document.querySelector('.mode-toggle__slider'),
  toggleText = document.querySelector('.mode-toggle__text'),
  menuListWrapper = document.querySelector('.menu-list-wrapper'),
  indicators = document.querySelectorAll('.indicator'),
  contentSections = document.querySelectorAll('.content-section'),
  categoriesList = document.querySelectorAll('.categories-item'),
  itemsInAsideMenu = document.querySelectorAll('.menu-list__item'),
  itemBtns = document.querySelectorAll('.item-button'),
  translateWindows = document.querySelectorAll('.back'),
  fronts = document.querySelectorAll('.front'),
  startGameBtns = document.querySelectorAll('.start-game'),
  starsLine = document.querySelector('.stars-line'),
  starsLineInner = document.querySelector('.stars-line-inner'),
  yesAudio = document.querySelector('.yes'),
  noAudio = document.querySelector('.no'),
  cardCurtains = document.querySelectorAll('.card-curtain'),
  winWindow = document.querySelector('.win-window'),
  loseWindow = document.querySelector('.lose-window'),
  winWindowSound = document.querySelector('.win-sound'),
  loseWindowSound = document.querySelector('.lose-sound'),
  errorsInGame = document.querySelector('.errors')


//* Events
burger.addEventListener('click', clickBurger)
toggle.addEventListener('click', clickToggle)
backArea.addEventListener('click', clickBurger)

categoriesList.forEach(elem => {
  elem.addEventListener('click', elem => {
    clickCategory(elem, contentSections, itemsInAsideMenu)
  })
})

itemsInAsideMenu.forEach(elem => {
  elem.addEventListener('click', elem => {
    clickCategoryInMenu(elem, contentSections, itemsInAsideMenu)
  })
})

itemBtns.forEach(elem => {
  elem.addEventListener('click', elem => {
    clickItemBtn(elem)
  })
})

translateWindows.forEach(elem => {
  elem.addEventListener('mouseout', elem => {
    mouseOutBack(elem, translateWindows)
  })
})

fronts.forEach(elem => {
  elem.addEventListener('click', elem => {
    if (toggle.innerText === 'TRAIN') {
      clickFront(elem)
    } else {
      clickAnswer(elem)
    }
  })
})

startGameBtns.forEach(elem => {
  elem.addEventListener('click', elem =>
    clickStartGameBtn(elem)
  )
})


//* Export Some Elements For Some Components
export { burger, burgerInnerLine, menuListWrapper, toggle, backArea, toggleSlider, toggleText, indicators, startGameBtns, itemBtns, fronts, starsLine, contentSections, yesAudio, noAudio, cardCurtains, starsLineInner, winWindow, loseWindow, winWindowSound, loseWindowSound, errorsInGame }