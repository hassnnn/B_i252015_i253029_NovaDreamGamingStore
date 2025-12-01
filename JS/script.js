document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('nav') && !event.target.closest('.mobile-menu-btn')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    }
});

const addToCartButtons = document.querySelectorAll('.product-card .btn-primary');
if(addToCartButtons){
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;
            
            // Update cart count
            const cartCount = document.querySelector('.cart-count');
            if (cartCount) {
                let currentCount = parseInt(cartCount.textContent);
                cartCount.textContent = currentCount + 1;
            }
            
            // Show notification (you can customize this)
            alert(`Added ${productName} to cart!`);
        });
    });
}