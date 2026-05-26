(function () {
    const headerHTML = `
    <header class="header">
        <div class="container">
            <div class="header__logo">
                <a href="index.html" class="logo">
                    <span class="logo-icon">🎡</span>
                    <span class="logo-text">RetoRuleta</span>
                </a>
            </div>
            <nav class="nav">
                <a href="comunidad.html" class="nav-link" data-page="comunidad">Community</a>
                <a href="ruleta.html" class="nav-link" data-page="ruleta">Challenges</a>
                <a href="about.html" class="nav-link" data-page="about">About Milli</a>
                <a href="contacto.html" class="nav-link" data-page="contacto">Contact</a>
                <a href="#" class="nav-link">Social Media</a>
            </nav>
        </div>
    </header>`;

    // Insertar al principio del hero
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.insertAdjacentHTML('afterbegin', headerHTML);
    }

    // Marcar link activo
    const current = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    document.querySelectorAll('.nav-link[data-page]').forEach(link => {
        if (link.dataset.page === current) {
            link.classList.add('active');
        }
    });
})();
