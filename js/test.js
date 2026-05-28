var PREGUNTAS = [
    {
        texto: "¿Cómo defines tu energía en una fiesta?",
        opciones: [
            { texto: "Soy el centro de atención", puntos: [3,2,0,0,2,1,0,0,1] },
            { texto: "Observo antes de soltar mi mejor movimiento", puntos: [0,1,2,1,0,2,1,1,0] },
            { texto: "Paso desapercibida pero lo recordarás", puntos: [1,0,1,2,0,1,2,2,0] },
            { texto: "Me voy antes de que acabe — tengo cosas que hacer", puntos: [0,2,1,0,1,0,0,1,3] }
        ]
    },
    {
        texto: "¿Cuál es tu actitud ante los haters?",
        opciones: [
            { texto: "Les ignoro, mi éxito habla por mí", puntos: [2,1,0,1,0,2,1,0,1] },
            { texto: "Les doy un show que no olvidarán", puntos: [3,2,0,0,2,0,0,0,1] },
            { texto: "Los analizo y aprendo de ellos", puntos: [0,0,2,2,0,1,2,1,0] },
            { texto: "Me motivan a ir a por más", puntos: [0,2,1,0,1,0,0,2,3] }
        ]
    },
    {
        texto: "¿Qué pides en un restaurante thai?",
        opciones: [
            { texto: "Mango sticky rice, por supuesto", puntos: [3,0,0,0,0,1,1,1,0] },
            { texto: "Lo más picante del menú", puntos: [0,3,0,0,2,0,0,1,2] },
            { texto: "Lo que nadie más pide", puntos: [0,0,2,2,0,2,1,0,0] },
            { texto: "Lo que recomienda el chef", puntos: [0,0,1,1,1,0,2,2,0] }
        ]
    },
    {
        texto: "¿Cuál es tu superpoder?",
        opciones: [
            { texto: "Cautivar a cualquiera en segundos", puntos: [2,1,0,0,3,1,0,0,0] },
            { texto: "Golpear fuerte cuando menos lo esperan", puntos: [0,3,0,0,1,0,0,1,2] },
            { texto: "Transformarme según la situación", puntos: [0,0,2,1,0,2,1,0,1] },
            { texto: "Nunca rendirme", puntos: [0,1,1,0,0,0,2,3,2] }
        ]
    },
    {
        texto: "¿Cómo describes tu estilo?",
        opciones: [
            { texto: "Dulce pero letal", puntos: [3,1,0,0,1,0,1,0,0] },
            { texto: "Duro y sin excusas", puntos: [0,2,0,0,2,0,0,1,3] },
            { texto: "Cambia según el día", puntos: [0,0,2,2,0,2,1,0,0] },
            { texto: "Clásico con un giro inesperado", puntos: [0,0,1,1,0,1,2,2,0] }
        ]
    },
    {
        texto: "¿Qué haces cuando algo va mal?",
        opciones: [
            { texto: "Lo proceso sola y sigo adelante", puntos: [1,0,2,1,0,1,0,2,1] },
            { texto: "Me enfado y lo uso como combustible", puntos: [0,2,0,0,2,0,0,1,3] },
            { texto: "Busco el mensaje detrás del problema", puntos: [0,0,2,3,0,1,2,0,0] },
            { texto: "Me reinvento completamente", puntos: [1,1,1,0,1,2,2,0,0] }
        ]
    },
    {
        texto: "¿Cuál es tu relación con las redes sociales?",
        opciones: [
            { texto: "Las uso para mostrar mi mundo sin filtros", puntos: [2,1,0,0,2,1,0,0,1] },
            { texto: "Publico poco pero siempre impacto", puntos: [0,2,1,1,0,0,1,1,2] },
            { texto: "Me obsesiona analizar los números", puntos: [0,0,2,3,0,1,0,1,0] },
            { texto: "Prefiero vivir el momento", puntos: [1,0,0,0,1,2,2,2,0] }
        ]
    },
    {
        texto: "¿Qué canción pondría tu alter ego?",
        opciones: [
            { texto: "Una que te haga moverse sin querer", puntos: [1,1,0,0,3,1,0,0,1] },
            { texto: "Una que deje claro quién manda", puntos: [0,3,0,0,1,0,0,1,2] },
            { texto: "Una que te haga pensar", puntos: [0,0,2,3,0,1,2,0,0] },
            { texto: "Una que te rompa por dentro", puntos: [0,0,1,0,0,0,1,3,1] }
        ]
    },
    {
        texto: "¿Qué buscas en una colaboración?",
        opciones: [
            { texto: "Química instantánea", puntos: [2,1,0,0,2,1,0,0,1] },
            { texto: "Alguien que me desafíe", puntos: [0,2,1,0,1,0,0,1,3] },
            { texto: "Complementariedad total", puntos: [0,0,2,2,0,2,1,0,0] },
            { texto: "Independencia dentro del proyecto", puntos: [1,0,1,1,0,0,2,2,0] }
        ]
    },
    {
        texto: "¿Cómo quieres que te recuerden?",
        opciones: [
            { texto: "Como alguien que cambió las reglas del juego", puntos: [1,2,0,0,1,0,0,1,3] },
            { texto: "Como alguien auténtica y sin igual", puntos: [3,1,0,0,1,1,0,0,0] },
            { texto: "Como alguien que siempre estuvo ahí", puntos: [0,0,1,1,0,1,2,3,0] },
            { texto: "Como un enigma que nunca se resolvió del todo", puntos: [0,0,2,2,0,2,1,0,0] }
        ]
    }
];

var CANCIONES = [
    { titulo: "Mango Sticky Rice", emoji: "🥭", desc: "Eres dulce, irresistible y con un toque thai que nadie puede ignorar. Tu presencia es un placer para los sentidos." },
    { titulo: "ONE PUNCH",         emoji: "👊", desc: "Vas directa al grano. Un solo golpe tuyo basta. Nadie te para cuando decides actuar." },
    { titulo: "SICK WITH IT",      emoji: "🔥", desc: "Tienes ese fuego interior que te hace destacar en cualquier sala. Eres enfermizamente buena en lo que haces." },
    { titulo: "MSG",               emoji: "🧬", desc: "Eres adictiva. La gente no sabe bien por qué, pero siempre quiere más de ti." },
    { titulo: "SSAK",              emoji: "⚡", desc: "Eres energía pura. Rápida, intensa y siempre un paso por delante de todos." },
    { titulo: "AEIOU",             emoji: "🎶", desc: "Te expresas con fluidez y creatividad. Las palabras son tu arma y las usas a la perfección." },
    { titulo: "Mirror Mirror",     emoji: "🪞", desc: "Reflexiva y profunda. Antes de actuar, te miras por dentro. Tu autoconocimiento es tu mayor fortaleza." },
    { titulo: "NEVER",             emoji: "💜", desc: "Resiliente e inquebrantable. Nunca te rindes, aunque el camino duela. Tu perseverancia inspira." },
    { titulo: "MENACE",            emoji: "😈", desc: "Peligrosa en el mejor sentido. Rompes esquemas, desafías normas y haces que todos te miren." }
];

var respuestas = new Array(PREGUNTAS.length).fill(null);
var preguntaActual = 0;

function iniciarTest() {
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-progress').style.display = 'flex';
    document.getElementById('test-nav').style.display = 'flex';
    preguntaActual = 0;
    renderTest();
}

function renderTest() {
    // Update progress dots
    var dots = document.querySelectorAll('.test-progress__dot');
    dots.forEach(function(d, i) {
        d.classList.remove('done', 'active');
        if (i < preguntaActual) d.classList.add('done');
        else if (i === preguntaActual) d.classList.add('active');
    });

    // Show correct question
    document.querySelectorAll('.test-question').forEach(function(q, i) {
        q.classList.toggle('active', i === preguntaActual);
    });

    // Mark selected option if any
    var opts = document.querySelectorAll('#pregunta-' + preguntaActual + ' .test-option');
    opts.forEach(function(o, i) {
        o.classList.toggle('selected', i === respuestas[preguntaActual]);
    });

    // Show/hide nav buttons
    var btnPrev = document.getElementById('btn-prev');
    var btnNext = document.getElementById('btn-next');
    var btnFin  = document.getElementById('btn-fin');

    btnPrev.style.display = preguntaActual === 0 ? 'none' : 'flex';

    if (preguntaActual === PREGUNTAS.length - 1) {
        btnNext.style.display = 'none';
        btnFin.style.display  = 'flex';
    } else {
        btnNext.style.display = 'flex';
        btnFin.style.display  = 'none';
    }
}

function elegirOpcion(pregIdx, optIdx) {
    respuestas[pregIdx] = optIdx;
    var opts = document.querySelectorAll('#pregunta-' + pregIdx + ' .test-option');
    opts.forEach(function(o, i) { o.classList.toggle('selected', i === optIdx); });
}

function avanzar() {
    if (preguntaActual < PREGUNTAS.length - 1) {
        preguntaActual++;
        renderTest();
    }
}

function retroceder() {
    if (preguntaActual > 0) {
        preguntaActual--;
        renderTest();
    }
}

function finalizarTest() {
    var totales = new Array(CANCIONES.length).fill(0);
    respuestas.forEach(function(optIdx, pregIdx) {
        if (optIdx === null) return;
        PREGUNTAS[pregIdx].opciones[optIdx].puntos.forEach(function(p, i) { totales[i] += p; });
    });

    var maxIdx = totales.indexOf(Math.max.apply(null, totales));
    var cancion = CANCIONES[maxIdx];

    document.querySelectorAll('.test-question').forEach(function(q) { q.classList.remove('active'); });
    document.getElementById('test-progress').style.display = 'none';
    document.getElementById('test-nav').style.display = 'none';

    var result = document.getElementById('test-result');
    result.querySelector('.test-result__emoji').textContent = cancion.emoji;
    result.querySelector('.test-result__song').textContent = cancion.titulo;
    result.querySelector('.test-result__desc').textContent = cancion.desc;
    result.classList.add('active');
}

function reiniciarTest() {
    respuestas = new Array(PREGUNTAS.length).fill(null);
    preguntaActual = 0;
    document.getElementById('test-intro').style.display = 'block';
    document.getElementById('test-progress').style.display = 'none';
    document.getElementById('test-nav').style.display = 'none';
    document.getElementById('test-result').classList.remove('active');
    document.querySelectorAll('.test-question').forEach(function(q) { q.classList.remove('active'); });
}
