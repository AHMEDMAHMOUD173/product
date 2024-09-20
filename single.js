let productsHtml = document.querySelector("#products");
let url = new URL(window.location.href);
let productId = url.searchParams.get("id");

getSingleProduct = async (id) => {
  let data = await fetch(`https://dummyjson.com/products/${id}`);
  data = await data.json();
  console.log(data);
  productsHtml.innerHTML = `
  <img width='100' src='${data.images[0]}'/>
  <h1>${data.title}</h1>
  <p>${data.description}</p>
  `;
};

getSingleProduct(productId);
