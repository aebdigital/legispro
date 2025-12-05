// Cookie Consent Management System
class CookieConsent {
    constructor() {
        this.cookieName = 'legispro_cookie_consent';
        this.cookieExpiry = 365; // days
        this.currentLang = this.getCurrentLanguage();
        this.translations = this.getTranslations();
        
        this.init();
    }

    getCurrentLanguage() {
        const path = window.location.pathname;
        if (path.includes('/sk/')) return 'sk';
        if (path.includes('/en/')) return 'en';
        if (path.includes('/de/')) return 'de';
        if (path.includes('/fr/')) return 'fr';
        return 'sk'; // Default to Slovak
    }

    getTranslations() {
        return {
            sk: {
                banner: {
                    title: 'Súbory cookies a ochrana súkromia',
                    description: 'Používame súbory cookies na zlepšenie vašej skúsenosti na našej webovej stránke. Niektoré sú nevyhnutné pre fungovanie stránky, iné nám pomáhajú analyzovať a zlepšovať naše služby.',
                    acceptAll: 'Prijať všetko',
                    rejectAll: 'Odmietnuť všetko',
                    settings: 'Nastavenia',
                    privacyPolicy: 'Zásady ochrany súkromia'
                },
                modal: {
                    title: 'Nastavenia súborov cookies',
                    description: 'Spravujte svoje preferencie súborov cookies. Môžete povoliť alebo zakázať rôzne typy súborov cookies podľa svojich potrieb.',
                    save: 'Uložiť nastavenia',
                    acceptAll: 'Prijať všetko',
                    rejectAll: 'Odmietnuť všetko',
                    close: 'Zavrieť'
                },
                categories: {
                    essential: {
                        title: 'Nevyhnutné súbory cookies',
                        description: 'Tieto súbory cookies sú nevyhnutné pre základnú funkcionalitu webovej stránky a nemožno ich zakázať.'
                    },
                    analytics: {
                        title: 'Analytické súbory cookies',
                        description: 'Tieto súbory cookies nám pomáhajú pochopiť, ako návštevníci používajú našu webovú stránku zbieraním a hlásením informácií anonymne.'
                    },
                    marketing: {
                        title: 'Marketingové súbory cookies',
                        description: 'Tieto súbory cookies sa používajú na sledovanie návštevníkov naprieč webovými stránkami na účely zobrazovania relevantných a zaujímavých reklám.'
                    },
                    functional: {
                        title: 'Funkčné súbory cookies',
                        description: 'Tieto súbory cookies umožňujú webovej stránke poskytovať rozšírené funkcie a personalizáciu.'
                    }
                }
            },
            en: {
                banner: {
                    title: 'Cookies and Privacy',
                    description: 'We use cookies to improve your experience on our website. Some are essential for site functionality, others help us analyze and improve our services.',
                    acceptAll: 'Accept All',
                    rejectAll: 'Reject All',
                    settings: 'Settings',
                    privacyPolicy: 'Privacy Policy'
                },
                modal: {
                    title: 'Cookie Settings',
                    description: 'Manage your cookie preferences. You can enable or disable different types of cookies according to your needs.',
                    save: 'Save Settings',
                    acceptAll: 'Accept All',
                    rejectAll: 'Reject All',
                    close: 'Close'
                },
                categories: {
                    essential: {
                        title: 'Essential Cookies',
                        description: 'These cookies are necessary for the basic functionality of the website and cannot be disabled.'
                    },
                    analytics: {
                        title: 'Analytics Cookies',
                        description: 'These cookies help us understand how visitors use our website by collecting and reporting information anonymously.'
                    },
                    marketing: {
                        title: 'Marketing Cookies',
                        description: 'These cookies are used to track visitors across websites for the purpose of displaying relevant and engaging advertisements.'
                    },
                    functional: {
                        title: 'Functional Cookies',
                        description: 'These cookies enable the website to provide enhanced functionality and personalization.'
                    }
                }
            },
            de: {
                banner: {
                    title: 'Cookies und Datenschutz',
                    description: 'Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Einige sind für die Website-Funktionalität unerlässlich, andere helfen uns bei der Analyse und Verbesserung unserer Services.',
                    acceptAll: 'Alle akzeptieren',
                    rejectAll: 'Alle ablehnen',
                    settings: 'Einstellungen',
                    privacyPolicy: 'Datenschutzrichtlinie'
                },
                modal: {
                    title: 'Cookie-Einstellungen',
                    description: 'Verwalten Sie Ihre Cookie-Präferenzen. Sie können verschiedene Arten von Cookies je nach Ihren Bedürfnissen aktivieren oder deaktivieren.',
                    save: 'Einstellungen speichern',
                    acceptAll: 'Alle akzeptieren',
                    rejectAll: 'Alle ablehnen',
                    close: 'Schließen'
                },
                categories: {
                    essential: {
                        title: 'Erforderliche Cookies',
                        description: 'Diese Cookies sind für die grundlegende Funktionalität der Website erforderlich und können nicht deaktiviert werden.'
                    },
                    analytics: {
                        title: 'Analyse-Cookies',
                        description: 'Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen, indem sie Informationen anonym sammeln und melden.'
                    },
                    marketing: {
                        title: 'Marketing-Cookies',
                        description: 'Diese Cookies werden verwendet, um Besucher über Websites hinweg zu verfolgen, um relevante und ansprechende Werbung anzuzeigen.'
                    },
                    functional: {
                        title: 'Funktionale Cookies',
                        description: 'Diese Cookies ermöglichen es der Website, erweiterte Funktionalität und Personalisierung bereitzustellen.'
                    }
                }
            },
            fr: {
                banner: {
                    title: 'Cookies et confidentialité',
                    description: 'Nous utilisons des cookies pour améliorer votre expérience sur notre site web. Certains sont essentiels pour le fonctionnement du site, d\'autres nous aident à analyser et améliorer nos services.',
                    acceptAll: 'Tout accepter',
                    rejectAll: 'Tout refuser',
                    settings: 'Paramètres',
                    privacyPolicy: 'Politique de confidentialité'
                },
                modal: {
                    title: 'Paramètres des cookies',
                    description: 'Gérez vos préférences de cookies. Vous pouvez activer ou désactiver différents types de cookies selon vos besoins.',
                    save: 'Sauvegarder les paramètres',
                    acceptAll: 'Tout accepter',
                    rejectAll: 'Tout refuser',
                    close: 'Fermer'
                },
                categories: {
                    essential: {
                        title: 'Cookies essentiels',
                        description: 'Ces cookies sont nécessaires pour la fonctionnalité de base du site web et ne peuvent pas être désactivés.'
                    },
                    analytics: {
                        title: 'Cookies analytiques',
                        description: 'Ces cookies nous aident à comprendre comment les visiteurs utilisent notre site web en collectant et rapportant des informations de manière anonyme.'
                    },
                    marketing: {
                        title: 'Cookies marketing',
                        description: 'Ces cookies sont utilisés pour suivre les visiteurs sur les sites web dans le but d\'afficher des publicités pertinentes et attrayantes.'
                    },
                    functional: {
                        title: 'Cookies fonctionnels',
                        description: 'Ces cookies permettent au site web de fournir des fonctionnalités améliorées et la personnalisation.'
                    }
                }
            }
        };
    }

    init() {
        // Check if consent has already been given
        if (!this.hasConsent()) {
            this.showBanner();
        }
        
        // Initialize analytics and other services based on consent
        this.initializeServices();
        
        // Listen for settings modal trigger
        this.bindEvents();
    }

    hasConsent() {
        const consent = this.getCookie(this.cookieName);
        return consent !== null;
    }

    getConsent() {
        const consent = this.getCookie(this.cookieName);
        if (consent) {
            try {
                return JSON.parse(consent);
            } catch (e) {
                return null;
            }
        }
        return null;
    }

    setConsent(preferences) {
        const consentData = {
            timestamp: new Date().toISOString(),
            preferences: preferences,
            version: '1.0'
        };
        
        this.setCookie(this.cookieName, JSON.stringify(consentData), this.cookieExpiry);
        this.initializeServices();
    }

    getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
    }

    deleteCookie(name) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/`;
    }

    getPrivacyPolicyUrl() {
        const basePath = this.getBasePath();
        const pageMapping = {
            sk: 'ochrana-osobnych-udajov',
            en: 'privacy-policy',
            de: 'datenschutzrichtlinie',
            fr: 'politique-confidentialite'
        };
        
        const pageName = pageMapping[this.currentLang];
        
        if (this.currentLang === 'sk') {
            return `${basePath}pages/${pageName}.html`;
        } else {
            return `${basePath}${this.currentLang}/pages/${pageName}.html`;
        }
    }

    getBasePath() {
        const currentPath = window.location.pathname;
        const currentLang = this.currentLang;
        
        if (currentLang !== 'sk') {
            if (currentPath.includes(`/pages/`) || currentPath.includes('/pages/')) {
                const depth = currentPath.split('/').filter(p => p).length - currentPath.split('/').indexOf(currentLang) - 1;
                if (depth === 1) return '../../';
                if (depth === 2) return '../../../';
            }
            return '../';
        } else {
            if (currentPath.includes('/pages/')) {
                const depth = currentPath.split('/pages/')[1].split('/').length;
                return depth > 1 ? '../../' : '../';
            }
            return './';
        }
    }

    showBanner() {
        if (document.getElementById('cookieBanner')) return;

        const translations = this.translations[this.currentLang];
        const privacyUrl = this.getPrivacyPolicyUrl();
        
        const bannerHtml = `
            <div id="cookieBanner" class="cookie-banner">
                <div class="cookie-banner-content">
                    <div class="cookie-banner-text">
                        <h4>${translations.banner.title}</h4>
                        <p>${translations.banner.description} <a href="${privacyUrl}">${translations.banner.privacyPolicy}</a></p>
                    </div>
                    <div class="cookie-banner-actions">
                        <button class="cookie-btn cookie-btn-text" onclick="cookieConsent.showSettings()">${translations.banner.settings}</button>
                        <button class="cookie-btn cookie-btn-secondary" onclick="cookieConsent.rejectAll()">${translations.banner.rejectAll}</button>
                        <button class="cookie-btn cookie-btn-primary" onclick="cookieConsent.acceptAll()">${translations.banner.acceptAll}</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', bannerHtml);
        
        // Show banner with animation
        setTimeout(() => {
            const banner = document.getElementById('cookieBanner');
            if (banner) banner.classList.add('show');
        }, 100);
    }

    hideBanner() {
        const banner = document.getElementById('cookieBanner');
        if (banner) {
            banner.classList.remove('show');
            setTimeout(() => banner.remove(), 400);
        }
    }

    showSettings() {
        if (document.getElementById('cookieModal')) return;

        const translations = this.translations[this.currentLang];
        const currentConsent = this.getConsent();
        const preferences = currentConsent?.preferences || {
            essential: true,
            analytics: false,
            marketing: false,
            functional: false
        };

        const modalHtml = `
            <div id="cookieModal" class="cookie-modal">
                <div class="cookie-modal-content">
                    <div class="cookie-modal-header">
                        <h3>${translations.modal.title}</h3>
                        <button class="cookie-modal-close" onclick="cookieConsent.hideSettings()">×</button>
                    </div>
                    <div class="cookie-modal-body">
                        <p class="cookie-description">${translations.modal.description}</p>
                        
                        <div class="cookie-category cookie-category-essential">
                            <div class="cookie-category-header" onclick="this.parentElement.classList.toggle('expanded')">
                                <h4 class="cookie-category-title">${translations.categories.essential.title}</h4>
                                <div style="display: flex; align-items: center;">
                                    <div class="cookie-toggle">
                                        <input type="checkbox" checked disabled>
                                        <span class="cookie-toggle-slider"></span>
                                    </div>
                                    <svg class="cookie-expand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <polyline points="6,9 12,15 18,9"></polyline>
                                    </svg>
                                </div>
                            </div>
                            <div class="cookie-category-content">
                                <p class="cookie-category-description">${translations.categories.essential.description}</p>
                            </div>
                        </div>

                        <div class="cookie-category">
                            <div class="cookie-category-header" onclick="this.parentElement.classList.toggle('expanded')">
                                <h4 class="cookie-category-title">${translations.categories.analytics.title}</h4>
                                <div style="display: flex; align-items: center;">
                                    <div class="cookie-toggle">
                                        <input type="checkbox" id="analytics-toggle" ${preferences.analytics ? 'checked' : ''}>
                                        <span class="cookie-toggle-slider"></span>
                                    </div>
                                    <svg class="cookie-expand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <polyline points="6,9 12,15 18,9"></polyline>
                                    </svg>
                                </div>
                            </div>
                            <div class="cookie-category-content">
                                <p class="cookie-category-description">${translations.categories.analytics.description}</p>
                            </div>
                        </div>

                        <div class="cookie-category">
                            <div class="cookie-category-header" onclick="this.parentElement.classList.toggle('expanded')">
                                <h4 class="cookie-category-title">${translations.categories.marketing.title}</h4>
                                <div style="display: flex; align-items: center;">
                                    <div class="cookie-toggle">
                                        <input type="checkbox" id="marketing-toggle" ${preferences.marketing ? 'checked' : ''}>
                                        <span class="cookie-toggle-slider"></span>
                                    </div>
                                    <svg class="cookie-expand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <polyline points="6,9 12,15 18,9"></polyline>
                                    </svg>
                                </div>
                            </div>
                            <div class="cookie-category-content">
                                <p class="cookie-category-description">${translations.categories.marketing.description}</p>
                            </div>
                        </div>

                        <div class="cookie-category">
                            <div class="cookie-category-header" onclick="this.parentElement.classList.toggle('expanded')">
                                <h4 class="cookie-category-title">${translations.categories.functional.title}</h4>
                                <div style="display: flex; align-items: center;">
                                    <div class="cookie-toggle">
                                        <input type="checkbox" id="functional-toggle" ${preferences.functional ? 'checked' : ''}>
                                        <span class="cookie-toggle-slider"></span>
                                    </div>
                                    <svg class="cookie-expand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <polyline points="6,9 12,15 18,9"></polyline>
                                    </svg>
                                </div>
                            </div>
                            <div class="cookie-category-content">
                                <p class="cookie-category-description">${translations.categories.functional.description}</p>
                            </div>
                        </div>
                    </div>
                    <div class="cookie-modal-footer">
                        <button class="cookie-btn cookie-btn-reject-all" onclick="cookieConsent.rejectAll()">${translations.modal.rejectAll}</button>
                        <button class="cookie-btn cookie-btn-save" onclick="cookieConsent.saveSettings()">${translations.modal.save}</button>
                        <button class="cookie-btn cookie-btn-accept-all" onclick="cookieConsent.acceptAll()">${translations.modal.acceptAll}</button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHtml);
        
        // Show modal with animation
        setTimeout(() => {
            const modal = document.getElementById('cookieModal');
            if (modal) {
                modal.classList.add('show');
                // Prevent body scroll
                document.body.style.overflow = 'hidden';
                // Stop Lenis if available
                if (window.lenisControl) {
                    window.lenisControl.stop();
                }
            }
        }, 50);

        // Close modal when clicking outside
        document.getElementById('cookieModal').addEventListener('click', (e) => {
            if (e.target.id === 'cookieModal') {
                this.hideSettings();
            }
        });
    }

    hideSettings() {
        const modal = document.getElementById('cookieModal');
        if (modal) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
            // Restart Lenis if available
            if (window.lenisControl) {
                window.lenisControl.start();
            }
            setTimeout(() => modal.remove(), 300);
        }
    }

    saveSettings() {
        const preferences = {
            essential: true, // Always true
            analytics: document.getElementById('analytics-toggle')?.checked || false,
            marketing: document.getElementById('marketing-toggle')?.checked || false,
            functional: document.getElementById('functional-toggle')?.checked || false
        };

        this.setConsent(preferences);
        this.hideSettings();
        this.hideBanner();
    }

    acceptAll() {
        const preferences = {
            essential: true,
            analytics: true,
            marketing: true,
            functional: true
        };

        this.setConsent(preferences);
        this.hideSettings();
        this.hideBanner();
    }

    rejectAll() {
        const preferences = {
            essential: true, // Always true
            analytics: false,
            marketing: false,
            functional: false
        };

        this.setConsent(preferences);
        this.hideSettings();
        this.hideBanner();
    }

    initializeServices() {
        const consent = this.getConsent();
        if (!consent) return;

        const { preferences } = consent;

        // Google Analytics or other analytics
        if (preferences.analytics) {
            this.initializeAnalytics();
        } else {
            this.disableAnalytics();
        }

        // Marketing/Advertising cookies
        if (preferences.marketing) {
            this.initializeMarketing();
        } else {
            this.disableMarketing();
        }

        // Functional cookies
        if (preferences.functional) {
            this.initializeFunctional();
        } else {
            this.disableFunctional();
        }
    }

    initializeAnalytics() {
        // Initialize Google Analytics or other analytics services
        console.log('Analytics cookies enabled');
        
        // Example: Google Analytics 4
        // if (typeof gtag !== 'undefined') {
        //     gtag('consent', 'update', {
        //         'analytics_storage': 'granted'
        //     });
        // }
    }

    disableAnalytics() {
        console.log('Analytics cookies disabled');
        
        // Remove analytics cookies
        this.deleteCookie('_ga');
        this.deleteCookie('_ga_*');
        this.deleteCookie('_gid');
        
        // Example: Google Analytics 4
        // if (typeof gtag !== 'undefined') {
        //     gtag('consent', 'update', {
        //         'analytics_storage': 'denied'
        //     });
        // }
    }

    initializeMarketing() {
        console.log('Marketing cookies enabled');
        
        // Initialize marketing services
        // if (typeof gtag !== 'undefined') {
        //     gtag('consent', 'update', {
        //         'ad_storage': 'granted'
        //     });
        // }
    }

    disableMarketing() {
        console.log('Marketing cookies disabled');
        
        // Remove marketing cookies
        // Add specific marketing cookies to remove
        
        // if (typeof gtag !== 'undefined') {
        //     gtag('consent', 'update', {
        //         'ad_storage': 'denied'
        //     });
        // }
    }

    initializeFunctional() {
        console.log('Functional cookies enabled');
        // Initialize functional services (chat widgets, etc.)
    }

    disableFunctional() {
        console.log('Functional cookies disabled');
        // Remove functional cookies
    }

    bindEvents() {
        // Global function to open cookie settings
        window.openCookieSettings = () => this.showSettings();
        
        // Keyboard events
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideSettings();
            }
        });
    }

    // Method to reset all consent (for testing)
    resetConsent() {
        this.deleteCookie(this.cookieName);
        location.reload();
    }
}

// Initialize cookie consent when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.cookieConsent = new CookieConsent();
});

// Expose for global access
window.CookieConsent = CookieConsent;