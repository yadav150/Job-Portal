// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});

// Category Selection
const categories = document.querySelectorAll('.category');
categories.forEach(category => {
    category.addEventListener('click', function() {
        categories.forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        
        // Filter functionality would go here
        const categoryName = this.textContent;
        console.log(`Filtering by category: ${categoryName}`);
        // In a real implementation, you would filter job listings
    });
});

// Search Functionality
document.getElementById('search-btn').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-input').value;
    if(searchTerm.trim() !== '') {
        alert(`Searching for: ${searchTerm}`);
        // In a real implementation, you would filter content or make an API call
    } else {
        alert('Please enter a search term');
    }
});

// Bookmark Functionality
document.querySelectorAll('.fa-bookmark').forEach(bookmark => {
    bookmark.addEventListener('click', function() {
        this.classList.toggle('fas');
        this.classList.toggle('far');
        this.classList.toggle('active');
        
        if(this.classList.contains('active')) {
            console.log('Resource bookmarked');
        } else {
            console.log('Bookmark removed');
        }
    });
});

// Card Hover Effect Enhancement
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Login/Signup Button Functionality
document.querySelectorAll('.auth-buttons .btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const action = this.textContent.trim();
        alert(`${action} form would appear here`);
        // In a real implementation, you would show a login/signup modal
    });
});