// ============================================
// DATOS Y CONFIGURACIÓN
// ============================================

const retos = [
    "Haz 10 sentadillas",
    "Canta una canción en voz alta",
    "Camina hacia atrás 10 pasos",
    "Salta en un pie durante 20 segundos",
    "Haz una mueca divertida",
    "Di la frase más larga sin respirar",
    "Baila como si nadie te viera",
    "Haz el acento de otro país",
    "Imita a tu animal favorito",
    "Salta 5 veces gritando ¡RETO!",
    "Cuéntale un chiste a alguien cercano",
    "Corre en círculos durante 10 segundos",
    "Intenta tocar la punta de los pies",
    "Haz una voltereta (si puedes)",
    "Fotografía tu mejor sonrisa",
    "Llama a un amigo y dile que lo amas",
    "Escribe tu nombre con la mano no dominante",
    "Haz un video de 5 segundos bailando",
    "Come algo picante y mantén la cara seria",
    "Arroja 3 cosas hacia arriba y atrapalas"
];

let historialRetos = [];
let wheelSpinning = false;
const colores = [
    '#6366f1', '#ec4899', '#f59e0b', '#10b981',
    '#f97316', '#06b6d4', '#8b5cf6', '#14b8a6',
    '#d946ef', '#0891b2'
];

// ============================================
// FUNCIONES DE RULETA
// ============================================

function dibujarRuleta() {
    const canvas = document.getElementById('wheelCanvas');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2 - 10;
    const sliceAngle = (Math.PI * 2) / retos.length;

    // Limpiar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar segmentos
    retos.forEach((reto, i) => {
        const startAngle = i * sliceAngle;
        const endAngle = (i + 1) * sliceAngle;

        // Dibujar segmento
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.lineTo(centerX, centerY);
        ctx.fillStyle = colores[i % colores.length];
        ctx.fill();

        // Dibujar borde
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Dibujar texto
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(startAngle + sliceAngle / 2);
        ctx.textAlign = 'right';
        ctx.fillStyle = 'white';
        ctx.font = 'bold 14px Arial';
        ctx.fillText(reto, radius - 20, 5);
        ctx.restore();
    });

    // Dibujar círculo central
    ctx.beginPath();
    ctx.arc(centerX, centerY, 30, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Dibujar emoji en el centro
    ctx.font = '24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🎡', centerX, centerY);
}

function girarRuleta() {
    if (wheelSpinning) return;

    wheelSpinning = true;
    const spinBtn = document.getElementById('spinBtn');
    spinBtn.disabled = true;
    spinBtn.style.opacity = '0.5';

    const canvas = document.getElementById('wheelCanvas');
    const randomIndex = Math.floor(Math.random() * retos.length);
    const randomRotation = Math.random() * 360;
    const totalRotation = 360 * 5 + randomRotation; // 5 vueltas totales + rotación aleatoria

    let currentRotation = 0;
    const rotationSpeed = 15;
    const animationDuration = 100; // frames

    const animate = (frame) => {
        if (frame < animationDuration) {
            currentRotation = (totalRotation / animationDuration) * frame;
            canvas.style.transform = `rotate(${currentRotation}deg)`;
            requestAnimationFrame(() => animate(frame + 1));
        } else {
            canvas.style.transform = `rotate(${totalRotation}deg)`;
            wheelSpinning = false;
            spinBtn.disabled = false;
            spinBtn.style.opacity = '1';

            // Mostrar resultado
            const retoGanador = retos[randomIndex];
            mostrarResultado(retoGanador);
            agregarAlHistorial(retoGanador);
        }
    };

    animate(0);
}

function mostrarResultado(reto) {
    const resultadoDiv = document.getElementById('resultadoReto');
    resultadoDiv.innerHTML = `<p>🎯 ${reto}</p>`;
    resultadoDiv.style.animation = 'bounce 0.5s ease-in-out';

    setTimeout(() => {
        resultadoDiv.style.animation = 'none';
    }, 500);
}

function agregarAlHistorial(reto) {
    historialRetos.unshift(reto);
    if (historialRetos.length > 10) {
        historialRetos.pop();
    }
    actualizarHistorial();
}

function actualizarHistorial() {
    const historialList = document.getElementById('historialList');
    historialList.innerHTML = historialRetos
        .map(reto => `<li>${reto}</li>`)
        .join('');
}

// ============================================
// FUNCIONES DE COMENTARIOS
// ============================================

function cargarComentarios() {
    const comentariosGuardados = localStorage.getItem('comentarios');
    return comentariosGuardados ? JSON.parse(comentariosGuardados) : [];
}

function guardarComentarios(comentarios) {
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
}

function formatearFecha(fecha) {
    const ahora = new Date();
    const diferencia = ahora - fecha;
    const minutos = Math.floor(diferencia / 1000 / 60);
    const horas = Math.floor(diferencia / 1000 / 60 / 60);
    const dias = Math.floor(diferencia / 1000 / 60 / 60 / 24);

    if (minutos < 1) return 'Hace unos segundos';
    if (minutos < 60) return `Hace ${minutos} minuto${minutos > 1 ? 's' : ''}`;
    if (horas < 24) return `Hace ${horas} hora${horas > 1 ? 's' : ''}`;
    if (dias < 7) return `Hace ${dias} día${dias > 1 ? 's' : ''}`;

    return fecha.toLocaleDateString('es-ES');
}

function agregarComentario(nombre, texto) {
    const comentarios = cargarComentarios();
    const nuevoComentario = {
        id: Date.now(),
        nombre,
        texto,
        fecha: new Date().toISOString()
    };

    comentarios.unshift(nuevoComentario);
    guardarComentarios(comentarios);
    actualizarComentarios();
}

function actualizarComentarios() {
    const comentariosList = document.getElementById('comentariosList');
    const comentarios = cargarComentarios();

    if (comentarios.length === 0) {
        comentariosList.innerHTML = '<p style="text-align: center; color: #6b7280;">Sé el primero en comentar 👋</p>';
        return;
    }

    comentariosList.innerHTML = comentarios
        .map(c => {
            const fecha = new Date(c.fecha);
            return `
                <div class="comentario-item">
                    <div class="comentario-header">
                        <strong>${escapeHtml(c.nombre)}</strong>
                        <span class="comentario-fecha">${formatearFecha(fecha)}</span>
                    </div>
                    <p>${escapeHtml(c.texto)}</p>
                </div>
            `;
        })
        .join('');
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// ============================================
// FUNCIONES DE COOKIES
// ============================================

function mostrarBannerCookies() {
    const cookiesAceptadas = localStorage.getItem('cookiesAceptadas');
    if (!cookiesAceptadas) {
        document.getElementById('cookieBanner').classList.add('show');
    }
}

function aceptarCookies() {
    localStorage.setItem('cookiesAceptadas', 'true');
    document.getElementById('cookieBanner').classList.remove('show');
}

function rechazarCookies() {
    localStorage.setItem('cookiesAceptadas', 'false');
    document.getElementById('cookieBanner').classList.remove('show');
}

// ============================================
// NAVEGACIÓN ACTIVA
// ============================================

function actualizarNavegacionActiva() {
    const navLinks = document.querySelectorAll('.nav-link');
    const paginaActual = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === paginaActual || (paginaActual === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Dibujar ruleta solo si existe el canvas
    if (document.getElementById('wheelCanvas')) {
        dibujarRuleta();
        document.getElementById('spinBtn').addEventListener('click', girarRuleta);
    }

    // Configurar formulario de comentarios solo si existe
    const formulario = document.getElementById('comentarioForm');
    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value.trim();
            const comentario = document.getElementById('comentario').value.trim();

            if (nombre && comentario) {
                agregarComentario(nombre, comentario);
                formulario.reset();
                alert('¡Comentario publicado con éxito!');
            }
        });
    }

    // Cargar comentarios
    actualizarComentarios();

    // Configurar cookies
    document.getElementById('acceptCookies').addEventListener('click', aceptarCookies);
    document.getElementById('rejectCookies').addEventListener('click', rechazarCookies);
    mostrarBannerCookies();

    // Configurar navegación activa
    actualizarNavegacionActiva();

    // Redimensionar canvas cuando cambie ventana (solo si existe)
    if (document.getElementById('wheelCanvas')) {
        window.addEventListener('resize', () => {
            dibujarRuleta();
        });
    }
});

