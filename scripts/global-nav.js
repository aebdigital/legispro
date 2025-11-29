// Global Navigation Script
document.addEventListener('DOMContentLoaded', function() {
    
    // Load fonts globally
    function loadFonts() {
        const fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Crimson+Text:wght@400;600;700&display=swap';
        document.head.appendChild(fontLink);
    }
    
    // Load fonts if not already loaded
    if (!document.querySelector('link[href*="Crimson+Text"]')) {
        loadFonts();
    }
    
    // Service pages data
    const services = [
        {
            name: 'START UPy a Greenfieldy',
            slug: 'start-upy-greenfieldy',
            icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.663 17h4.673M12 3l1.5 4.5 4.5 1.5-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            description: 'Spustenie nových projektov'
        },
        {
            name: 'GDPR',
            slug: 'gdpr',
            icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="16" r="1" fill="currentColor"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" stroke-width="2"/></svg>',
            description: 'Ochrana osobných údajov'
        },
        {
            name: 'Optimalizačné riešenia',
            slug: 'optimalizacie',
            icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12" stroke="currentColor" stroke-width="2" fill="none"/></svg>',
            description: 'Audit a optimalizácia procesov'
        },
        {
            name: 'Due Diligence',
            slug: 'due-diligence',
            icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/><path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2"/></svg>',
            description: 'Analýza obchodných transakcií'
        },
        {
            name: 'Vymáhanie pohľadávok',
            slug: 'vymahanie-pohladavok',
            icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" fill="currentColor"/><path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" fill="currentColor"/><path d="M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" fill="currentColor"/><path d="M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" fill="currentColor"/><path d="M19.071 19.071c.391.391 1.024.391 1.415 0s.391-1.024 0-1.415-.024-.391-1.415 0-.391 1.024 0 1.415z" fill="currentColor"/><path d="M3.514 4.929c.391.391 1.024.391 1.415 0s.391-1.024 0-1.415-1.024-.391-1.415 0-.391 1.024 0 1.415z" fill="currentColor"/><path d="M19.071 4.929c.391-.391.391-1.024 0-1.415s-1.024-.391-1.415 0-.391 1.024 0 1.415 1.024.391 1.415 0z" fill="currentColor"/><path d="M3.514 19.071c.391-.391.391-1.024 0-1.415s-1.024-.391-1.415 0-.391 1.024 0 1.415 1.024.391 1.415 0z" fill="currentColor"/></svg>',
            description: 'Efektívne vymáhanie dlhů'
        },
        {
            name: 'Daňové a Finančné právo',
            slug: 'danove-pravo',
            icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" stroke-width="2"/><line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" stroke-width="2"/></svg>',
            description: 'Daňová optimalizácia'
        },
        {
            name: 'e-Commerce',
            slug: 'ecommerce',
            icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1" stroke="currentColor" stroke-width="2"/><circle cx="20" cy="21" r="1" stroke="currentColor" stroke-width="2"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="currentColor" stroke-width="2"/></svg>',
            description: 'Právne služby pre e-shopy'
        },
        {
            name: 'Reality',
            slug: 'reality',
            icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="2"/><polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" stroke-width="2"/></svg>',
            description: 'Realitné transakcie'
        },
        {
            name: 'Sporové zastupovanie',
            slug: 'sporove-zastupovanie',
            icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" stroke="currentColor" stroke-width="2"/><polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="2"/><line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" stroke-width="2"/><line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" stroke-width="2"/><polyline points="10,9 9,9 8,9" stroke="currentColor" stroke-width="2"/></svg>',
            description: 'Zastupovanie v súdnych sporoch'
        },
        {
            name: 'Trestné právo',
            slug: 'trestne-pravo',
            icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2"/></svg>',
            description: 'Obhajoba v trestnom konaní'
        }
    ];

    // Determine current path and create appropriate URLs
    function getBasePath() {
        const currentPath = window.location.pathname;
        if (currentPath.includes('/pages/sluzby/') || currentPath.includes('/pages/blog/')) {
            return '../../'; // We're in sluzby or blog subfolder
        }
        if (currentPath.includes('/pages/')) {
            return '../'; // We're in pages folder
        }
        return './'; // We're in the root
    }

    function getPagePath(page) {
        const basePath = getBasePath();
        if (page === 'index') {
            if (basePath === '../../') {
                return '../../index.html';
            }
            return basePath === '../' ? '../index.html' : './index.html';
        }
        if (page === 'kontakt' || page === 'blog') {
            return basePath + 'pages/' + page + '.html';
        }
        if (page === 'podnikatelsky-balik' || page === 'skolenia-webinare') {
            return basePath + 'pages/sluzby/' + page + '.html';
        }
        // Service pages are now in sluzby subfolder
        return basePath + 'pages/sluzby/' + page + '.html';
    }

    // Get current page for active state
    function getCurrentPage() {
        const path = window.location.pathname;
        const filename = path.split('/').pop();
        if (filename === 'index.html' || filename === '') {
            return 'index';
        }
        return filename.replace('.html', '');
    }

    // Create Header HTML
    function createHeader() {
        const currentPage = getCurrentPage();
        const basePath = getBasePath();
        
        // Build services dropdown
        let servicesDropdownHTML = '';
        services.forEach(service => {
            servicesDropdownHTML += `
                <a href="${getPagePath(service.slug)}" class="dropdown-item" title="${service.description}">
                    <span class="dropdown-icon">${service.icon}</span>
                    <div class="dropdown-text">
                        <div class="dropdown-title">${service.name}</div>
                        <div class="dropdown-desc">${service.description}</div>
                    </div>
                </a>
            `;
        });

        return `
            <!-- Navigation -->
            <nav class="navbar" id="navbar">
                <div class="nav-container">
                    <div class="logo">
                        <a href="${getPagePath('index')}">
                            <img src="${basePath}sources/logo.png" alt="LegisPro" class="logo-image">
                            <h3>LegisPro</h3>
                        </a>
                    </div>
                    <div class="nav-menu" id="navMenu">
                        <a href="${getPagePath('index')}" class="nav-link ${currentPage === 'index' ? 'active' : ''}">Domov</a>
                        <div class="nav-dropdown">
                            <a href="#" class="nav-link dropdown-toggle" id="servicesDropdown">
                                Služby
                                <svg class="dropdown-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                            <div class="dropdown-menu" id="servicesDropdownMenu">
                                <div class="dropdown-grid">
                                    ${servicesDropdownHTML}
                                </div>
                                <div class="dropdown-footer">
                                    <a href="${getPagePath('kontakt')}" class="btn btn-primary btn-sm">Kontaktovať nás</a>
                                </div>
                            </div>
                        </div>
                        <a href="${getPagePath('podnikatelsky-balik')}" class="nav-link ${currentPage === 'podnikatelsky-balik' ? 'active' : ''}">Podnikateľský balík</a>
                        <a href="${getPagePath('skolenia-webinare')}" class="nav-link ${currentPage === 'skolenia-webinare' ? 'active' : ''}">Školenia a webináre</a>
                        <a href="${getPagePath('blog')}" class="nav-link">Blog</a>
                    </div>
                    <a href="${getPagePath('kontakt')}" class="btn btn-primary">Konzultácia</a>
                    <div class="mobile-menu-toggle" id="mobileMenuToggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>

            <!-- Mobile Menu -->
            <div class="mobile-menu" id="mobileMenu">
                <div class="mobile-menu-header">
                    <div class="mobile-logo">
                        <img src="${basePath}sources/logo.png" alt="LegisPro" class="logo-image">
                        <h3>LegisPro</h3>
                    </div>
                    <button class="mobile-menu-close" id="mobileMenuClose">✕</button>
                </div>
                <a href="${getPagePath('index')}" class="nav-link">Domov</a>
                
                <div class="mobile-dropdown">
                    <button class="mobile-dropdown-toggle">
                        Služby
                        <svg class="dropdown-arrow" width="16" height="16" viewBox="0 0 24 24">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <div class="mobile-dropdown-content">
                        ${services.map(service => `
                            <a href="${getPagePath(service.slug)}" class="mobile-dropdown-item">
                                <span class="mobile-service-icon">${service.icon}</span>
                                ${service.name}
                            </a>
                        `).join('')}
                    </div>
                </div>
                
                <a href="${getPagePath('podnikatelsky-balik')}" class="nav-link">Podnikateľský balík</a>
                <a href="${getPagePath('skolenia-webinare')}" class="nav-link">Školenia a webináre</a>
                <a href="${getPagePath('blog')}" class="nav-link">Blog</a>
                <a href="${getPagePath('kontakt')}" class="btn btn-primary">Konzultácia</a>
            </div>
        `;
    }

    // Create Footer HTML
    function createFooter() {
        const basePath = getBasePath();
        
        return `
            <!-- Footer -->
            <footer class="footer">
                <div class="container">
                    <div class="footer-top">
                        <div class="footer-main">
                            <h5>Potrebujete poradiť?</h5>
                        </div>
                        <div class="footer-emergency">
                            <a href="tel:+421948528265" class="footer-phone-btn">+421 948 528 265</a>
                        </div>
                    </div>
                    <div class="footer-links">
                        <div class="footer-column">
                            <h5>Spoločnosť</h5>
                            <nav>
                                <a href="${getPagePath('index')}">Domov</a>
                                <a href="${getPagePath('kontakt')}">Kontakt</a>
                                <a href="${getPagePath('kontakt')}">Konzultácia</a>
                                <a href="${getPagePath('blog')}">Blog</a>
                            </nav>
                        </div>
                        <div class="footer-column">
                            <h5>Služby</h5>
                            <nav>
                                <a href="${getPagePath('start-upy-greenfieldy')}">START UPy</a>
                                <a href="${getPagePath('gdpr')}">GDPR</a>
                                <a href="${getPagePath('reality')}">Reality</a>
                                <a href="${getPagePath('ecommerce')}">e-Commerce</a>
                            </nav>
                        </div>
                        <div class="footer-column">
                            <h5>Právne oblasti</h5>
                            <nav>
                                <a href="${getPagePath('sporove-zastupovanie')}">Sporové zastupovanie</a>
                                <a href="${getPagePath('trestne-pravo')}">Trestné právo</a>
                                <a href="${getPagePath('danove-pravo')}">Daňové právo</a>
                                <a href="${getPagePath('vymahanie-pohladavok')}">Vymáhanie pohľadávok</a>
                            </nav>
                        </div>
                        <div class="footer-column">
                            <h5>Ďalšie služby</h5>
                            <nav>
                                <a href="${getPagePath('optimalizacie')}">Optimalizácie</a>
                                <a href="${getPagePath('due-diligence')}">Due Diligence</a>
                            </nav>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <div class="social-links">
                            <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a href="https://x.com/" target="_blank" aria-label="Twitter/X">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.80-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
                                </svg>
                            </a>
                        </div>
                        <div class="footer-copyright">
                            <p>© ${new Date().getFullYear()} LegisPro, s.r.o. Všetky práva vyhradené. | <a href="${getPagePath('gdpr')}">Ochrana osobných údajov</a></p>
                            <p><a href="https://aebdigital.sk" target="_blank">tvorba stránky AEB Digital</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }

    // Create Location Section HTML
    function createLocationSection() {
        return `
            <!-- Location Section -->
            <section class="location">
                <div class="location-background"></div>
                <div class="container">
                    <div class="location-content">
                        <div class="location-info">
                            <div class="location-item">
                                <h4>Nájdite nás</h4>
                                <p><a href="https://maps.google.com/?q=Sládkovičova+1+949+01+Nitra" target="_blank">Sládkovičova 1, 949 01 Nitra, Slovenská republika</a></p>
                            </div>
                            <div class="location-item">
                                <h4>Kontaktujte nás</h4>
                                <p><a href="mailto:office@legispro.sk">office@legispro.sk</a></p>
                                <p><a href="tel:+421 948 528 265">+421 948 528 265</a></p>
                            </div>
                        </div>
                        <div class="map">
                            <div class="map-overlay" id="mapOverlay">
                                <div class="map-overlay-content">
                                    <h4>Pre interakciu s mapou kliknite</h4>
                                </div>
                            </div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10498.640103596685!2d18.084437315673!3d48.3146597792368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f11.1!3m3!1m2!1s0x476a89e6a5a3a2b7%3A0x400f7d1c69788a0!2sSl%C3%A1dkovi%C4%8Dova%201%2C%20949%2001%20Nitra-Chrenov%C3%A1%2C%20Slovakia!5e0!3m2!1sen!2sus!4v1609452345678"
                                    width="100%" 
                                    height="100%" 
                                    style="border:0;" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    // Insert header and footer
    function insertNavigation() {
        // Insert header at the beginning of body
        const headerContainer = document.getElementById('globalHeader');
        if (headerContainer) {
            headerContainer.innerHTML = createHeader();
        } else {
            document.body.insertAdjacentHTML('afterbegin', createHeader());
        }

        // Insert location section before footer (only if not on homepage)
        const currentPath = window.location.pathname;
        const isHomepage = currentPath.endsWith('/index.html') || currentPath.endsWith('/') || currentPath.split('/').pop() === '';
        
        if (!isHomepage) {
            const locationContainer = document.getElementById('globalLocation');
            if (locationContainer) {
                locationContainer.innerHTML = createLocationSection();
            } else {
                document.body.insertAdjacentHTML('beforeend', createLocationSection());
            }
        }

        // Insert footer at the end of body
        const footerContainer = document.getElementById('globalFooter');
        if (footerContainer) {
            footerContainer.innerHTML = createFooter();
        } else {
            document.body.insertAdjacentHTML('beforeend', createFooter());
        }
    }

    // Initialize navigation
    insertNavigation();

    // Navigation functionality
    function initializeNavigation() {
        const navbar = document.getElementById('navbar');
        const mobileToggle = document.getElementById('mobileMenuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileClose = document.getElementById('mobileMenuClose');
        const servicesDropdown = document.getElementById('servicesDropdown');
        const servicesDropdownMenu = document.getElementById('servicesDropdownMenu');

        // Navbar scroll effect
        function handleScroll() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initialize on load

        // Mobile menu toggle
        if (mobileToggle && mobileMenu) {
            mobileToggle.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
                mobileToggle.classList.toggle('active');
                document.body.classList.toggle('menu-open');
            });
        }

        // Mobile menu close button
        if (mobileClose) {
            mobileClose.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        }

        // Services dropdown (desktop)
        if (servicesDropdown && servicesDropdownMenu) {
            let dropdownTimeout;

            servicesDropdown.addEventListener('click', function(e) {
                e.preventDefault();
                servicesDropdownMenu.classList.toggle('active');
            });

            // Hover functionality for better UX
            const navDropdown = servicesDropdown.closest('.nav-dropdown');
            
            navDropdown.addEventListener('mouseenter', function() {
                clearTimeout(dropdownTimeout);
                servicesDropdownMenu.classList.add('active');
            });

            navDropdown.addEventListener('mouseleave', function() {
                dropdownTimeout = setTimeout(() => {
                    servicesDropdownMenu.classList.remove('active');
                }, 300);
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', function(e) {
                if (!navDropdown.contains(e.target)) {
                    servicesDropdownMenu.classList.remove('active');
                }
            });
        }

        // Mobile dropdown functionality
        const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
        mobileDropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function() {
                const content = this.nextElementSibling;
                const arrow = this.querySelector('.dropdown-arrow');
                
                content.classList.toggle('active');
                arrow.classList.toggle('rotated');
            });
        });

        // Close mobile menu when clicking on links
        const mobileLinks = mobileMenu.querySelectorAll('a:not(.mobile-dropdown-toggle)');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                servicesDropdownMenu.classList.remove('active');
                mobileMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }

    // Initialize after DOM is ready
    setTimeout(initializeNavigation, 100);

    // Initialize map overlay functionality
    function initializeMapOverlay() {
        const mapOverlay = document.getElementById('mapOverlay');
        if (mapOverlay) {
            const mapContainer = mapOverlay.closest('.map');
            
            // Hide overlay when clicked
            mapOverlay.addEventListener('click', function() {
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
                    mapOverlay.classList.remove('hidden');
                    
                    // Re-enable Lenis when overlay is reactivated
                    if (window.lenis) {
                        window.lenis.start();
                    }
                }
            });
        }
    }

    // Initialize map overlay after navigation is inserted
    setTimeout(initializeMapOverlay, 200);

    // Lenis control functions for modals
    window.lenisControl = {
        stop: function() {
            if (window.lenis) {
                window.lenis.stop();
            }
        },
        start: function() {
            if (window.lenis) {
                window.lenis.start();
            }
        }
    };

    // Smooth scrolling handled by Lenis - legacy fallback
    document.addEventListener('click', function(e) {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            
            if (target) {
                if (window.lenis) {
                    // Use Lenis for smooth scrolling
                    window.lenis.scrollTo(target, {
                        offset: -80, // Account for fixed header
                        duration: 1.2
                    });
                } else {
                    // Fallback for when Lenis is not available
                    const headerHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        }
    });
});