// Birthday Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Update current date and time
    updateDateTime();
    
    // Optional: Add animations or interactivity
    addTableRowAnimations();
});

// Update the date and time display
function updateDateTime() {
    const topLeftDate = document.querySelector('.top-left .date-box');
    const today = new Date();
    
    const options = { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    };
    
    const formattedDate = today.toLocaleDateString('en-US', options);
    topLeftDate.textContent = '📅 ' + formattedDate;
}

// Add hover animations to table rows
function addTableRowAnimations() {
    const tableRows = document.querySelectorAll('.birthday-table tbody tr');
    
    tableRows.forEach((row, index) => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'all 0.2s ease';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Optional: Add confetti animation on page load
function celebrateAnimation() {
    const confetti = document.querySelectorAll('.confetti');
    
    confetti.forEach((particle, index) => {
        const randomDelay = Math.random() * 0.5;
        particle.style.animation = `float ${3 + Math.random() * 2}s infinite ease-in-out`;
        particle.style.animationDelay = randomDelay + 's';
    });
}

// Call celebration animation
celebrateAnimation();
