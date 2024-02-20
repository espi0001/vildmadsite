// https://irsycvwaapqcapcnbgra.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlyc3ljdndhYXBxY2FwY25iZ3JhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0NzU5NjQsImV4cCI6MjAyMzA1MTk2NH0.rP1hLkHs5DYGMkNsIqcf_M5SjqcFRPjl45dEWrO6pW4

const urlParams = new URLSearchParams(window.location.search)
const urlInfo = urlParams.get('Urlinfo')
console.log(urlInfo)

fetch(` https://irsycvwaapqcapcnbgra.supabase.co?categories=${urlInfo}`, {
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
  const products = document.querySelector('template').content
  const myClone = products.cloneNode(true)

  myClone.querySelector('h2').textContent = showProduct.productdisplayname
  myClone.querySelector('.productId').textContent = showProduct.id
  myClone.querySelector('.season').textContent = showProduct.season
  myClone.querySelector('a').href = `produkt.html?ProductId=${showProduct.id}`
  myClone.querySelector(
    'img'
  ).src = `https://irsycvwaapqcapcnbgra.supabase.co/images/${showProduct.id}.webp`

  const parentElement = document.querySelector('main')
  parentElement.appendChild(myClone)
}
