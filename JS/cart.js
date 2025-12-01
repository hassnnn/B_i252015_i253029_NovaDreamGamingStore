

    // Quantity controls
    document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
        btn.addEventListener('click', function() {
            console.log("removing item")
            updateQuantity(this, -1);
        });
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
        btn.addEventListener('click', function() {
            console.log("adding item")
            updateQuantity(this, 1);
        });
    });
    
    // Remove item functionality
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', function() {
            removeItem(this);
            alert("Removed item");
        });
    });
    
    // Proceed to checkout
    const checkoutBtn = document.querySelector('.cart-buttons .btn-primary');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = './checkout.html';
        });
    }
    
    // Continue shopping
    const continueShoppingBtn = document.querySelector('.cart-buttons .btn-secondary');
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = './products.html';
        });
    }
    
    
    function updateQuantity(button, change) {
        const quantityValue = button.parentElement.querySelector('.quantity-value');
        console.log("quantity updated")
        let currentQuantity = parseInt(quantityValue.textContent);
        let newQuantity = currentQuantity + change;
        
        if (newQuantity < 1) {
            removeItem(button);
            return;
        }
        
        quantityValue.textContent = newQuantity;
        
    }
    
    function removeItem(button) {
        const cartItem = button.closest('.cart-item');
        
            cartItem.remove();
            
            if (cart.length === 0) {
                const cartItems = document.querySelector('.cart-items');
                cartItems.innerHTML = '<p>Your cart is empty. <a href="./products.html">Continue shopping</a></p>';
            }
        
    }
    
    
    function updateCartCount(count) {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            cartCount.textContent = count;
        }
    }
    
    