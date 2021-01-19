const emotion = [
  {
    word: 'angry',
    imgPath: 'url(../assets/images/emotion/angry.jpg)',
    audioPath: '../assets/sounds/angry.mp3',
    translate: 'сердитый'
  },

  {
    word: 'fear',
    imgPath: 'url(../assets/images/emotion/fear.jpg)',
    audioPath: '../assets/sounds/fear.mp3',
    translate: 'страх'
  },

  {
    word: 'happy',
    imgPath: 'url(../assets/images/emotion/happy.jpg)',
    audioPath: '../assets/sounds/happy.mp3',
    translate: 'счатливый'
  },

  {
    word: 'laugh',
    imgPath: 'url(../assets/images/emotion/laugh.jpg)',
    audioPath: '../assets/sounds/laugh.mp3',
    translate: 'смех'
  },

  {
    word: 'sad',
    imgPath: 'url(../assets/images/emotion/sad.jpg)',
    audioPath: '../assets/sounds/sad.mp3',
    translate: 'печальный'
  },

  {
    word: 'shame',
    imgPath: 'url(../assets/images/emotion/shame.jpg)',
    audioPath: '../assets/sounds/shame.mp3',
    translate: 'стыд'
  },

  {
    word: 'tire',
    imgPath: 'url(../assets/images/emotion/tired.jpg)',
    audioPath: '../assets/sounds/tire.mp3',
    translate: 'уставать'
  },

  {
    word: 'surprise',
    imgPath: 'url(../assets/images/emotion/surprise.jpg)',
    audioPath: '../assets/sounds/surprise.mp3',
    translate: 'удивление'
  }
]


const createEmotion = (parent, arr) => {

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

  item.classList.add('item', 'category-emotion-item')
  front.classList.add('front', 'category-emotion-front')
  cardCurtain.classList.add('card-curtain')
  back.classList.add('back', 'category-emotion-back')
  indicator.classList.add('indicator', 'category-emotion__indicator')
  img.classList.add('item__img', 'category-emotion__img')
  img.setAttribute('id', `${elem.word}`)
  img.style.backgroundImage = `${elem.imgPath}`
  audio.classList.add(`${elem.word}`)
  audio.setAttribute('src', `${elem.audioPath}`)
  word.classList.add('item__word', 'category-emotion__word')
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


export {emotion, createEmotion}