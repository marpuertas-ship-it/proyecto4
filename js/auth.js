function switchTab(tab) {
    document.getElementById('form-registro').classList.add('auth-form--hidden');
    document.getElementById('form-login').classList.add('auth-form--hidden');
    document.getElementById('form-' + tab).classList.remove('auth-form--hidden');
    document.querySelectorAll('.auth-tab').forEach(function(t) { t.classList.remove('active'); });
    document.querySelectorAll('.auth-tab').forEach(function(t) {
        if ((tab === 'registro' && t.textContent === 'Crear cuenta') ||
            (tab === 'login' && t.textContent === 'Iniciar sesión')) {
            t.classList.add('active');
        }
    });
    document.getElementById('auth-feedback').textContent = '';
}

function feedback(msg, tipo) {
    var el = document.getElementById('auth-feedback');
    el.textContent = msg;
    el.className = 'auth-feedback auth-feedback--' + tipo;
}

function handleRegistro() {
    var nombre = document.getElementById('reg-nombre').value.trim();
    var email  = document.getElementById('reg-email').value.trim();
    var pass   = document.getElementById('reg-pass').value;
    var pass2  = document.getElementById('reg-pass2').value;
    var terms  = document.getElementById('reg-terms').checked;

    if (!nombre || !email || !pass || !pass2) { feedback('Por favor rellena todos los campos.', 'error'); return; }
    if (pass.length < 8)  { feedback('La contraseña debe tener al menos 8 caracteres.', 'error'); return; }
    if (pass !== pass2)   { feedback('Las contraseñas no coinciden.', 'error'); return; }
    if (!terms)           { feedback('Debes aceptar los términos y condiciones.', 'error'); return; }

    // Guardar en localStorage (demo)
    var usuarios = JSON.parse(localStorage.getItem('rr_usuarios') || '[]');
    var existe = usuarios.find(function(u) { return u.email === email; });
    if (existe) { feedback('Ya existe una cuenta con ese email.', 'error'); return; }
    usuarios.push({ nombre: nombre, email: email, pass: pass });
    localStorage.setItem('rr_usuarios', JSON.stringify(usuarios));
    feedback('¡Cuenta creada! Redirigiendo...', 'ok');
    setTimeout(function() { window.location.href = 'comunidad-preview.html'; }, 1200);
}

function handleLogin() {
    var email = document.getElementById('log-email').value.trim();
    var pass  = document.getElementById('log-pass').value;

    if (!email || !pass) { feedback('Por favor rellena todos los campos.', 'error'); return; }

    var usuarios = JSON.parse(localStorage.getItem('rr_usuarios') || '[]');
    var usuario  = usuarios.find(function(u) { return u.email === email && u.pass === pass; });
    if (!usuario) { feedback('Email o contraseña incorrectos.', 'error'); return; }
    localStorage.setItem('rr_sesion', JSON.stringify(usuario));
    feedback('¡Bienvenid@ ' + usuario.nombre + '!', 'ok');
    setTimeout(function() { window.location.href = 'comunidad-preview.html'; }, 1200);
}
