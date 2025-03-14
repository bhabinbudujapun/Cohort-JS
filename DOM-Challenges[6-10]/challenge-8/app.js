let cart = [];

function updateCart() {
  const cartItemsConatiner = document.getElementById("cart-items");
  const cartTotalContainer = document.getElementById("cart-total");

  if (cart.length == 0) {
    cartItemsConatiner.innerHTML =
      '<div class="empty-cart">Cart is empty</div>';
    cartTotalContainer.innerHTML = "<h3>Total: $0.00</h3>";
  }

  let total = 0;
  cart.forEach((item, index) => {
    total += item.productPrice * item.productQuantity;
    cartItemsConatiner.innerHTML = `
    <div id="cart-items">
    <span>${item.productName}</span>
    <span>${item.productPrice.toFixed(2)} * ${item.productQuantity} </span>
    <button onclick='subtractFromCart(${index})'>-</button>
    <button onclick='addToCart(${item.productName}, ${
      item.productPrice
    })'>+</button>
    </div>
    `;
  });

  cartTotalContainer.innerHTML = `<h3> Total: ${total.toFixed(2)}
  </h3>;
  `;
}

// updateCart();

function addToCart(productName, productPrice) {
  // Check existing product, One product at a time
  const productExist = cart.find(
    (product) => product.productName == productName
  );

  if (productExist) {
    productExist.productQuantity++;
  } else {
    cart.push({ productName, productPrice, productQuantity: 1 }); // initial product quantity: 1
  }
  updateCart();
}

function subtractToCart(productIndex) {}
