const faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const faqItem = this.parentElement;
                const isActive = faqItem.classList.contains('active');
                
                faqQuestions.forEach(otherQuestion => {
                    otherQuestion.parentElement.classList.remove('active');
                });
                
                if (!isActive) {
                    faqItem.classList.add('active');
                }
            });
        });
    }