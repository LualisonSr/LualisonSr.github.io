const menuItems = [
    { id: 1, name: "Sushi", image: "suthy.jpg", price:   22 },
    { id: 2, name: "Bento Box", image: "benbox.jpg", price:   12 },
    { id: 3, name: "Ramen", image: "nodol.jpg", price:   7.50 },
    { id: 4, name: "Coffee  ", image: "cothy.jpg", price:   2.75 },
    { id: 5, name: "Muffin  ", image: "punkin.jpg", price:   3.50 },
    { id: 6, name: "Bagel  ", image: "bagl.jpg", price:   2.25 },
    { id: 7, name: "Pizza  ", image: "pitha.jpg", price:   14.50 },
    { id: 8, name: "Calzone  ", image: "calthon.jpg", price:   15.00 },
    { id: 9, name: "Lasagna  ", image: "lazana.jpg", price:   17.00 },    
];

let cart = []; // Initialize your cart as an empty array

// Function to generate and display menu items
function displayMenuItems() {
    const menuList = document.getElementById("menu-list");
    menuList.innerHTML = ""; // Clear existing items

    for (const item of menuItems) {
        const menuItem = document.createElement("li");
        menuItem.dataset.itemId = item.id;
        menuItem.classList.add('menu-item');

        const image = document.createElement("img");
        image.src = item.image;
        image.alt = item.name;

        const itemName = document.createElement("h3");
        itemName.textContent = item.name;

        const itemPrice = document.createElement("p");
        itemPrice.textContent = `$${item.price.toFixed(2)}`;

        // Add an "Add to Cart" button
        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.addEventListener('click', () => {
            addToCart(item.id);
        });

        menuItem.appendChild(image);
        menuItem.appendChild(itemName);
        menuItem.appendChild(itemPrice);
        menuItem.appendChild(addToCartButton);

        menuList.appendChild(menuItem);
    }
}

// Function to add items to the cart
function addToCart(itemId) {
    const item = menuItems.find(item => item.id === itemId);

    // Find if the item is already in the cart
    const existingCartItem = cart.find(cartItem => cartItem.id === itemId);

    if (existingCartItem) {
        // If item exists, increase quantity
        existingCartItem.quantity++;
    } else {
        // If new item, add it to the cart with quantity of 1
        cart.push({ ...item, quantity: 1 });
    }

    updateCartDisplay();
    updateCartTotals();
}

// Function to update cart display 
function updateCartDisplay() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = ''; // Clear existing cart items

    for (const cartItem of cart) {
        const listItem = document.createElement('li');
        listItem.classList.add('cart-item');

        // Item Name
        const nameSpan = document.createElement('span');
        nameSpan.textContent = cartItem.name;
        listItem.appendChild(nameSpan);

        // Item Price
        const priceSpan = document.createElement('span');
        priceSpan.textContent = `$${cartItem.price.toFixed(2)}`;
        listItem.appendChild(priceSpan);

        // Item Quantity
        const quantitySpan = document.createElement('span');
        quantitySpan.classList.add('quantity');
        quantitySpan.textContent = `x${cartItem.quantity}`;
        listItem.appendChild(quantitySpan);

        cartList.appendChild(listItem);
    }
}

// Function to calculate and update total price
function updateCartTotals() {
    let total = 0;
    cart.forEach(cartItem => {
        total += (cartItem.price * cartItem.quantity);
    });

    const cartTotalDisplay = document.getElementById('cart-total-display');
    cartTotalDisplay.textContent = total.toFixed(2);
}

// Initial page load: display menu items
displayMenuItems();