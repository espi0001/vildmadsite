const urlParams = new URLSearchParams(window.location.search)
const urlInfo = urlParams.get('Urlinfo')
console.log(urlInfo)

const url = `https://irsycvwaapqcapcnbgra.supabase.co/rest/v1/vildereMadCsv?productId=eq.${urlInfo}`

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
  console.log('Her kommer data: ', data)

  data.forEach(showProduct)
}

function showSingleProduct (singleProduct) {
  document.querySelector('h2').textContent = singleProduct.productTitle

  document.querySelector('######').src = product.productImg
}
