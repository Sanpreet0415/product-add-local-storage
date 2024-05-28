document.addEventListener("DOMContentLoaded", function() {
    const cartContainer = document.getElementById("cartContainer");

    // Get cart items from local storage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Render cart items
    cart.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <button class="btn" onclick="removeFromCart(${user.id})">Delete</button>
        `;
        cartContainer.appendChild(card);
    });
});

// Function to remove user from cart
function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart = cart.filter(user => user.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload(); // Refresh the page to update the cart view
}
