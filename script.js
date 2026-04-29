document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('start-btn');
    const testDiv = document.getElementById('test');
    const resultDiv = document.getElementById('result');
    const profileText = document.getElementById('profile-text');
    const restartBtn = document.getElementById('restart-btn');
    const calculateBtn = document.getElementById('calculate-btn');
    const nextBtns = document.querySelectorAll('.next-btn');

    startBtn.addEventListener('click', function() {
        document.getElementById('intro').style.display = 'none';
        testDiv.style.display = 'block';
        document.getElementById('section-1').style.display = 'block';
    });

    nextBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const currentSection = this.closest('.section');
            const nextSectionId = 'section-' + this.getAttribute('data-next');
            currentSection.style.display = 'none';
            document.getElementById(nextSectionId).style.display = 'block';
        });
    });

    calculateBtn.addEventListener('click', function() {
        const answers = {};
        const radios = document.querySelectorAll('input[type="radio"]:checked');
        radios.forEach(radio => {
            answers[radio.name] = radio.value;
        });

        // Calcular tipos
        let eCount = 0, iCount = 0;
        let sCount = 0, nCount = 0;
        let tCount = 0, fCount = 0;
        let jCount = 0, pCount = 0;

        if (answers.q1 === 'E') eCount++; else iCount++;
        if (answers.q2 === 'E') eCount++; else iCount++;
        if (answers.q3 === 'E') eCount++; else iCount++;

        if (answers.q4 === 'S') sCount++; else nCount++;
        if (answers.q5 === 'S') sCount++; else nCount++;
        if (answers.q6 === 'S') sCount++; else nCount++;

        if (answers.q7 === 'T') tCount++; else fCount++;
        if (answers.q8 === 'T') tCount++; else fCount++;
        if (answers.q9 === 'T') tCount++; else fCount++;

        if (answers.q10 === 'J') jCount++; else pCount++;
        if (answers.q11 === 'J') jCount++; else pCount++;
        if (answers.q12 === 'J') jCount++; else pCount++;

        const eOrI = eCount > iCount ? 'E' : 'I';
        const sOrN = sCount > nCount ? 'S' : 'N';
        const tOrF = tCount > fCount ? 'T' : 'F';
        const jOrP = jCount > pCount ? 'J' : 'P';

        const type = eOrI + sOrN + tOrF + jOrP;

        // Descripciones simples
        const descriptions = {
            'INTJ': 'Eres un Arquitecto: Independiente, analítico y estratégico.',
            'INTP': 'Eres un Lógico: Innovador, curioso y teórico.',
            'ENTJ': 'Eres un Comandante: Líder, decidido y eficiente.',
            'ENTP': 'Eres un Debatedor: Ingenioso, entusiasta y provocador.',
            'INFJ': 'Eres un Abogado: Idealista, altruista y visionario.',
            'INFP': 'Eres un Mediador: Creativo, compasivo y filosófico.',
            'ENFJ': 'Eres un Protagonista: Carismático, inspirador y empático.',
            'ENFP': 'Eres un Activista: Entusiasta, creativo y sociable.',
            'ISTJ': 'Eres un Inspector: Responsable, práctico y organizado.',
            'ISFJ': 'Eres un Defensor: Protector, leal y servicial.',
            'ESTJ': 'Eres un Ejecutivo: Organizado, realista y decidido.',
            'ESFJ': 'Eres un Cónsul: Sociable, cooperativo y atento.',
            'ISTP': 'Eres un Virtuoso: Audaz, práctico y directo.',
            'ISFP': 'Eres un Aventurero: Artístico, curioso y amable.',
            'ESTP': 'Eres un Empresario: Energético, perceptivo y directo.',
            'ESFP': 'Eres un Animador: Espontáneo, entusiasta y divertido.'
        };

        profileText.textContent = descriptions[type] || 'Tu perfil es único.';

        testDiv.style.display = 'none';
        resultDiv.style.display = 'block';
    });

    restartBtn.addEventListener('click', function() {
        resultDiv.style.display = 'none';
        document.getElementById('intro').style.display = 'block';
        // Reset radios
        const radios = document.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => radio.checked = false);
        // Hide all sections except first
        document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
    });
});
