    const categoryTabs = document.querySelectorAll('.category-tab');
    const productCards = document.querySelectorAll('.product-card');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            categoryTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
        });
    });
    
    productCards.forEach(card =>{
        card.addEventListener('click', function(e) {
            
            if(!e.target.classList.contains("btn")){
            window.location.href = './product-details.html';
            }
            else{
                console.log("didnot press item, pressed btn")
            }
        });
    })
    
