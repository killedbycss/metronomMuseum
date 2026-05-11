burgerMenu()
navigation()

function burgerMenu() {
  let logo = document.querySelector('.logo')
  let logoArrow = document.querySelector('#logoArrow')
  let arrow = document.querySelector('#logoArrow img')
  let nav = document.querySelector('nav')
  let underline = document.querySelectorAll('nav p')

  logo.addEventListener('mouseenter', () => {
    logo.classList.toggle('active')
    logoArrow.classList.toggle('active')
    arrow.classList.toggle('active')
  })

  logo.addEventListener('mouseleave', () => {
    logo.classList.toggle('active')
    logoArrow.classList.toggle('active')
    arrow.classList.toggle('active')
  })

  logo.addEventListener('click', () => {
    nav.classList.toggle('active')
  })

  underline.forEach((p) => {
    p.addEventListener('mouseenter', () => {
      p.classList.toggle('active')
    })
    p.addEventListener('mouseleave', () => {
      p.classList.toggle('active')
    })
  })
}

function navigation() {
  let collection = document.querySelector('#collection')
  let about = document.querySelector('#about')
  let store = document.querySelector('#store')
  let museum = document.querySelector('#museum')

  collection.addEventListener('click', () => {
    window.location.href = 'collection.html'
  })
  about.addEventListener('click', () => {
    window.location.href = 'about.html'
  })
  store.addEventListener('click', () => {
    window.location.href = 'store.html'
  })
  museum.addEventListener('click', () => {
    window.location.href = 'index.html'
  })
}
