const numbers = [
  {
    word: 'one',
    bgContent: '1',
    audioPath: '../assets/sounds/one.mp3',
    translate: 'один'
  },

  {
    word: 'two',
    bgContent: '2',
    audioPath: '../assets/sounds/two.mp3',
    translate: 'два'
  },

  {
    word: 'three',
    bgContent: '3',
    audioPath: '../assets/sounds/three.mp3',
    translate: 'три'
  },

  {
    word: 'four',
    bgContent: '4',
    audioPath: '../assets/sounds/four.mp3',
    translate: 'четыре'
  },

  {
    word: 'five',
    bgContent: '5',
    audioPath: '../assets/sounds/five.mp3',
    translate: 'пять'
  },

  {
    word: 'six',
    bgContent: '6',
    audioPath: '../assets/sounds/six.mp3',
    translate: 'шесть'
  },

  {
    word: 'seven',
    bgContent: '7',
    audioPath: '../assets/sounds/seven.mp3',
    translate: 'семь'
  },

  {
    word: 'eight',
    bgContent: '8',
    audioPath: '../assets/sounds/eight.mp3',
    translate: 'восемь'
  }
]

const createNumbers = (parent, arr) => {

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
    imgContent = document.createElement('p'),
    audio = document.createElement('audio'),
    word = document.createElement('h2'),
    btn = document.createElement('button')

  item.classList.add('item', 'category-numbers-item')
  front.classList.add('front', 'category-numbers-front')
  cardCurtain.classList.add('card-curtain')
  back.classList.add('back', 'category-numbers-back')
  indicator.classList.add('indicator', 'category-numbers__indicator')
  img.classList.add('item__img', 'category-numbers__img')
  img.setAttribute('id', `${elem.word}`)
  img.style.backgroundColor = `${elem.imgPath}`
  imgContent.classList.add('category-numbers__img-content')
  imgContent.innerText = `${elem.bgContent}`
  audio.classList.add(`${elem.word}`)
  audio.setAttribute('src', `${elem.audioPath}`)
  word.classList.add('item__word', 'category-numbers__word')
  word.innerHTML = `${elem.word}`
  btn.classList.add('item-button')
  btn.innerText = 'translate'
  back.innerText = elem.translate

  img.appendChild(imgContent)
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

export {numbers, createNumbers}