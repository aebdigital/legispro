// Blog Post Dynamic Loading Script
document.addEventListener('DOMContentLoaded', function() {
    
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
            document.getElementById('postTitle').textContent = 'Článok sa nenašiel';
            document.getElementById('postExcerpt').textContent = 'Požadovaný článok sa nenašiel.';
            document.getElementById('postMainTitle').textContent = 'Článok sa nenašiel';
            document.getElementById('postMainExcerpt').textContent = 'Požadovaný článok sa nenašiel.';
            document.getElementById('postContent').innerHTML = '<p>Požadovaný článok sa nenašiel. <a href="../">Späť na blog</a></p>';
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