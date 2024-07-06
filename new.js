// Get the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add a click event listener to each button
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the product ID from the button's data-product-id attribute
    const productId = button.dataset.productId;

    // Add the product to the cart
    addToCart(productId);
  });
});

// Function to add a product to the cart
function addToCart(productId) {
  // Get the current number of items in the cart
  let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;

  // Increment the cart count
  cartCount++;

  // Save the updated cart count to local storage
  localStorage.setItem('cartCount', cartCount);

  // Display a success message
  alert(`Product with ID ${productId} added to cart!`);
}
