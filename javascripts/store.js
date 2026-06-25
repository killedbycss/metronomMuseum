store()

function store() {
    var coin = localStorage.getItem('coins')
    var balance = document.querySelector('#str2 h3')
    var str1 = document.getElementById('str1')
     var str3 = document.getElementById('str3')

    balance.innerText = `Ваш баланс: ${coin}.
    
    Участвуйте в квизах, чтобы увеличить количество валюты`

    str1.addEventListener('click', () => {
        window.location.href = 's1.html'
    })

    str3.addEventListener('click', () => {
        window.location.href = 's3.html'
    })
}