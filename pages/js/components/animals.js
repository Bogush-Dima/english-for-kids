const animals = [
  {
    word: 'cat',
    imgPath: 'url(../assets/images/animals/cat.jpg)',
    audioPath: '../assets/sounds/cat.mp3',
    translate: 'кот'
  },

  {
    word: 'chicken',
    imgPath: 'url(../assets/images/animals/chicken.jpg)',
    audioPath: '../assets/sounds/chicken.mp3',
    translate: 'курица'
  },

  {
    word: 'dog',
    imgPath: 'url(../assets/images/animals/dog.jpg)',
    audioPath: '../assets/sounds/dog.mp3',
    translate: 'собака'
  },

  {
    word: 'elephant',
    imgPath: 'url(../assets/images/animals/elephant.jpg)',
    audioPath: '../assets/sounds/elephant.mp3',
    translate: 'слон'
  },

  {
    word: 'lion',
    imgPath: 'url(../assets/images/animals/lion.jpg)',
    audioPath: '../assets/sounds/lion.mp3',
    translate: 'лев'
  },

  {
    word: 'pig',
    imgPath: 'url(../assets/images/animals/pig.jpg)',
    audioPath: '../assets/sounds/pig.mp3',
    translate: 'свинья'
  },

  {
    word: 'rabbit',
    imgPath: 'url(../assets/images/animals/rabbit.jpg)',
    audioPath: '../assets/sounds/rabbit.mp3',
    translate: 'заяц'
  },

  {
    word: 'tiger',
    imgPath: 'url(../assets/images/animals/tiger.jpg)',
    audioPath: '../assets/sounds/tiger.mp3',
    translate: 'тигр'
  }
]


const createAnimals = (parent, arr) => {

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

  item.classList.add('item', 'category-animals-item')
  front.classList.add('front', 'category-animals-front')
  cardCurtain.classList.add('card-curtain')
  back.classList.add('back', 'category-animals-back')
  indicator.classList.add('indicator', 'category-animals__indicator')
  img.classList.add('item__img', 'category-animals__img')
  img.setAttribute('id', `${elem.word}`)
  img.style.backgroundImage = `${elem.imgPath}`
  audio.classList.add(`${elem.word}`)
  audio.setAttribute('src', `${elem.audioPath}`)
  word.classList.add('item__word', 'category-animals__word')
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

export {animals, createAnimals}