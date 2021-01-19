const family = [
  {
    word: 'brother',
    imgPath: 'url(../assets/images/family/brother.jpg)',
    audioPath: '../assets/sounds/brother.mp3',
    translate: 'брат'
  },

  {
    word: 'child',
    imgPath: 'url(../assets/images/family/child.jpg)',
    audioPath: '../assets/sounds/child.mp3',
    translate: 'ребенок'
  },

  {
    word: 'father',
    imgPath: 'url(../assets/images/family/father.jpg)',
    audioPath: '../assets/sounds/father.mp3',
    translate: 'отец'
  },

  {
    word: 'grandmother',
    imgPath: 'url(../assets/images/family/grandmother.jpg)',
    audioPath: '../assets/sounds/grandmother.mp3',
    translate: 'бабушка'
  },

  {
    word: 'grandfather',
    imgPath: 'url(../assets/images/family/grandfather.jpg)',
    audioPath: '../assets/sounds/grandfather.mp3',
    translate: 'дедушка'
  },

  {
    word: 'mother',
    imgPath: 'url(../assets/images/family/mother.jpg)',
    audioPath: '../assets/sounds/mother.mp3',
    translate: 'мать'
  },

  {
    word: 'parent',
    imgPath: 'url(../assets/images/family/parents.jpg)',
    audioPath: '../assets/sounds/parent.mp3',
    translate: 'родитель'
  },

  {
    word: 'sister',
    imgPath: 'url(../assets/images/family/sister.jpg)',
    audioPath: '../assets/sounds/sister.mp3',
    translate: 'сестра'
  }
]


const createFamily = (parent, arr) => {

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

  item.classList.add('item', 'category-family-item')
  front.classList.add('front', 'category-family-front')
  cardCurtain.classList.add('card-curtain')
  back.classList.add('back', 'category-family-back')
  indicator.classList.add('indicator', 'category-family__indicator')
  img.classList.add('item__img', 'category-family__img')
  img.setAttribute('id', `${elem.word}`)
  img.style.backgroundImage = `${elem.imgPath}`
  audio.classList.add(`${elem.word}`)
  audio.setAttribute('src', `${elem.audioPath}`)
  word.classList.add('item__word', 'category-family__word')
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


export {family, createFamily}