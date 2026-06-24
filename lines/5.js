burgerOther()
line()

function burgerOther() {
  let burger = document.querySelector('header h1')
  let altBurger = document.querySelector('#logo')
  let header = document.querySelector('header')
  let history = document.getElementById('history')
  let quiz = document.getElementById('quiz')
  let about = document.getElementById('about')
  let store = document.getElementById('store')
  let collection = document.getElementById('collection')

  burger.addEventListener('click', () => {
    header.classList.toggle('active')
    history.classList.toggle('active')
    quiz.classList.toggle('active')
    about.classList.toggle('active')
    store.classList.toggle('active')
    collection.classList.toggle('active')
  })

  // altBurger.addEventListener('click', () => {
  //   header.classList.toggle('active')
  //   history.classList.toggle('active')
  //   quiz.classList.toggle('active')
  //   about.classList.toggle('active')
  //   store.classList.toggle('active')
  //   collection.classList.toggle('active')
  // })

  history.addEventListener('click', () => {
    window.location.href = '../index.html'
  })

  quiz.addEventListener('click', () => {
    window.location.href = '../quiz.html'
  })

  about.addEventListener('click', () => {
    window.location.href = '../about.html'
  })

  store.addEventListener('click', () => {
    window.location.href = '../store.html'
  })

  collection.addEventListener('click', () => {
    window.location.href = '../collection.html'
  })
}

function line() {
    var pt1 = document.getElementById('n1')
    var pt2 = document.getElementById('n2')
    var pt3 = document.getElementById('n3')
    var pt4 = document.getElementById('n4')
    var pt5 = document.getElementById('n5')

    var timeline = document.querySelector('.years')
    var next = document.getElementById('nextYear')
    var past = document.getElementById('pastYear')
    var year = document.querySelector('.timeZone h2')

    var part = 0

    var allSliders = document.querySelectorAll('.sliderImg1')
    var allSliders2 = document.querySelectorAll('.sliderImg2')
    
    var leftArrow = document.getElementById('leftArrow')
    var rightArrow = document.getElementById('rightArrow')
    var fr1 = allSliders[0]
    var fr2 = allSliders2[0]
    var fr1b = allSliders[1]
    var fr2b = allSliders2[1]
    var fr1c = allSliders[2]
    var fr2c = allSliders2[2]
    var fr1d = allSliders[3]
    var fr2d = allSliders2[3]
    var fr1e = allSliders[4]
    var fr2e = allSliders2[4]
    var td1 = document.getElementById('td1')
    var td2 = document.getElementById('td2')
    var td12 = document.getElementById('td12')
    var td22 = document.getElementById('td22')
    var td13 = document.getElementById('td13')
    var td23 = document.getElementById('td23')
    var td14 = document.getElementById('td14')
    var td24 = document.getElementById('td24')
    var td15 = document.getElementById('td15')
    var td25 = document.getElementById('td25')

    var stations = document.querySelectorAll('.station')
    var backs = document.querySelectorAll('.stBack')

    rightArrow.addEventListener('click', () => {
        leftArrow.style.opacity = '1'
        fr1.style.marginLeft = '-40vw'
        rightArrow.style.opacity = '0'
        td1.style.display = 'none'
        td2.style.display = 'flex'
        td1.style.opacity = '0'
        td2.style.opacity = '1'
    })

    leftArrow.addEventListener('click', () => {
        leftArrow.style.opacity = '0'
        fr1.style.marginLeft = '0'
        rightArrow.style.opacity = '1'
        td1.style.display = 'flex'
        td2.style.display = 'none'
        td1.style.opacity = '1'
        td2.style.opacity = '0'
    })

    var leftArrow2 = document.getElementById('leftArrow2')
    var rightArrow2 = document.getElementById('rightArrow2')
    var leftArrow3 = document.getElementById('leftArrow3')
    var rightArrow3 = document.getElementById('rightArrow3')
    var leftArrow4 = document.getElementById('leftArrow4')
    var rightArrow4 = document.getElementById('rightArrow4')
    var leftArrow5 = document.getElementById('leftArrow5')
    var rightArrow5 = document.getElementById('rightArrow5')


    // Section 2
    rightArrow2.addEventListener('click', () => {
        leftArrow2.style.opacity = '1'
        fr1b.style.marginLeft = '-40vw'
        rightArrow2.style.opacity = '0'
        td12.style.display = 'none'
        td22.style.display = 'flex'
        td12.style.opacity = '0'
        td22.style.opacity = '1'
    })
    leftArrow2.addEventListener('click', () => {
        leftArrow2.style.opacity = '0'
        fr1b.style.marginLeft = '0'
        rightArrow2.style.opacity = '1'
        td12.style.display = 'flex'
        td22.style.display = 'none'
        td12.style.opacity = '1'
        td22.style.opacity = '0'
    })

    // Section 3
    rightArrow3.addEventListener('click', () => {
        leftArrow3.style.opacity = '1'
        fr1c.style.marginLeft = '-40vw'
        rightArrow3.style.opacity = '0'
        td13.style.display = 'none'
        td23.style.display = 'flex'
        td13.style.opacity = '0'
        td23.style.opacity = '1'
    })
    leftArrow3.addEventListener('click', () => {
        leftArrow3.style.opacity = '0'
        fr1c.style.marginLeft = '0'
        rightArrow3.style.opacity = '1'
        td13.style.display = 'flex'
        td23.style.display = 'none'
        td13.style.opacity = '1'
        td23.style.opacity = '0'
    })

    // Section 4
    rightArrow4.addEventListener('click', () => {
        leftArrow4.style.opacity = '1'
        fr1d.style.marginLeft = '-40vw'
        rightArrow4.style.opacity = '0'
        td14.style.display = 'none'
        td24.style.display = 'flex'
        td14.style.opacity = '0'
        td24.style.opacity = '1'
    })
    leftArrow4.addEventListener('click', () => {
        leftArrow4.style.opacity = '0'
        fr1d.style.marginLeft = '0'
        rightArrow4.style.opacity = '1'
        td14.style.display = 'flex'
        td24.style.display = 'none'
        td14.style.opacity = '1'
        td24.style.opacity = '0'
    })

    // Section 5
    rightArrow5.addEventListener('click', () => {
        leftArrow5.style.opacity = '1'
        fr1e.style.marginLeft = '-40vw'
        rightArrow5.style.opacity = '0'
        td15.style.display = 'none'
        td25.style.display = 'flex'
        td15.style.opacity = '0'
        td25.style.opacity = '1'
    })
    leftArrow5.addEventListener('click', () => {
        leftArrow5.style.opacity = '0'
        fr1e.style.marginLeft = '0'
        rightArrow5.style.opacity = '1'
        td15.style.display = 'flex'
        td25.style.display = 'none'
        td15.style.opacity = '1'
        td25.style.opacity = '0'
    })


    next.addEventListener('click', () => {
      if (part == 0) {
        pt1.style.display = 'none'
        pt2.style.display = 'flex'
        timeline.style.marginLeft = '-46vw'
        part = 1
        year.innerText = '1952'
        past.style = 'background-color: var(--text)'
        past.innerText = '<'
      } else if (part == 1) {
        pt2.style.display = 'none'
        pt3.style.display = 'flex'
        timeline.style.marginLeft = '-90vw'
        part = 2
        year.innerText = '1954'
      } else if (part == 2) {
        pt3.style.display = 'none'
        pt4.style.display = 'flex'
        timeline.style.marginLeft = '-1801vw'
        part = 3
        year.innerText = '2030'
        next.style.opacity = '0.5'
        next.style.pointerEvents = 'none'
      }
    }) 

    past.addEventListener('click', () => {
      if (part == 0) {
         window.location.href = '4.html'
      } else if (part == 1) {
        pt1.style.display = 'flex'
        pt2.style.display = 'none'
        timeline.style.marginLeft = '0vw'
        part = 0
        year.innerText = '1950'
        past.style = 'background-color: var(--4)'
        past.innerText = '< 4'
      } else if (part == 2) {
        pt2.style.display = 'flex'
        pt3.style.display = 'none'
        timeline.style.marginLeft = '-46vw'
        part = 1
        year.innerText = '1952'
      } else if (part == 3) {
        pt3.style.display = 'flex'
        pt4.style.display = 'none'
        timeline.style.marginLeft = '-90vw'
        part = 2
        year.innerText = '1954'
        next.style.opacity = '0.5'
        next.style.pointerEvents = 'none'
      }
    }) 

    for (var i = 0; i < backs.length; i++) {
        backs[i].addEventListener('click', () => {
            for (var j = 0; j < stations.length; j++) {
                stations[j].style.display = 'none'
            }
        })
    }
  }