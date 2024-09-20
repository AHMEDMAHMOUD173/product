// document.addEventListener("DOMContentLoaded", function() {
//     const apiURL = 'https://dummyjson.com/products';

    
//     fetch(https://dummyjson.com/products)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             displayData(data);
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//             document.getElementById('data').innerText = 'Failed to load data';
//         });

// });





async function fetchData() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    //   console.log(data.data[0].attributes.title);
    showData(data.product);
  }
  fetchData();
  