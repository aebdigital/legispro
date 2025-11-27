// Dynamic Blog System
document.addEventListener('DOMContentLoaded', function() {
    
    // Get URL parameters
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    // Check if we're showing a specific post or the blog list
    const postId = getUrlParameter('post');
    const blogContainer = document.querySelector('.blog-articles');
    
    if (!blogContainer) return;

    if (postId && blogPosts[postId]) {
        // Show individual blog post
        showBlogPost(blogPosts[postId]);
    } else {
        // Show blog list (this is already in the HTML)
        updateBlogLinks();
    }

    // Function to show individual blog post
    function showBlogPost(post) {
        document.title = `${post.title} - LegisPro Blog`;
        
        blogContainer.innerHTML = `
            <!-- Reading Progress Bar -->
            <div class="reading-progress-container">
                <div class="reading-progress-bar" id="reading-progress"></div>
            </div>
            
            <div class="container">
                <!-- Blog Post Header -->
                <article class="blog-post">
                    <header class="post-header-clean">
                        <nav class="breadcrumb">
                            <a href="../index.html">Domov</a>
                            <span>›</span>
                            <a href="blog.html">Blog</a>
                            <span>›</span>
                            <span>${post.title}</span>
                        </nav>
                        
                        <div class="post-meta">
                            <span class="post-category">${post.category}</span>
                            <span class="post-date">${post.date}</span>
                            <span class="post-reading-time">${post.readingTime}</span>
                        </div>
                        
                        <h1>${post.title}</h1>
                        
                        <p class="post-excerpt">${post.excerpt}</p>
                        
                        <div class="post-image">
                            <img src="${post.image}" alt="${post.title}">
                        </div>
                    </header>

                    <div class="post-content">
                        <div class="content-wrapper">
                            <div class="post-body">
                                ${post.content}
                                
                                <div class="post-tags">
                                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                                </div>
                            </div>

                            <aside class="post-sidebar">
                                <div class="sidebar-widget">
                                    <h4>Súvisiace články</h4>
                                    <div class="related-posts">
                                        ${getRelatedPosts(post.id)}
                                    </div>
                                </div>

                                <div class="sidebar-widget">
                                    <h4>Potrebujete právnu pomoc?</h4>
                                    <p>Naši odborníci vám radi pomôžu s vašimi právnymi otázkami.</p>
                                    <a href="../kontakt.html" class="btn btn-primary">Kontaktujte nás</a>
                                </div>

                                <div class="sidebar-widget">
                                    <a href="blog.html" class="btn btn-outline">← Späť na blog</a>
                                </div>
                            </aside>
                        </div>
                    </div>
                </article>
            </div>
        `;
        
        // Initialize reading progress bar
        initializeReadingProgress();

        // Scroll to top
        window.scrollTo(0, 0);

        // Update page URL without reload
        if (history.pushState) {
            const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?post=' + post.id;
            window.history.pushState({path: newUrl}, '', newUrl);
        }
    }

    // Function to get related posts
    function getRelatedPosts(currentPostId) {
        const relatedPosts = Object.values(blogPosts)
            .filter(post => post.id !== currentPostId)
            .slice(0, 2); // Show 2 related posts

        return relatedPosts.map(post => `
            <a href="?post=${post.id}" class="related-post" onclick="showPostDynamic('${post.id}'); return false;">
                <img src="${post.image}" alt="${post.title}">
                <div class="related-content">
                    <h5>${post.title}</h5>
                    <span>${post.date}</span>
                </div>
            </a>
        `).join('');
    }

    // Function to update blog links in the list view
    function updateBlogLinks() {
        const blogLinks = document.querySelectorAll('.blog-grid .article-link, .featured-article .btn');
        blogLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.includes('blog/') && href.includes('.html')) {
                const postId = href.replace('blog/', '').replace('.html', '');
                if (blogPosts[postId]) {
                    link.setAttribute('href', `?post=${postId}`);
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        showPostDynamic(postId);
                    });
                }
            }
        });
    }

    // Function to show post dynamically (for use with related posts)
    window.showPostDynamic = function(postId) {
        if (blogPosts[postId]) {
            showBlogPost(blogPosts[postId]);
        }
    };

    // Handle browser back/forward buttons
    window.addEventListener('popstate', function(event) {
        const postId = getUrlParameter('post');
        if (postId && blogPosts[postId]) {
            showBlogPost(blogPosts[postId]);
        } else {
            // Reload the page to show blog list
            location.reload();
        }
    });

    // Add search functionality
    function addBlogSearch() {
        const searchContainer = document.querySelector('.blog-header');
        if (searchContainer && !postId) {
            const searchHTML = `
                <div class="blog-search">
                    <input type="text" id="blogSearch" placeholder="Hľadať v článkoch..." class="blog-search-input">
                </div>
            `;
            searchContainer.insertAdjacentHTML('beforeend', searchHTML);

            const searchInput = document.getElementById('blogSearch');
            if (searchInput) {
                searchInput.addEventListener('input', function() {
                    const searchTerm = this.value.toLowerCase();
                    const articleCards = document.querySelectorAll('.article-card, .featured-article');
                    
                    articleCards.forEach(card => {
                        const title = card.querySelector('h3, h2').textContent.toLowerCase();
                        const excerpt = card.querySelector('p').textContent.toLowerCase();
                        const category = card.querySelector('.article-category').textContent.toLowerCase();
                        
                        if (title.includes(searchTerm) || excerpt.includes(searchTerm) || category.includes(searchTerm)) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            }
        }
    }

    // Initialize search
    setTimeout(addBlogSearch, 100);
    
    // Reading progress bar functionality
    function initializeReadingProgress() {
        const progressBar = document.getElementById('reading-progress');
        const postContent = document.querySelector('.post-body');
        
        if (!progressBar || !postContent) return;
        
        function updateReadingProgress() {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / documentHeight) * 100;
            
            progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
        }
        
        // Update progress on scroll
        window.addEventListener('scroll', updateReadingProgress);
        
        // Initial progress update
        updateReadingProgress();
    }
    
    // Global function to initialize progress bar (if called from outside)
    window.initializeReadingProgress = initializeReadingProgress;
});