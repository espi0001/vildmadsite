const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

const url = "https://irsycvwaapqcapcnbgra.supabase.co/rest/v1/vildereMadCsv";

fetch(url, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlyc3ljdndhYXBxY2FwY25iZ3JhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0NzU5NjQsImV4cCI6MjAyMzA1MTk2NH0.rP1hLkHs5DYGMkNsIqcf_M5SjqcFRPjl45dEWrO6pW4",
  },
})
  .then((res) => res.json())
  .then(dataReceived);

function dataReceived(data) {
  //We have the data
  console.log("Her kommer data: ", data);
  //ca her ku man indsætte for each
  //forEach
  //looper og kalder showProduct
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log("Her kommer hver række: ", product);
  //herinde cloner vi

  //fang template
  const template = document.querySelector("#productTemplate").content;

  //lav kopi
  const copy = template.cloneNode(true);

  //ændre indhold
  copy.querySelector(".biotype h1").textContent = product.biotype;

  copy.querySelector("productImg img").src = `https://vildmadv2.vps.webdock.io/application/files/7116/2029/3479/${product.id}.png`;

  copy.querySelector(".productTitle").setAttribute("href", `product.html?id=${product.id}`);

  //appende
  document.querySelector("main").appendChild(copy);
}
