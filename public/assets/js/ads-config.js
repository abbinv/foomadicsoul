const ADS_CONFIG = {
    isAdsEnabled: true,
    clientId: "ca-pub-8437328263455404",
    retryAttempts: 3,
    retryDelay: 2000
};

const FIREBASE_CONFIG =  {
    apiKey: "AIzaSyDymESAalqTuYgAhpuzyhOrqNoB33Esx-g",
    authDomain: "foomadicsoul.firebaseapp.com",
    projectId: "foomadicsoul",
    storageBucket: "foomadicsoul.firebasestorage.app",
    messagingSenderId: "892224040697",
    appId: "1:892224040697:web:ceb4061045883038d57c28",
    measurementId: "G-40NG4PEBLG"
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

function loadFirebaseAnalytics() {
    const firebaseAppScript = document.createElement('script');
    firebaseAppScript.src = 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js';
    document.head.appendChild(firebaseAppScript);
    
    const firebaseAnalyticsScript = document.createElement('script');
    firebaseAnalyticsScript.src = 'https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics-compat.js';
    document.head.appendChild(firebaseAnalyticsScript);
    
    firebaseAnalyticsScript.onload = function() {
        try {
            firebase.initializeApp(FIREBASE_CONFIG);
            const analytics = firebase.analytics();
            
            analytics.logEvent('page_view', {
                page_title: document.title,
                page_location: window.location.href
            });
        } catch (e) {
            console.log('Firebase Analytics error:', e);
        }
    };
}

function initializeAds() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            loadAdSense();
            loadFirebaseAnalytics();
        });
    } else {
        loadAdSense();
        loadFirebaseAnalytics();
    }
}

if (typeof window !== 'undefined') {
    initializeAds();
}