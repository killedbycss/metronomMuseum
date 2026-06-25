about()

function about() {
    var ab1 = document.getElementById('abt1')
    var ab2 = document.getElementById('abt2')
    var ab3 = document.getElementById('abt3')
    var ab4 = document.getElementById('abt4')
    var ab5 = document.getElementById('abt5')

    ab1.addEventListener('click', () => {
        window.location.href = 'https://killedbycss.github.io/portfolio'
    })

    ab2.addEventListener('click', () => {
        window.location.href = 'https://hsedesign.ru/account/9f56f07410aa448eb91e3331cb05e146'
    })

    ab3.addEventListener('click', () => {
        window.location.href = 'https://hsedesign.ru/account/12792'
    })

    ab4.addEventListener('click', () => {
        window.location.href = 'https://metrostat.ru/ru/moscow/2023-1'
    })

    ab5.addEventListener('click', () => {
        window.location.href = 'https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B5%D0%BD'
    })
}