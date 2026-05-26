(function() {
    function showBanner() {
        var banner = document.getElementById('cookieBanner');
        if (banner) banner.classList.add('visible');
    }

    function hideBanner() {
        var banner = document.getElementById('cookieBanner');
        if (banner) banner.classList.remove('visible');
    }

    function setCookieChoice(choice) {
        localStorage.setItem('rr_cookies', choice);
        hideBanner();
    }

    window.resetCookies = function() {
        localStorage.removeItem('rr_cookies');
        showBanner();
    };

    // Check if already decided
    if (!localStorage.getItem('rr_cookies')) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', showBanner);
        } else {
            setTimeout(showBanner, 800);
        }
    }

    // Bind buttons after DOM ready
    function bindButtons() {
        var acceptBtn = document.getElementById('acceptCookies');
        var rejectBtn = document.getElementById('rejectCookies');
        var configBtn = document.getElementById('configCookies');
        if (acceptBtn) acceptBtn.addEventListener('click', function() { setCookieChoice('accepted'); });
        if (rejectBtn) rejectBtn.addEventListener('click', function() { setCookieChoice('rejected'); });
        if (configBtn) configBtn.addEventListener('click', function() { window.location.href = 'cookies.html'; });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bindButtons);
    } else {
        bindButtons();
    }
})();
