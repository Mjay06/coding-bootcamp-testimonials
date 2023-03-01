const previous = document.querySelectorAll('button.prev')
const next = document.querySelectorAll('button.next')
const slideone = document.querySelector('div.card')
const slidetwo = document.querySelector('div.card.two')
const slidethree = document.querySelector('div.card.three')
let slides = [slideone, slidetwo, slidethree]
numeros = 0
next[numeros].addEventListener('click',()=>{ 
    numeros++
    console.log(numeros)
    slides.forEach((slide)=>{
        slide.style.display = 'none'
    })
    slides[numeros].style.display = 'flex'
})
next[numeros+1].addEventListener('click',()=>{ 
    numeros++
    console.log(numeros)
    slides.forEach((slide)=>{
        slide.style.display = 'none'
    })
    slides[numeros].style.display = 'flex'
})
previous[numeros + 2].addEventListener('click',()=>{ 
    numeros = numeros - 1
    console.log(numeros)
    slides.forEach((slide)=>{
        slide.style.display = 'none'
    })
    slides[numeros].style.display = 'flex'
})
previous[numeros + 1].addEventListener('click',()=>{ 
    numeros = numeros - 1
    console.log(numeros)
    slides.forEach((slide)=>{
        slide.style.display = 'none'
    })
    slides[numeros].style.display = 'flex'
})

