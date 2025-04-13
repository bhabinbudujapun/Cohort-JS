let cart = [];

// update cart
function updateCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalContainer = document.getElementById("cart-total");

  if (cart.length === 0) {
    cartItemsContainer.innerHTML =
      '<div class="empty-cart">Cart is empty</div>';
    cartTotalContainer.innerHTML = "<h3>Total: $0.00</h3>";
    return; // Exit early if the cart is empty
  }

  // when cart has atleast one value
  let cartContent = "";
  let totalCost = 0;
  cart.forEach((product, index) => {
    let price = parseFloat(product.productPrice);
    let quantity = parseFloat(product.productQuantity);
    let cost = parseFloat(price * quantity);
    totalCost += cost;

    cartContent += `
    <div class="quantity-cart"> 
        <p>${product.productName}</p>
      <div>
        <button type="button" onClick="subtractItem(${index})"> - </button> <span> ${
      product.productQuantity
    } </span> <button type="button" onClick="addItem(${index})"> + </button> <span> ${cost.toFixed(
      2
    )} </span>
        <button type="button" onClick="removeItem(${index})"> Remove </button> 
      </div>
    </div>`;

    cartItemsContainer.innerHTML = cartContent;
    cartTotalContainer.innerHTML = `<h3>Total: ${totalCost.toFixed(2)}</h3>`;
  });
}

// increase product item of cart
function addItem(index) {
  cart[index].productQuantity++;
  updateCart();
}

// decrease product item of cart
function subtractItem(index) {
  if (cart[index].productQuantity === 1) {
    return removeItem(index);
  }
  cart[index].productQuantity--;
  updateCart();
}

// remove product item of cart
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// add product item in the cart
function addToCart(productName, productPrice) {
  //Check cart - returns product object if found, undefined otherwise
  const productExist = cart.find((item) => item.productName === productName);

  if (productExist) {
    productExist.productQuantity++; // Increase the product quantity
  } else {
    cart.push({ productName, productPrice, productQuantity: 1 }); // Add new product to cart with default quantity of product 1
  }
  updateCart();
}

updateCart();
