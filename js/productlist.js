const urlParams = new URLSearchParams(window.location.search)
const urlInfo = urlParams.get('Urlinfo')
console.log(urlInfo)

const url = `https://irsycvwaapqcapcnbgra.supabase.co/rest/v1/vildereMadCsv?biotype=eq.${urlInfo}`

fetch(url, {
  method: 'GET',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlyc3ljdndhYXBxY2FwY25iZ3JhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0NzU5NjQsImV4cCI6MjAyMzA1MTk2NH0.rP1hLkHs5DYGMkNsIqcf_M5SjqcFRPjl45dEWrO6pW4'
  }
})
  .then(res => res.json())
  .then(dataReceived)

function dataReceived (data) {
  data.forEach(showProduct)
}

document.querySelector(
  '.breadcrumb_back'
).href = `produktliste.html?Urlinfo=${singleProduct.biotype}`

function showProduct (product) {
  const template = document.querySelector('template').content
  const copy = template.cloneNode(true)

  copy.querySelector('.productId').textContent = product.productId
  copy.querySelector('#productTitle').textContent = product.productTitle
  copy.querySelector('a').href = `produkt.html?Urlinfo=${product.productId}`

  copy.querySelector('.biotypeImg').src = product.productImg

  document.querySelector('.jsList').appendChild(copy)
}
