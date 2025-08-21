const ADS_CONFIG = {
    isAdsEnabled: false,
    clientId: "ca-pub-8437328263455404",
    retryAttempts: 3,
    retryDelay: 2000
};

function loadAdSense() {
    if (!ADS_CONFIG.isAdsEnabled || !ADS_CONFIG.clientId) {
        return;
    }

    if (window.adsbygoogle && window.adsbygoogle.loaded) {
        return;
    }

    try {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_CONFIG.clientId}`;
        script.crossOrigin = 'anonymous';
        
        script.onload = function() {
            window.adsbygoogle = window.adsbygoogle || [];
        };
        
        document.head.appendChild(script);
    } catch (error) {
        console.error('AdSense load error:', error);
    }
}

function initializeAds() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadAdSense);
    } else {
        loadAdSense();
    }
}

if (typeof window !== 'undefined') {
    initializeAds();
}