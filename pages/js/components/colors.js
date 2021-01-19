const colors = [
  {
    word: 'red',
    audioPath: '../assets/sounds/red.mp3',
    translate: 'красный'
  },

  {
    word: 'blue',
    audioPath: '../assets/sounds/blue.mp3',
    translate: 'синий'
  },

  {
    word: 'black',
    audioPath: '../assets/sounds/black.mp3',
    translate: 'черный'
  },

  {
    word: 'white',
    audioPath: '../assets/sounds/white.mp3',
    translate: 'белый'
  },

  {
    word: 'green',
    audioPath: '../assets/sounds/green.mp3',
    translate: 'зеленый'
  },

  {
    word: 'pink',
    audioPath: '../assets/sounds/pink.mp3',
    translate: 'розовый'
  },

  {
    word: 'gray',
    audioPath: '../assets/sounds/gray.mp3',
    translate: 'серый'
  },

  {
    word: 'orange',
    audioPath: '../assets/sounds/orange.mp3',
    translate: 'оранжевый'
  }
]


const createColors = (parent, arr) => {

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

  item.classList.add('item', 'category-colors-item')
  front.classList.add('front', 'category-colors-front')
  cardCurtain.classList.add('card-curtain')
  back.classList.add('back', 'category-colors-back')
  indicator.classList.add('indicator', 'category-colors__indicator')
  img.classList.add('item__img', 'category-colors__img')
  img.setAttribute('id', `${elem.word}`)
  img.style.backgroundColor = `${elem.word}`
  audio.classList.add(`${elem.word}`)
  audio.setAttribute('src', `${elem.audioPath}`)
  word.classList.add('item__word', 'category-colors__word')
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


export {colors, createColors}