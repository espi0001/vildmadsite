function highlightCurrentPage () {
  var breadcrumbItems = document.querySelectorAll('.breadcrumb')

  breadcrumbItems.forEach(function (item) {
    // Check if the href attribute matches the current page URL
    if (item.getAttribute('href') === window.location.pathname) {
      item.classList.add('.active')
    } else {
      item.classList.remove('.active')
    }
  })
}

// Initial highlighting check in case the page is loaded with a specific URL
highlightCurrentPage()

const goTop = document.querySelector('#goTop')

goTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
})
