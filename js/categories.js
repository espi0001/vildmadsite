document.addEventListener('DOMContentLoaded', function () {
  // Select elements with the classes '.grid_child' and '.elements_names a'
  const gridChildren = document.querySelectorAll('.grid_child')
  const elementsNamesLinks = document.querySelectorAll('.elements_names a')

  // Add a click event listener to each '.grid_child' element
  gridChildren.forEach(function (child, index) {
    child.addEventListener('click', function () {
      handleElementClick(index)
    })
  })

  // Add a click event listener to each '.elements_names a' element
  elementsNamesLinks.forEach(function (link, index) {
    link.addEventListener('click', function () {
      handleLinkClick(link)
    })
  })

  // Function to handle the click event for '.elements_names a' elements
  function handleLinkClick (link) {
    const category = link.getAttribute('data-category')
    window.location.href = `produktliste.html?Urlinfo=${category}`
  }

  // Function to handle the click event for '.grid_child' elements
  function handleElementClick (index) {
    const categories = [
      'Herbs and smaller plants',
      'Shrubs and trees',
      'Shrubs and trees',
      'Mushrooms'
    ]

    const category = categories[index]
    window.location.href = `produktliste.html?Urlinfo=${category}`
  }
})

document.addEventListener('DOMContentLoaded', function () {
  const gridChildren = document.querySelectorAll('.grid_child')

  gridChildren.forEach(function (child) {
    child.addEventListener('mouseenter', function () {
      toggleBiotypesVisibility(child, true)
    })

    child.addEventListener('mouseleave', function () {
      toggleBiotypesVisibility(child, false)
    })
  })

  function toggleBiotypesVisibility (element, isHovered) {
    const biotypesElement = element.querySelector('.biotypes_svg')

    if (isHovered) {
      biotypesElement.style.display = 'block'
    } else {
      biotypesElement.style.display = 'none'
    }
  }
})
