import {burger, burgerInnerLine, menuListWrapper, toggle, backArea} from '../main.js'


const createMenuList = (parent, arr) => {

  const createMainPageLink = () => {

    const menuListItem = document.createElement('li')
    menuListItem.classList.add('menu-list__item', '_selected')
    menuListItem.innerText = 'main page'
    parent.appendChild(menuListItem)
  }
  createMainPageLink()


  const createCategoriesLinks = () => {

    arr.forEach(elem => {
      const menuListItem = document.createElement('li')
      menuListItem.classList.add('menu-list__item')
      menuListItem.innerText = `${elem.word}`
      parent.appendChild(menuListItem)
    });
  }
  createCategoriesLinks()


  const createStatisticLink = () => {

    const menuListItem = document.createElement('li')
    menuListItem.classList.add('menu-list__item')
    menuListItem.innerText = 'statistic'
    parent.appendChild(menuListItem)
  }
  // createStatisticLink()
}


const clickBurger = () => {
  burger.classList.toggle('menu-burger_show')
  burgerInnerLine.classList.toggle('menu-burger__inner_show')
  menuListWrapper.classList.toggle('menu-list-wrapper_show')
  toggle.classList.toggle('shutdown')
  backArea.classList.toggle('_show-menu')
}


export {createMenuList, clickBurger}