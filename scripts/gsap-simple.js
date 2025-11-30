// Initialize Lenis smooth scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

// Make lenis globally accessible so modals can control it
window.lenis = lenis;

// Connect Lenis to GSAP ScrollTrigger and update scroll effects
lenis.on('scroll', (e) => {
    ScrollTrigger.update();
    
    // Update scroll effects when using Lenis
    if (typeof updateScrollEffects === 'function') {
        updateScrollEffects(e.scroll);
    }
});

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Handle tab visibility to prevent memory buildup
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        lenis.stop();
    } else {
        lenis.start();
    }
});

// Lenis scroll to functionality for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Override default anchor link behavior to use Lenis
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            
            if (target && window.lenis) {
                window.lenis.scrollTo(target, {
                    offset: -80, // Account for fixed header
                    duration: 1.2
                });
            }
        });
    });

    // GSAP Enhancement for fade-in animations
    if (typeof gsap !== 'undefined') {
        // Disable CSS fallback animation when GSAP is running
        const style = document.createElement('style');
        style.textContent = '.fade-in-up { animation: none !important; }';
        document.head.appendChild(style);

        // GSAP scroll-triggered animations
        gsap.utils.toArray('.fade-in-up').forEach((element) => {
            gsap.fromTo(element,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
    }
});