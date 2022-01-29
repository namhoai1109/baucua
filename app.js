const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const btn = $('.btn')
const img_cont = $('.img_cont')
const items = $$('.item')

btn.onmousedown = function(e) {
    e.target.classList.add('clicked')
}
btn.onmouseup = function(e) {
    e.target.classList.remove('clicked')
}

btn.onclick = function() {
    img_cont.classList.add('rotate')
    setTimeout(() => {
        items.forEach(item => {
            randIndex = Math.ceil(Math.random() * 6)
            item.src = `./img/img${randIndex}.png`
        })
        img_cont.classList.remove('rotate')
    }, 1000)
}
