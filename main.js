import "./style.css";

window.addEventListener("load", showProducts);

async function showProducts() {
  console.log("page fully loaded");
  var response = await fetch(
    "https://652bdb79d0d1df5273eeced1.mockapi.io/products"
  );
  var products = await response.json();

  var productsDiv = document.getElementById("products");
  var productsHTML = "";

  for (var i = 0; i <= products.length - 1; i++) {
    productsHTML += `<div class = "card">
    <img src=${products[i].imageURL} />
    </div>`;
  }
  productsDiv.innerHTML = productsHTML;
}
