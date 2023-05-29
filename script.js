
let title = document.getElementById('title')
let inp = document.getElementById('inp')
let clear = document.getElementById('clr')
let back_sp = document.getElementById('bs')
clear.addEventListener('click', () => { inp.value = ""; })
back_sp.addEventListener('click', () => {
    let inp = document.getElementById('inp')
    inp.value = inp.value.slice(0, -1)
})
let btn = document.getElementsByClassName('btn')
// click animation for btns
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', (e) => {
        btn[i].classList.toggle('dark')
        setTimeout(() => btn[i].classList.remove('dark'), 120)
    })
}




let calc = () => {
    try {
        inp.value = eval(inp.value);
    }
    catch (err) {
        inp.value = 'Syntax Error!'

    }
}