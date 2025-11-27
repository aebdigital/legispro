// Service Sidebar Navigation Script

document.addEventListener('DOMContentLoaded', function() {
    // Service pages data
    const services = [
        {
            name: 'START UPy a Greenfieldy',
            slug: 'start-upy-greenfieldy',
            icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.663 17h4.673M12 3l1.5 4.5 4.5 1.5-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            description: 'Spustenie nových projektov'
        },
        {
            name: 'GDPR',
            slug: 'gdpr',
            icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="16" r="1" fill="currentColor"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" stroke-width="2"/></svg>',
            description: 'Ochrana osobných údajov'
        },
        {
            name: 'Optimalizačné riešenia',
            slug: 'optimalizacie',
            icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12" stroke="currentColor" stroke-width="2" fill="none"/></svg>',
            description: 'Audit a optimalizácia procesov'
        },
        {
            name: 'Due Diligence',
            slug: 'due-diligence',
            icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/><path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2"/></svg>',
            description: 'Analýza obchodných transakcií'
        },
        {
            name: 'Vymáhanie pohľadávok',
            slug: 'vymahanie-pohladavok',
            icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" fill="currentColor"/><path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" fill="currentColor"/><path d="M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" fill="currentColor"/><path d="M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" fill="currentColor"/><path d="M19.071 19.071c.391.391 1.024.391 1.415 0s.391-1.024 0-1.415-.024-.391-1.415 0-.391 1.024 0 1.415z" fill="currentColor"/><path d="M3.514 4.929c.391.391 1.024.391 1.415 0s.391-1.024 0-1.415-1.024-.391-1.415 0-.391 1.024 0 1.415z" fill="currentColor"/><path d="M19.071 4.929c.391-.391.391-1.024 0-1.415s-1.024-.391-1.415 0-.391 1.024 0 1.415 1.024.391 1.415 0z" fill="currentColor"/><path d="M3.514 19.071c.391-.391.391-1.024 0-1.415s-1.024-.391-1.415 0-.391 1.024 0 1.415 1.024.391 1.415 0z" fill="currentColor"/></svg>',
            description: 'Efektívne vymáhanie dlhů'
        },
        {
            name: 'Daňové a Finančné právo',
            slug: 'danove-pravo',
            icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" stroke-width="2"/><line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" stroke-width="2"/></svg>',
            description: 'Daňová optimalizácia'
        },
        {
            name: 'e-Commerce',
            slug: 'ecommerce',
            icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1" stroke="currentColor" stroke-width="2"/><circle cx="20" cy="21" r="1" stroke="currentColor" stroke-width="2"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="currentColor" stroke-width="2"/></svg>',
            description: 'Právne služby pre e-shopy'
        },
        {
            name: 'Reality',
            slug: 'reality',
            icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="2"/><polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" stroke-width="2"/></svg>',
            description: 'Realitné transakcie'
        },
        {
            name: 'Sporové zastupovanie',
            slug: 'sporove-zastupovanie',
            icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" stroke="currentColor" stroke-width="2"/><polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="2"/><line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" stroke-width="2"/><line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" stroke-width="2"/><polyline points="10,9 9,9 8,9" stroke="currentColor" stroke-width="2"/></svg>',
            description: 'Zastupovanie v súdnych sporoch'
        },
        {
            name: 'Trestné právo',
            slug: 'trestne-pravo',
            icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2"/></svg>',
            description: 'Obhajoba v trestnom konaní'
        }
    ];

    // Create sidebar HTML
    function createSidebar() {
        const currentPath = window.location.pathname;
        const currentPage = currentPath.split('/').pop().replace('.html', '');
        
        let sidebarHTML = `
            <div class="service-sidebar" id="serviceSidebar">
                <div class="sidebar-header">
                    <h3>Naše služby</h3>
                </div>
                <nav class="sidebar-nav">
        `;

        // Add contact page
        const isContact = currentPage === 'kontakt';
        const basePath = currentPath.includes('/sluzby/') ? '../../' : '../';
        sidebarHTML += `
            <div class="sidebar-nav-item">
                <a href="${basePath}pages/kontakt.html" class="sidebar-nav-link ${isContact ? 'active' : ''}">
                    <span class="sidebar-nav-icon">📧</span>
                    Kontakt
                </a>
            </div>
        `;

        // Add service pages
        services.forEach(service => {
            const isActive = currentPage === service.slug;
            const servicePath = currentPath.includes('/sluzby/') ? `${service.slug}.html` : `sluzby/${service.slug}.html`;
            sidebarHTML += `
                <div class="sidebar-nav-item">
                    <a href="${servicePath}" class="sidebar-nav-link ${isActive ? 'active' : ''}" title="${service.description}">
                        <span class="sidebar-nav-icon">${service.icon}</span>
                        ${service.name}
                    </a>
                </div>
            `;
        });

        sidebarHTML += `
                </nav>
            </div>
            <button class="service-sidebar-toggle" id="sidebarToggle" title="Zobraziť služby">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
        `;

        return sidebarHTML;
    }

    // Check if we're on a service page and create sticky service navigation
    const currentPath = window.location.pathname;
    const isServicePage = currentPath.includes('/sluzby/');
    
    if (isServicePage) {
        createServiceSidebar();
    } else {
        // Legacy mobile sidebar for other pages if needed
        const sidebarContainer = document.getElementById('serviceSidebar');
        if (sidebarContainer) {
            sidebarContainer.innerHTML = createSidebar();
            initializeMobileSidebar();
        }
    }
    
    function createServiceSidebar() {
        const currentPage = currentPath.split('/').pop().replace('.html', '');
        const serviceContainer = document.querySelector('.service-sidebar-content');
        
        if (!serviceContainer) return;
        
        let sidebarHTML = `
            <div class="service-navigation-card">
                <h3>Naše služby</h3>
                <ul class="service-nav-list">
        `;
        
        services.forEach(service => {
            const isActive = currentPage === service.slug;
            sidebarHTML += `
                <li>
                    <a href="${service.slug}.html" class="${isActive ? 'active' : ''}">
                        <span class="nav-icon">${service.icon}</span>
                        ${service.name}
                    </a>
                </li>
            `;
        });
        
        sidebarHTML += `
                </ul>
            </div>
        `;
        
        serviceContainer.innerHTML = sidebarHTML;
    }
    
    function initializeMobileSidebar() {
        const sidebar = document.getElementById('serviceSidebar').querySelector('.service-sidebar');
        const toggle = document.getElementById('sidebarToggle');
        
        if (toggle && sidebar) {
            toggle.addEventListener('click', function() {
                sidebar.classList.toggle('active');
                toggle.classList.toggle('active');
            });

            // Close sidebar when clicking outside
            document.addEventListener('click', function(event) {
                if (!sidebar.contains(event.target) && !toggle.contains(event.target)) {
                    sidebar.classList.remove('active');
                    toggle.classList.remove('active');
                }
            });

            // Close sidebar on escape key
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    sidebar.classList.remove('active');
                    toggle.classList.remove('active');
                }
            });
        }
    }

    // Add smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
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

    // Add loading animation for page transitions
    const pageLinks = document.querySelectorAll('a[href$=".html"]');
    pageLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Add loading class to body for transition effect
            document.body.classList.add('loading');
        });
    });

    // Remove loading class when page loads
    window.addEventListener('load', function() {
        document.body.classList.remove('loading');
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe service features and other animated elements
    const animatedElements = document.querySelectorAll('.service-feature, .contact-item, .checklist-item, .service-info-card, .service-contact-card');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Add breadcrumb functionality
    function createBreadcrumb() {
        const currentPath = window.location.pathname;
        const currentPage = currentPath.split('/').pop().replace('.html', '');
        
        let breadcrumbHTML = `
            <nav class="breadcrumb" aria-label="Breadcrumb">
                <a href="${currentPath.includes('/sluzby/') ? '../../' : '../'}index.html">Domov</a>
                <span class="breadcrumb-separator">›</span>
        `;

        if (currentPage === 'kontakt') {
            breadcrumbHTML += '<span class="breadcrumb-current">Kontakt</span>';
        } else {
            const service = services.find(s => s.slug === currentPage);
            if (service) {
                breadcrumbHTML += `<span class="breadcrumb-current">${service.name}</span>`;
            }
        }

        breadcrumbHTML += '</nav>';
        return breadcrumbHTML;
    }


    // Add keyboard navigation support
    document.addEventListener('keydown', function(event) {
        if (event.altKey && event.key === 's') {
            event.preventDefault();
            const toggle = document.getElementById('sidebarToggle');
            if (toggle) {
                toggle.click();
            }
        }
    });

    // Add service search functionality
    function addServiceSearch() {
        const sidebar = document.querySelector('.service-sidebar');
        if (!sidebar) return;

        const searchHTML = `
            <div class="sidebar-search">
                <input type="text" id="serviceSearch" placeholder="Vyhľadať službu..." class="sidebar-search-input">
            </div>
        `;

        const sidebarHeader = sidebar.querySelector('.sidebar-header');
        if (sidebarHeader) {
            sidebarHeader.insertAdjacentHTML('afterend', searchHTML);

            const searchInput = document.getElementById('serviceSearch');
            const navItems = sidebar.querySelectorAll('.sidebar-nav-item');

            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                
                navItems.forEach(item => {
                    const link = item.querySelector('.sidebar-nav-link');
                    const text = link.textContent.toLowerCase();
                    
                    if (text.includes(searchTerm)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        }
    }

    // Initialize search functionality
    setTimeout(addServiceSearch, 100);
});