document.addEventListener('DOMContentLoaded', function () {
  const gridChildren = document.querySelectorAll('.grid_child')

  gridChildren.forEach(function (child, index) {
    child.addEventListener('click', function () {
      const categories = [
        'Herbs and smaller plants',
        'Shrubs and trees',
        'Shrubs and trees',
        'Mushrooms'
      ]
      const category = categories[index]
      window.location.href = `produktliste.html?Urlinfo=${category}`
    })
  })
})
