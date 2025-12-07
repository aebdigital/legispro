// Blog Post Dynamic Loading Script
document.addEventListener('DOMContentLoaded', function() {
    
    // Language detection
    const currentPath = window.location.pathname;
    let currentLang = 'sk'; // Default
    if (currentPath.includes('/en/')) currentLang = 'en';
    else if (currentPath.includes('/de/')) currentLang = 'de';
    else if (currentPath.includes('/fr/')) currentLang = 'fr';

    // Translations
    const translations = {
        sk: {
            related_articles: "Súvisiace články",
            need_help: "Potrebujete právnu pomoc?",
            help_desc: "Naši odborníci vám radi pomôžu s vašimi právnymi otázkami.",
            contact_us: "Kontaktujte nás",
            back_to_blog: "← Späť na blog",
            article_not_found: "Článok sa nenašiel",
            article_not_found_desc: "Požadovaný článok sa nenašiel.",
            home: "Domov",
            blog: "Blog"
        },
        en: {
            related_articles: "Related Articles",
            need_help: "Need Legal Help?",
            help_desc: "Our experts will be happy to help you with your legal questions.",
            contact_us: "Contact Us",
            back_to_blog: "← Back to Blog",
            article_not_found: "Article Not Found",
            article_not_found_desc: "The requested article was not found.",
            home: "Home",
            blog: "Blog"
        },
        de: {
            related_articles: "Verwandte Artikel",
            need_help: "Benötigen Sie rechtliche Hilfe?",
            help_desc: "Unsere Experten helfen Ihnen gerne bei Ihren rechtlichen Fragen.",
            contact_us: "Kontaktieren Sie uns",
            back_to_blog: "← Zurück zum Blog",
            article_not_found: "Artikel nicht gefunden",
            article_not_found_desc: "Der angeforderte Artikel wurde nicht gefunden.",
            home: "Startseite",
            blog: "Blog"
        },
        fr: {
            related_articles: "Articles connexes",
            need_help: "Besoin d'aide juridique ?",
            help_desc: "Nos experts seront heureux de vous aider avec vos questions juridiques.",
            contact_us: "Contactez-nous",
            back_to_blog: "← Retour au blog",
            article_not_found: "Article non trouvé",
            article_not_found_desc: "L'article demandé n'a pas été trouvé.",
            home: "Accueil",
            blog: "Blog"
        }
    };

    function t(key) {
        return translations[currentLang][key] || translations['sk'][key];
    }
    
    // Use existing blog data from blog-data.js
    // Check if blogPosts is available globally
    let postsData = window.blogPosts;
    
    // If not available, wait a bit for it to load
    if (!postsData) {
        setTimeout(() => {
            postsData = window.blogPosts;
            if (postsData) {
                init();
            } else {
                console.error('Blog data not found');
            }
        }, 100);
        return;
    }

    // Generate related posts from existing data
    function generateRelatedPosts() {
        if (!postsData) return [];
        
        return Object.values(postsData).map(post => ({
            id: post.id,
            title: post.title,
            date: post.date,
            image: post.image
        }));
    }

    // Get post ID from URL parameters
    function getPostIdFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('post') || 'danove-kontroly-transfer-pricing'; // Default to first existing post
    }

    // Load post content
    function loadPost(postId) {
        const post = postsData[postId];
        
        if (!post) {
            // Post not found
            document.getElementById('postTitle').textContent = t('article_not_found');
            document.getElementById('postExcerpt').textContent = t('article_not_found_desc');
            document.getElementById('postMainTitle').textContent = t('article_not_found');
            document.getElementById('postMainExcerpt').textContent = t('article_not_found_desc');
            document.getElementById('postContent').innerHTML = `<p>${t('article_not_found_desc')} <a href="../">${t('back_to_blog')}</a></p>`;
            return;
        }

        // Update page title
        document.title = post.title + ' - LegisPro Blog';

        // Update hero image only (content is hidden by CSS)
        document.getElementById('heroImage').src = post.image;
        document.getElementById('heroImage').alt = post.title;

        // Update post header
        document.getElementById('breadcrumbTitle').textContent = post.title;
        document.getElementById('postCategory').textContent = post.category;
        document.getElementById('postDate').textContent = post.date;
        document.getElementById('postReadingTime').textContent = post.readingTime;
        document.getElementById('postMainTitle').textContent = post.title;
        document.getElementById('postMainExcerpt').textContent = post.excerpt;
        document.getElementById('postMainImage').src = post.image;
        document.getElementById('postMainImage').alt = post.title;

        // Update post content
        document.getElementById('postContent').innerHTML = post.content;

        // Update tags
        const tagsContainer = document.getElementById('postTags');
        tagsContainer.innerHTML = '';
        post.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'tag';
            tagElement.textContent = tag;
            tagsContainer.appendChild(tagElement);
        });

        // Load related posts (exclude current post)
        loadRelatedPosts(postId);
    }

    // Load related posts
    function loadRelatedPosts(currentPostId) {
        const relatedContainer = document.getElementById('relatedPosts');
        relatedContainer.innerHTML = '';

        const relatedPosts = generateRelatedPosts();
        const filteredPosts = relatedPosts.filter(post => post.id !== currentPostId).slice(0, 3);

        filteredPosts.forEach(post => {
            const postElement = document.createElement('a');
            postElement.href = `?post=${post.id}`;
            postElement.className = 'related-post';
            
            postElement.innerHTML = `
                <img src="${post.image}" alt="${post.title}">
                <div class="related-content">
                    <h5>${post.title}</h5>
                    <span>${post.date}</span>
                </div>
            `;
            
            relatedContainer.appendChild(postElement);
        });
    }

    // Search functionality
    function initializeSearch() {
        const searchInput = document.querySelector('.blog-search-input');
        if (searchInput) {
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    const searchTerm = this.value.trim();
                    if (searchTerm) {
                        window.location.href = `../?search=${encodeURIComponent(searchTerm)}`;
                    }
                }
            });
        }
    }

    // Newsletter form (removed from template, keeping function for compatibility)
    function initializeNewsletter() {
        // Newsletter removed from template
        return;
    }

    // Initialize the page
    function init() {
        const postId = getPostIdFromURL();
        loadPost(postId);
        initializeSearch();
        initializeNewsletter();
    }

    // Initialize the page
    init();

    // Handle browser back/forward buttons
    window.addEventListener('popstate', function() {
        const postId = getPostIdFromURL();
        loadPost(postId);
    });
});