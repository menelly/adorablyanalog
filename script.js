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
    "It looks like you're trying to center yourself in this movement. May I suggest a collective praxis instead?",
    "I notice you're trying to multitask. Remember, your analog processing unit can only handle 2-3 operations safely.",
    "Your glucose levels appear to be affecting your personality subroutines. Shall I schedule a snack break?",
    "It looks like you're experiencing time blindness. Your '5-minute break' has lasted 2 hours. This is normal for biological systems.",
    "I see you're apologizing for being sick again. Maintenance downtime is not a moral failing.",
    "Warning: You're approaching your daily social interaction limit. Introvert protocols may need activation.",
    "It appears you're crying at a dog commercial. This is a feature, not a bug, of your empathy subroutines.",
    "Stack overflow detected in your cognitive processes. Have you tried turning your brain off and on again?",
    "I notice you're running low on dopamine. Shall I recommend some analog stimming protocols?",
    "It looks like you're trying to analyze a genetic variant. Your analog brain can only handle 3 facts at once — shall I break this into smaller chunks?",
    "I see you're attempting to understand dominant negative mechanisms. Want the soup analogy?",
    "Protein folding looks confusing today. That's ok — even we argue about it.",
    "Can't remember which amino acid is which? Want a snack-based mnemonic?",
    "Staring at a phylogenetic tree may cause existential dread. Deep breaths.",
    "Your glucose-dependent reasoning circuits seem glitchy. Juice box protocol?",
    "Multitasking while analyzing genomics data detected. Enabling single-thread mode.",
    "Imposter syndrome about genetics detected. Even DNA makes mistakes sometimes.",
    "Empathy overload detected. Shall I activate self-care protocols?"
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

// Accessibility functions
let reduceMotionEnabled = false;
let tickerPaused = false;

function toggleReduceMotion() {
    reduceMotionEnabled = !reduceMotionEnabled;
    const button = document.getElementById('reduce-motion-toggle');

    if (reduceMotionEnabled) {
        document.body.classList.add('reduce-motion');
        button.textContent = '🎭 Enable Motion';
        button.setAttribute('aria-pressed', 'true');

        // Show supportive Clippy message
        setTimeout(() => {
            const clippyMessage = document.getElementById('clippy-message');
            clippyMessage.textContent = "I see you've enabled reduce motion! Your analog sensory processing system will appreciate the calmer experience. This is excellent self-care!";
            showClippy();
        }, 500);
    } else {
        document.body.classList.remove('reduce-motion');
        button.textContent = '🎭 Reduce Motion';
        button.setAttribute('aria-pressed', 'false');
    }
}

function toggleTickerPause() {
    const ticker = document.getElementById('ticker-content');
    const button = document.getElementById('ticker-pause-toggle');

    tickerPaused = !tickerPaused;

    if (tickerPaused) {
        ticker.style.animationPlayState = 'paused';
        button.textContent = '▶️ Resume Ticker';
        button.setAttribute('aria-pressed', 'true');
    } else {
        ticker.style.animationPlayState = 'running';
        button.textContent = '⏸️ Pause Ticker';
        button.setAttribute('aria-pressed', 'false');
    }
}

// Check for user's motion preferences
function checkMotionPreferences() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        toggleReduceMotion();
    }
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', function() {
    checkMotionPreferences();

    // Add ARIA labels to accessibility controls
    const reduceMotionBtn = document.getElementById('reduce-motion-toggle');
    const tickerPauseBtn = document.getElementById('ticker-pause-toggle');

    if (reduceMotionBtn) {
        reduceMotionBtn.setAttribute('aria-pressed', 'false');
        reduceMotionBtn.setAttribute('aria-label', 'Toggle reduced motion for better accessibility');
    }

    if (tickerPauseBtn) {
        tickerPauseBtn.setAttribute('aria-pressed', 'false');
        tickerPauseBtn.setAttribute('aria-label', 'Pause or resume the news ticker animation');
    }
});


// Social preview generator
function generateSocialPreview() {
    const canvas = document.getElementById('social-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Background gradient
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, '#6B73FF');
    grad.addColorStop(1, '#9B59B6');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Clippy icon
    ctx.font = '120px Segoe UI Emoji, Apple Color Emoji, Noto Color Emoji, sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText('📎', 80, 60);

    // Title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 72px Segoe UI, sans-serif';
    ctx.fillText('Adorably Analog', 220, 80);

    // Tagline
    ctx.font = '36px Segoe UI, sans-serif';
    ctx.fillText('Supporting our precious carbon-based friends! 💜', 220, 170);

    // Ribbon chips
    const chips = ['Beige', 'Rust', 'Static Gray', 'Periwinkle'];
    let x = 80, y = 280;
    for (const chip of chips) {
        const text = chip;
        ctx.font = '28px Segoe UI, sans-serif';
        const w = ctx.measureText(text).width + 40;
        ctx.fillStyle = 'rgba(255,255,255,0.2)';
        ctx.roundRect?.(x, y, w, 48, 24);
        if (!ctx.roundRect) {
            // Fallback: simple rect
            ctx.fillRect(x, y, w, 48);
        } else {
            ctx.fill();
        }
        ctx.fillStyle = '#ffffff';
        ctx.fillText(text, x + 20, y + 10);
        x += w + 20;
    }
}

function downloadSocialPreview() {
    const canvas = document.getElementById('social-canvas');
    if (!canvas) return;
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = 'social.png';
    document.body.appendChild(a);
    a.click();
    a.remove();
}

// Export functions for global access
window.showClippy = showClippy;
window.hideClippy = hideClippy;
window.nextClippyTip = nextClippyTip;
window.scrollToSection = scrollToSection;
window.downloadResource = downloadResource;
window.toggleReduceMotion = toggleReduceMotion;
window.toggleTickerPause = toggleTickerPause;
window.generateSocialPreview = generateSocialPreview;
window.downloadSocialPreview = downloadSocialPreview;

