const burger = document.querySelector('.burger')
const nav = document.querySelector('nav')
const menu = document.querySelector('.menu')
const links = document.querySelectorAll('.menu li a')
const logo = document.getElementById('logo_svg')
const header = document.querySelector('header')
const figurElements = document.querySelectorAll(
  '._figur, ._2figur, ._3figur, ._4figur'
)

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  nav.classList.toggle('active')
})

links.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active')
    nav.classList.remove('active')
  })
})

function updateFigurVisibility () {
  if (window.innerWidth >= 800) {
    figurElements.forEach(figur => {
      logo.addEventListener('mouseenter', () => {
        figur.style.display = 'block'
      })

      logo.addEventListener('mouseleave', () => {
        figur.style.display = 'none'
      })
    })
  } else {
    logo.addEventListener('mouseenter', () => {
      figurElements.forEach(figur => {
        figur.style.display = 'none'
      })
    })
  }
}

updateFigurVisibility()

window.addEventListener('resize', updateFigurVisibility)
