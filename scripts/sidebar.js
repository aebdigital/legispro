// Multi-Language Service Sidebar Navigation Script

document.addEventListener('DOMContentLoaded', function() {
    // Language detection and configuration
    const currentPath = window.location.pathname;
    let currentLang = 'sk'; // Default to Slovak
    
    // Detect language from URL path
    if (currentPath.includes('/en/')) {
        currentLang = 'en';
    } else if (currentPath.includes('/de/')) {
        currentLang = 'de';
    } else if (currentPath.includes('/fr/')) {
        currentLang = 'fr';
    } else if (currentPath.includes('/sk/')) {
        currentLang = 'sk';
    }
    // Default remains 'sk' for root path without language prefix

    // Language-specific configuration
    const languageConfig = {
        sk: {
            servicesFolder: 'sluzby',
            contactPage: 'kontakt',
            servicesHeader: 'Naše služby',
            contactText: 'Kontakt',
            searchPlaceholder: 'Vyhľadať službu...', 
            sidebarTitle: 'Zobraziť služby'
        },
        en: {
            servicesFolder: 'services',
            contactPage: 'contact',
            servicesHeader: 'Our Services',
            contactText: 'Contact',
            searchPlaceholder: 'Search service...',
            sidebarTitle: 'Show services'
        },
        de: {
            servicesFolder: 'dienstleistungen',
            contactPage: 'kontakt',
            servicesHeader: 'Unsere Dienstleistungen',
            contactText: 'Kontakt',
            searchPlaceholder: 'Dienstleistung suchen...',
            sidebarTitle: 'Dienstleistungen anzeigen'
        },
        fr: {
            servicesFolder: 'services',
            contactPage: 'contact',
            servicesHeader: 'Nos Services',
            contactText: 'Contact',
            searchPlaceholder: 'Rechercher un service...',
            sidebarTitle: 'Afficher les services'
        }
    };

    // Multi-language service data
    const servicesData = {
        sk: [
            {
                name: 'Obchodné právo',
                slug: 'obchodne-pravo',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" stroke-width="2"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 6l2 2M6 16l2 2M16 18l2-2M6 8l2-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
                description: 'Komplexné služby obchodného práva'
            },
            {
                name: 'Daňové právo',
                slug: 'danove-pravo',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="16" rx="2" stroke="currentColor" stroke-width="2"/><path d="M6 6h4v4H6zM14 6h4v2h-4zM14 10h4v2h-4zM6 12h12v2H6zM6 16h12v2H6z" stroke="currentColor" stroke-width="1.5"/><path d="M21 8h2v2h-2zM21 12h2v2h-2z" fill="currentColor"/></svg>',
                description: 'Daňová optimalizácia'
            },
            {
                name: 'Trestné právo',
                slug: 'trestne-pravo',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2"/></svg>',
                description: 'Obhajoba v trestnom konaní'
            },
            {
                name: 'Sporové zastupovanie',
                slug: 'sporove-zastupovanie',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" stroke="currentColor" stroke-width="2"/><polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="2"/><line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" stroke-width="2"/><line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" stroke-width="2"/><polyline points="10,9 9,9 8,9" stroke="currentColor" stroke-width="2"/></svg>',
                description: 'Zastupovanie v súdnych sporoch'
            },
            {
                name: 'Realizácia Start-up & Greenfield projektov',
                slug: 'start-upy-greenfieldy',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.663 17h4.673M12 3l1.5 4.5 4.5 1.5-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
                description: 'Spustenie nových projektov'
            },
            {
                name: 'Reality',
                slug: 'reality',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="2"/><polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" stroke-width="2"/></svg>',
                description: 'Realitné transakcie'
            },
            {
                name: 'Due Diligence',
                slug: 'due-diligence',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/><path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2"/></svg>',
                description: 'Analýza obchodných transakcií'
            },
            {
                name: 'GDPR',
                slug: 'gdpr',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="16" r="1" fill="currentColor"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" stroke-width="2"/></svg>',
                description: 'GDPR služby a poradenstvo'
            },
            {
                name: 'Optimalizačné riešenia',
                slug: 'optimalizacie',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12" stroke="currentColor" stroke-width="2" fill="none"/></svg>',
                description: 'Audit a optimalizácia procesov'
            },
            {
                name: 'e-Commerce',
                slug: 'ecommerce',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1" stroke="currentColor" stroke-width="2"/><circle cx="20" cy="21" r="1" stroke="currentColor" stroke-width="2"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="currentColor" stroke-width="2"/></svg>',
                description: 'Právne služby pre e-shopy'
            }
        ],
        en: [
            {
                name: 'Commercial Law',
                slug: 'commercial-law',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" stroke-width="2"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 6l2 2M6 16l2 2M16 18l2-2M6 8l2-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
                description: 'Comprehensive commercial law services'
            },
            {
                name: 'Financial Law',
                slug: 'financial-law',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="16" rx="2" stroke="currentColor" stroke-width="2"/><path d="M6 6h4v4H6zM14 6h4v2h-4zM14 10h4v2h-4zM6 12h12v2H6zM6 16h12v2H6z" stroke="currentColor" stroke-width="1.5"/><path d="M21 8h2v2h-2zM21 12h2v2h-2z" fill="currentColor"/></svg>',
                description: 'Tax optimization'
            },
            {
                name: 'Criminal Law',
                slug: 'criminal-law',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2"/></svg>',
                description: 'Criminal defense'
            },
            {
                name: 'Litigations',
                slug: 'litigations',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" stroke="currentColor" stroke-width="2"/><polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="2"/><line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" stroke-width="2"/><line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" stroke-width="2"/><polyline points="10,9 9,9 8,9" stroke="currentColor" stroke-width="2"/></svg>',
                description: 'Legal representation in disputes'
            },
            {
                name: 'Start-up & Greenfield Projects',
                slug: 'start-ups-greenfield-projects',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.663 17h4.673M12 3l1.5 4.5 4.5 1.5-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
                description: 'Launch new projects'
            },
            {
                name: 'Real Estate',
                slug: 'real-estate',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="2"/><polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" stroke-width="2"/></svg>',
                description: 'Real estate transactions'
            },
            {
                name: 'Due Diligence',
                slug: 'due-diligence',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/><path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2"/></svg>',
                description: 'Business transaction analysis'
            },
            {
                name: 'GDPR',
                slug: 'gdpr',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="16" r="1" fill="currentColor"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" stroke-width="2"/></svg>',
                description: 'GDPR services and consulting'
            },
            {
                name: 'Optimization Solutions',
                slug: 'optimization-solutions',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12" stroke="currentColor" stroke-width="2" fill="none"/></svg>',
                description: 'Process audit and optimization'
            },
            {
                name: 'e-Commerce',
                slug: 'ecommerce',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1" stroke="currentColor" stroke-width="2"/><circle cx="20" cy="21" r="1" stroke="currentColor" stroke-width="2"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="currentColor" stroke-width="2"/></svg>',
                description: 'Legal services for e-shops'
            }
        ],
        de: [
            {
                name: 'Handelsrecht',
                slug: 'handelsrecht',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" stroke-width="2"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 6l2 2M6 16l2 2M16 18l2-2M6 8l2-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
                description: 'Effektive Schuldeneintreibung'
            },
            {
                name: 'Finanzrecht',
                slug: 'finanzrecht',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="16" rx="2" stroke="currentColor" stroke-width="2"/><path d="M6 6h4v4H6zM14 6h4v2h-4zM14 10h4v2h-4zM6 12h12v2H6zM6 16h12v2H6z" stroke="currentColor" stroke-width="1.5"/><path d="M21 8h2v2h-2zM21 12h2v2h-2z" fill="currentColor"/></svg>',
                description: 'Steueroptimierung'
            },
            {
                name: 'Strafrecht',
                slug: 'strafrecht',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2"/></svg>',
                description: 'Strafverteidigung'
            },
            {
                name: 'Streitvertretung',
                slug: 'streitvertretung',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" stroke="currentColor" stroke-width="2"/><polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="2"/><line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" stroke-width="2"/><line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" stroke-width="2"/><polyline points="10,9 9,9 8,9" stroke="currentColor" stroke-width="2"/></svg>',
                description: 'Rechtsvertretung in Streitigkeiten'
            },
            {
                name: 'Start-ups & Greenfield-Projekte',
                slug: 'start-ups-greenfields',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.663 17h4.673M12 3l1.5 4.5 4.5 1.5-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
                description: 'Neue Projekte starten'
            },
            {
                name: 'Immobilien',
                slug: 'immobilien',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="2"/><polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" stroke-width="2"/></svg>',
                description: 'Immobilientransaktionen'
            },
            {
                name: 'Due Diligence',
                slug: 'due-diligence',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/><path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2"/></svg>',
                description: 'Analyse von Geschäftstransaktionen'
            },
            {
                name: 'GDPR',
                slug: 'gdpr',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="16" r="1" fill="currentColor"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" stroke-width="2"/></svg>',
                description: 'GDPR-Dienstleistungen und Beratung'
            },
            {
                name: 'Optimierungslösungen',
                slug: 'optimierungsloesungen',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12" stroke="currentColor" stroke-width="2" fill="none"/></svg>',
                description: 'Prozessaudit und -optimierung'
            },
            {
                name: 'e-Commerce',
                slug: 'e-commerce',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1" stroke="currentColor" stroke-width="2"/><circle cx="20" cy="21" r="1" stroke="currentColor" stroke-width="2"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="currentColor" stroke-width="2"/></svg>',
                description: 'Rechtsdienstleistungen für Online-Shops'
            }
        ],
        fr: [
            {
                name: 'Droit Commercial',
                slug: 'droit-commercial',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" stroke-width="2"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 6l2 2M6 16l2 2M16 18l2-2M6 8l2-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
                description: 'Recouvrement efficace des créances'
            },
            {
                name: 'Droit financier',
                slug: 'droit-financier',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="16" rx="2" stroke="currentColor" stroke-width="2"/><path d="M6 6h4v4H6zM14 6h4v2h-4zM14 10h4v2h-4zM6 12h12v2H6zM6 16h12v2H6z" stroke="currentColor" stroke-width="1.5"/><path d="M21 8h2v2h-2zM21 12h2v2h-2z" fill="currentColor"/></svg>',
                description: 'Optimisation fiscale'
            },
            {
                name: 'Droit pénal',
                slug: 'droit-penal',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2"/></svg>',
                description: 'Défense pénale'
            },
            {
                name: 'Litiges',
                slug: 'litiges',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" stroke="currentColor" stroke-width="2"/><polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="2"/><line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" stroke-width="2"/><line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" stroke-width="2"/><polyline points="10,9 9,9 8,9" stroke="currentColor" stroke-width="2"/></svg>',
                description: 'Représentation dans les litiges'
            },
            {
                name: 'START UPs & Greenfields',
                slug: 'start-ups-greenfields',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.663 17h4.673M12 3l1.5 4.5 4.5 1.5-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
                description: 'Lancement de nouveaux projets'
            },
            {
                name: 'Biens immobiliers',
                slug: 'biens-immobiliers',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="2"/><polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" stroke-width="2"/></svg>',
                description: 'Transactions immobilières'
            },
            {
                name: 'Due Diligence',
                slug: 'due-diligence',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/><path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2"/></svg>',
                description: 'Analyse des transactions commerciales'
            },
            {
                name: 'GDPR',
                slug: 'gdpr',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="16" r="1" fill="currentColor"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" stroke-width="2"/></svg>',
                description: 'Services et conseils RGPD'
            },
            {
                name: 'Solutions d\'optimisation',
                slug: 'solutions-optimisation',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12" stroke="currentColor" stroke-width="2" fill="none"/></svg>',
                description: 'Audit et optimisation des processus'
            },
            {
                name: 'e-Commerce',
                slug: 'e-commerce',
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1" stroke="currentColor" stroke-width="2"/><circle cx="20" cy="21" r="1" stroke="currentColor" stroke-width="2"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="currentColor" stroke-width="2"/></svg>',
                description: 'Services juridiques pour e-boutiques'
            }
        ]
    };

    // Get current language configuration and services
    const config = languageConfig[currentLang];
    const services = servicesData[currentLang];

    // Create sidebar HTML
    function createSidebar() {
        const currentPage = currentPath.split('/').pop().replace('.html', '');
        
        let sidebarHTML = `
            <div class="service-sidebar" id="serviceSidebar">
                <div class="sidebar-header">
                    <h3>${config.servicesHeader}</h3>
                </div>
                <nav class="sidebar-nav">
        `;

        // Add contact page - determine correct path based on language and current location
        const isContact = currentPage === config.contactPage;
        let basePath;
        
        if (currentLang === 'sk') {
            // For Slovak (default), handle both root and /sk/ paths
            if (currentPath.includes('/sk/')) {
                basePath = currentPath.includes(`/${config.servicesFolder}/`) ? '../../' : '../';
            } else {
                basePath = currentPath.includes(`/${config.servicesFolder}/`) ? '../../' : '../';
            }
        } else {
            // For other languages, always use proper language prefix
            basePath = currentPath.includes(`/${config.servicesFolder}/`) ? '../../' : '../';
        }
        
        const contactPath = `${basePath}${config.contactPage}`;
        sidebarHTML += `
            <div class="sidebar-nav-item">
                <a href="${contactPath}" class="sidebar-nav-link ${isContact ? 'active' : ''}">
                    <span class="sidebar-nav-icon">📧</span>
                    ${config.contactText}
                </a>
            </div>
        `;

        // Add service pages
        services.forEach(service => {
            const isActive = currentPage === service.slug;
            const servicePath = currentPath.includes(`/${config.servicesFolder}/`) 
                ? `${service.slug}` 
                : `${config.servicesFolder}/${service.slug}`;
                
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
            <button class="service-sidebar-toggle" id="sidebarToggle" title="${config.sidebarTitle}">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
        `;

        return sidebarHTML;
    }

    // Check if we're on a service page and create sticky service navigation
    const isServicePage = currentPath.includes(`/${config.servicesFolder}/`);
    
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
        
        const currentService = services.find(s => s.slug === currentPage);
        // If current service is not found (maybe because of slug mismatch), use the header
        const currentServiceName = currentService ? currentService.name : config.servicesHeader;
        
        let sidebarHTML = `
            <!-- Desktop Navigation -->
            <div class="service-navigation-card">
                <h3>${config.servicesHeader}</h3>
                <ul class="service-nav-list">
        `;
        
        services.forEach(service => {
            const isActive = currentPage === service.slug;
            sidebarHTML += `
                <li>
                    <a href="${service.slug}" class="${isActive ? 'active' : ''}">
                        <span class="nav-icon">${service.icon}</span>
                        ${service.name}
                    </a>
                </li>
            `;
        });
        
        sidebarHTML += `
                </ul>
            </div>
            
            <!-- Mobile Dropdown Navigation -->
            <div class="service-navigation-mobile">
                <button class="service-dropdown-toggle" id="serviceDropdownToggle">
                    <span>
                        <strong>${config.servicesHeader}</strong>
                        ${currentService ? `<br><small style="font-weight: 400; opacity: 0.9;">${currentService.name}</small>` : ''}
                    </span>
                    <span class="service-dropdown-arrow">▼</span>
                </button>
                <div class="service-dropdown-content" id="serviceDropdownContent">
                    <ul class="mobile-service-nav-list">
        `;
        
        services.forEach(service => {
            const isActive = currentPage === service.slug;
            sidebarHTML += `
                <li>
                    <a href="${service.slug}" class="${isActive ? 'current' : ''}">
                        <span class="mobile-nav-icon">${service.icon}</span>
                        ${service.name}
                    </a>
                </li>
            `;
        });
        
        sidebarHTML += `
                    </ul>
                </div>
            </div>
        `;
        
        serviceContainer.innerHTML = sidebarHTML;
        
        // Initialize mobile dropdown functionality
        initializeMobileDropdown();
    }
    
    function initializeMobileDropdown() {
        const toggle = document.getElementById('serviceDropdownToggle');
        const content = document.getElementById('serviceDropdownContent');
        
        if (toggle && content) {
            toggle.addEventListener('click', function() {
                const isActive = content.classList.contains('active');
                
                if (isActive) {
                    content.classList.remove('active');
                    toggle.classList.remove('active');
                } else {
                    content.classList.add('active');
                    toggle.classList.add('active');
                }
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', function(event) {
                if (!toggle.contains(event.target) && !content.contains(event.target)) {
                    content.classList.remove('active');
                    toggle.classList.remove('active');
                }
            });
        }
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
        const currentPage = currentPath.split('/').pop().replace('.html', '');
        
        let breadcrumbHTML = `
            <nav class="breadcrumb" aria-label="Breadcrumb">
                <a href="${currentPath.includes(`/${config.servicesFolder}/`) ? '../../' : '../'}">
                    ${currentLang === 'sk' ? 'Domov' : currentLang === 'en' ? 'Home' : currentLang === 'de' ? 'Startseite' : 'Accueil'}
                </a>
                <span class="breadcrumb-separator">›</span>
        `;

        if (currentPage === config.contactPage) {
            breadcrumbHTML += `<span class="breadcrumb-current">${config.contactText}</span>`;
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
                <input type="text" id="serviceSearch" placeholder="${config.searchPlaceholder}" class="sidebar-search-input">
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
