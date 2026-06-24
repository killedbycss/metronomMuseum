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
    var pt6 = document.getElementById('n6')
    var pt7 = document.getElementById('n7')
    var pt8 = document.getElementById('n8')
    var pt9 = document.getElementById('n9')
    var pt10 = document.getElementById('n10')
    var pt11 = document.getElementById('n11')
    var pt12 = document.getElementById('n12')
    var pt13 = document.getElementById('n13')
    var pt14 = document.getElementById('n14')

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

    var st200 = document.getElementById('st200')
    var st69 = document.getElementById('st069')
    var st70 = document.getElementById('st070')
var st60 = document.getElementById('st060')
var st59 = document.getElementById('st059')
var st58 = document.getElementById('st058')
var st57 = document.getElementById('st057')
var st56 = document.getElementById('st056')
var st55 = document.getElementById('st055')
var st54 = document.getElementById('st054')
var st53 = document.getElementById('st053')
var st52 = document.getElementById('st052')
var st51 = document.getElementById('st051')
var st50 = document.getElementById('st050')
var st49 = document.getElementById('st049')
var st48 = document.getElementById('st048')
var st47 = document.getElementById('st047')
var st46 = document.getElementById('st046')
var st45 = document.getElementById('st045')
var st44 = document.getElementById('st044')
var st43 = document.getElementById('st043')
var st42 = document.getElementById('st042')
var st41 = document.getElementById('st041')
var st40 = document.getElementById('st040')

var a200 = document.getElementById('a200')
var a69 = document.getElementById('a069')
var a70 = document.getElementById('a070')
var a60 = document.getElementById('a060')
var a59 = document.getElementById('a059')
var a58 = document.getElementById('a058')
var a57 = document.getElementById('a057')
var a56 = document.getElementById('a056')
var a55 = document.getElementById('a055')
var a54 = document.getElementById('a054')
var a53 = document.getElementById('a053')
var a52 = document.getElementById('a052')
var a51 = document.getElementById('a051')
var a50 = document.getElementById('a050')
var a49 = document.getElementById('a049')
var a48 = document.getElementById('a048')
var a47 = document.getElementById('a047')
var a46 = document.getElementById('a046')
var a45 = document.getElementById('a045')
var a44 = document.getElementById('a044')
var a43 = document.getElementById('a043')
var a42 = document.getElementById('a042')
var a41 = document.getElementById('a041')
var a40 = document.getElementById('a040')

if(a200 && st200) a200.addEventListener('click', () => { st200.style.display = 'flex' })
if(a69 && st69) a69.addEventListener('click', () => { st69.style.display = 'flex' })
if(a70 && st70) a70.addEventListener('click', () => { st70.style.display = 'flex' })
if(a60 && st60) a60.addEventListener('click', () => { st60.style.display = 'flex' })
if(a59 && st59) a59.addEventListener('click', () => { st59.style.display = 'flex' })
if(a58 && st58) a58.addEventListener('click', () => { st58.style.display = 'flex' })
if(a57 && st57) a57.addEventListener('click', () => { st57.style.display = 'flex' })
if(a56 && st56) a56.addEventListener('click', () => { st56.style.display = 'flex' })
if(a55 && st55) a55.addEventListener('click', () => { st55.style.display = 'flex' })
if(a54 && st54) a54.addEventListener('click', () => { st54.style.display = 'flex' })
if(a53 && st53) a53.addEventListener('click', () => { st53.style.display = 'flex' })
if(a52 && st52) a52.addEventListener('click', () => { st52.style.display = 'flex' })
if(a51 && st51) a51.addEventListener('click', () => { st51.style.display = 'flex' })
if(a50 && st50) a50.addEventListener('click', () => { st50.style.display = 'flex' })
if(a49 && st49) a49.addEventListener('click', () => { st49.style.display = 'flex' })
if(a48 && st48) a48.addEventListener('click', () => { st48.style.display = 'flex' })
if(a47 && st47) a47.addEventListener('click', () => { st47.style.display = 'flex' })
if(a46 && st46) a46.addEventListener('click', () => { st46.style.display = 'flex' })
if(a45 && st45) a45.addEventListener('click', () => { st45.style.display = 'flex' })
if(a44 && st44) a44.addEventListener('click', () => { st44.style.display = 'flex' })
if(a43 && st43) a43.addEventListener('click', () => { st43.style.display = 'flex' })
if(a42 && st42) a42.addEventListener('click', () => { st42.style.display = 'flex' })
if(a41 && st41) a41.addEventListener('click', () => { st41.style.display = 'flex' })
if(a40 && st40) a40.addEventListener('click', () => { st40.style.display = 'flex' })


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

    // Слайдеры 2-14
    var allSliderImg1 = document.querySelectorAll('.sliderImg1')
    var allSliderImg2 = document.querySelectorAll('.sliderImg2')

    for (var i = 2; i <= 14; i++) {
        (function(sliderNum) {
            var leftArr = document.getElementById('leftArrow' + sliderNum)
            var rightArr = document.getElementById('rightArrow' + sliderNum)
            var td1Elem = document.getElementById('td1' + sliderNum)
            var td2Elem = document.getElementById('td2' + sliderNum)
            var img1 = allSliderImg1[sliderNum - 1]
            var img2 = allSliderImg2[sliderNum - 1]

            if (rightArr) {
                rightArr.addEventListener('click', () => {
                    if (leftArr) leftArr.style.opacity = '1'
                    if (img1) img1.style.marginLeft = '-40vw'
                    if (rightArr) rightArr.style.opacity = '0'
                    if (td1Elem) {
                        td1Elem.style.display = 'none'
                        td1Elem.style.opacity = '0'
                    }
                    if (td2Elem) {
                        td2Elem.style.display = 'flex'
                        td2Elem.style.opacity = '1'
                    }
                })
            }

            if (leftArr) {
                leftArr.addEventListener('click', () => {
                    if (leftArr) leftArr.style.opacity = '0'
                    if (img1) img1.style.marginLeft = '0'
                    if (rightArr) rightArr.style.opacity = '1'
                    if (td1Elem) {
                        td1Elem.style.display = 'flex'
                        td1Elem.style.opacity = '1'
                    }
                    if (td2Elem) {
                        td2Elem.style.display = 'none'
                        td2Elem.style.opacity = '0'
                    }
                })
            }
        })(i)
    }

    next.addEventListener('click', () => {
      if (part == 0) {
        pt1.style.display = 'none'
        pt2.style.display = 'flex'
        timeline.style.marginLeft = '-23vw'
        part = 1
        year.innerText = '1938'
        past.style = 'background-color: var(--text)'
        past.innerText = '<'
        td1.style.display = 'none'
      } else if (part == 1) {
        pt2.style.display = 'none'
        pt3.style.display = 'flex'
        timeline.style.marginLeft = '-159vw'
        part = 2
        year.innerText = '1944'
      } else if (part == 2) {
        pt3.style.display = 'none'
        pt4.style.display = 'flex'
        timeline.style.marginLeft = '-361vw'
        part = 3
        year.innerText = '1953'
      } else if (part == 3) {
        pt4.style.display = 'none'
        pt5.style.display = 'flex'
        timeline.style.marginLeft = '-496vw'
        part = 4
        year.innerText = '1959'
      } else if (part == 4) {
        pt5.style.display = 'none'
        pt6.style.display = 'flex'
        timeline.style.marginLeft = '-541vw'
        part = 5
        year.innerText = '1961'
      } else if (part == 5) {
        pt6.style.display = 'none'
        pt7.style.display = 'flex'
        timeline.style.marginLeft = '-586vw'
        part = 6
        year.innerText = '1963'
      } else if (part == 6) {
        pt7.style.display = 'none'
        pt8.style.display = 'flex'
        timeline.style.marginLeft = '-631vw'
        part = 7
        year.innerText = '1965'
      } else if (part == 7) {
        pt8.style.display = 'none'
        pt9.style.display = 'flex'
        timeline.style.marginLeft = '-1170vw'
        part = 8
        year.innerText = '1989'
      } else if (part == 8) {
        pt9.style.display = 'none'
        pt10.style.display = 'flex'
        timeline.style.marginLeft = '-1486vw'
        part = 9
        year.innerText = '2003'
      } else if (part == 9) {
        pt10.style.display = 'none'
        pt11.style.display = 'flex'
        timeline.style.marginLeft = '-1597vw'
        part = 10
        year.innerText = '2008'
      } else if (part == 10) {
        pt11.style.display = 'none'
        pt12.style.display = 'flex'
        timeline.style.marginLeft = '-1621vw'
        part = 11
        year.innerText = '2009'
      } else if (part == 11) {
        pt12.style.display = 'none'
        pt13.style.display = 'flex'
        timeline.style.marginLeft = '-1688vw'
        part = 12
        year.innerText = '2012'
      } else if (part == 12) {
        pt13.style.display = 'none'
        pt14.style.display = 'flex'
        timeline.style.marginLeft = '-2071vw'
        part = 13
        year.innerText = '2028'
        next.innerText = '4 >'
        next.style.backgroundColor = 'var(--4)'
      } else if (part == 13) {
        window.location.href = '4.html'
      }
    })

    past.addEventListener('click', () => {
      if (part == 0) {
         window.location.href = '2.html'
      } else if (part == 1) {
        pt1.style.display = 'flex'
        pt2.style.display = 'none'
        timeline.style.marginLeft = '0vw'
        part = 0
        year.innerText = '1937'
        past.style = 'background-color: var(--2)'
        past.innerText = '< 2'
      } else if (part == 2) {
        pt2.style.display = 'flex'
        pt3.style.display = 'none'
        timeline.style.marginLeft = '-23vw'
        part = 1
        year.innerText = '1938'
      } else if (part == 3) {
        pt3.style.display = 'flex'
        pt4.style.display = 'none'
        timeline.style.marginLeft = '-159vw'
        part = 2
        year.innerText = '1944'
      } else if (part == 4) {
        pt4.style.display = 'flex'
        pt5.style.display = 'none'
        timeline.style.marginLeft = '-361vw'
        part = 3
        year.innerText = '1953'
      } else if (part == 5) {
        pt5.style.display = 'flex'
        pt6.style.display = 'none'
        timeline.style.marginLeft = '-496vw'
        part = 4
        year.innerText = '1959'
      } else if (part == 6) {
        pt6.style.display = 'flex'
        pt7.style.display = 'none'
        timeline.style.marginLeft = '-541vw'
        part = 5
        year.innerText = '1961'
      } else if (part == 7) {
        pt7.style.display = 'flex'
        pt8.style.display = 'none'
        timeline.style.marginLeft = '-586vw'
        part = 6
        year.innerText = '1963'
      } else if (part == 8) {
        pt8.style.display = 'flex'
        pt9.style.display = 'none'
        timeline.style.marginLeft = '-631vw'
        part = 7
        year.innerText = '1965'
      } else if (part == 9) {
        pt9.style.display = 'flex'
        pt10.style.display = 'none'
        timeline.style.marginLeft = '-1170vw'
        part = 8
        year.innerText = '1989'
      } else if (part == 10) {
        pt10.style.display = 'flex'
        pt11.style.display = 'none'
        timeline.style.marginLeft = '-1486vw'
        part = 9
        year.innerText = '2003'
      } else if (part == 11) {
        pt11.style.display = 'flex'
        pt12.style.display = 'none'
        timeline.style.marginLeft = '-1597vw'
        part = 10
        year.innerText = '2008'
      } else if (part == 12) {
        pt12.style.display = 'flex'
        pt13.style.display = 'none'
        timeline.style.marginLeft = '-1621vw'
        part = 11
        year.innerText = '2009'
      } else if (part == 13) {
        pt13.style.display = 'flex'
        pt14.style.display = 'none'
        timeline.style.marginLeft = '-1688vw'
        part = 12
        year.innerText = '2012'
        next.innerText = '>'
        next.style.backgroundColor = 'var(--text)'
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