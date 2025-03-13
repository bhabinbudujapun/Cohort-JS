let cart = [];

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
}

function subtractToCart(productIndex) {}
