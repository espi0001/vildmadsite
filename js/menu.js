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

figurElements.forEach(figur => {
  logo.addEventListener('mouseenter', () => {
    figur.style.display = 'block' // Change display to block on hover
  })

  logo.addEventListener('mouseleave', () => {
    figur.style.display = 'none' // Change display back to none on mouse leave
  })
})
