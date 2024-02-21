// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Select elements with the classes '.grid_child' and '.elements_names_link'
  const gridChildren = document.querySelectorAll('.grid_child')
  const elementsNamesLinks = document.querySelectorAll('.elements_names_link')

  // Add a click event listener to each '.grid_child' element
  gridChildren.forEach(function (child, index) {
    child.addEventListener('click', function () {
      handleElementClick(index)
    })
  })

  // Add a click event listener to each '.elements_names_link' element
  elementsNamesLinks.forEach(function (link, index) {
    link.addEventListener('click', function () {
      handleElementClick(index)
    })
  })

  // Function to handle the click event for both types of elements
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

// function elementHover () {

//   document.querySelectorAll('.grid_child').forEach.

// }
