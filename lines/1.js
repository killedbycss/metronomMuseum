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

    var allSliders = document.querySelectorAll('.sliderImg1')
    var allSliders2 = document.querySelectorAll('.sliderImg2')
    var fr1 = allSliders[0]
    var fr2 = allSliders2[0]
    var fr1b = allSliders[1]
    var fr2b = allSliders2[1]

    var td1 = document.getElementById('td1')
    var td2 = document.getElementById('td2')

    var st13 = document.getElementById('st013')
    var st12 = document.getElementById('st012')
    var st11 = document.getElementById('st011')
    var st10 = document.getElementById('st010')
    var st9 = document.getElementById('st009')
    var st8 = document.getElementById('st008')
    var st7 = document.getElementById('st007')
    var st6 = document.getElementById('st006')
    var st5 = document.getElementById('st005')
    var st4 = document.getElementById('st004')
    var st71 = document.getElementById('st071')
    var st70 = document.getElementById('st070')
    var st69 = document.getElementById('st069')
    var st68 = document.getElementById('st068')
    var st14 = document.getElementById('st014')
    var st15 = document.getElementById('st015')
    var st16 = document.getElementById('st016')
    var st17 = document.getElementById('st017')
    var st193 = document.getElementById('st193')
    var st194 = document.getElementById('st194')
    var st195 = document.getElementById('st195')
    var st308 = document.getElementById('st308')
    var st309 = document.getElementById('st309')
    var st310 = document.getElementById('st310')
    var st311 = document.getElementById('st311')
    var st329 = document.getElementById('st329')
    var st1 = document.getElementById('st001')
    var st2 = document.getElementById('st002')
    var st3 = document.getElementById('st003')


    var a13 = document.getElementById('a013')
    var a12 = document.getElementById('a012')
    var a11 = document.getElementById('a011')
    var a10 = document.getElementById('a010')
    var a9 = document.getElementById('a009')
    var a8 = document.getElementById('a008')
    var a7 = document.getElementById('a007')
    var a6 = document.getElementById('a006')
    var a5 = document.getElementById('a005')
    var a4 = document.getElementById('a004')
    var a13 = document.getElementById('a013')
    var a12 = document.getElementById('a012')
    var a11 = document.getElementById('a011')
    var a10 = document.getElementById('a010')
    var a9 = document.getElementById('a009')
    var a8 = document.getElementById('a008')
    var a7 = document.getElementById('a007')
    var a6 = document.getElementById('a006')
    var a5 = document.getElementById('a005')
    var a4 = document.getElementById('a004')
    var a71 = document.getElementById('a071')
    var a70 = document.getElementById('a070')
    var a69 = document.getElementById('a069')
    var a68 = document.getElementById('a068')
    var a14 = document.getElementById('a014')
    var a15 = document.getElementById('a015')
    var a16 = document.getElementById('a016')
    var a17 = document.getElementById('a017')
    var a193 = document.getElementById('a193')
    var a194 = document.getElementById('a194')
    var a195 = document.getElementById('a195')
    var a308 = document.getElementById('a308')
    var a309 = document.getElementById('a309')
    var a310 = document.getElementById('a310')
    var a311 = document.getElementById('a311')
    var a329 = document.getElementById('a329')
    var a1 = document.getElementById('a001')
    var a2 = document.getElementById('a002')
    var a3 = document.getElementById('a003')

    if(a13 && st13) a13.addEventListener('click', () => { st13.style.display = 'flex' })
    if(a12 && st12) a12.addEventListener('click', () => { st12.style.display = 'flex' })
    if(a11 && st11) a11.addEventListener('click', () => { st11.style.display = 'flex' })
    if(a10 && st10) a10.addEventListener('click', () => { st10.style.display = 'flex' })
    if(a9 && st9)   a9.addEventListener('click', () => { st9.style.display = 'flex' })
    if(a8 && st8)   a8.addEventListener('click', () => { st8.style.display = 'flex' })
    if(a7 && st7)   a7.addEventListener('click', () => { st7.style.display = 'flex' })
    if(a6 && st6)   a6.addEventListener('click', () => { st6.style.display = 'flex' })
    if(a5 && st5)   a5.addEventListener('click', () => { st5.style.display = 'flex' })
    if(a4 && st4)   a4.addEventListener('click', () => { st4.style.display = 'flex' })
    if(a71 && st71) a71.addEventListener('click', () => { st71.style.display = 'flex' })
    if(a70 && st70) a70.addEventListener('click', () => { st70.style.display = 'flex' })
    if(a69 && st69) a69.addEventListener('click', () => { st69.style.display = 'flex' })
    if(a68 && st68) a68.addEventListener('click', () => { st68.style.display = 'flex' })
    if(a14 && st14) a14.addEventListener('click', () => { st14.style.display = 'flex' })
    if(a15 && st15) a15.addEventListener('click', () => { st15.style.display = 'flex' })
    if(a16 && st16) a16.addEventListener('click', () => { st16.style.display = 'flex' })
    if(a17 && st17) a17.addEventListener('click', () => { st17.style.display = 'flex' })
    if(a193 && st193) a193.addEventListener('click', () => { st193.style.display = 'flex' })
    if(a194 && st194) a194.addEventListener('click', () => { st194.style.display = 'flex' })
    if(a195 && st195) a195.addEventListener('click', () => { st195.style.display = 'flex' })
    if(a308 && st308) a308.addEventListener('click', () => { st308.style.display = 'flex' })
    if(a309 && st309) a309.addEventListener('click', () => { st309.style.display = 'flex' })
    if(a310 && st310) a310.addEventListener('click', () => { st310.style.display = 'flex' })
    if(a311 && st311) a311.addEventListener('click', () => { st311.style.display = 'flex' })
    if(a329 && st329) a329.addEventListener('click', () => { st329.style.display = 'flex' })  
    if(a1 && st1) a1.addEventListener('click', () => { st1.style.display = 'flex' })
    if(a2 && st2) a2.addEventListener('click', () => { st2.style.display = 'flex' })
    if(a3 && st3) a3.addEventListener('click', () => { st3.style.display = 'flex' })
  

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

    // Слайдеры 2-15
    var allSliderImg1 = document.querySelectorAll('.sliderImg1')
    var allSliderImg2 = document.querySelectorAll('.sliderImg2')

    for (var i = 2; i <= 15; i++) {
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
        timeline.style.marginLeft = '-46vw'
        part = 1
        year.innerText = '1937'
        past.style = 'opacity: 1'
        past.innerText = '<'
      } else if (part == 1) {
        pt2.style.display = 'none'
        pt3.style.display = 'flex'
        timeline.style.marginLeft = '-69vw'
        part = 2
        year.innerText = '1938'
      } else if (part == 2) {
        pt3.style.display = 'none'
        pt4.style.display = 'flex'
        timeline.style.marginLeft = '-496vw'
        part = 3
        year.innerText = '1957'
      } else if (part == 3) {
        pt4.style.display = 'none'
        pt5.style.display = 'flex'
        timeline.style.marginLeft = '-540vw'
        part = 4
        year.innerText = '1959'
      } else if (part == 4) {
        pt5.style.display = 'none'
        pt6.style.display = 'flex'
        timeline.style.marginLeft = '-630vw'
        part = 5
        year.innerText = '1963'
      } else if (part == 5) {
        pt6.style.display = 'none'
        pt7.style.display = 'flex'
        timeline.style.marginLeft = '-676vw'
        part = 6
        year.innerText = '1965'
      } else if (part == 6) {
        pt7.style.display = 'none'
        pt8.style.display = 'flex'
        timeline.style.marginLeft = '-1080vw'
        part = 7
        year.innerText = '1983'
      } else if (part == 7) {
        pt8.style.display = 'none'
        pt9.style.display = 'flex'
        timeline.style.marginLeft = '-1238vw'
        part = 8
        year.innerText = '1990'
      } else if (part == 8) {
        pt9.style.display = 'none'
        pt10.style.display = 'flex'
        timeline.style.marginLeft = '-1530vw'
        part = 9
        year.innerText = '2003'
      } else if (part == 9) {
        pt10.style.display = 'none'
        pt11.style.display = 'flex'
        timeline.style.marginLeft = '-1778vw'
        part = 10
        year.innerText = '2014'
      } else if (part == 10) {
        pt11.style.display = 'none'
        pt12.style.display = 'flex'
        timeline.style.marginLeft = '-1823vw'
        part = 11
        year.innerText = '2016'
      } else if (part == 11) {
        pt12.style.display = 'none'
        pt13.style.display = 'flex'
        timeline.style.marginLeft = '-1890vw'
        part = 12
        year.innerText = '2019'
      } else if (part == 12) {
        pt13.style.display = 'none'
        pt14.style.display = 'flex'
        timeline.style.marginLeft = '-2003vw'
        part = 13
        year.innerText = '2024'
        next.innerText = '2 >'
        next.style.backgroundColor = 'var(--2)'
      } else if (part == 13) {
        window.location.href = '2.html'
      }
    })

    past.addEventListener('click', () => {
      if (part == 1) {
        pt1.style.display = 'flex'
        pt2.style.display = 'none'
        timeline.style.marginLeft = '0'
        part = 0
        year.innerText = '1935'
        past.style = 'opacity: 0.5'
      } else if (part == 2) {
        pt2.style.display = 'flex'
        pt3.style.display = 'none'
        timeline.style.marginLeft = '-46vw'
        part = 1
        year.innerText = '1937'
      } else if (part == 3) {
        pt3.style.display = 'flex'
        pt4.style.display = 'none'
        timeline.style.marginLeft = '-69vw'
        part = 2
        year.innerText = '1938'
      } else if (part == 4) {
        pt4.style.display = 'flex'
        pt5.style.display = 'none'
        timeline.style.marginLeft = '-496vw'
        part = 3
        year.innerText = '1957'
      } else if (part == 5) {
        pt5.style.display = 'flex'
        pt6.style.display = 'none'
        timeline.style.marginLeft = '-540vw'
        part = 4
        year.innerText = '1959'
      } else if (part == 6) {
        pt6.style.display = 'flex'
        pt7.style.display = 'none'
        timeline.style.marginLeft = '-630vw'
        part = 5
        year.innerText = '1963'
      } else if (part == 7) {
        pt7.style.display = 'flex'
        pt8.style.display = 'none'
        timeline.style.marginLeft = '-676vw'
        part = 6
        year.innerText = '1965'
      } else if (part == 8) {
        pt8.style.display = 'flex'
        pt9.style.display = 'none'
        timeline.style.marginLeft = '-1080vw'
        part = 7
        year.innerText = '1983'
      } else if (part == 9) {
        pt9.style.display = 'flex'
        pt10.style.display = 'none'
        timeline.style.marginLeft = '-1238vw'
        part = 8
        year.innerText = '1990'
      } else if (part == 10) {
        pt10.style.display = 'flex'
        pt11.style.display = 'none'
        timeline.style.marginLeft = '-1530vw'
        part = 9
        year.innerText = '2003'
      } else if (part == 11) {
        pt11.style.display = 'flex'
        pt12.style.display = 'none'
        timeline.style.marginLeft = '-1778vw'
        part = 10
        year.innerText = '2014'
      } else if (part == 12) {
        pt12.style.display = 'flex'
        pt13.style.display = 'none'
        timeline.style.marginLeft = '-1823vw'
        part = 11
        year.innerText = '2016'
      } else if (part == 13) {
        pt13.style.display = 'flex'
        pt14.style.display = 'none'
        timeline.style.marginLeft = '-1890vw'
        part = 12
        year.innerText = '2019'
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