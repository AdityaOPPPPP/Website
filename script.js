// Copy Server IP to Clipboard
function copyToClipboard() {
    const serverIP = document.querySelector('.server-ip');
    const range = document.createRange();
    range.selectNode(serverIP);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Server IP copied to clipboard!');
}

// Open Popup
function openPopup() {
    const popupModal = document.getElementById('popupModal');
    popupModal.style.display = 'block';
}

// Close Popup
function closePopup() {
    const popupModal = document.getElementById('popupModal');
    popupModal.style.display = 'none';
}

// Open Logout Popup
function openLogoutPopup() {
    const logoutPopup = document.getElementById('logoutPopup');
    logoutPopup.style.display = 'block';
}

// Close Logout Popup
function closeLogoutPopup() {
    const logoutPopup = document.getElementById('logoutPopup');
    logoutPopup.style.display = 'none';
}

// Logout
function logout() {
    closeLogoutPopup();
    alert('You have been logged out.');
}

// Open King Popup
function openKingPopup() {
    const kingPopup = document.getElementById('kingPopup');
    kingPopup.style.display = 'block';
}

// Close King Popup
function closeKingPopup() {
    const kingPopup = document.getElementById('kingPopup');
    kingPopup.style.display = 'none';
}

// Open VIP Popup
function openVIPPopup() {
    const vipPopup = document.getElementById('vipPopup');
    vipPopup.style.display = 'block';
}

// Close VIP Popup
function closeVIPPopup() {
    const vipPopup = document.getElementById('vipPopup');
    vipPopup.style.display = 'none';
}

// Open Deadliest Popup
function openDeadliestPopup() {
    const deadliestPopup = document.getElementById('deadliestPopup');
    deadliestPopup.style.display = 'block';
}

// Close Deadliest Popup
function closeDeadliestPopup() {
    const deadliestPopup = document.getElementById('deadliestPopup');
    deadliestPopup.style.display = 'none';
}

// Open OG Popup
function openOGPopup() {
    const ogPopup = document.getElementById('ogPopup');
    ogPopup.style.display = 'block';
}

// Close OG Popup
function closeOGPopup() {
    const ogPopup = document.getElementById('ogPopup');
    ogPopup.style.display = 'none';
}

// Add Event Listeners to "Click for more" Buttons
document.querySelectorAll('.product-item button').forEach(button => {
    button.addEventListener('click', function() {
        const rankName = this.parentElement.querySelector('h3').innerText;
        if (rankName === 'King') {
            openKingPopup();
        } else if (rankName === 'VIP') {
            openVIPPopup();
        } else if (rankName === 'Deadliest') {
            openDeadliestPopup();
        } else if (rankName === 'OG') {
            openOGPopup();
        }
    });
});

// Close Modals When Clicking Outside
window.onclick = function(event) {
    const modals = [
        'popupModal',
        'loginPopup',
        'logoutPopup',
        'kingPopup',
        'vipPopup',
        'deadliestPopup',
        'ogPopup'
    ];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

let cart = [];
let total = 0;

// Load cart from localStorage on page load
window.onload = function() {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
        cart = storedCart;
        total = cart.reduce((sum, item) => sum + item.price, 0); // Calculate total
        updateCart(); // Update cart display
    }
};

// Function to update the cart display
function updateCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = ''; // Clear previous items
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `${item.username} wants ${item.name} - $${item.price.toFixed(2)} 
            <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItemsDiv.appendChild(cartItem);
    });
    document.getElementById('cartTotal').innerText = `Total: $${total.toFixed(2)}`;
}

// Function to remove item from cart
function removeFromCart(index) {
    total -= cart[index].price; // Subtract the price of the item being removed
    cart.splice(index, 1); // Remove item from cart array
    updateCart(); // Update cart display
    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
}

// Function to clear the cart
function clearCart() {
    cart = []; // Empty the cart array
    total = 0; // Reset total
    updateCart(); // Update cart display
    localStorage.removeItem('cart'); // Remove cart from localStorage
}

// Function to add item to cart
function addToCart(rankName, price) {
    const username = prompt("Please enter your username:"); // Prompt for username
    if (username) { // Check if username is provided
        cart.push({ name: rankName, price: price, username: username });
        total += price;
        updateCart();
        localStorage.setItem('cart', JSON.stringify(cart)); // Store cart in localStorage
    } else {
        alert("Username is required to add an item to the cart."); // Alert if no username is provided
    }
}

// Open King Popup
function openKingPopup() {
    const kingPopup = document.getElementById('kingPopup');
    kingPopup.style.display = 'block';
}

// Close King Popup
function closeKingPopup() {
    const kingPopup = document.getElementById('kingPopup');
    kingPopup.style.display = 'none';
}

// Open VIP Popup
function openVIPPopup() {
    const vipPopup = document.getElementById('vipPopup');
    vipPopup.style.display = 'block';
}

// Close VIP Popup
function closeVIPPopup() {
    const vipPopup = document.getElementById('vipPopup');
    vipPopup.style.display = 'none';
}

// Open Deadliest Popup
function openDeadliestPopup() {
    const deadliestPopup = document.getElementById('deadliestPopup');
    deadliestPopup.style.display = 'block';
}

// Close Deadliest Popup
function closeDeadliestPopup() {
    const deadliestPopup = document.getElementById('deadliestPopup');
    deadliestPopup.style.display = 'none';
}

// Open OG Popup
function openOGPopup() {
    const ogPopup = document.getElementById('ogPopup');
    ogPopup.style.display = 'block';
}

// Close OG Popup
function closeOGPopup() {
    const ogPopup = document.getElementById('ogPopup');
    ogPopup.style.display = 'none';
}

// Add Event Listeners to "Click for more" Buttons
document.querySelectorAll('.product-item button').forEach(button => {
    button.addEventListener('click', function() {
        const rankName = this.parentElement.querySelector('h3').innerText;
        if (rankName === 'King') {
            openKingPopup();
        } else if (rankName === 'VIP') {
            openVIPPopup();
        } else if (rankName === 'Deadliest') {
            openDeadliestPopup();
        } else if (rankName === 'OG') {
            openOGPopup();
        }
    });
});

// Add Event Listeners for "Add to Cart" Buttons in Popups
document.querySelector('#kingPopup .add-to-cart').addEventListener('click', function() {
    addToCart('King Rank', 1.78); // Assuming the price is $1.78
    closeKingPopup(); // Close the popup after adding to cart
});

document.querySelector('#vipPopup .add-to-cart').addEventListener('click', function() {
    addToCart('VIP Rank', 1.43); // Assuming the price is $1.43
    closeVIPPopup(); // Close the popup after adding to cart
});

document.querySelector('#deadliestPopup .add-to-cart').addEventListener('click', function() {
    addToCart('Deadliest Rank', 1.07); // Assuming the price is $1.07
    closeDeadliestPopup(); // Close the popup after adding to cart
});

document.querySelector('#ogPopup .add-to-cart').addEventListener('click', function() {
    addToCart('OG Rank', 0.59); // Assuming the price is $0.59
    closeOGPopup(); // Close the popup after adding to cart
});

function toggleAnswer(answerId) {
    const answerElement = document.getElementById(answerId);
    if (answerElement.style.display === "none" || answerElement.style.display === "") {
        answerElement.style.display = "block"; // Show the answer
    } else {
        answerElement.style.display = "none"; // Hide the answer
    }
}
