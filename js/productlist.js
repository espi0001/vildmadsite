// https://irsycvwaapqcapcnbgra.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlyc3ljdndhYXBxY2FwY25iZ3JhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0NzU5NjQsImV4cCI6MjAyMzA1MTk2NH0.rP1hLkHs5DYGMkNsIqcf_M5SjqcFRPjl45dEWrO6pW4

// const urlParams = new URLSearchParams(window.location.search)
// const urlInfo = urlParams.get('Urlinfo')
// console.log(urlInfo)

const url = `https://irsycvwaapqcapcnbgra.supabase.co/rest/v1/vildereMadCsv`

// ?categories=${urlInfo}

fetch(url, {
  method: 'GET',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlyc3ljdndhYXBxY2FwY25iZ3JhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0NzU5NjQsImV4cCI6MjAyMzA1MTk2NH0.rP1hLkHs5DYGMkNsIqcf_M5SjqcFRPjl45dEWrO6pW4'
  }
})
  .then(response => response.json())
  .then(dataReceived)

function dataReceived (data) {
  data.forEach(showProductList)
}

function showProductList (showProduct) {
  const products = document.querySelector('.jsList').content
  const myClone = products.cloneNode(true)

  myClone.querySelector('.biotype h1').textContent = showProduct.biotype

  myClone
    .querySelector('.productTitle')
    .setAttribute('href', `product.html?id=${showProduct.productId}`)
  myClone.querySelector(
    'img'
  ).src = `https://irsycvwaapqcapcnbgra.supabase.co/${showProduct.productId}.webp`

  const parentElement = document.querySelector('main')
  parentElement.appendChild(myClone)
}
