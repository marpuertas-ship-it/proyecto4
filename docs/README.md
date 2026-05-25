# RetoRuleta

> Una plataforma web interactiva de entretenimiento donde los usuarios pueden girar una ruleta para obtener retos alucinantes, participar en una comunidad de jugadores y compartir sus experiencias.

🔗 **[Abre el proyecto localmente](file:///index.html)**

---

## Descripción

RetoRuleta es una aplicación web divertida e interactiva diseñada para entretener a grupos de amigos, familiares o equipos de trabajo. Los usuarios pueden girar una ruleta digital que genera retos aleatorios de diferentes categorías (físicos, de habilidad, cómicos). La plataforma incluye un sistema de comentarios social donde los jugadores pueden compartir sus experiencias y crear una comunidad activa alrededor del juego.

El diseño es moderno, responsivo y accesible, con animaciones suaves que hacen la experiencia más inmersiva y divertida.

---

## Capturas de pantalla

| Escritorio | Descripción |
|------------|-----------|
| Hero + Ruleta | Página de inicio con la ruleta interactiva en el centro |
| Comunidad | Sección de comentarios donde los usuarios interactúan |
| Responsive | Funciona perfectamente en móviles, tablets y desktops |

---

## Funcionalidades

- [x] Página principal (Hero) con llamada a la acción
- [x] Ruleta interactiva con 20 retos diferentes
- [x] Animaciones suaves al girar la ruleta
- [x] Historial de últimos retos jugados
- [x] Sistema de comentarios con localStorage
- [x] Formulario de comentarios validado
- [x] Banner de cookies con aceptar/rechazar
- [x] Diseño 100% responsive (móvil, tablet, desktop)
- [x] Navegación suave entre secciones
- [x] Animaciones y transiciones fluidas

---

## Stack Tecnológico

| Categoría | Tecnología |
|-----------|-----------|
| Frontend | HTML5, CSS3, JavaScript (Vanilla) |
| Lógica | JavaScript puro |
| Persistencia | localStorage (comentarios y cookies) |
| Diseño | Canvas API para dibujar la ruleta |
| Tipografía | Google Fonts (Poppins, Inter) |
| Diseño Responsivo | Media queries CSS |

---

## Sistema de Diseño

El sistema de diseño está documentado en archivos markdown que sirven como fuente de verdad:

| Archivo | Contenido |
|---------|----------|
| [design-system.md](docs/design-system.md) | Personalidad de marca y principios |
| [colors.md](docs/colors.md) | Paleta de colores con tokens CSS |
| [typography.md](docs/typography.md) | Familias tipográficas y escala |
| [spacing.md](docs/spacing.md) | Sistema de espaciado y breakpoints |
| [components.md](docs/components.md) | Descripción de componentes UI |

---

## Estructura del Proyecto

```
proyecto4/
├── index.html                 # Página principal
├── css/
│   └── main.css              # Todos los estilos (variables CSS incluidas)
├── js/
│   └── main.js               # Lógica JavaScript (ruleta, comentarios, cookies)
├── docs/
│   ├── design-system.md
│   ├── colors.md
│   ├── typography.md
│   ├── spacing.md
│   └── components.md
├── assets/
│   └── (imágenes y recursos en el futuro)
└── read/
    └── (archivos de referencia)
```

---

## Cómo Ejecutar el Proyecto

### En Local (Sin servidor necesario)

```bash
# Simplemente abre el archivo index.html en tu navegador
# o usa un servidor local simple:

# Con Python 3:
python -m http.server 8000

# Con Node.js (con http-server instalado):
http-server

# Con VS Code:
# Haz clic derecho en index.html → "Open with Live Server"
```

Luego abre `http://localhost:8000` en tu navegador.

---

## Decisiones de Diseño Destacadas

### 1. **Gradientes Vibrantes sobre Fondos Planos**
Elegí usar gradientes en header, hero y botones porque crean una sensación de energía y movimiento que refleja la naturaleza lúdica del proyecto. Los fondos planos en otras secciones mantienen la legibilidad.

### 2. **Canvas en lugar de SVG para la Ruleta**
Implementé la ruleta con Canvas API porque permite animaciones más fluidas y controlables. También es más fácil de manipular con JavaScript para calcular ángulos y rotaciones.

### 3. **localStorage para Persistencia**
Usé localStorage en lugar de un backend porque es un proyecto educativo sin servidor. Los comentarios se guardan en el navegador del usuario y persisten entre sesiones. Es simple, funciona sin dependencias externas y es suficiente para la escala del proyecto.

---

## Uso de Inteligencia Artificial

### Lo que Generó GitHub Copilot
- Estructura HTML base de todas las secciones
- Estilos CSS usando custom properties (variables CSS)
- Lógica de Canvas para dibujar la ruleta
- Sistema de comentarios con localStorage
- Banner de cookies y gestión del consentimiento
- Animaciones CSS keyframes

### Lo que Tuve que Corregir
1. **Tamaño del texto en la ruleta**: Copilot usó `font` sin especificar bien el tamaño. Tuve que ajustarlo a 14px y hacerlo responsive con media queries.
2. **Rotación de la ruleta**: La animación inicial era muy lineal. Implementé `requestAnimationFrame` para hacer la rotación más natural y fluida.
3. **Validación del formulario**: Copilot no escapaba HTML en comentarios. Agregué la función `escapeHtml()` para prevenir XSS.

### Decisiones Propias como Director/a Técnico
- La selección de **Poppins** para títulos (más moderna) e **Inter** para cuerpo (más legible)
- La paleta de 10 colores vibrantantes para los segmentos de la ruleta
- La estructura de 4 secciones principales (Header, Hero, Ruleta, Comunidad, Footer)
- La decisión de usar solo vanilla JS sin frameworks para mantenerlo simple
- El sistema de tokens CSS para facilitar cambios de diseño futura

---

## Cumplimiento Legal

- [x] Aviso legal (placeholder en footer)
- [x] Política de privacidad (placeholder en footer)
- [x] Política de cookies (placeholder en footer)
- [x] Banner de consentimiento de cookies funcional
- [x] Preferencias guardadas en localStorage

---

## Autor/a

**[Tu nombre]**
Grado en Diseño Gráfico · [Centro Educativo] · Curso [20XX-20XX]

---

## Licencia

Este proyecto ha sido desarrollado con fines académicos y educativos.

---

## Notas para Futuras Mejoras

- [ ] Agregar más categorías de retos (físicos, mentales, cómicos, etc.)
- [ ] Sistema de puntuación y rankings
- [ ] Compartir retos en redes sociales
- [ ] Modo multijugador con desafíos simultáneos
- [ ] Backend para guardar comentarios de forma persistente
- [ ] Sistema de autenticación de usuarios
- [ ] Retos con temporizador
- [ ] Galería de fotos de retos completados

