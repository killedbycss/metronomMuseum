buy()

function buy() {
 var coin = localStorage.getItem('coins')
 var button = document.querySelector('.bigButton')

 button.addEventListener('click', () => {
    if (coin == 5) {
        alert('Покупка прошла успешно!')
    }
    if (coin < 5) {
        alert('Не хватает средств(')
    }
 })
}