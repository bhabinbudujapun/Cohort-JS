let cart = [];

function updateCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalContainer = document.getElementById("cart-total");

  if (cart.length === 0) {
    cartItemsContainer.innerHTML =
      '<div class="empty-cart">Cart is empty</div>';
    cartTotalContainer.innerHTML = "<h3>Total: $0.00</h3>";
    return; // Exit early if the cart is empty
  }

  let total = 0;
  let cartContent = "";
  cart.forEach((item, index) => {
    total += item.productPrice * item.productQuantity;
    cartContent += `
      <div class="cart-item">
        <span>${item.productName}</span>
        <span>${item.productPrice.toFixed(2)} x ${item.productQuantity}</span>
        <button onclick="subtractFromCart(${index})">-</button>
        <button onclick="addToCart('${item.productName}', ${
      item.productPrice
    })">+</button>
      </div>
    `;
  });

  cartItemsContainer.innerHTML = cartContent;
  cartTotalContainer.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
}

// updateCart();

function addToCart(productName, productPrice) {
  const productExist = cart.find(
    (product) => product.productName === productName
  );

  if (productExist) {
    productExist.productQuantity++;
  } else {
    cart.push({ productName, productPrice, productQuantity: 1 });
  }
  updateCart();
}
function subtractToCart(productIndex) {}
