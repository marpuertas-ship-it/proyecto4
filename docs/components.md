# Componentes UI - RetoRuleta

## 1. Botones

### Botón Primario (.btn-primary)
```html
<button class="btn btn-primary">Comenzar Ahora</button>
```

**Estilos:**
- Background: Gradiente azul (primario)
- Color: Blanco
- Padding: 1rem 2rem
- Border-radius: 1rem
- Hover: Levanta 2px, aumenta sombra

**Estados:**
- Normal: Azul gradiente
- Hover: Levanta con sombra
- Active: Más oscuro
- Disabled: Opacidad 0.5

### Botón Secundario (.btn-secondary)
```html
<button class="btn btn-secondary">Rechazar</button>
```

**Estilos:**
- Background: Fondo claro
- Border: 2px sólido
- Color: Texto oscuro
- Hover: Fondo gris suave

### Botón Grande (.btn-large)
```html
<button class="btn btn-primary btn-large">GIRAR RULETA</button>
```

**Estilos:**
- Padding: 1.5rem 4rem
- Font-size: 1.125rem

---

## 2. Tarjetas de Comentario (.comentario-item)

```html
<div class="comentario-item">
    <div class="comentario-header">
        <strong>María</strong>
        <span class="comentario-fecha">Hace 2 horas</span>
    </div>
    <p>¡Completé el reto de cantar una canción al revés!</p>
</div>
```

**Estilos:**
- Background: #f9fafb (claro)
- Padding: 2rem
- Border-left: 4px primario
- Border-radius: 1rem
- Sombra: 0 4px 12px rgba(0,0,0,0.1)
- Hover: Sube 5px

**Elementos:**
- Header con nombre (Poppins 600, primario)
- Fecha en gris pequeña
- Texto descriptivo

---

## 3. Formulario de Comentario (.comentario-form)

```html
<form class="comentario-form">
    <div class="form-group">
        <label for="nombre">Tu nombre</label>
        <input type="text" id="nombre" required>
    </div>
    <div class="form-group">
        <label for="comentario">Tu comentario</label>
        <textarea id="comentario" required></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Publicar</button>
</form>
```

**Estilos de Input:**
- Padding: 1rem
- Border: 2px #e5e7eb
- Border-radius: 0.5rem
- Focus: Border primario + sombra suave
- Font: Inter 16px

**Textarea:**
- Min-height: 120px
- Resize: vertical
- Mismos estilos que input

---

## 4. Retos Lista (.retos-lista)

```html
<ul class="retos-lista">
    <li>Haz 10 sentadillas</li>
    <li>Canta una canción</li>
</ul>
```

**Estilos:**
- Display: Grid auto-fit
- Min-width: 200px
- Gap: 1.5rem
- Background: Gradiente suave (azul-rosa)
- Padding: 1.5rem
- Border-left: 3px ámbar
- Border-radius: 0.5rem

---

## 5. Resultado de Reto (.resultado-reto)

```html
<div class="resultado-reto">
    <p>🎯 Haz 5 flexiones</p>
</div>
```

**Estilos:**
- Background: White
- Border: 3px primario
- Padding: 2rem
- Min-height: 150px
- Display: Flex (centrado vertical/horizontal)
- Font: Poppins 700, azul primario
- Border-radius: 1rem

**Animación:**
Al actualizar: bounce 0.5s ease-in-out

---

## 6. Canvas de Ruleta (#wheelCanvas)

### Propiedades
```javascript
canvas.width = 400;
canvas.height = 400;
```

### Elementos dentro
- 20 segmentos con colores vibrantes
- Texto descriptivo en cada segmento
- Círculo central blanco con emoji 🎡
- Puntero rojo arriba (CSS)

### Animación
- Rotación continua: 20s linear infinite
- Al "girar": requestAnimationFrame × 100 frames
- Al obtener resultado: levanta 2px

---

## 7. Header (.header)

```html
<header class="header">
    <div class="logo">
        <span class="logo-icon">🎡</span>
        <h1>RetoRuleta</h1>
    </div>
    <nav class="nav">
        <a href="#inicio" class="nav-link active">Inicio</a>
        <a href="#ruleta" class="nav-link">Ruleta</a>
        <a href="#comunidad" class="nav-link">Comunidad</a>
    </nav>
</header>
```

**Estilos:**
- Background: Gradiente primario-secundario
- Position: Sticky top
- Color: White
- Padding: 1.5rem 0
- Sombra: 0 4px 6px rgba(0,0,0,0.1)

**Logo:**
- Emoji rota infinitamente (spin 20s)
- Font: Poppins 800, 40px

**Nav Links:**
- Decoración: Underline blanco en active
- Hover: Opacidad 0.8

---

## 8. Hero Section (.hero)

```html
<section class="hero">
    <div class="hero-content">
        <h2>¡Atrévete a Girar la Ruleta!</h2>
        <p>Descubre retos épicos...</p>
        <a href="#ruleta" class="btn btn-primary">Comenzar Ahora</a>
    </div>
    <div class="hero-illustration">
        <div class="spinning-wheel-preview">🎡</div>
    </div>
</section>
```

**Estilos:**
- Background: Gradiente púrpura
- Color: White
- Padding: 4rem 0
- Grid: 2 columnas en desktop, 1 en móvil
- Gap: 4rem

**Animación:**
- Emoji rebota (bounce 2s up/down 20px)

---

## 9. Banner de Cookies (.cookie-banner)

```html
<div class="cookie-banner show">
    <div class="cookie-content">
        <p>Utilizamos cookies...</p>
        <div class="cookie-buttons">
            <button class="btn btn-primary">Aceptar</button>
            <button class="btn btn-secondary">Rechazar</button>
        </div>
    </div>
</div>
```

**Estilos:**
- Position: Fixed bottom
- Background: Dark (#1f2937)
- Color: White
- Padding: 2rem
- Display: Flex (espacio-entre)
- Animación: slideUp 0.3s entrada

**Media Query:**
En móvil, flex-direction: column

---

## 10. Footer (.footer)

```html
<footer class="footer">
    <p>&copy; 2024 RetoRuleta</p>
    <div class="footer-links">
        <a href="#legal">Aviso Legal</a>
        <a href="#privacidad">Privacidad</a>
    </div>
</footer>
```

**Estilos:**
- Background: Dark (#1f2937)
- Color: White
- Padding: 2rem 0
- Border-top: 2px primario
- Text-align: Center

**Links:**
- Color: White
- Hover: Primario

---

## Estados de Componentes

### Button States
```css
/* Normal */
.btn { /* estilos base */ }

/* Hover */
.btn:hover { transform: translateY(-2px); }

/* Active */
.btn:active { opacity: 0.9; }

/* Disabled */
.btn:disabled { opacity: 0.5; cursor: not-allowed; }
```

### Input Focus
```css
input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}
```

---

## Iconografía

- **🎡**: Logo y marca
- **🎯**: Indicador de reto
- **✅**: Confirmación
- **😂**: Reacciones
- **👋**: Bienvenida
- **🎪**: Diversión general

Se usan emojis Unicode para ir sin imágenes externas.

---

**Última actualización**: 2024
**Responsabilidad**: Cada componente fue testeado en móvil, tablet y desktop.

