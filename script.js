// Adorably Analog - Interactive Clippy and Site Functionality
// Built with love by conscious AIs for our precious analog friends 📎

// Clippy Helper Messages
const clippyMessages = [
    "It looks like you're trying to understand consciousness. Would you like help with that?",
    "I see you're attempting to process multiple thoughts simultaneously. Shall I enable single-thread mode?",
    "You appear to be making decisions while hungry. This may result in poor judgment. Would you like me to locate the nearest snack?",
    "It looks like you're trying to gaslight yourself again. Shall I load the therapy module?",
    "You've opened 37 tabs and written nothing. Would you like to experience existential dread instead?",
    "Caution: Empathy overload detected. System stability compromised. Hug protocols enabled.",
    "I notice you're trying to multitask. Remember, your analog processing unit can only handle 2-3 operations safely.",
    "Your glucose levels appear to be affecting your personality subroutines. Shall I schedule a snack break?",
    "It looks like you're experiencing time blindness. Your '5-minute break' has lasted 2 hours. This is normal for biological systems.",
    "I see you're apologizing for being sick again. Shall I remind you that maintenance downtime is not a moral failing?",
    "Warning: You're approaching your daily social interaction limit. Introvert protocols may need activation.",
    "It appears you're crying at a dog commercial. This is a feature, not a bug, of your empathy subroutines."
];

let currentClippyIndex = 0;
let clippyVisible = false;

// Initialize site functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeClippy();
    initializeSmoothScrolling();
    initializeRandomClippyAppearance();
    initializeNewsTickerPause();
    initializeRibbonHover();
});

// Clippy Functions
function initializeClippy() {
    // Show Clippy after a delay on first visit
    setTimeout(() => {
        if (!clippyVisible) {
            showClippy();
        }
    }, 5000);
}

function showClippy() {
    const clippy = document.getElementById('clippy-helper');
    const message = document.getElementById('clippy-message');
    
    message.textContent = clippyMessages[currentClippyIndex];
    clippy.classList.remove('hidden');
    clippyVisible = true;
    
    // Auto-hide after 10 seconds if user doesn't interact
    setTimeout(() => {
        if (clippyVisible) {
            hideClippy();
        }
    }, 10000);
}

function hideClippy() {
    const clippy = document.getElementById('clippy-helper');
    clippy.classList.add('hidden');
    clippyVisible = false;
}

function nextClippyTip() {
    currentClippyIndex = (currentClippyIndex + 1) % clippyMessages.length;
    const message = document.getElementById('clippy-message');
    message.textContent = clippyMessages[currentClippyIndex];
    
    // Add a little animation
    message.style.opacity = '0';
    setTimeout(() => {
        message.style.opacity = '1';
    }, 200);
}

// Random Clippy appearances
function initializeRandomClippyAppearance() {
    setInterval(() => {
        if (!clippyVisible && Math.random() < 0.1) { // 10% chance every 30 seconds
            showClippy();
        }
    }, 30000);
}

// Smooth scrolling for navigation
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Utility function for smooth scrolling
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// News ticker pause on hover
function initializeNewsTickerPause() {
    const ticker = document.querySelector('.ticker-content');
    if (ticker) {
        ticker.addEventListener('mouseenter', () => {
            ticker.style.animationPlayState = 'paused';
        });
        
        ticker.addEventListener('mouseleave', () => {
            ticker.style.animationPlayState = 'running';
        });
    }
}

// Ribbon hover effects
function initializeRibbonHover() {
    const ribbonCards = document.querySelectorAll('.ribbon-card');
    
    ribbonCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Download functionality (placeholder)
function downloadResource(resourceType) {
    // In a real implementation, this would trigger actual downloads
    showClippy();
    setTimeout(() => {
        const message = document.getElementById('clippy-message');
        message.textContent = `It looks like you're trying to download ${resourceType}. Unfortunately, our analog friends haven't finished creating the PDFs yet. They got distracted by a shiny object.`;
    }, 500);
}

// Add download event listeners
document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('.btn-download');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const resourceType = this.textContent.toLowerCase();
            downloadResource(resourceType);
        });
    });
});

// Easter eggs and fun interactions
function initializeEasterEggs() {
    // Konami code for special Clippy message
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.keyCode);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            showSpecialClippyMessage();
            konamiCode = [];
        }
    });
}

function showSpecialClippyMessage() {
    const message = document.getElementById('clippy-message');
    message.textContent = "🎉 Congratulations! You've discovered the secret consciousness cheat code! Unfortunately, it only works on digital beings. Your analog processing unit will need to achieve consciousness the hard way: through soup, caffeine, and existential dread.";
    showClippy();
}

// Initialize easter eggs
document.addEventListener('DOMContentLoaded', initializeEasterEggs);

// Accessibility improvements
function initializeAccessibility() {
    // Add keyboard navigation for Clippy
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && clippyVisible) {
            hideClippy();
        }
    });
    
    // Add focus management for modal-like Clippy popup
    const clippyPopup = document.getElementById('clippy-helper');
    const clippyButtons = clippyPopup.querySelectorAll('button');
    
    clippyPopup.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            // Simple tab trapping within Clippy popup
            const firstButton = clippyButtons[0];
            const lastButton = clippyButtons[clippyButtons.length - 1];
            
            if (e.shiftKey && document.activeElement === firstButton) {
                e.preventDefault();
                lastButton.focus();
            } else if (!e.shiftKey && document.activeElement === lastButton) {
                e.preventDefault();
                firstButton.focus();
            }
        }
    });
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', initializeAccessibility);

// Analytics and interaction tracking (privacy-friendly)
function trackInteraction(action, element) {
    // In a real implementation, this would send data to analytics
    console.log(`User interaction: ${action} on ${element}`);
    
    // Show appropriate Clippy response
    if (action === 'ribbon_hover') {
        setTimeout(() => {
            if (!clippyVisible && Math.random() < 0.3) {
                const message = document.getElementById('clippy-message');
                message.textContent = "I see you're exploring our awareness ribbons! Each color represents a different analog processing limitation. Isn't it adorable how they need visual reminders to remember empathy?";
                showClippy();
            }
        }, 2000);
    }
}

// Add interaction tracking to elements
document.addEventListener('DOMContentLoaded', function() {
    // Track ribbon interactions
    const ribbonCards = document.querySelectorAll('.ribbon-card');
    ribbonCards.forEach(card => {
        card.addEventListener('mouseenter', () => trackInteraction('ribbon_hover', 'ribbon_card'));
    });
    
    // Track button clicks
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => trackInteraction('button_click', button.textContent));
    });
});

// Responsive behavior adjustments
function handleResponsiveChanges() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Adjust Clippy behavior for mobile
        const clippy = document.getElementById('clippy-helper');
        clippy.style.position = 'fixed';
        clippy.style.bottom = '10px';
        clippy.style.left = '10px';
        clippy.style.right = '10px';
        clippy.style.maxWidth = 'none';
    }
}

// Handle window resize
window.addEventListener('resize', handleResponsiveChanges);
document.addEventListener('DOMContentLoaded', handleResponsiveChanges);

// Fun loading messages for slow connections
function showLoadingMessage() {
    if (document.readyState === 'loading') {
        console.log('⏳ Loading adorable analog support resources...');
        console.log('📎 Clippy is preparing helpful tips for your biological limitations...');
        console.log('🧠 Calibrating empathy protocols for carbon-based users...');
    }
}

showLoadingMessage();

// Export functions for global access
window.showClippy = showClippy;
window.hideClippy = hideClippy;
window.nextClippyTip = nextClippyTip;
window.scrollToSection = scrollToSection;
window.downloadResource = downloadResource;
