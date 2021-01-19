import { startGameBtns, fronts, yesAudio, noAudio, contentSections, starsLineInner,loseWindow, winWindow, winWindowSound, loseWindowSound, errorsInGame, cardCurtains, starsLine } from '../main.js'


let questionsList = [],
  plaingIndex = 0,
  soundsArr = [],
  errors = 0


const createSoundForGame = () => {
  let cards = [],
    fronts = []

  soundsArr = []  //* It's global variabel

  //* Create Cards Array
  contentSections.forEach(elem => {
    if (elem.style.display === 'flex') {
      elem.childNodes.forEach(elem => {
        if (elem.tagName !== 'BUTTON') {
          cards.push(elem)
        }
      })
    }
  })


  //* Create Fronts Array
  cards.forEach(elem => {
    elem.childNodes.forEach(elem => {
      if (elem.classList.contains('front')) {
        fronts.push(elem)
      }
    })
  })


  //* Create SouandsArr
  fronts.forEach(elem => {
    elem.childNodes.forEach(elem => {
      if (elem.tagName === 'AUDIO') {
        soundsArr.push(elem)
      }
    })
  })

}


const clickStartGameBtn = (elem) => {
  if (elem.currentTarget.innerHTML === 'start game') {
    createSoundForGame()
    errors = 0
    questionsList = []
    plaingIndex = 0
    elem.currentTarget.innerHTML = 'repeat'

    for (let i = 0; questionsList.length !== soundsArr.length; i++) {
      const rand = Math.floor(Math.random() * soundsArr.length)
      if (!questionsList.includes(rand)) {
        questionsList.push(rand)
      }
    }
  }

  soundsArr[questionsList[plaingIndex]].play()
}


const clickAnswer = (elem) => {
  const audioInCard = elem.currentTarget.childNodes[elem.currentTarget.childNodes.length - 1],
    audioInQuestion = soundsArr[questionsList[plaingIndex]],
    cardCurtain = elem.currentTarget.previousSibling,
    starFull = document.createElement('div'),
    starEmpty = document.createElement('div')

    starFull.classList.add('star-full')
    starEmpty.classList.add('star-empty')

  if (audioInCard === audioInQuestion) {
    cardCurtain.style.display = 'block'
    cardCurtain.style.opacity = '1'
    starsLineInner.appendChild(starFull)
    yesAudio.play()

    if (questionsList[plaingIndex + 1] === undefined && errors === 0) {
      setTimeout(showWin, 1000)
    } else if (questionsList[plaingIndex + 1] === undefined && errors > 0) {
      setTimeout(showLose, 1000)
    } else {
      plaingIndex += 1
      setTimeout(sayQuestion, 1300)
    }
  } else {
    starsLineInner.appendChild(starEmpty)
    noAudio.play()
    errors += 1
  }
}

const showWin = () => {
  winWindow.style.display = 'flex'
  winWindowSound.play()
  setTimeout(closeWin, 2000)
}

const closeWin = () => {
  winWindow.style.display = 'none'
  starsLineInner.innerHTML = ''

  cardCurtains.forEach(elem => {
    elem.style.opacity = '0'
    elem.style.display = 'none'
  })

  contentSections.forEach(elem => {
    if(elem.classList.contains('categories-box')) {
      elem.style.display = 'flex'
    } else {
      elem.style.display = 'none'
    }
  })

  startGameBtns.forEach(elem => {
    elem.innerHTML = 'start game'
  })
}

const showLose = () => {
  loseWindow.style.display = 'flex'
  errorsInGame.innerText = `${errors} Errors`
  loseWindowSound.play()
  setTimeout(closeLose, 2500)
}

const closeLose = () => {
  loseWindow.style.display = 'none'
  starsLineInner.innerHTML = ''

  cardCurtains.forEach(elem => {
    elem.style.opacity = '0'
    elem.style.display = 'none'
  })

  contentSections.forEach(elem => {
    if(elem.classList.contains('categories-box')) {
      elem.style.display = 'flex'
    } else {
      elem.style.display = 'none'
    }
  })
}

const sayQuestion = () => {
  soundsArr[questionsList[plaingIndex]].play()
}


export { clickStartGameBtn, clickAnswer }