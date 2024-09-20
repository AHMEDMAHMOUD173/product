// async function fetchProducts() {
//   const response = await fetch("https://dummyjson.com/products");
//   const products = await response.json();
//   showData(products.products);
// }

// fetchProducts();

// function showData(products) {
//   let x = ``;
//   for (let index = 0; index < products.length; index++) {
//       x += `
//           <h1>${products[index].title}</h1>
//           <p>Price: $${products[index].price}</p>
//           <p>${products[index].description}</p>
//           <img src="${products[index].thumbnail}" alt="${products[index].title}" width="100">
//           <hr>`;
//   }
//   document.getElementById("products").innerHTML = x;
// }

async function fetchProducts() {
  const response = await fetch("https://dummyjson.com/products");
  const products = await response.json();
  showData(products.products);
}

fetchProducts();

function showData(products) {
  let x = ``;
  for (let index = 0; index < products.length; index++) {
    x += `
      <div class="product">
        <h1>${products[index].title}</h1>
        <p>Price: $${products[index].price}</p>
        <p>${products[index].description}</p>
        <img src="${products[index].thumbnail}" alt="${products[index].title}">
        <a href='single.html?id=${products[index].id}'>more details</a>
      </div>`;
  }
  document.getElementById("products").innerHTML = x;
}
