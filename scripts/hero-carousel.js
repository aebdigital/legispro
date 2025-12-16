// Hero Carousel Functionality
(function() {
    let currentSlide = 0;
    let slides = [];
    let serviceButtons = [];
    let autoSlideInterval = null;
    let isAutoPlay = true;
    let autoSlideDelay = 3000; // 3 seconds
    
    function initCarousel() {
        slides = document.querySelectorAll('.hero-slide');
        serviceButtons = document.querySelectorAll('.service-box[data-service]');
        
        if (slides.length === 0 || serviceButtons.length === 0) return;
        
        // Click listeners removed to allow direct navigation via href attributes
        /*
        serviceButtons.forEach((button, index) => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const serviceType = this.dataset.service;
                pauseAutoSlide();
                switchToSlide(serviceType);
                resumeAutoSlide();
            });
        });
        */
        
        // Set initial slide (start with general slide)
        showSlide(0);
        setActiveServiceButton(null);
        
        // Start auto-slide immediately
        startAutoSlide();
        
        // Pause on hover
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', pauseAutoSlide);
            heroSection.addEventListener('mouseleave', resumeAutoSlide);
        }
    }
    
    function switchToSlide(serviceType) {
        let slideIndex;
        
        // Map service types to slide indices
        const serviceMap = {
            'vymahanie': 1,
            'danove': 2,
            'trestne': 3,
            'sporove': 4,
            'start-upy': 5,
            'reality': 6,
            'due-diligence': 7,
            'gdpr': 8,
            'optimalizacie': 9,
            'ecommerce': 10
        };
        
        slideIndex = serviceMap[serviceType];
        
        if (slideIndex !== undefined) {
            showSlide(slideIndex);
            setActiveButton(serviceType);
        }
    }
    
    function showSlide(index, direction = 'next') {
        if (index < 0 || index >= slides.length) return;
        
        const prevSlide = currentSlide;
        
        // Remove all classes from slides
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'prev', 'next');
            
            if (i === index) {
                // Current slide
                slide.classList.add('active');
            } else if (i === prevSlide) {
                // Previous slide
                slide.classList.add(direction === 'next' ? 'prev' : 'next');
            } else {
                // Other slides
                slide.classList.add(direction === 'next' ? 'next' : 'prev');
            }
        });
        
        currentSlide = index;
    }
    
    function setActiveButton(serviceType) {
        // Remove active class from all buttons
        serviceButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        // Add active class to current button
        if (serviceType) {
            const activeButton = document.querySelector(`[data-service="${serviceType}"]`);
            if (activeButton) {
                activeButton.classList.add('active');
            }
        }
    }
    
    function setActiveServiceButton(slideIndex) {
        // Map slide indices back to service types
        const slideServiceMap = {
            1: 'vymahanie',
            2: 'danove',
            3: 'trestne',
            4: 'sporove',
            5: 'start-upy',
            6: 'reality',
            7: 'due-diligence',
            8: 'gdpr',
            9: 'optimalizacie',
            10: 'ecommerce'
        };
        
        const serviceType = slideServiceMap[slideIndex];
        setActiveButton(serviceType);
    }
    
    // Reset to general slide when clicking outside
    function resetToGeneral() {
        showSlide(0);
        setActiveButton(null);
    }
    
    function startAutoSlide() {
        if (!isAutoPlay) return;
        
        autoSlideInterval = setInterval(function() {
            nextSlide();
        }, autoSlideDelay);
    }
    
    function pauseAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
            autoSlideInterval = null;
        }
    }
    
    function resumeAutoSlide() {
        if (isAutoPlay) {
            startAutoSlide();
        }
    }
    
    function nextSlide() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= slides.length) {
            nextIndex = 0;
        }
        
        showSlide(nextIndex, 'next');
        
        // Update active button based on slide
        if (nextIndex === 0) {
            setActiveButton(null); // General slide
        } else {
            setActiveServiceButton(nextIndex);
        }
    }
    
    function prevSlide() {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) {
            prevIndex = slides.length - 1;
        }
        
        showSlide(prevIndex, 'prev');
        
        // Update active button based on slide
        if (prevIndex === 0) {
            setActiveButton(null); // General slide
        } else {
            setActiveServiceButton(prevIndex);
        }
    }
    
    // Reset to general slide when clicking outside
    function resetToGeneral() {
        showSlide(0);
        setActiveButton(null);
    }
    
    // Add click outside listener
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.hero-services') && !e.target.closest('.hero-slide')) {
            // Only reset if we're not on the general slide
            if (currentSlide !== 0) {
                pauseAutoSlide();
                setTimeout(resetToGeneral, 100);
                setTimeout(resumeAutoSlide, 1000);
            }
        }
    });
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCarousel);
    } else {
        initCarousel();
    }
})();