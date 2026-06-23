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
    var pt1 = document.getElementById('c1n1')
    var pt2 = document.getElementById('c1n2')
    var pt3 = document.getElementById('c1n3')
    var pt4 = document.getElementById('c1n4')
    var pt5 = document.getElementById('c1n5')
    var pt6 = document.getElementById('c1n6')
    var pt7 = document.getElementById('c1n7')
    var pt8 = document.getElementById('c1n8')
    var pt9 = document.getElementById('c1n9')
    var pt10 = document.getElementById('c1n10')
    var pt11 = document.getElementById('c1n11')
    var pt12 = document.getElementById('c1n12')
    var pt13 = document.getElementById('c1n13')
    var pt14 = document.getElementById('c1n14')
    var pt15 = document.getElementById('c1n15')
    var pt16 = document.getElementById('c1n16')

    var timeline = document.querySelector('.years')
    var next = document.getElementById('nextYear')
    var past = document.getElementById('pastYear')
    var year = document.querySelector('.timeZone h2')

    var part = 0

    var leftArrow = document.getElementById('leftArrow')
    var rightArrow = document.getElementById('rightArrow')
    var fr1 = document.querySelector('.sliderImg1')
    var fr2 = document.querySelector('.sliderImg2')
    var td1 = document.getElementById('td1')
    var td2 = document.getElementById('td2')

    var st199 = document.getElementById('st199')
var st303 = document.getElementById('st303')
var st38 = document.getElementById('st038')
var st37 = document.getElementById('st037')
var st36 = document.getElementById('st036')
var st35 = document.getElementById('st035')
var st34 = document.getElementById('st034')
var st32 = document.getElementById('st032')
var st31 = document.getElementById('st031')
var st30 = document.getElementById('st030')
var st29 = document.getElementById('st029')
var st25 = document.getElementById('st025')
var st27 = document.getElementById('st027')
var st197 = document.getElementById('st197')
var st24 = document.getElementById('st024')
var st23 = document.getElementById('st023')
var st22 = document.getElementById('st022')
var st21 = document.getElementById('st021')
var st20 = document.getElementById('st020')
var st196 = document.getElementById('st196')
var st39 = document.getElementById('st039')
var st33 = document.getElementById('st033')

var a199 = document.getElementById('a199')
var a303 = document.getElementById('a303')
var a38 = document.getElementById('a038')
var a37 = document.getElementById('a037')
var a36 = document.getElementById('a036')
var a35 = document.getElementById('a035')
var a34 = document.getElementById('a034')
var a32 = document.getElementById('a032')
var a31 = document.getElementById('a031')
var a30 = document.getElementById('a030')
var a29 = document.getElementById('a029')
var a25 = document.getElementById('a025')
var a27 = document.getElementById('a027')
var a197 = document.getElementById('a197')
var a24 = document.getElementById('a024')
var a23 = document.getElementById('a023')
var a22 = document.getElementById('a022')
var a21 = document.getElementById('a021')
var a20 = document.getElementById('a020')
var a196 = document.getElementById('a196')
var a39 = document.getElementById('a039')
var a33 = document.getElementById('a033')

if(a199 && st199) a199.addEventListener('click', () => { st199.style.display = 'flex' })
if(a303 && st303) a303.addEventListener('click', () => { st303.style.display = 'flex' })
if(a38 && st38) a38.addEventListener('click', () => { st38.style.display = 'flex' })
if(a37 && st37) a37.addEventListener('click', () => { st37.style.display = 'flex' })
if(a36 && st36) a36.addEventListener('click', () => { st36.style.display = 'flex' })
if(a35 && st35) a35.addEventListener('click', () => { st35.style.display = 'flex' })
if(a34 && st34) a34.addEventListener('click', () => { st34.style.display = 'flex' })
if(a32 && st32) a32.addEventListener('click', () => { st32.style.display = 'flex' })
if(a31 && st31) a31.addEventListener('click', () => { st31.style.display = 'flex' })
if(a30 && st30) a30.addEventListener('click', () => { st30.style.display = 'flex' })
if(a29 && st29) a29.addEventListener('click', () => { st29.style.display = 'flex' })
if(a25 && st25) a25.addEventListener('click', () => { st25.style.display = 'flex' })
if(a27 && st27) a27.addEventListener('click', () => { st27.style.display = 'flex' })
if(a197 && st197) a197.addEventListener('click', () => { st197.style.display = 'flex' })
if(a24 && st24) a24.addEventListener('click', () => { st24.style.display = 'flex' })
if(a23 && st23) a23.addEventListener('click', () => { st23.style.display = 'flex' })
if(a22 && st22) a22.addEventListener('click', () => { st22.style.display = 'flex' })
if(a21 && st21) a21.addEventListener('click', () => { st21.style.display = 'flex' })
if(a20 && st20) a20.addEventListener('click', () => { st20.style.display = 'flex' })
if(a196 && st196) a196.addEventListener('click', () => { st196.style.display = 'flex' })
if(a39 && st39) a39.addEventListener('click', () => { st39.style.display = 'flex' })
if(a33 && st33) a33.addEventListener('click', () => { st33.style.display = 'flex' })


    var stations = document.querySelectorAll('.station')
    var backs = document.querySelectorAll('.stBack')

    rightArrow.addEventListener('click', () => {
        leftArrow.style.opacity = '1'
        fr1.style.marginLeft = '-40vw'
        rightArrow.style.opacity = '0'
        td1.style.display = 'none'
        td2.style.display = 'flex'
    })

    leftArrow.addEventListener('click', () => {
        leftArrow.style.opacity = '0'
        fr1.style.marginLeft = '0'
        rightArrow.style.opacity = '1'
        td1.style.display = 'flex'
        td2.style.display = 'none'
    })

    next.addEventListener('click', () => {
      if (part == 0) {
        pt2.style.display = 'none'
        pt3.style.display = 'flex'
        timeline.style.marginLeft = '-46vw'
        part = 1
        year.innerText = '1937'
      } else if (part == 1) {
        pt3.style.display = 'none'
        pt4.style.display = 'flex'
        timeline.style.marginLeft = '-69vw'
        part = 2
        year.innerText = '1938'
      } else if (part == 2) {
        pt4.style.display = 'none'
        pt5.style.display = 'flex'
        timeline.style.marginLeft = '-496vw'
        part = 3
        year.innerText = '1957'
      } else if (part == 3) {
        pt5.style.display = 'none'
        pt6.style.display = 'flex'
        timeline.style.marginLeft = '-540vw'
        part = 4
        year.innerText = '1959'
      } else if (part == 4) {
        pt6.style.display = 'none'
        pt7.style.display = 'flex'
        timeline.style.marginLeft = '-630vw'
        part = 5
        year.innerText = '1963'
      } else if (part == 5) {
        pt7.style.display = 'none'
        pt8.style.display = 'flex'
        timeline.style.marginLeft = '-676vw'
        part = 6
        year.innerText = '1965'
      } else if (part == 6) {
        pt8.style.display = 'none'
        pt9.style.display = 'flex'
        timeline.style.marginLeft = '-1080vw'
        part = 7
        year.innerText = '1983'
      } else if (part == 7) {
        pt9.style.display = 'none'
        pt10.style.display = 'flex'
        timeline.style.marginLeft = '-1238vw'
        part = 8
        year.innerText = '1990'
      } else if (part == 8) {
        pt10.style.display = 'none'
        pt11.style.display = 'flex'
        timeline.style.marginLeft = '-1530vw'
        part = 9
        year.innerText = '2003'
      } else if (part == 9) {
        pt11.style.display = 'none'
        pt12.style.display = 'flex'
        timeline.style.marginLeft = '-1778vw'
        part = 10
        year.innerText = '2014'
      } else if (part == 10) {
        pt12.style.display = 'none'
        pt13.style.display = 'flex'
        timeline.style.marginLeft = '-1823vw'
        part = 11
        year.innerText = '2016'
      } else if (part == 11) {
        pt13.style.display = 'none'
        pt14.style.display = 'flex'
        timeline.style.marginLeft = '-1890vw'
        part = 12
        year.innerText = '2019'
      } else if (part == 12) {
        pt14.style.display = 'none'
        pt15.style.display = 'flex'
        timeline.style.marginLeft = '-2003vw'
        part = 13
        year.innerText = '2024'
      }
    })

    past.addEventListener('click', () => {
      if (part == 1) {
        pt2.style.display = 'flex'
        pt3.style.display = 'none'
        timeline.style.marginLeft = '0'
        part = 0
        year.innerText = '1935'
      } else if (part == 2) {
        pt3.style.display = 'flex'
        pt4.style.display = 'none'
        timeline.style.marginLeft = '-46vw'
        part = 1
        year.innerText = '1937'
      } else if (part == 3) {
        pt4.style.display = 'flex'
        pt5.style.display = 'none'
        timeline.style.marginLeft = '-69vw'
        part = 2
        year.innerText = '1938'
      } else if (part == 4) {
        pt5.style.display = 'flex'
        pt6.style.display = 'none'
        timeline.style.marginLeft = '-496vw'
        part = 3
        year.innerText = '1957'
      } else if (part == 5) {
        pt6.style.display = 'flex'
        pt7.style.display = 'none'
        timeline.style.marginLeft = '-540vw'
        part = 4
        year.innerText = '1959'
      } else if (part == 6) {
        pt7.style.display = 'flex'
        pt8.style.display = 'none'
        timeline.style.marginLeft = '-630vw'
        part = 5
        year.innerText = '1963'
      } else if (part == 7) {
        pt8.style.display = 'flex'
        pt9.style.display = 'none'
        timeline.style.marginLeft = '-676vw'
        part = 6
        year.innerText = '1965'
      } else if (part == 8) {
        pt9.style.display = 'flex'
        pt10.style.display = 'none'
        timeline.style.marginLeft = '-1080vw'
        part = 7
        year.innerText = '1983'
      } else if (part == 9) {
        pt10.style.display = 'flex'
        pt11.style.display = 'none'
        timeline.style.marginLeft = '-1238vw'
        part = 8
        year.innerText = '1990'
      } else if (part == 10) {
        pt11.style.display = 'flex'
        pt12.style.display = 'none'
        timeline.style.marginLeft = '-1530vw'
        part = 9
        year.innerText = '2003'
      } else if (part == 11) {
        pt12.style.display = 'flex'
        pt13.style.display = 'none'
        timeline.style.marginLeft = '-1778vw'
        part = 10
        year.innerText = '2014'
      } else if (part == 12) {
        pt13.style.display = 'flex'
        pt14.style.display = 'none'
        timeline.style.marginLeft = '-1823vw'
        part = 11
        year.innerText = '2016'
      } else if (part == 13) {
        pt14.style.display = 'flex'
        pt15.style.display = 'none'
        timeline.style.marginLeft = '-1890vw'
        part = 12
        year.innerText = '2019'
      }
    })

    for (var i = 0; i < backs.length; i++) {
        backs[i].addEventListener('click', () => {
            for (var j = 0; j < stations.length; j++) {
                stations[j].style.display = 'none'
            }
        })
    }

    // a13.addEventListener('click', () => {
    //   st13.style.display = 'flex'
    // })
    // a12.addEventListener('click', () => {
    //   st12.style.display = 'flex'
    // })
    // a11.addEventListener('click', () => {
    //   st11.style.display = 'flex'
    // })
    // a10.addEventListener('click', () => {
    //   st10.style.display = 'flex'
    // })
    // a9.addEventListener('click', () => {
    //   st9.style.display = 'flex'
    // })
    // a8.addEventListener('click', () => {
    //   st8.style.display = 'flex'
    // })
    // a7.addEventListener('click', () => {
    //   st7.style.display = 'flex'
    // })
    // a6.addEventListener('click', () => {
    //   st6.style.display = 'flex'
    // })
    // a5.addEventListener('click', () => {
    //   st5.style.display = 'flex'
    // })
    // a4.addEventListener('click', () => {
    //   st4.style.display = 'flex'
    // })
    // a71.addEventListener('click', () => {
    //   st71.style.display = 'flex'
    // })
    // a70.addEventListener('click', () => {
    //   st70.style.display = 'flex'
    // })
    // a69.addEventListener('click', () => {
    //   st69.style.display = 'flex'
    // })

    // back.addEventListener('click', () => {
    //   station.style.display = 'none'
    // })
  }