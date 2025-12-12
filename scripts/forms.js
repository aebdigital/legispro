// Contact Form Handler with SMTP2GO Integration
(function() {
    'use strict';

    // Initialize form when DOM is ready
    function initContactForm() {
        const form = document.querySelector('.contact-form-main form');
        if (!form) return;

        form.addEventListener('submit', handleFormSubmit);
    }

    async function handleFormSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const submitButton = form.querySelector('button[type="submit"]');
        const messageDiv = getOrCreateMessageDiv(form);

        // Get Turnstile token
        const turnstileResponse = form.querySelector('[name="cf-turnstile-response"]')?.value;
        if (!turnstileResponse) {
            showMessage(messageDiv, 'error', getTranslation('turnstileRequired'));
            return;
        }

        // Get form data
        const formData = {
            name: form.querySelector('input[type="text"]').value.trim(),
            email: form.querySelector('input[type="email"]').value.trim(),
            phone: form.querySelector('input[type="tel"]')?.value.trim() || '',
            service: form.querySelector('select')?.value || '',
            message: form.querySelector('textarea').value.trim(),
            'cf-turnstile-response': turnstileResponse
        };

        // Validate required fields
        if (!formData.name || !formData.email || !formData.message) {
            showMessage(messageDiv, 'error', getTranslation('requiredFields'));
            return;
        }

        // Validate email format
        if (!isValidEmail(formData.email)) {
            showMessage(messageDiv, 'error', getTranslation('invalidEmail'));
            return;
        }

        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.classList.add('loading');
        const originalButtonText = submitButton.textContent;
        submitButton.innerHTML = '<span class="spinner-small"></span> ' + getTranslation('sending');

        try {
            // Send data to Netlify function
            const response = await fetch('/.netlify/functions/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok && result.success) {
                // Success
                showMessage(messageDiv, 'success', getTranslation('success'));
                form.reset();
                // Reset Turnstile widget
                if (typeof turnstile !== 'undefined') {
                    turnstile.reset();
                }
            } else {
                // Error from server
                showMessage(messageDiv, 'error', result.message || getTranslation('error'));
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showMessage(messageDiv, 'error', getTranslation('error'));
        } finally {
            // Re-enable button
            submitButton.disabled = false;
            submitButton.classList.remove('loading');
            submitButton.innerHTML = originalButtonText;
        }
    }

    function getOrCreateMessageDiv(form) {
        let messageDiv = form.querySelector('.form-message');
        if (!messageDiv) {
            messageDiv = document.createElement('div');
            messageDiv.className = 'form-message';
            form.insertBefore(messageDiv, form.querySelector('button[type="submit"]'));
        }
        return messageDiv;
    }

    function showMessage(messageDiv, type, text) {
        messageDiv.className = 'form-message ' + type;
        messageDiv.textContent = text;
        messageDiv.style.display = 'block';

        // Auto-hide after 5 seconds
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function getTranslation(key) {
        const lang = document.documentElement.lang || 'sk';

        const translations = {
            sk: {
                requiredFields: 'Prosím vyplňte všetky povinné polia.',
                invalidEmail: 'Prosím zadajte platnú emailovú adresu.',
                turnstileRequired: 'Prosím dokončite overenie zabezpečenia.',
                sending: 'Odesilá sa...',
                success: 'Ďakujeme! Vaša správa bola úspešne odoslaná. Čoskoro vás budeme kontaktovať.',
                error: 'Nastala chyba pri odosielaní správy. Prosím skúste to znova alebo nás kontaktujte priamo.'
            },
            en: {
                requiredFields: 'Please fill in all required fields.',
                invalidEmail: 'Please enter a valid email address.',
                turnstileRequired: 'Please complete the security verification.',
                sending: 'Sending...',
                success: 'Thank you! Your message has been sent successfully. We will contact you soon.',
                error: 'An error occurred while sending your message. Please try again or contact us directly.'
            },
            de: {
                requiredFields: 'Bitte füllen Sie alle Pflichtfelder aus.',
                invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
                turnstileRequired: 'Bitte führen Sie die Sicherheitsüberprüfung durch.',
                sending: 'Wird gesendet...',
                success: 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns bald bei Ihnen melden.',
                error: 'Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.'
            },
            fr: {
                requiredFields: 'Veuillez remplir tous les champs obligatoires.',
                invalidEmail: 'Veuillez saisir une adresse e-mail valide.',
                turnstileRequired: 'Veuillez compléter la vérification de sécurité.',
                sending: 'Envoi en cours...',
                success: 'Merci! Votre message a été envoyé avec succès. Nous vous contactons bientôt.',
                error: 'Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer ou nous contacter directement.'
            }
        };

        return translations[lang]?.[key] || translations['sk'][key];
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initContactForm);
    } else {
        initContactForm();
    }

})();
