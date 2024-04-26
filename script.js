function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active-button", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active-button";
}
// Open the default tab on page load
document.getElementById("tab1");
document.getElementsByClassName("tab-button")[0];

// *******************************************ITEMS****************************************
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".men-button").addEventListener("click", function () {
    fetchData("Men", "item-details-men");
  });

  document
    .querySelector(".women-button")
    .addEventListener("click", function () {
      fetchData("Women", "item-details-women");
    });

  document.querySelector(".kids-button").addEventListener("click", function () {
    fetchData("Kids", "item-details-kids");
  });
});

function fetchData(category, targetId) {
  fetch(
    "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const categories = data.categories;
      const categoryData = categories.find(
        (cat) => cat.category_name === category
      );
      const products = categoryData.category_products;
      displayProducts(products, targetId);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

function displayProducts(products, targetId) {
  const productListDiv = document.getElementById(targetId);
  productListDiv.innerHTML = "";

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
            <div class="product">
                <img src="${product.image}" alt="${product.title}">

                <div class="pop-up"> 
                  <div class="product-details">
                    <h4 class="product-title">${product.title}</h4>
                    <p class="vendor">${product.vendor}</p>
                  </div>
          
              

                  <div class="prices"> 
                    <p class="price">$${product.price}</p>
                    <p class="compare-at-price">$${product.compare_at_price}</p>
                    <p class="discount">50% Off</p>
                  </div>
              
                  <p class="badge-text">${product.badge_text}</p>
                  <button class="add-to-cart"> Add to Cart </button>
                </div>
            </div>
        `;
    productListDiv.appendChild(productDiv);
  });
}

//POP UP ************************************************************************************

document.querySelectorAll('.product').forEach(function(product) {
  product.addEventListener('click', function() {
      var popUp = this.querySelector('.pop-up');
      popUp.style.display = (popUp.style.display === 'block') ? 'none' : 'block';
  });
});


// dsjkfvlajkfhlaewjfhewalihf
document.addEventListener("DOMContentLoaded", function() {
  var popUps = document.querySelectorAll('.pop-up');
  
  popUps.forEach(function(popUp) {
      popUp.classList.add('visible');
  });
});


