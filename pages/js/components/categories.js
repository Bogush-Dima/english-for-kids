import { clickBurger } from './aside-menu.js'

import { cardCurtains, startGameBtns, starsLineInner } from '../main.js'


const categories = [
  {
    word: 'animals',
    imgPath: 'url(../assets/images/categories/animals.jpg)'
  },

  {
    word: 'family',
    imgPath: 'url(../assets/images/categories/family.jpg)'
  },

  {
    word: 'school',
    imgPath: 'url(../assets/images/categories/school.jpg)'
  },

  {
    word: 'home',
    imgPath: 'url(../assets/images/categories/home.jpg)'
  },

  {
    word: 'colors',
    imgPath: 'url(../assets/images/categories/colors.jpg)'
  },

  {
    word: 'emotion',
    imgPath: 'url(../assets/images/categories/emotion.jpg)'
  },

  {
    word: 'numbers',
    imgPath: 'url(../assets/images/categories/numbers.jpg)'
  },

  {
    word: 'clothes',
    imgPath: 'url(../assets/images/categories/clothes.jpg)'
  }
]


const createCategoriesCards = (parent, arr) => {
  arr.forEach(elem => {
    const item = document.createElement('div'),
      indicator = document.createElement('div'),
      img = document.createElement('div'),
      word = document.createElement('h2')

    item.classList.add('item', 'categories-item')
    indicator.classList.add('indicator', 'category__indicator')
    img.classList.add('item__img', 'category__img')
    img.setAttribute('id', `${elem.word}`)
    img.style.backgroundImage = `${elem.imgPath}`
    word.classList.add('item__word', 'category__word')
    word.innerHTML = `${elem.word}`

    item.appendChild(indicator)
    item.appendChild(img)
    item.appendChild(word)
    parent.appendChild(item)
  });
}


const clickCategory = (elem, arr, menuItemsArr) => {
  arr.forEach(elem => elem.style.display = 'none')

  let categoryName

  elem.currentTarget.childNodes.forEach(child => {
    if (child.classList.contains('item__word')) {
      categoryName = child.innerHTML
    }
  })

  arr.forEach(elem => {
    if (elem.classList.contains(`category-${categoryName}`)) {
      elem.style.display = 'flex'
    }
  })

  menuItemsArr.forEach(elem => {
    if (elem.classList.contains('_selected')) {
      elem.classList.remove('_selected')
    } else if (categoryName === elem.innerHTML) {
      elem.classList.add('_selected')
    }
  })
}


const clickCategoryInMenu = (elem, categories, menuItemsArr) => {
  cardCurtains.forEach(elem => {
    elem.style.display = 'none'
  })

  starsLineInner.innerHTML = ''

  startGameBtns.forEach(elem => {
    elem.innerText = 'start game'
  })

  menuItemsArr.forEach(elem => {
    if (elem.classList.contains('_selected')) {
      elem.classList.remove('_selected')
    }
  })

  elem.currentTarget.classList.add('_selected')
  const itemName = elem.target.innerHTML

  categories.forEach(elem => {
    if (elem.classList.contains(`category-${itemName}`)) {
      elem.style.display = 'flex'

    } else if (itemName === 'main page' && elem.classList.contains('categories-box')) {
      elem.style.display = 'flex'

    } else {
      elem.style.display = 'none'
    }
  })

  clickBurger()
}


export { categories, clickCategory, clickCategoryInMenu, createCategoriesCards }