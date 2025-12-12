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

    // Translations object
    const translations = {
        sk: {
            nav: {
                home: 'Domov',
                services: 'Služby',
                business_package: 'Podnikateľský balík',
                training: 'Školenia a webináre',
                blog: 'Blog',
                contact: 'Konzultácia',
                subtitle: 'Advokátska kancelária'
            },
            services: {
                'start-ups-greenfield-projects': { name: 'Realizácia Start-up & Greenfield projektov', description: 'Spustenie nových projektov' },
                'gdpr': { name: 'GDPR', description: 'Ochrana osobných údajov' },
                'optimization-solutions': { name: 'Optimalizačné riešenia', description: 'Audit a optimalizácia procesov' },
                'due-diligence': { name: 'Due Diligence', description: 'Analýza obchodných transakcií' },
                'commercial-law': { name: 'Obchodné právo', description: 'Komplexné služby obchodného práva' },
                'financial-law': { name: 'Finančné právo', description: 'Daňové a finančné poradenstvo' },
                'ecommerce': { name: 'e-Commerce', description: 'Právne služby pre online podnikanie' },
                'real-estate': { name: 'Nehnuteľnosti', description: 'Právne služby v oblasti nehnuteľností' },
                'litigations': { name: 'Sporové zastupovanie', description: 'Zastupovanie v sporoch' },
                'criminal-law': { name: 'Trestné právo', description: 'Obhajoba v trestnom konaní' }
            },
            footer: {
                company: 'Spoločnosť',
                services: 'Služby',
                legal_areas: 'Právne oblasti',
                other_services: 'Ďalšie služby',
                home: 'Domov',
                contact: 'Kontakt',
                consultation: 'Konzultácia',
                blog: 'Blog',
                startups: 'Start-upy',
                gdpr: 'GDPR',
                real_estate: 'Nehnuteľnosti',
                ecommerce: 'e-Commerce',
                disputes: 'Spory',
                criminal: 'Trestné právo',
                financial: 'Finančné právo',
                debt: 'Obchodné právo',
                optimization: 'Optimalizácie',
                due_diligence: 'Due Diligence',
                need_help: 'Potrebujete poradiť?',
                all_rights: 'Všetky práva vyhradené.',
                privacy_policy: 'Ochrana osobných údajov',
                cookies: 'Súbory cookies',
                website_by: 'tvorba stránky AEB Digital'
            },
            location: {
                find_us: 'Nájdite nás',
                contact_us: 'Kontaktujte nás',
                map_interaction: 'Pre interakciu s mapou kliknite'
            }
        },
        en: {
            nav: {
                home: 'Home',
                services: 'Services',
                business_package: 'Business Package',
                training: 'Training & Webinars',
                blog: 'Blog',
                contact: 'Consultation',
                subtitle: 'Law Firm'
            },
            services: {
                'start-ups-greenfield-projects': { name: 'Start-up & Greenfield Projects', description: 'Launching new projects' },
                'gdpr': { name: 'GDPR', description: 'Personal data protection' },
                'optimization-solutions': { name: 'Optimization Solutions', description: 'Process audit and optimization' },
                'due-diligence': { name: 'Due Diligence', description: 'Business transaction analysis' },
                'commercial-law': { name: 'Commercial Law', description: 'Comprehensive commercial law services' },
                'financial-law': { name: 'Financial Law', description: 'Tax and financial consulting' },
                'ecommerce': { name: 'e-Commerce', description: 'Legal services for online business' },
                'real-estate': { name: 'Real Estate', description: 'Legal services in real estate' },
                'litigations': { name: 'Litigations', description: 'Legal representation in disputes' },
                'criminal-law': { name: 'Criminal Law', description: 'Defense in criminal proceedings' }
            },
            footer: {
                company: 'Company',
                services: 'Services',
                legal_areas: 'Legal Areas',
                other_services: 'Other Services',
                home: 'Home',
                contact: 'Contact',
                consultation: 'Consultation',
                blog: 'Blog',
                startups: 'Start-ups',
                gdpr: 'GDPR',
                real_estate: 'Real Estate',
                ecommerce: 'e-Commerce',
                disputes: 'Disputes',
                criminal: 'Criminal Law',
                financial: 'Financial Law',
                debt: 'Commercial Law',
                optimization: 'Optimizations',
                due_diligence: 'Due Diligence',
                need_help: 'Need help?',
                all_rights: 'All rights reserved.',
                privacy_policy: 'Privacy Policy',
                cookies: 'Cookies',
                website_by: 'website by AEB Digital'
            },
            location: {
                find_us: 'Find Us',
                contact_us: 'Contact Us',
                map_interaction: 'Click to interact with the map'
            }
        },
        de: {
            nav: {
                home: 'Startseite',
                services: 'Dienstleistungen',
                business_package: 'Unternehmenspaket',
                training: 'Schulungen & Webinare',
                blog: 'Blog',
                contact: 'Beratung',
                subtitle: 'Anwaltskanzlei'
            },
            services: {
                'start-ups-greenfield-projects': { name: 'Start-ups & Greenfield-Projekte', description: 'Start neuer Projekte' },
                'gdpr': { name: 'GDPR', description: 'Datenschutz' },
                'optimization-solutions': { name: 'Optimierungslösungen', description: 'Prozessaudit und -optimierung' },
                'due-diligence': { name: 'Due Diligence', description: 'Analyse von Geschäftstransaktionen' },
                'commercial-law': { name: 'Handelsrecht', description: 'Umfassende handelsrechtliche Dienstleistungen' },
                'financial-law': { name: 'Finanzrecht', description: 'Steuer- und Finanzberatung' },
                'ecommerce': { name: 'e-Commerce', description: 'Rechtsdienstleistungen für Online-Geschäfte' },
                'real-estate': { name: 'Immobilien', description: 'Rechtsdienstleistungen im Immobilienbereich' },
                'litigations': { name: 'Streitvertretung', description: 'Rechtsvertretung bei Streitigkeiten' },
                'criminal-law': { name: 'Strafrecht', description: 'Verteidigung in Strafverfahren' }
            },
            footer: {
                company: 'Unternehmen',
                services: 'Dienstleistungen',
                legal_areas: 'Rechtsbereiche',
                other_services: 'Weitere Dienstleistungen',
                home: 'Startseite',
                contact: 'Kontakt',
                consultation: 'Beratung',
                blog: 'Blog',
                startups: 'Start-ups',
                gdpr: 'GDPR',
                real_estate: 'Immobilien',
                ecommerce: 'e-Commerce',
                disputes: 'Streitigkeiten',
                criminal: 'Strafrecht',
                financial: 'Finanzrecht',
                debt: 'Handelsrecht',
                optimization: 'Optimierungen',
                due_diligence: 'Due Diligence',
                need_help: 'Brauchen Sie Hilfe?',
                all_rights: 'Alle Rechte vorbehalten.',
                privacy_policy: 'Datenschutzrichtlinie',
                cookies: 'Cookies',
                website_by: 'Website von AEB Digital'
            },
            location: {
                find_us: 'Finden Sie uns',
                contact_us: 'Kontaktieren Sie uns',
                map_interaction: 'Klicken Sie für Karteninteraktion'
            }
        },
        fr: {
            nav: {
                home: 'Accueil',
                services: 'Services',
                business_package: 'Package Entreprise',
                training: 'Formations & Webinaires',
                blog: 'Blog',
                contact: 'Consultation',
                subtitle: 'Cabinet d\'avocats'
            },
            services: {
                'start-ups-greenfield-projects': { name: 'START UPs & Greenfields', description: 'Lancement de nouveaux projets' },
                'gdpr': { name: 'GDPR', description: 'Protection des données personnelles' },
                'optimization-solutions': { name: "Solutions d'optimisation", description: 'Audit et optimisation des processus' },
                'due-diligence': { name: 'Due Diligence', description: "Analyse des transactions commerciales" },
                'commercial-law': { name: 'Droit Commercial', description: 'Services complets en droit commercial' },
                'financial-law': { name: 'Droit financier', description: 'Conseil fiscal et financier' },
                'ecommerce': { name: 'e-Commerce', description: 'Services juridiques pour le commerce en ligne' },
                'real-estate': { name: 'Biens immobiliers', description: 'Services juridiques immobiliers' },
                'litigations': { name: 'Litiges', description: 'Représentation dans les litiges' },
                'criminal-law': { name: 'Droit pénal', description: 'Défense dans les procédures pénales' }
            },
            footer: {
                company: 'Société',
                services: 'Services',
                legal_areas: 'Domaines Juridiques',
                other_services: 'Autres Services',
                home: 'Accueil',
                contact: 'Contact',
                consultation: 'Consultation',
                blog: 'Blog',
                startups: 'Start-ups',
                gdpr: 'GDPR',
                real_estate: 'Immobilier',
                ecommerce: 'e-Commerce',
                disputes: 'Litiges',
                criminal: 'Droit Pénal',
                financial: 'Droit Financier',
                debt: 'Droit Commercial',
                optimization: 'Optimisations',
                due_diligence: 'Due Diligence',
                need_help: 'Besoin d\'aide?',
                all_rights: 'Tous droits réservés.',
                privacy_policy: 'Politique de Confidentialité',
                cookies: 'Cookies',
                website_by: 'site web par AEB Digital'
            },
            location: {
                find_us: 'Trouvez-nous',
                contact_us: 'Contactez-nous', 
                map_interaction: 'Cliquez pour interagir avec la carte'
            }
        }
    };
    
    // Service pages data
    const services = [
        {
            name: 'Commercial Law',
            slug: 'commercial-law',
            icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" stroke-width="2"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 6l2 2M6 16l2 2M16 18l2-2M6 8l2-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
            description: 'Comprehensive commercial law services'
        },
        {
            name: 'Financial Law',
            slug: 'financial-law',
            icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="16" rx="2" stroke="currentColor" stroke-width="2"/><path d="M6 6h4v4H6zM14 6h4v2h-4zM14 10h4v2h-4zM6 12h12v2H6zM6 16h12v2H6z" stroke="currentColor" stroke-width="1.5"/><path d="M21 8h2v2h-2zM21 12h2v2h-2z" fill="currentColor"/></svg>',
            description: 'Tax and financial consulting'
        },
        {
            name: 'Criminal Law',
            slug: 'criminal-law',
            icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2"/></svg>',
            description: 'Defense in criminal proceedings'
        },
        {
            name: 'Litigations',
            slug: 'litigations',
            icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" stroke="currentColor" stroke-width="2"/><polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="2"/><line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" stroke-width="2"/><line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" stroke-width="2"/><polyline points="10,9 9,9 8,9" stroke="currentColor" stroke-width="2"/></svg>',
            description: 'Legal representation in disputes'
        },
        {
            name: 'START UPs & Greenfield Projects',
            slug: 'start-ups-greenfield-projects',
            icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.663 17h4.673M12 3l1.5 4.5 4.5 1.5-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            description: 'Launching new projects'
        },
        {
            name: 'Real Estate',
            slug: 'real-estate',
            icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="2"/><polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" stroke-width="2"/></svg>',
            description: 'Real estate transactions'
        },
        {
            name: 'Due Diligence',
            slug: 'due-diligence',
            icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/><path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2"/></svg>',
            description: 'Business transaction analysis'
        },
        {
            name: 'GDPR',
            slug: 'gdpr',
            icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="16" r="1" fill="currentColor"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" stroke-width="2"/></svg>',
            description: 'Personal data protection'
        },
        {
            name: 'Optimization Solutions',
            slug: 'optimization-solutions',
            icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12" stroke="currentColor" stroke-width="2" fill="none"/></svg>',
            description: 'Process audit and optimization'
        },
        {
            name: 'e-Commerce',
            slug: 'ecommerce',
            icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1" stroke="currentColor" stroke-width="2"/><circle cx="20" cy="21" r="1" stroke="currentColor" stroke-width="2"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="currentColor" stroke-width="2"/></svg>',
            description: 'Legal services for e-shops'
        }
    ];

    // Get services data based on current language
    function getServicesData() {
        const currentLang = getCurrentLanguage();
        const serviceTranslations = translations[currentLang]?.services || translations.sk.services;
        
        return services.map(service => ({
            ...service,
            name: serviceTranslations[service.slug]?.name || service.name,
            description: serviceTranslations[service.slug]?.description || service.description
        }));
    }

    // Get translation text
    function getTranslation(path) {
        const currentLang = getCurrentLanguage();
        const keys = path.split('.');
        let result = translations[currentLang] || translations.sk;
        
        for (const key of keys) {
            if (result && typeof result === 'object' && key in result) {
                result = result[key];
            } else {
                // Fallback to Slovak if translation missing
                result = translations.sk;
                for (const fallbackKey of keys) {
                    if (result && typeof result === 'object' && fallbackKey in result) {
                        result = result[fallbackKey];
                    } else {
                        return key; // Return key if no translation found
                    }
                }
                break;
            }
        }
        
        return typeof result === 'string' ? result : path;
    }

    // Get services folder name based on language
    function getServicesFolder(language) {
        switch(language) {
            case 'en': return 'services';
            case 'de': return 'dienstleistungen';
            case 'fr': return 'services';
            case 'sk':
            default: return 'sluzby';
        }
    }

    // Determine current path and create appropriate URLs
    function getBasePath() {
        const path = window.location.pathname;
        // Remove trailing slash for calculation if present, unless it is just "/"
        const cleanPath = (path.length > 1 && path.endsWith('/')) ? path.slice(0, -1) : path;
        const segments = cleanPath.split('/').filter(Boolean); // Remove empty strings
        
        // If we are at root, return './'
        if (segments.length === 0) return './';
        
        // Return repeated '../'
        return '../'.repeat(segments.length);
    }

    function getPagePath(page) {
        const basePath = getBasePath();
        const currentLang = getCurrentLanguage();
        
        // For index, return root language path
        if (page === 'index') {
            if (currentLang === 'sk') {
                return basePath + 'sk/';
            } else {
                return basePath + currentLang + '/';
            }
        }
        
        // Map page names based on language
        let actualPageName = page;
        if (currentLang === 'sk') {
            const pageMapping = {
                'start-ups-greenfield-projects': 'start-upy-greenfieldy',
                'real-estate': 'reality',
                'litigations': 'sporove-zastupovanie', 
                'criminal-law': 'trestne-pravo',
                'financial-law': 'danove-pravo',
                'commercial-law': 'obchodne-pravo',
                'optimization-solutions': 'optimalizacie'
            };
            actualPageName = pageMapping[page] || page;
        } else if (currentLang === 'en') {
            const pageMapping = {
                'kontakt': 'contact',
                'ochrana-osobnych-udajov': 'privacy-policy',
                'podnikatelsky-balik': 'business-package',
                'skolenia-webinare': 'training-webinars',
                // Service page mappings
                'start-ups-greenfield-projects': 'start-ups-greenfield-projects',
                'real-estate': 'real-estate',
                'ecommerce': 'ecommerce',
                'litigations': 'litigations',
                'criminal-law': 'criminal-law',
                'financial-law': 'financial-law',
                'commercial-law': 'commercial-law',
                'optimization-solutions': 'optimization-solutions'
            };
            actualPageName = pageMapping[page] || page;
        } else if (currentLang === 'de') {
            const pageMapping = {
                'kontakt': 'kontakt',
                'ochrana-osobnych-udajov': 'datenschutzrichtlinie',
                'podnikatelsky-balik': 'unternehmenspaket',
                'skolenia-webinare': 'schulungen-webinare',
                // Service page mappings
                'start-ups-greenfield-projects': 'start-ups-greenfields',
                'real-estate': 'immobilien',
                'ecommerce': 'e-commerce',
                'litigations': 'streitvertretung',
                'criminal-law': 'strafrecht',
                'financial-law': 'finanzrecht',
                'commercial-law': 'handelsrecht',
                'optimization-solutions': 'optimierungsloesungen'
            };
            actualPageName = pageMapping[page] || page;
        } else if (currentLang === 'fr') {
            const pageMapping = {
                'kontakt': 'contact',
                'ochrana-osobnych-udajov': 'politique-confidentialite',
                'podnikatelsky-balik': 'package-entreprise',
                'skolenia-webinare': 'formations-webinaires',
                // Service page mappings
                'start-ups-greenfield-projects': 'start-ups-greenfields',
                'real-estate': 'biens-immobiliers',
                'ecommerce': 'e-commerce',
                'litigations': 'litiges',
                'criminal-law': 'droit-penal',
                'financial-law': 'droit-financier',
                'commercial-law': 'droit-commercial',
                'optimization-solutions': 'solutions-optimisation'
            };
            actualPageName = pageMapping[page] || page;
        }
        
        // Build the full path based on current language
        const servicesFolder = getServicesFolder(currentLang);
        
        if (currentLang === 'sk') {
            // Slovak pages
            if (actualPageName === 'kontakt' || actualPageName === 'blog' || actualPageName === 'ochrana-osobnych-udajov') {
                return basePath + 'sk/' + actualPageName;
            }
            if (actualPageName === 'podnikatelsky-balik' || actualPageName === 'skolenia-webinare') {
                return basePath + 'sk/sluzby/' + actualPageName;
            }
            // Service pages
            return basePath + 'sk/sluzby/' + actualPageName;
        } else {
            // Other language pages
            const regularPages = [
                'contact', 'kontakt', 'blog', 'privacy-policy', 'datenschutzrichtlinie', 'politique-confidentialite'
            ];
            const businessPages = [
                'business-package', 'unternehmenspaket', 'package-entreprise', 
                'training-webinars', 'schulungen-webinare', 'formations-webinaires'
            ];
            
            if (regularPages.includes(actualPageName)) {
                return basePath + currentLang + '/' + actualPageName;
            }
            if (businessPages.includes(actualPageName)) {
                return basePath + currentLang + '/' + servicesFolder + '/' + actualPageName;
            }
            // All other pages (service pages)
            return basePath + currentLang + '/' + servicesFolder + '/' + actualPageName;
        }
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

    // Detect current language from URL path
    function getCurrentLanguage() {
        const path = window.location.pathname;
        if (path.includes('/sk/')) return 'sk';
        if (path.includes('/en/')) return 'en';
        if (path.includes('/de/')) return 'de';
        if (path.includes('/fr/')) return 'fr';
        return 'sk'; // Default to Slovak
    }

    // Get correct logo path relative to root
    function getLogoPath() {
        return getBasePath() + 'sources/logo.png';
    }

    // Update language toggle display
    function updateLanguageToggle() {
        const currentLang = getCurrentLanguage();
        const currentFlag = document.querySelector('.current-flag');
        const currentLangText = document.querySelector('.current-lang');
        
        const languages = {
            'sk': { flag: 'https://flagicons.lipis.dev/flags/4x3/sk.svg', name: 'Slovenčina', code: 'SK' },
            'en': { flag: 'https://flagicons.lipis.dev/flags/4x3/gb.svg', name: 'English', code: 'EN' },
            'de': { flag: 'https://flagicons.lipis.dev/flags/4x3/de.svg', name: 'Deutsch', code: 'DE' },
            'fr': { flag: 'https://flagicons.lipis.dev/flags/4x3/fr.svg', name: 'Français', code: 'FR' }
        };
        
        if (currentFlag && currentLangText && languages[currentLang]) {
            currentFlag.src = languages[currentLang].flag;
            currentFlag.alt = languages[currentLang].name;
            currentLangText.textContent = languages[currentLang].code;
        }
    }

    // Create Header HTML
    function createHeader() {
        const currentPage = getCurrentPage();
        const basePath = getBasePath();
        const servicesData = getServicesData();
        
        // Build services dropdown
        let servicesDropdownHTML = '';
        servicesData.forEach(service => {
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
                            <img src="${getLogoPath()}" alt="LegisPro" class="logo-image">
                            <div class="logo-text">
                                <h3>LegisPro</h3>
                                <span class="logo-subtitle">${getTranslation('nav.subtitle')}</span>
                            </div>
                        </a>
                    </div>
                    <div class="nav-menu" id="navMenu">
                        <a href="${getPagePath('index')}" class="nav-link ${currentPage === 'index' ? 'active' : ''}" data-i18n="nav.home">${getTranslation('nav.home')}</a>
                        <div class="nav-dropdown">
                            <a href="#" class="nav-link dropdown-toggle" id="servicesDropdown" data-i18n="nav.services">
                                ${getTranslation('nav.services')}
                                <svg class="dropdown-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                            <div class="dropdown-menu" id="servicesDropdownMenu">
                                <div class="dropdown-grid">
                                    ${servicesDropdownHTML}
                                </div>
                                <div class="dropdown-footer">
                                    <a href="${getPagePath('kontakt')}" class="btn btn-primary btn-sm">${getTranslation('nav.contact')}</a>
                                </div>
                            </div>
                        </div>
                        <a href="${getPagePath('podnikatelsky-balik')}" class="nav-link ${currentPage === 'podnikatelsky-balik' ? 'active' : ''}" data-i18n="nav.business_package">${getTranslation('nav.business_package')}</a>
                        <a href="${getPagePath('skolenia-webinare')}" class="nav-link ${currentPage === 'skolenia-webinare' ? 'active' : ''}" data-i18n="nav.training">${getTranslation('nav.training')}</a>
                        <a href="${getPagePath('blog')}" class="nav-link" data-i18n="nav.blog">${getTranslation('nav.blog')}</a>
                    </div>
                    <!-- Language Toggle -->
                    <div class="language-toggle">
                        <div class="current-language">
                            <img src="https://flagicons.lipis.dev/flags/4x3/sk.svg" alt="Slovenčina" class="current-flag" width="20" height="15">
                            <span class="current-lang">SK</span>
                            <svg class="lang-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="language-dropdown">
                            <button class="lang-option" data-lang="sk">
                                <img src="https://flagicons.lipis.dev/flags/4x3/sk.svg" alt="Slovenčina" width="20" height="15">
                                <span>Slovenčina</span>
                            </button>
                            <button class="lang-option" data-lang="en">
                                <img src="https://flagicons.lipis.dev/flags/4x3/gb.svg" alt="English" width="20" height="15">
                                <span>English</span>
                            </button>
                            <button class="lang-option" data-lang="de">
                                <img src="https://flagicons.lipis.dev/flags/4x3/de.svg" alt="Deutsch" width="20" height="15">
                                <span>Deutsch</span>
                            </button>
                            <button class="lang-option" data-lang="fr">
                                <img src="https://flagicons.lipis.dev/flags/4x3/fr.svg" alt="Français" width="20" height="15">
                                <span>Français</span>
                            </button>
                        </div>
                    </div>
                    
                    <a href="${getPagePath('kontakt')}" class="btn btn-primary" data-i18n="nav.contact">${getTranslation('nav.contact')}</a>
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
                        <img src="${getLogoPath()}" alt="LegisPro" class="logo-image">
                        <div class="logo-text">
                            <h3>LegisPro</h3>
                            <span class="logo-subtitle">${getTranslation('nav.subtitle')}</span>
                        </div>
                    </div>
                    <button class="mobile-menu-close" id="mobileMenuClose">✕</button>
                </div>
                <a href="${getPagePath('index')}" class="nav-link">${getTranslation('nav.home')}</a>
                
                <div class="mobile-dropdown">
                    <button class="mobile-dropdown-toggle">
                        ${getTranslation('nav.services')}
                        <svg class="dropdown-arrow" width="16" height="16" viewBox="0 0 24 24">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <div class="mobile-dropdown-content">
                        ${servicesData.map(service => `
                            <a href="${getPagePath(service.slug)}" class="mobile-dropdown-item">
                                <span class="mobile-service-icon">${service.icon}</span>
                                ${service.name}
                            </a>
                        `).join('')}
                    </div>
                </div>
                
                <a href="${getPagePath('podnikatelsky-balik')}" class="nav-link">${getTranslation('nav.business_package')}</a>
                <a href="${getPagePath('skolenia-webinare')}" class="nav-link">${getTranslation('nav.training')}</a>
                <a href="${getPagePath('blog')}" class="nav-link">${getTranslation('nav.blog')}</a>
                <a href="${getPagePath('kontakt')}" class="btn btn-primary">${getTranslation('nav.contact')}</a>
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
                            <h5>${getTranslation('footer.need_help')}</h5>
                        </div>
                        <div class="footer-emergency">
                            <a href="tel:+421948528265" class="footer-phone-btn">+421 948 528 265</a>
                        </div>
                    </div>
                    <div class="footer-links">
                        <div class="footer-column">
                            <h5>${getTranslation('footer.company')}</h5>
                            <nav>
                                <a href="${getPagePath('index')}">${getTranslation('footer.home')}</a>
                                <a href="${getPagePath('kontakt')}">${getTranslation('footer.contact')}</a>
                                <a href="${getPagePath('kontakt')}">${getTranslation('footer.consultation')}</a>
                                <a href="${getPagePath('blog')}">${getTranslation('footer.blog')}</a>
                            </nav>
                        </div>
                        <div class="footer-column">
                            <h5>${getTranslation('footer.services')}</h5>
                            <nav>
                                <a href="${getPagePath('start-ups-greenfield-projects')}">${getTranslation('footer.startups')}</a>
                                <a href="${getPagePath('gdpr')}">${getTranslation('footer.gdpr')}</a>
                                <a href="${getPagePath('real-estate')}">${getTranslation('footer.real_estate')}</a>
                                <a href="${getPagePath('ecommerce')}">${getTranslation('footer.ecommerce')}</a>
                            </nav>
                        </div>
                        <div class="footer-column">
                            <h5>${getTranslation('footer.legal_areas')}</h5>
                            <nav>
                                <a href="${getPagePath('litigations')}">${getTranslation('footer.disputes')}</a>
                                <a href="${getPagePath('criminal-law')}">${getTranslation('footer.criminal')}</a>
                                <a href="${getPagePath('financial-law')}">${getTranslation('footer.financial')}</a>
                                <a href="${getPagePath('commercial-law')}">${getTranslation('footer.debt')}</a>
                            </nav>
                        </div>
                        <div class="footer-column">
                            <h5>${getTranslation('footer.other_services')}</h5>
                            <nav>
                                <a href="${getPagePath('optimization-solutions')}">${getTranslation('footer.optimization')}</a>
                                <a href="${getPagePath('due-diligence')}">${getTranslation('footer.due_diligence')}</a>
                            </nav>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <div class="footer-copyright">
                            <p>© ${new Date().getFullYear()} LegisPro, s.r.o. ${getTranslation('footer.all_rights')} | <a href="${getPagePath('ochrana-osobnych-udajov')}">${getTranslation('footer.privacy_policy')}</a> | <a href="#" onclick="openCookieSettings(); return false;">${getTranslation('footer.cookies')}</a></p>
                            <p><a href="https://aebdigital.sk" target="_blank">${getTranslation('footer.website_by')}</a></p>
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
                                <h4>${getTranslation('location.find_us')}</h4>
                                <p><a href="https://maps.google.com/?q=Sládkovičova+1+949+01+Nitra" target="_blank">Sládkovičova 1, 949 01 Nitra, Slovenská republika</a></p>
                            </div>
                            <div class="location-item">
                                <h4>${getTranslation('location.contact_us')}</h4>
                                <p><a href="mailto:office@legispro.sk">office@legispro.sk</a></p>
                                <p><a href="tel:+421 948 528 265">+421 948 528 265</a></p>
                            </div>
                        </div>
                        <div class="map">
                            <div class="map-overlay" id="mapOverlay">
                                <div class="map-overlay-content">
                                    <h4>${getTranslation('location.map_interaction')}</h4>
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

        // Language toggle functionality
        const languageToggle = document.querySelector('.language-toggle');
        const currentLanguage = document.querySelector('.current-language');
        const languageDropdown = document.querySelector('.language-dropdown');

        if (languageToggle && currentLanguage && languageDropdown) {
            currentLanguage.addEventListener('click', function() {
                languageDropdown.classList.toggle('active');
            });

            // Close language dropdown when clicking outside
            document.addEventListener('click', function(e) {
                if (!languageToggle.contains(e.target)) {
                    languageDropdown.classList.remove('active');
                }
            });

            // Language selection - redirect to index.html of selected language
            const langOptions = document.querySelectorAll('.lang-option');
            langOptions.forEach(option => {
                option.addEventListener('click', function() {
                    const selectedLang = this.getAttribute('data-lang');
                    
                    // Simple and robust language switching
                    const currentPath = window.location.pathname;
                    
                    // Find LegisPro root directory in the path
                    let rootPath = '';
                    const pathParts = currentPath.split('/');
                    const legisProIndex = pathParts.findIndex(part => part === 'LegisPro');
                    
                    if (legisProIndex !== -1) {
                        // We're in a LegisPro subdirectory structure
                        const rootParts = pathParts.slice(0, legisProIndex + 1);
                        rootPath = rootParts.join('/') + '/';
                    } else {
                        // Simple file system structure - go to root
                        rootPath = '/';
                    }
                    
                    // Construct absolute path
                    const newUrl = window.location.origin + rootPath + selectedLang + '/';
                    window.location.href = newUrl;
                });
            });
        }

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
    setTimeout(() => {
        initializeNavigation();
        updateLanguageToggle();
    }, 100);

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