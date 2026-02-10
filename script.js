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

// ============================================
// Skeleton Loader - Lazy Loading de Imágenes
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.project-image img');
    
    images.forEach(img => {
        // Si la imagen ya cargó
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            // Cuando la imagen termine de cargar
            img.addEventListener('load', function() {
                img.classList.add('loaded');
            });
            
            // Si hay error al cargar
            img.addEventListener('error', function() {
                img.classList.add('loaded');
                console.log('Error cargando imagen:', img.src);
            });
        }
    });
});
// ============================================
// SELECTOR DE IDIOMA - Funcionalidad
// 
// INSTRUCCIONES:
// 1. Abre script.js
// 2. Al FINAL del archivo, pega este código
// 
// NOTA: Este código cambia la clase "active" visualmente.
// Para implementar traducción real, necesitarías más código.
// ============================================

// ============================================
// Language Selector
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    
    const langButtons = document.querySelectorAll('.lang-button');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            
            // Remover clase active de todos los botones
            langButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            // Guardar preferencia en localStorage
            localStorage.setItem('preferred-language', selectedLang);
            
            // AQUÍ PUEDES AGREGAR LA LÓGICA DE TRADUCCIÓN
            // Por ahora solo muestra en consola
            console.log('Idioma seleccionado:', selectedLang);
            
            // Ejemplo: Si quieres cambiar textos básicos
            if (selectedLang === 'en') {
                changeToEnglish();
            } else {
                changeToSpanish();
            }
        });
    });
    
    // Restaurar idioma guardado al cargar la página
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang) {
        const savedButton = document.querySelector(`[data-lang="${savedLang}"]`);
        if (savedButton) {
            langButtons.forEach(btn => btn.classList.remove('active'));
            savedButton.classList.add('active');
            
            if (savedLang === 'en') {
                changeToEnglish();
            }
        }
    }
});

// ============================================
// Funciones de traducción (BÁSICAS)
// ============================================
function changeToEnglish() {
    // Hero
    const heroLines = document.querySelectorAll('.title-line');
    if (heroLines.length >= 3) {
        heroLines[0].textContent = 'MAKE YOUR';
        heroLines[1].textContent = 'PROJECT';
        heroLines[2].textContent = 'A REALITY';
    }
    
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        subtitle.textContent = 'We are a studio that adapts to your needs';
    }
    
    const scrollText = document.querySelector('.scroll-indicator span');
    if (scrollText) {
        scrollText.textContent = 'Explore';
    }
    
    // Navegación
    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks[0]) navLinks[0].textContent = 'Projects';
    if (navLinks[1]) navLinks[1].textContent = 'Contact';
    
    // Contacto
    const contactTitle = document.querySelector('.contact-title');
    if (contactTitle) {
        contactTitle.textContent = "Let's talk about your project";
    }
    
    const contactIntro = document.querySelector('.contact-intro');
    if (contactIntro) {
        contactIntro.textContent = 'Tell us about your idea and we will get in touch with you.';
    }
    
    // Labels del formulario
    const labels = document.querySelectorAll('.form-label');
    if (labels[0]) labels[0].textContent = 'Name *';
    if (labels[2]) labels[2].textContent = 'Phone';
    if (labels[3]) labels[3].textContent = 'Project Type *';
    if (labels[4]) labels[4].textContent = 'Message *';
    
    // Placeholders
    const nameInput = document.getElementById('name');
    if (nameInput) nameInput.placeholder = 'Your full name';
    
    const emailInput = document.getElementById('email');
    if (emailInput) emailInput.placeholder = 'youremail@example.com';
    
    const phoneInput = document.getElementById('phone');
    if (phoneInput) phoneInput.placeholder = '+1 234 567 8900';
    
    const messageInput = document.getElementById('message');
    if (messageInput) messageInput.placeholder = 'Tell us about your project...';
    
    // Botón enviar
    const submitBtn = document.querySelector('.form-submit');
    if (submitBtn) submitBtn.textContent = 'Send message';
    
    // Categorías del select
    const projectType = document.getElementById('project-type');
    if (projectType) {
        projectType.options[0].text = 'Select an option';
        projectType.options[1].text = 'Residential';
        projectType.options[2].text = 'Commercial';
        projectType.options[3].text = 'Institutional';
        projectType.options[4].text = 'Interior Design';
        projectType.options[5].text = 'Other';
    }
}

function changeToSpanish() {
    // Hero
    const heroLines = document.querySelectorAll('.title-line');
    if (heroLines.length >= 3) {
        heroLines[0].textContent = 'HAZ TU';
        heroLines[1].textContent = 'PROYECTO';
        heroLines[2].textContent = 'REALIDAD';
    }
    
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        subtitle.textContent = 'Somos una oficina que se adapta a tus necesidades';
    }
    
    const scrollText = document.querySelector('.scroll-indicator span');
    if (scrollText) {
        scrollText.textContent = 'Explora';
    }
    
    // Navegación
    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks[0]) navLinks[0].textContent = 'Proyectos';
    if (navLinks[1]) navLinks[1].textContent = 'Contacto';
    
    // Contacto
    const contactTitle = document.querySelector('.contact-title');
    if (contactTitle) {
        contactTitle.textContent = 'Hablemos de tu proyecto';
    }
    
    const contactIntro = document.querySelector('.contact-intro');
    if (contactIntro) {
        contactIntro.textContent = 'Cuéntanos sobre tu idea y nos pondremos en contacto contigo.';
    }
    
    // Labels del formulario
    const labels = document.querySelectorAll('.form-label');
    if (labels[0]) labels[0].textContent = 'Nombre *';
    if (labels[2]) labels[2].textContent = 'Teléfono';
    if (labels[3]) labels[3].textContent = 'Tipo de proyecto *';
    if (labels[4]) labels[4].textContent = 'Mensaje *';
    
    // Placeholders
    const nameInput = document.getElementById('name');
    if (nameInput) nameInput.placeholder = 'Tu nombre completo';
    
    const emailInput = document.getElementById('email');
    if (emailInput) emailInput.placeholder = 'tucorreo@ejemplo.com';
    
    const phoneInput = document.getElementById('phone');
    if (phoneInput) phoneInput.placeholder = '+56 9 1234 5678';
    
    const messageInput = document.getElementById('message');
    if (messageInput) messageInput.placeholder = 'Cuéntanos sobre tu proyecto...';
    
    // Botón enviar
    const submitBtn = document.querySelector('.form-submit');
    if (submitBtn) submitBtn.textContent = 'Enviar mensaje';
    
    // Categorías del select
    const projectType = document.getElementById('project-type');
    if (projectType) {
        projectType.options[0].text = 'Selecciona una opción';
        projectType.options[1].text = 'Residencial';
        projectType.options[2].text = 'Comercial';
        projectType.options[3].text = 'Institucional';
        projectType.options[4].text = 'Interiorismo';
        projectType.options[5].text = 'Otro';
    }
}
