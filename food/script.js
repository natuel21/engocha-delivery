document.addEventListener('DOMContentLoaded', function() {
  const cartCount = document.querySelector('.cart-count');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  let cartItems = [];
  let cartItemCount = 0;

  function updateCartUI() {
    cartCount.textContent = cartItemCount;
  }

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productName = button.previousElementSibling.previousElementSibling.textContent;
      const productPrice = parseFloat(button.previousElementSibling.textContent.replace('$', ''));
      
      cartItems.push({ name: productName, price: productPrice });
      cartItemCount++;

      updateCartUI();
      console.log(cartItems);
    });
  });
});