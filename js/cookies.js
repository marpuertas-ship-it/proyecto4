(function() {
    function showBanner() {
        var banner = document.getElementById('cookieBanner');
        if (banner) {
            banner.style.display = 'block';
            setTimeout(function() { banner.classList.add('visible'); }, 50);
        }
    }

    function hideBanner() {
        var banner = document.getElementById('cookieBanner');
        if (banner) {
            banner.classList.remove('visible');
            setTimeout(function() { banner.style.display = 'none'; }, 400);
        }
    }

    function setCookieChoice(choice) {
        localStorage.setItem('rr_cookies', choice);
        hideBanner();
    }

    window.resetCookies = function() {
        localStorage.removeItem('rr_cookies');
        showBanner();
    };

    function init() {
        // Bind buttons
        var acceptBtn = document.getElementById('acceptCookies');
        var rejectBtn = document.getElementById('rejectCookies');
        var configBtn = document.getElementById('configCookies');
        if (acceptBtn) acceptBtn.addEventListener('click', function() { setCookieChoice('accepted'); });
        if (rejectBtn) rejectBtn.addEventListener('click', function() { setCookieChoice('rejected'); });
        if (configBtn) configBtn.addEventListener('click', function() { window.location.href = 'cookies.html'; });

        // Show if not decided yet
        if (!localStorage.getItem('rr_cookies')) {
            setTimeout(showBanner, 1000);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
