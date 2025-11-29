// Smooth scrolling handled by Lenis in gsap-simple.js
// Legacy fallback for when Lenis is not available
if (!window.lenis) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Navbar scroll effect (fallback for when Lenis is not available)
function updateScrollEffects(scrollY) {
    const navbar = document.querySelector('.navbar');
    
    if (scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Parallax effect for hero background images
    const heroImages = document.querySelectorAll('.hero-background img, .service-hero-background img, .contact-hero-background img');
    heroImages.forEach(img => {
        const rect = img.getBoundingClientRect();
        const speed = 0.2; // 20% parallax effect
        
        if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
            const yPos = -(scrollY * speed);
            img.style.transform = `translateY(${yPos}px)`;
        }
    });
}

// Fallback scroll listener for when Lenis is not available
if (!window.lenis) {
    window.addEventListener('scroll', function() {
        updateScrollEffects(window.scrollY);
    });
}

// Map overlay functionality
document.addEventListener('DOMContentLoaded', function() {
    const mapOverlays = document.querySelectorAll('.map-overlay');
    
    mapOverlays.forEach(overlay => {
        const mapContainer = overlay.closest('.map');
        
        // Hide overlay when clicked
        overlay.addEventListener('click', function() {
            this.classList.add('hidden');
            
            // Optional: Stop Lenis scrolling during map interaction
            if (window.lenis) {
                window.lenis.stop();
                
                // Re-enable Lenis after 2 seconds of inactivity
                setTimeout(() => {
                    if (window.lenis) {
                        window.lenis.start();
                    }
                }, 2000);
            }
        });
        
        // Reactivate overlay when clicking outside the map
        document.addEventListener('click', function(e) {
            if (mapContainer && !mapContainer.contains(e.target)) {
                overlay.classList.remove('hidden');
                
                // Re-enable Lenis when overlay is reactivated
                if (window.lenis) {
                    window.lenis.start();
                }
            }
        });
    });
});

// Q&A Section Toggle Functionality
document.querySelectorAll('.qa-item').forEach(item => {
    item.addEventListener('click', function() {
        const icon = this.querySelector('.qa-icon');
        const isOpen = icon.textContent === '−';
        
        // Close all other items
        document.querySelectorAll('.qa-item').forEach(otherItem => {
            const otherIcon = otherItem.querySelector('.qa-icon');
            otherIcon.textContent = '+';
            otherItem.classList.remove('active');
        });
        
        // Toggle current item
        if (!isOpen) {
            icon.textContent = '−';
            this.classList.add('active');
        }
    });
});

// Form submission handler
document.querySelector('.contact-form-content').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    // Simulate form submission
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Submitting...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll(`
        .about-text,
        .about-image,
        .qa-header,
        .qa-items,
        .services-header,
        .service-card,
        .process-text,
        .process-steps,
        .video-content,
        .attorneys-header,
        .attorney-card,
        .contact-wrapper,
        .blog-header,
        .blog-card,
        .location-content
    `);
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Counter animation for statistics
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (element.textContent.includes('+') ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (element.textContent.includes('+') ? '+' : '');
        }
    }, 16);
}

// Animate statistics when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                const hasK = text.includes('k');
                const hasPlus = text.includes('+');
                
                let target = number;
                if (hasK) target *= 1000;
                
                stat.textContent = '0' + (hasPlus ? '+' : '') + (hasK ? 'k' : '');
                animateCounter(stat, number);
            });
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }
});

// Play button functionality
document.querySelector('.play-button')?.addEventListener('click', function() {
    // Simulate video play - you can replace this with actual video embed
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
        alert('Video would play here. Replace this with your actual video implementation.');
    }, 150);
});

// Service card hover effects handled by CSS

// Attorney card hover effects
document.querySelectorAll('.attorney-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 10px 30px rgba(33, 55, 83, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});

// Blog card hover effects
document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 10px 30px rgba(33, 55, 83, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

    function toggleMobileMenu() {
        mobileMenuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('mobile-menu-open');
    }

    function closeMobileMenu() {
        mobileMenuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('mobile-menu-open');
    }

    // Toggle menu when hamburger is clicked
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);

    // Close menu when a link is clicked
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });

    // Prevent body scroll when mobile menu is open
    const style = document.createElement('style');
    style.textContent = `
        body.mobile-menu-open {
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Parallax effect for hero background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background img');
    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});


// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
});

// Add smooth reveal animations
const revealElements = document.querySelectorAll('.service-card, .attorney-card, .blog-card, .step-item');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', function() {
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(el);
    });
});