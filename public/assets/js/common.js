function loadHeader() {
    const basePath = window.location.pathname.includes('/food/') || window.location.pathname.includes('/travel/') || window.location.pathname.includes('/philosophy/') || window.location.pathname.includes('/trending/') ? '../' : '';
    return `
        <nav style="background: #2a2a2a; padding: 1rem 0; border-bottom: 2px solid #444;">
            <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 2rem;">
                <a href="${basePath}index.html" style="color: #00d4ff; text-decoration: none; font-size: 1.5rem; font-weight: bold;">FooMadicSoul</a>
                <div style="display: flex; gap: 2rem;">
                    <a href="${basePath}food/index.html" style="color: #fff; text-decoration: none; transition: color 0.3s;">🍽️ Food</a>
                    <a href="${basePath}travel/index.html" style="color: #fff; text-decoration: none; transition: color 0.3s;">✈️ Travel</a>
                    <a href="${basePath}philosophy/index.html" style="color: #fff; text-decoration: none; transition: color 0.3s;">🤔 Philosophy</a>
                    <a href="${basePath}trending/index.html" style="color: #fff; text-decoration: none; transition: color 0.3s;">🔥 Trending</a>
                </div>
            </div>
        </nav>
    `;
}

function loadFooter() {
    const basePath = window.location.pathname.includes('/food/') || window.location.pathname.includes('/travel/') || window.location.pathname.includes('/philosophy/') || window.location.pathname.includes('/trending/') ? '../' : '';
    return `
        <footer style="background: #2a2a2a; border-top: 2px solid #444; padding: 2rem 0; margin-top: 3rem;">
            <div style="max-width: 1200px; margin: 0 auto; text-align: center; padding: 0 2rem;">
                <p style="color: #ccc; margin-bottom: 1rem;">© 2024 FooMadicSoul. Explore Food, Travel, Philosophy & Trending Topics</p>
                <div style="display: flex; justify-content: center; gap: 2rem; margin-bottom: 1rem;">
                    <a href="${basePath}index.html" style="color: #00d4ff; text-decoration: none;">Home</a>
                    <a href="${basePath}food/index.html" style="color: #00d4ff; text-decoration: none;">Food</a>
                    <a href="${basePath}travel/index.html" style="color: #00d4ff; text-decoration: none;">Travel</a>
                    <a href="${basePath}philosophy/index.html" style="color: #00d4ff; text-decoration: none;">Philosophy</a>
                    <a href="${basePath}trending/index.html" style="color: #00d4ff; text-decoration: none;">Trending</a>
                </div>
                <p style="color: #888; font-size: 0.9rem;">Developed with ❤️ and AI by <a href="https://abbinvarghese.com" target="_blank" style="color: #00d4ff; text-decoration: none;">Abbin Varghese</a></p>
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