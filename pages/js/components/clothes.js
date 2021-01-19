const clothes = [
  {
    word: 'hat',
    imgPath: 'url(../assets/images/clothes/hat.jpg)',
    audioPath: '../assets/sounds/hat.mp3',
    translate: 'шляпа'
  },

  {
    word: 'blouse',
    imgPath: 'url(../assets/images/clothes/blose.jpg)',
    audioPath: '../assets/sounds/blouse.mp3',
    translate: 'блузка'
  },

  {
    word: 'dress',
    imgPath: 'url(../assets/images/clothes/dress.jpg)',
    audioPath: '../assets/sounds/dress.mp3',
    translate: 'платье'
  },

  {
    word: 'jacket',
    imgPath: 'url(../assets/images/clothes/jacket.jpg)',
    audioPath: '../assets/sounds/jacket.mp3',
    translate: 'куртка'
  },

  {
    word: 'shoe',
    imgPath: 'url(../assets/images/clothes/shoes.jpg)',
    audioPath: '../assets/sounds/shoe.mp3',
    translate: 'обувь'
  },

  {
    word: 'shirt',
    imgPath: 'url(../assets/images/clothes/shirt.jpg)',
    audioPath: '../assets/sounds/shirt.mp3',
    translate: 'рубашка'
  },

  {
    word: 'coat',
    imgPath: 'url(../assets/images/clothes/coat.jpg)',
    audioPath: '../assets/sounds/coat.mp3',
    translate: 'пальто'
  },

  {
    word: 'skirt',
    imgPath: 'url(../assets/images/clothes/skirt.jpg)',
    audioPath: '../assets/sounds/skirt.mp3',
    translate: 'юбка'
  }
]


const createClothes = (parent, arr) => {

  const startGameBtn = document.createElement('button')
  startGameBtn.classList.add('start-game')
  startGameBtn.innerText = 'start game'

  arr.forEach(elem => {
    const item = document.createElement('div'),
    front = document.createElement('div'),
    cardCurtain = document.createElement('div'),
    back = document.createElement('div'),
    indicator = document.createElement('div'),
    img = document.createElement('div'),
    audio = document.createElement('audio'),
    word = document.createElement('h2'),
    btn = document.createElement('button')

  item.classList.add('item', 'category-clothes-item')
  front.classList.add('front', 'category-clothes-front')
  cardCurtain.classList.add('card-curtain')
  back.classList.add('back', 'category-clothes-back')
  indicator.classList.add('indicator', 'category-clothes__indicator')
  img.classList.add('item__img', 'category-clothes__img')
  img.setAttribute('id', `${elem.word}`)
  img.style.backgroundImage = `${elem.imgPath}`
  audio.classList.add(`${elem.word}`)
  audio.setAttribute('src', `${elem.audioPath}`)
  word.classList.add('item__word', 'category-clothes__word')
  word.innerHTML = `${elem.word}`
  btn.classList.add('item-button')
  btn.innerText = 'translate'
  back.innerText = elem.translate

  front.appendChild(indicator)
  front.appendChild(img)
  front.appendChild(word)
  front.appendChild(btn)
  front.appendChild(audio)
  item.appendChild(cardCurtain)
  item.appendChild(front)
  item.appendChild(back)
  parent.appendChild(item)
  });

  parent.appendChild(startGameBtn)
}


export {clothes, createClothes}