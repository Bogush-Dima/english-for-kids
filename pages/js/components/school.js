const school = [
  {
    word: 'bell',
    imgPath: 'url(../assets/images/school/bell.jpg)',
    audioPath: '../assets/sounds/bell.mp3',
    translate: 'звонок'
  },

  {
    word: 'board',
    imgPath: 'url(../assets/images/school/board.jpg)',
    audioPath: '../assets/sounds/board.mp3',
    translate: 'доска'
  },

  {
    word: 'book',
    imgPath: 'url(../assets/images/school/book.jpg)',
    audioPath: '../assets/sounds/book.mp3',
    translate: 'книга'
  },

  {
    word: 'break',
    imgPath: 'url(../assets/images/school/break.jpg)',
    audioPath: '../assets/sounds/break.mp3',
    translate: 'перерыв'
  },

  {
    word: 'drawing',
    imgPath: 'url(../assets/images/school/drawing.jpg)',
    audioPath: '../assets/sounds/drawing.mp3',
    translate: 'рисование'
  },

  {
    word: 'education',
    imgPath: 'url(../assets/images/school/education.jpg)',
    audioPath: '../assets/sounds/education.mp3',
    translate: 'образование'
  },

  {
    word: 'exam',
    imgPath: 'url(../assets/images/school/exam.jpg)',
    audioPath: '../assets/sounds/exam.mp3',
    translate: 'экзамен'
  },

  {
    word: 'globe',
    imgPath: 'url(../assets/images/school/globe.jpg)',
    audioPath: '../assets/sounds/globe.mp3',
    translate: 'глобус'
  }
]


const createSchool = (parent, arr) => {

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

  item.classList.add('item', 'category-school-item')
  front.classList.add('front', 'category-school-front')
  cardCurtain.classList.add('card-curtain')
  back.classList.add('back', 'category-school-back')
  indicator.classList.add('indicator', 'category-school__indicator')
  img.classList.add('item__img', 'category-school__img')
  img.setAttribute('id', `${elem.word}`)
  img.style.backgroundImage = `${elem.imgPath}`
  audio.classList.add(`${elem.word}`)
  audio.setAttribute('src', `${elem.audioPath}`)
  word.classList.add('item__word', 'category-school__word')
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


export {school, createSchool}