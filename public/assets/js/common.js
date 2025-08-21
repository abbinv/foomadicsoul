function loadHeader() {
    const basePath = window.location.pathname.includes('/food/') || window.location.pathname.includes('/travel/') || window.location.pathname.includes('/philosophy/') || window.location.pathname.includes('/trending/') ? '../' : '';
    return `
        <style>
            .nav-container { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 clamp(1rem, 3vw, 2rem); }
            .nav-links { display: flex; gap: clamp(1rem, 3vw, 2rem); }
            .nav-logo { color: #00d4ff; text-decoration: none; font-size: clamp(1.2rem, 3vw, 1.5rem); font-weight: bold; }
            .nav-link { color: #fff; text-decoration: none; transition: color 0.3s; font-size: clamp(0.9rem, 2vw, 1rem); }
            .nav-link:hover { color: #00d4ff; }
            @media (max-width: 768px) {
                .nav-links { gap: 1rem; flex-wrap: wrap; }
                .nav-link { font-size: 0.85rem; }
            }
            @media (max-width: 480px) {
                .nav-container { flex-direction: column; gap: 1rem; padding: 1rem; }
                .nav-links { justify-content: center; }
            }
        </style>
        <nav role="navigation" aria-label="Main navigation" style="background: #2a2a2a; padding: 1rem 0; border-bottom: 2px solid #444;">
            <div class="nav-container">
                <a href="${basePath}index.html" aria-label="FooMadicSoul - Home" class="nav-logo">🍽️✈️ FooMadicSoul</a>
                <div class="nav-links">
                    <a href="${basePath}food/index.html" aria-label="Food - World Cuisines" class="nav-link">🍽️ Food</a>
                    <a href="${basePath}travel/index.html" aria-label="Travel - Global Destinations" class="nav-link">✈️ Travel</a>
                    <a href="${basePath}philosophy/index.html" aria-label="Philosophy - Deep Thoughts" class="nav-link">🤔 Philosophy</a>
                    <a href="${basePath}trending/index.html" aria-label="Trending - Latest Topics" class="nav-link">🔥 Trending</a>
                </div>
            </div>
        </nav>
    `;
}

function loadFooter() {
    const basePath = window.location.pathname.includes('/food/') || window.location.pathname.includes('/travel/') || window.location.pathname.includes('/philosophy/') || window.location.pathname.includes('/trending/') ? '../' : '';
    return `
        <style>
            .footer-container { max-width: 1200px; margin: 0 auto; text-align: center; padding: 0 clamp(1rem, 3vw, 2rem); }
            .footer-text { color: #ccc; margin-bottom: 1rem; font-size: clamp(0.8rem, 2vw, 0.9rem); line-height: 1.4; }
            .footer-nav { display: flex; justify-content: center; gap: clamp(1rem, 3vw, 2rem); margin-bottom: 1rem; flex-wrap: wrap; }
            .footer-link { color: #00d4ff; text-decoration: none; font-size: clamp(0.8rem, 2vw, 0.9rem); }
            .footer-link:hover { text-decoration: underline; }
            .footer-credit { color: #888; font-size: clamp(0.7rem, 1.5vw, 0.8rem); }
            @media (max-width: 480px) {
                .footer-nav { gap: 0.8rem; }
                .footer-text { font-size: 0.8rem; }
            }
        </style>
        <footer role="contentinfo" style="background: #2a2a2a; border-top: 2px solid #444; padding: 2rem 0; margin-top: 3rem;">
            <div class="footer-container">
                <p class="footer-text">© 2024 FooMadicSoul - Ultimate Guide to World Cuisines, Travel Destinations, Philosophy & Trending Topics</p>
                <nav aria-label="Footer navigation" class="footer-nav">
                    <a href="${basePath}index.html" class="footer-link">Home</a>
                    <a href="${basePath}food/index.html" class="footer-link">Food Guide</a>
                    <a href="${basePath}travel/index.html" class="footer-link">Travel Guide</a>
                    <a href="${basePath}philosophy/index.html" class="footer-link">Philosophy</a>
                    <a href="${basePath}trending/index.html" class="footer-link">Trending</a>
                    <a href="${basePath}sitemap.xml" class="footer-link">Sitemap</a>
                </nav>
                <p class="footer-credit">Developed with ❤️ and AI by <a href="https://abbinvarghese.com" target="_blank" rel="noopener" style="color: #00d4ff; text-decoration: none;">Abbin Varghese</a></p>
            </div>
        </footer>
    `;
}

function initializeCommonElements() {
    const headerElement = document.getElementById('common-header');
    const footerElement = document.getElementById('common-footer');
    
    if (headerElement) {
        headerElement.innerHTML = loadHeader();
    }
    
    if (footerElement) {
        footerElement.innerHTML = loadFooter();
    }
}

if (typeof window !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeCommonElements);
    } else {
        initializeCommonElements();
    }
}