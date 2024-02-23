let cartItems = [];

function addToCart(itemName, price) {
    cartItems.push({ name: itemName, price: price });
    updateCart();
}

function updateCart() {
    let cartTotal = 0;
    const cartItemsList = document.getElementById("cart-items");
    cartItemsList.innerHTML = "";
    cartItems.forEach(item => {
        cartTotal += item.price;
        cartItemsList.innerHTML += `<li>${item.name} - $${item.price.toFixed(2)}</li>`;
    });
    document.getElementById("cart-total").innerText = `$${cartTotal.toFixed(2)}`;
}

function checkout() {
    alert("Thank you for your purchase!");
    cartItems = [];
    updateCart();
}


// Smooth scrolling to sections when clicking on navigation links
document.querySelectorAll('.scroll-btn').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Activate image slideshow
