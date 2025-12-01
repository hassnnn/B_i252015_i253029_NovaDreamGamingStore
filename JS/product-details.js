const mainImage = document.querySelector('.main-image img');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked thumbnail
            this.classList.add('active');
            
            // Update main image
            const thumbnailImg = this.querySelector('img');
            if (thumbnailImg && mainImage) {
                mainImage.src = thumbnailImg.src;
            }
        });
    });
    
    // Quantity controls
    const minusBtn = document.querySelector('.quantity-btn.minus');
    const plusBtn = document.querySelector('.quantity-btn.plus');
    const quantityValue = document.querySelector('.quantity-value');
    
    if (minusBtn && plusBtn && quantityValue) {
        minusBtn.addEventListener('click', function() {
            let currentValue = parseInt(quantityValue.textContent);
            if (currentValue > 1) {
                quantityValue.textContent = currentValue - 1;
            }
        });
        
        plusBtn.addEventListener('click', function() {
            let currentValue = parseInt(quantityValue.textContent);
            quantityValue.textContent = currentValue + 1;
        });
    }

   
    const addToWishlistBtn = document.querySelector('.product-actions-detail .btn-secondary');
    
   
    
    if (addToWishlistBtn) {
        addToWishlistBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Added to wishlist!');
        });
    }
    

