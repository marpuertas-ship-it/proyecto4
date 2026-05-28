var RULETAS = [
    { retos: ['10 sentadillas','Plancha 30s','20 saltos','Puntillas 1min','Baila 2min','15 flexiones','Corre en sitio','Equilibrio 30s'] },
    { retos: ['Llama a un amigo','Manda un meme','Pregunta incómoda','Di un cumplido','Imita a alguien','Cuenta un chiste','Foto con extraño','Karaoke improv'] },
    { retos: ['Dibuja en 60s','Inventa canción','Foto artística','Escribe un poema','Diseña personaje','Actúa una escena','Crea un baile','Pinta con dedos'] },
    { retos: ['Come algo picante','Mezcla rara','Come sin manos','Adivina ingrediente','Inventa receta','Come en 30s','Prueba algo nuevo','Batido misterioso'] },
    { retos: ['Sin móvil 1h','Aprende truco','Graba un vídeo','Busca algo viral','Aprende shortcut','Diseña un meme','Cambia foto perfil','Alarma rara'] },
    { retos: ['Imita un acento','Chiste malo','Baila sin música','Haz una voz rara','Actúa épico','Palabras al revés','Parodia a alguien','Haz reír a todos'] }
];

var BORDE   = '#704b93';
var angles  = [0,0,0,0,0,0];
var girando = [false,false,false,false,false,false];

function setCanvasSize(canvas) {
    // Match internal resolution to CSS display size
    var rect = canvas.getBoundingClientRect();
    if (rect.width > 0 && canvas.width !== Math.round(rect.width)) {
        canvas.width  = Math.round(rect.width);
        canvas.height = Math.round(rect.height);
    }
}

function dibujar(idx) {
    var canvas = document.getElementById('ruleta-' + idx);
    if (!canvas) return;
    setCanvasSize(canvas);

    var ctx   = canvas.getContext('2d');
    var W     = canvas.width;
    var H     = canvas.height;
    // Wheel fits in a square area, leaving ~12% on right for pointer
    var r     = Math.min(W * 0.44, H * 0.46);
    var cx    = r + 4;
    var cy    = H / 2;
    var retos = RULETAS[idx].retos;
    var n     = retos.length;
    var arc   = (2 * Math.PI) / n;

    ctx.clearRect(0, 0, W, H);

    // --- Wheel ---
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angles[idx]);

    // White fill
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();

    // Divider lines
    ctx.strokeStyle = BORDE;
    ctx.lineWidth   = Math.max(1.5, r * 0.018);
    for (var i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(i * arc) * r, Math.sin(i * arc) * r);
        ctx.stroke();
    }

    // Text per sector
    for (var i = 0; i < n; i++) {
        ctx.save();
        ctx.rotate(i * arc + arc / 2);
        ctx.textAlign = 'right';
        ctx.fillStyle = BORDE;
        var fs = Math.max(8, Math.round(r * 0.1));
        ctx.font = 'bold ' + fs + 'px sans-serif';
        var palabras = retos[i].split(' ');
        var lh = fs * 1.3;
        var startY = -(palabras.length - 1) * lh / 2;
        for (var w = 0; w < palabras.length; w++) {
            ctx.fillText(palabras[w], r - 10, startY + w * lh);
        }
        ctx.restore();
    }

    ctx.restore();

    // Outer border
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, 2 * Math.PI);
    ctx.strokeStyle = BORDE;
    ctx.lineWidth   = Math.max(3, r * 0.03);
    ctx.stroke();

    // Center dot
    ctx.beginPath();
    ctx.arc(cx, cy, r * 0.07, 0, 2 * Math.PI);
    ctx.fillStyle = BORDE;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx, cy, r * 0.04, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();

    // Small pointer on right, overlapping wheel slightly
    var ps   = r * 0.09;
    var tipX = cx + r - ps * 0.6;   // tip slightly inside the border
    var baseX = tipX + ps * 1.8;
    ctx.fillStyle = BORDE;
    ctx.beginPath();
    ctx.moveTo(tipX,  cy);
    ctx.lineTo(baseX, cy - ps);
    ctx.lineTo(baseX, cy + ps);
    ctx.closePath();
    ctx.fill();
}

function spinWheel(idx) {
    if (girando[idx]) return;
    girando[idx] = true;
    var resultEl = document.getElementById('result-' + idx);
    if (resultEl) { resultEl.textContent = ''; resultEl.classList.remove('visible'); }

    var duracion = 3000 + Math.random() * 2000;
    var extra    = Math.PI * 2 * (6 + Math.random() * 6);
    var inicio   = angles[idx];
    var fin      = inicio + extra;
    var t0       = performance.now();

    function paso(now) {
        var progress = Math.min((now - t0) / duracion, 1);
        var eased    = 1 - Math.pow(1 - progress, 3);
        angles[idx]  = inicio + (fin - inicio) * eased;
        dibujar(idx);
        if (progress < 1) {
            requestAnimationFrame(paso);
        } else {
            girando[idx] = false;
            var n    = RULETAS[idx].retos.length;
            var arc2 = (2 * Math.PI) / n;
            var norm = ((angles[idx] % (Math.PI*2)) + Math.PI*2) % (Math.PI*2);
            var win  = Math.floor(((Math.PI*2 - norm) % (Math.PI*2)) / arc2) % n;
            if (resultEl) { resultEl.textContent = RULETAS[idx].retos[win]; resultEl.classList.add('visible'); }
        }
    }
    requestAnimationFrame(paso);
}

function initRuletas() {
    // Wait a frame so CSS has laid out sizes
    requestAnimationFrame(function() {
        for (var i = 0; i < 6; i++) dibujar(i);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRuletas);
} else {
    initRuletas();
}

// Redraw on resize
window.addEventListener('resize', function() {
    for (var i = 0; i < 6; i++) dibujar(i);
});
