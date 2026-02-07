// ============================================
// OFICINA ANR - Portfolio JavaScript
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all features
    initSmoothScroll();
    initCustomCursor();
    initScrollAnimations();
    initHeaderScroll();
    
});

// ============================================
// Smooth Scroll for Navigation Links
// ============================================
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// Custom Cursor for Project Cards (Desktop only)
// ============================================
function initCustomCursor() {
    // Only run on desktop
    if (window.innerWidth < 1025) return;
    
    const projectLinks = document.querySelectorAll('.project-link');
    
    projectLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            document.body.style.cursor = 'none';
        });
        
        link.addEventListener('mouseleave', function() {
            document.body.style.cursor = 'auto';
        });
        
        link.addEventListener('mousemove', function(e) {
            const cursor = this.querySelector('::before');
            // The CSS ::before pseudo-element will follow the mouse
            // This is handled by CSS, we just need to update the position
            this.style.setProperty('--mouse-x', e.clientX + 'px');
            this.style.setProperty('--mouse-y', e.clientY + 'px');
        });
    });
}

// ============================================
// Scroll Animations for Elements
// ============================================
function initScrollAnimations() {
    // Create Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        observer.observe(card);
    });
}

// ============================================
// Header Scroll Behavior
// ============================================
function initHeaderScroll() {
    const header = document.querySelector('.main-header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow on scroll
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        // Hide/show header on scroll
        if (currentScroll > lastScroll && currentScroll > 200) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
}

// ============================================
// Parallax Effect for Hero Section
// ============================================
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const scrolled = window.pageYOffset;
    const heroHeight = hero.offsetHeight;
    
    // Only apply parallax while hero is visible
    if (scrolled < heroHeight) {
        const heroContent = hero.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / heroHeight) * 1.5;
        }
    }
});

// ============================================
// Lazy Loading Images (for better performance)
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    const images = document.querySelectorAll('.project-image img');
    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// Handle Window Resize
// ============================================
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Re-initialize features that depend on window size
        if (window.innerWidth >= 1025) {
            initCustomCursor();
        }
    }, 250);
});

// ============================================
// Keyboard Navigation
// ============================================
document.addEventListener('keydown', function(e) {
    // ESC key to scroll to top
    if (e.key === 'Escape') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// ============================================
// Console Easter Egg
// ============================================
console.log('%c OFICINA ANR ', 'background: #FF3D00; color: #0D0D0D; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Interesado en el código? Visita nuestro GitHub ', 'font-size: 12px; color: #A0A0A0;');
