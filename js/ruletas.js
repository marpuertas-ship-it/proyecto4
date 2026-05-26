var RULETAS = [
    { retos: ['10 sentadillas','Plancha 30s','20 saltos','Puntillas 1min','Baila 2min','15 flexiones','Corre en sitio','Equilibrio 30s'] },
    { retos: ['Llama a un amigo','Manda un meme','Pregunta incómoda','Di un cumplido','Imita a alguien','Cuenta un chiste','Foto con extraño','Karaoke improv'] },
    { retos: ['Dibuja en 60s','Inventa canción','Foto artística','Escribe un poema','Diseña personaje','Actúa una escena','Crea un baile','Pinta con dedos'] },
    { retos: ['Come algo picante','Mezcla rara','Come sin manos','Adivina ingrediente','Inventa receta','Come en 30s','Prueba algo nuevo','Batido misterioso'] },
    { retos: ['Sin móvil 1h','Aprende truco','Graba un vídeo','Busca algo viral','Aprende shortcut','Diseña un meme','Cambia foto perfil','Alarma rara'] },
    { retos: ['Imita un acento','Cuenta un chiste malo','Baila sin música','Haz una voz rara','Actúa una escena épica','Di palabras al revés','Parodia a alguien','Haz reír a todos'] }
];

var COLORES = ['#df9a31','#cd5796','#704b93','#98bc39','#61aea4','#ede53b','#df9a31','#61aea4'];
var angles  = [0,0,0,0,0,0];
var girando = [false,false,false,false,false,false];

function dibujar(idx) {
    var canvas = document.getElementById('ruleta-' + idx);
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var cx  = canvas.width  / 2;
    var cy  = canvas.height / 2;
    var r   = cx - 8;
    var retos = RULETAS[idx].retos;
    var n   = retos.length;
    var arc = (2 * Math.PI) / n;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angles[idx]);

    for (var i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, r, i * arc, (i+1) * arc);
        ctx.closePath();
        ctx.fillStyle = COLORES[i % COLORES.length];
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.5)';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.save();
        ctx.rotate(i * arc + arc / 2);
        ctx.textAlign = 'right';
        ctx.fillStyle = 'white';
        var fs = Math.max(9, Math.round(r * 0.11));
        ctx.font = 'bold ' + fs + 'px sans-serif';
        ctx.shadowColor = 'rgba(0,0,0,0.4)';
        ctx.shadowBlur = 2;
        var palabras = retos[i].split(' ');
        var lh = fs * 1.3;
        var startY = -(palabras.length - 1) * lh / 2;
        for (var w = 0; w < palabras.length; w++) {
            ctx.fillText(palabras[w], r - 10, startY + w * lh);
        }
        ctx.restore();
    }

    // Centro
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.09, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.restore();
}

function spinWheel(idx) {
    if (girando[idx]) return;
    girando[idx] = true;

    // Ocultar resultado anterior
    var resultEl = document.getElementById('result-' + idx);
    if (resultEl) { resultEl.textContent = ''; resultEl.classList.remove('visible'); }

    var duracion = 3000 + Math.random() * 2000;
    var extra    = Math.PI * 2 * (6 + Math.random() * 6);
    var inicio   = angles[idx];
    var fin      = inicio + extra;
    var t0       = performance.now();

    function paso(now) {
        var elapsed  = now - t0;
        var progress = Math.min(elapsed / duracion, 1);
        var eased    = 1 - Math.pow(1 - progress, 3);
        angles[idx]  = inicio + (fin - inicio) * eased;
        dibujar(idx);

        if (progress < 1) {
            requestAnimationFrame(paso);
        } else {
            girando[idx] = false;
            var retos   = RULETAS[idx].retos;
            var n       = retos.length;
            var arc     = (2 * Math.PI) / n;
            var norm    = ((angles[idx] % (Math.PI*2)) + Math.PI*2) % (Math.PI*2);
            var ganador = Math.floor(((Math.PI*2 - norm) % (Math.PI*2)) / arc) % n;
            if (resultEl) {
                resultEl.textContent = retos[ganador];
                resultEl.classList.add('visible');
            }
        }
    }
    requestAnimationFrame(paso);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        for (var i = 0; i < 6; i++) dibujar(i);
    });
} else {
    for (var i = 0; i < 6; i++) dibujar(i);
}
