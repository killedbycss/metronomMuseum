quiz()

function quiz () {
    var qs1 = document.getElementById('qs1')
    var qs2 = document.getElementById('qs2')
    var qs3 = document.getElementById('qs3')
    var qs4 = document.getElementById('qs4')
    var qs5 = document.getElementById('qs5')
    var qs6 = document.getElementById('qs6')

    var q11 = document.getElementById('q11')
    var q12 = document.getElementById('q12')
    var q13 = document.getElementById('q13')
    var q14 = document.getElementById('q14')

    var q21 = document.getElementById('q21')
    var q22 = document.getElementById('q22')
    var q23 = document.getElementById('q23')
    var q24 = document.getElementById('q24')

    var q31 = document.getElementById('q31')
    var q32 = document.getElementById('q32')
    var q33 = document.getElementById('q33')
    var q34 = document.getElementById('q34')

    var q41 = document.getElementById('q41')
    var q42 = document.getElementById('q42')
    var q43 = document.getElementById('q43')
    var q44 = document.getElementById('q44')

    var q51 = document.getElementById('q51')
    var q52 = document.getElementById('q52')
    var q53 = document.getElementById('q53')
    var q54 = document.getElementById('q54')

    var q61 = document.getElementById('q61')
    var q62 = document.getElementById('q62')

    var coins = 0
    var infoBlock = document.querySelector('#qs6 h2')

    function finishQuiz() {
        qs5.style.display = 'none'
        qs6.style.display = 'flex'
        if (infoBlock) {
            infoBlock.innerText = `Вы прошли тест на ${coins} валюту из пяти`
        }
        localStorage.setItem('coins', coins)
    }

    q11.addEventListener('click', () => { qs1.style.display = 'none'; qs2.style.display = 'flex'; })
    q12.addEventListener('click', () => { coins += 1; qs1.style.display = 'none'; qs2.style.display = 'flex'; })
    q13.addEventListener('click', () => { qs1.style.display = 'none'; qs2.style.display = 'flex'; })
    q14.addEventListener('click', () => { qs1.style.display = 'none'; qs2.style.display = 'flex'; })

    q21.addEventListener('click', () => { coins += 1; qs2.style.display = 'none'; qs3.style.display = 'flex'; })
    q22.addEventListener('click', () => { qs2.style.display = 'none'; qs3.style.display = 'flex'; })
    q23.addEventListener('click', () => { qs2.style.display = 'none'; qs3.style.display = 'flex'; })
    q24.addEventListener('click', () => { qs2.style.display = 'none'; qs3.style.display = 'flex'; })

    q31.addEventListener('click', () => { qs3.style.display = 'none'; qs4.style.display = 'flex'; })
    q32.addEventListener('click', () => { coins += 1; qs3.style.display = 'none'; qs4.style.display = 'flex'; })
    q33.addEventListener('click', () => { qs3.style.display = 'none'; qs4.style.display = 'flex'; })
    q34.addEventListener('click', () => { qs3.style.display = 'none'; qs4.style.display = 'flex'; })

    q41.addEventListener('click', () => { qs4.style.display = 'none'; qs5.style.display = 'flex'; })
    q42.addEventListener('click', () => { qs4.style.display = 'none'; qs5.style.display = 'flex'; })
    q43.addEventListener('click', () => { qs4.style.display = 'none'; qs5.style.display = 'flex'; })
    q44.addEventListener('click', () => { coins += 1; qs4.style.display = 'none'; qs5.style.display = 'flex'; })

    q51.addEventListener('click', () => { finishQuiz(); })
    q52.addEventListener('click', () => { finishQuiz(); })
    q53.addEventListener('click', () => { coins += 1; finishQuiz(); })
    q54.addEventListener('click', () => { finishQuiz(); })

    q61.addEventListener('click', () => { window.location.href = 'quiz.html'; })
    q62.addEventListener('click', () => { window.location.href = 'store.html'; })
}
