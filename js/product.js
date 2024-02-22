const urlParams = new URLSearchParams(window.location.search)
const urlInfo = urlParams.get('Urlinfo')

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
  data.forEach(showSingleProduct)
}

function showSingleProduct (singleProduct) {
  document.querySelector(
    '.breadcrumb_back'
  ).href = `produktliste.html?Urlinfo=${singleProduct.biotype}`

  document.querySelector('.overskift1').textContent = singleProduct.productTitle
  document.querySelector('.tekst1 span').textContent =
    singleProduct.productTitle

  document.querySelector('.overskift_produktkasse6').textContent =
    singleProduct.productTitle

  document.querySelector('p .tekst1 span').textContent =
    singleProduct.productTitle

  document.querySelector('.produkt_img1').src = singleProduct.productImg
}
