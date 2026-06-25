burgerOther()
document.addEventListener('DOMContentLoaded', () => {
  var path = window.location.pathname

  if (path === '/' || path.endsWith('index.html') || path === '') {
    lines()
    burgerMenu()
  }
})

function burgerMenu() {
  let burger = document.querySelector('header h1')
  let altBurger = document.querySelector('#logo')
  let header = document.querySelector('header')
  let history = document.getElementById('history')
  let quiz = document.getElementById('quiz')
  let about = document.getElementById('about')
  let store = document.getElementById('store')
  let collection = document.getElementById('collection')
  let headerHistory = document.getElementById('headerHistory')
  let headerQuiz = document.getElementById('headerQuiz')
  let headerAbout = document.getElementById('headerAbout')
  let headerStore = document.getElementById('headerStore')
  let headerCollection = document.getElementById('headerCollection')

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
    window.location.href = 'index.html'
  })

  quiz.addEventListener('click', () => {
    window.location.href = 'quiz.html'
  })

  about.addEventListener('click', () => {
    window.location.href = 'about.html'
  })

  store.addEventListener('click', () => {
    window.location.href = 'store.html'
  })

  collection.addEventListener('click', () => {
    window.location.href = 'collection.html'
  })

  if (headerHistory) headerHistory.addEventListener('click', () => {
    window.location.href = 'index.html'
  })

  if (headerQuiz) headerQuiz.addEventListener('click', () => {
    window.location.href = 'quiz.html'
  })

  if (headerAbout) headerAbout.addEventListener('click', () => {
    window.location.href = 'about.html'
  })

  if (headerStore) headerStore.addEventListener('click', () => {
    window.location.href = 'store.html'
  })

  if (headerCollection) headerCollection.addEventListener('click', () => {
    window.location.href = 'collection.html'
  })
}

function burgerOther() {
  let burger = document.querySelector('header h1')
  let altBurger = document.querySelector('#logo')
  let header = document.querySelector('header')
  let history = document.getElementById('history')
  let quiz = document.getElementById('quiz')
  let about = document.getElementById('about')
  let store = document.getElementById('store')
  let collection = document.getElementById('collection')
  let headerHistory = document.getElementById('headerHistory')
  let headerQuiz = document.getElementById('headerQuiz')
  let headerAbout = document.getElementById('headerAbout')
  let headerStore = document.getElementById('headerStore')
  let headerCollection = document.getElementById('headerCollection')

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

  if (headerHistory) headerHistory.addEventListener('click', () => {
    window.location.href = '../index.html'
  })

  if (headerQuiz) headerQuiz.addEventListener('click', () => {
    window.location.href = '../quiz.html'
  })

  if (headerAbout) headerAbout.addEventListener('click', () => {
    window.location.href = '../about.html'
  })

  if (headerStore) headerStore.addEventListener('click', () => {
    window.location.href = '../store.html'
  })

  if (headerCollection) headerCollection.addEventListener('click', () => {
    window.location.href = '../collection.html'
  })
}

function lines() {
  var m1 = document.getElementById('m1')
  var m2 = document.getElementById('m2')
  var m3 = document.getElementById('m3')
  var m4 = document.getElementById('m4')
  var m5 = document.getElementById('m5')
  var m6 = document.getElementById('m6')
  var m7 = document.getElementById('m7')
  var m8 = document.getElementById('m8')
  var m9 = document.getElementById('m9')
  var m10 = document.getElementById('m10')
  var m11 = document.getElementById('m11')
  var m12 = document.getElementById('m12')
  var m15 = document.getElementById('m15')
  var m16 = document.getElementById('m16')
  var m17 = document.getElementById('m17')

  var r1 = document.getElementById('r1')
  var r2 = document.getElementById('r2')
  var r3 = document.getElementById('r3')
  var r4 = document.getElementById('r4')
  var r5 = document.getElementById('r5')
  var r6 = document.getElementById('r6')
  var r7 = document.getElementById('r7')
  var r8 = document.getElementById('r8')
  var r9 = document.getElementById('r9')
  var r10 = document.getElementById('r10')
  var r11 = document.getElementById('r11')
  var r12 = document.getElementById('r12')
  var r15 = document.getElementById('r15')
  var r16 = document.getElementById('r16')
  var r17 = document.getElementById('r17')

  var line = document.querySelectorAll('.ln')
  var choise = document.querySelectorAll('.ch')

  m1.addEventListener('click', () => {
    line.forEach((el) => (el.style.display = 'flex'))
    m1.style.display = 'none'
    choise.forEach((el) => (el.style.display = 'none'))
    r1.style.display = 'flex'
  })

  m2.addEventListener('click', () => {
    line.forEach((el) => (el.style.display = 'flex'))
    m2.style.display = 'none'
    choise.forEach((el) => (el.style.display = 'none'))
    r2.style.display = 'flex'
  })

  m3.addEventListener('click', () => {
    line.forEach((el) => (el.style.display = 'flex'))
    m3.style.display = 'none'
    choise.forEach((el) => (el.style.display = 'none'))
    r3.style.display = 'flex'
  })

  m4.addEventListener('click', () => {
    line.forEach((el) => (el.style.display = 'flex'))
    m4.style.display = 'none'
    choise.forEach((el) => (el.style.display = 'none'))
    r4.style.display = 'flex'
  })

  m5.addEventListener('click', () => {
    line.forEach((el) => (el.style.display = 'flex'))
    m5.style.display = 'none'
    choise.forEach((el) => (el.style.display = 'none'))
    r5.style.display = 'flex'
  })

  m6.addEventListener('click', () => {
    line.forEach((el) => (el.style.display = 'flex'))
    m6.style.display = 'none'
    choise.forEach((el) => (el.style.display = 'none'))
    r6.style.display = 'flex'
  })

  m7.addEventListener('click', () => {
    line.forEach((el) => (el.style.display = 'flex'))
    m7.style.display = 'none'
    choise.forEach((el) => (el.style.display = 'none'))
    r7.style.display = 'flex'
  })

  m8.addEventListener('click', () => {
    line.forEach((el) => (el.style.display = 'flex'))
    m8.style.display = 'none'
    choise.forEach((el) => (el.style.display = 'none'))
    r8.style.display = 'flex'
  })

  m9.addEventListener('click', () => {
    line.forEach((el) => (el.style.display = 'flex'))
    m9.style.display = 'none'
    choise.forEach((el) => (el.style.display = 'none'))
    r9.style.display = 'flex'
  })

  m10.addEventListener('click', () => {
    line.forEach((el) => (el.style.display = 'flex'))
    m10.style.display = 'none'
    choise.forEach((el) => (el.style.display = 'none'))
    r10.style.display = 'flex'
  })

  m11.addEventListener('click', () => {
    line.forEach((el) => (el.style.display = 'flex'))
    m11.style.display = 'none'
    choise.forEach((el) => (el.style.display = 'none'))
    r11.style.display = 'flex'
  })

  m12.addEventListener('click', () => {
    line.forEach((el) => (el.style.display = 'flex'))
    m12.style.display = 'none'
    choise.forEach((el) => (el.style.display = 'none'))
    r12.style.display = 'flex'
  })

  m15.addEventListener('click', () => {
    line.forEach((el) => (el.style.display = 'flex'))
    m15.style.display = 'none'
    choise.forEach((el) => (el.style.display = 'none'))
    r15.style.display = 'flex'
  })

  m16.addEventListener('click', () => {
    line.forEach((el) => (el.style.display = 'flex'))
    m16.style.display = 'none'
    choise.forEach((el) => (el.style.display = 'none'))
    r16.style.display = 'flex'
  })

  m17.addEventListener('click', () => {
    line.forEach((el) => (el.style.display = 'flex'))
    m17.style.display = 'none'
    choise.forEach((el) => (el.style.display = 'none'))
    r17.style.display = 'flex'
  })

  r1.addEventListener('click', () => {
     window.location.href = 'lines/1.html'
  })

  r2.addEventListener('click', () => {
     window.location.href = 'lines/2.html'
  })

  r3.addEventListener('click', () => {
     window.location.href = 'lines/3.html'
  })

  r4.addEventListener('click', () => {
     window.location.href = 'lines/4.html'
  })

  r5.addEventListener('click', () => {
     window.location.href = 'lines/5.html'
  })

  r6.addEventListener('click', () => {
    //  window.location.href = 'lines/6.html'
     window.location.href = 'index.html'
  })

  r7.addEventListener('click', () => {
    //  window.location.href = 'lines/7.html'
     window.location.href = 'index.html'
  })

  r8.addEventListener('click', () => {
    //  window.location.href = 'lines/8.html'
     window.location.href = 'index.html'
  })

  r9.addEventListener('click', () => {
    //  window.location.href = 'lines/9.html'
     window.location.href = 'index.html'
  })

  r10.addEventListener('click', () => {
    //  window.location.href = 'lines/10.html'
     window.location.href = 'index.html'
  })

  r11.addEventListener('click', () => {
    //  window.location.href = 'lines/11.html'
     window.location.href = 'index.html'
  })

  r12.addEventListener('click', () => {
    //  window.location.href = 'lines/12.html'
     window.location.href = 'index.html'
  })

  r15.addEventListener('click', () => {
    //  window.location.href = 'lines/15.html'
     window.location.href = 'index.html'
  })

  r16.addEventListener('click', () => {
    //  window.location.href = 'lines/16.html'
     window.location.href = 'index.html'
  })

  r17.addEventListener('click', () => {
    //  window.location.href = 'lines/17.html'
     window.location.href = 'index.html'
  })
}
