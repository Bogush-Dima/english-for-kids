const home = [
  {
    word: 'balcony',
    imgPath: 'url(../assets/images/home/balcony.jpg)',
    audioPath: '../assets/sounds/balcony.mp3',
    translate: 'балкон'
  },

  {
    word: 'bath',
    imgPath: 'url(../assets/images/home/bath.jpg)',
    audioPath: '../assets/sounds/bath.mp3',
    translate: 'ванная'
  },

  {
    word: 'door',
    imgPath: 'url(../assets/images/home/door.jpg)',
    audioPath: '../assets/sounds/door.mp3',
    translate: 'дверь'
  },

  {
    word: 'garage',
    imgPath: 'url(../assets/images/home/garage.jpg)',
    audioPath: '../assets/sounds/garage.mp3',
    translate: 'гараж'
  },

  {
    word: 'toilet',
    imgPath: 'url(../assets/images/home/toilet.jpg)',
    audioPath: '../assets/sounds/toilet.mp3',
    translate: 'туалет'
  },

  {
    word: 'oven',
    imgPath: 'url(../assets/images/home/oven.jpg)',
    audioPath: '../assets/sounds/oven.mp3',
    translate: 'духовка'
  },

  {
    word: 'shower',
    imgPath: 'url(../assets/images/home/shower.jpg)',
    audioPath: '../assets/sounds/shower.mp3',
    translate: 'душ'
  },

  {
    word: 'lawn',
    imgPath: 'url(../assets/images/home/lawn.jpg)',
    audioPath: '../assets/sounds/lawn.mp3',
    translate: 'газон'
  }
]


const createHome = (parent, arr) => {

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

  item.classList.add('item', 'category-home-item')
  front.classList.add('front', 'category-home-front')
  cardCurtain.classList.add('card-curtain')
  back.classList.add('back', 'category-home-back')
  indicator.classList.add('indicator', 'category-home__indicator')
  img.classList.add('item__img', 'category-home__img')
  img.setAttribute('id', `${elem.word}`)
  img.style.backgroundImage = `${elem.imgPath}`
  audio.classList.add(`${elem.word}`)
  audio.setAttribute('src', `${elem.audioPath}`)
  word.classList.add('item__word', 'category-home__word')
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

export {home, createHome}