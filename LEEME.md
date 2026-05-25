# RetoRuleta - Sitio Web Interactivo

¡Bienvenido a **RetoRuleta**! Un sitio web divertido e interactivo dividido en **3 páginas separadas**: Inicio, Ruleta y Comunidad.

## 🚀 ¿Cómo ejecutar?

### Opción 1: Abrir directamente en el navegador
Simplemente haz doble clic en `index.html` o arrastra el archivo a tu navegador favorito.

### Opción 2: Con servidor local (Recomendado)

#### Python 3:
```bash
cd proyecto4
python -m http.server 8000
```
Luego abre: **http://localhost:8000**

#### Python 2:
```bash
cd proyecto4
python -m SimpleHTTPServer 8000
```

#### Node.js (si tienes instalado http-server):
```bash
cd proyecto4
http-server
```

#### VS Code (Live Server):
- Instala la extensión "Live Server" de Ritwick Dey
- Click derecho en `index.html` → "Open with Live Server"

---

## 📱 Estructura de Páginas

El proyecto ahora está dividido en **3 páginas separadas**:

### 🏠 **index.html** - Página de Inicio
- Héroe principal con descripción general
- Sección "¿Cómo Funciona?" con 3 características principales
- Estadísticas de la plataforma
- Botón call-to-action para ir a la ruleta

### 🎯 **ruleta.html** - Página de Ruleta
- Canvas interactivo con 20 segmentos de colores
- Botón "GIRAR RULETA" funcional
- Mostrador del reto ganador
- Historial de últimos 10 retos jugados
- Botón para ir a la comunidad

### 💬 **comunidad.html** - Página de Comunidad
- Formulario para dejar comentarios
- Sección de comentarios públicos
- Fecha relativa de publicación
- Sistema de almacenamiento en localStorage

---

## 📋 Características

✅ **3 páginas separadas y bien organizadas**
✅ **Ruleta Interactiva** - Gira y obtén retos aleatorios
✅ **20 Retos Diferentes** - Desde físicos hasta cómicos
✅ **Sistema de Comentarios** - Comparte tus experiencias
✅ **Historial de Retos** - Ve los últimos retos completados
✅ **Banner de Cookies** - Gestión de consentimiento
✅ **Diseño Responsive** - Funciona en móvil, tablet y desktop
✅ **Animaciones Suaves** - Transiciones y efectos visuales
✅ **Sin Dependencias** - Solo HTML, CSS y JavaScript vanilla

---

## 📁 Estructura del Proyecto

```
proyecto4/
├── index.html          # 🏠 Página de inicio
├── ruleta.html         # 🎯 Página de ruleta
├── comunidad.html      # 💬 Página de comunidad
│
├── css/
│   └── main.css        # Estilos completos con variables CSS
├── js/
│   └── main.js         # Lógica compartida entre todas las páginas
│
├── docs/
│   ├── README.md
│   ├── design-system.md
│   ├── colors.md
│   ├── typography.md
│   ├── spacing.md
│   └── components.md
│
└── assets/
    └── (futuras imágenes/recursos)
```

---

## 🎮 ¿Cómo usar RetoRuleta?

### 1. Comienza desde la Página de Inicio
- Abre `index.html` en tu navegador
- Lee sobre cómo funciona la plataforma
- Haz clic en "Ir a la Ruleta" para comenzar

### 2. Gira la Ruleta
- En la página `ruleta.html`
- Haz clic en el botón **"GIRAR RULETA"**
- Espera la animación
- ¡Lee tu reto! 🎯

### 3. Comparte tu Experiencia
- Haz clic en "Compartir en Comunidad" o ve a `comunidad.html` directamente
- Completa el formulario: Tu nombre + Tu comentario
- Haz clic en "Publicar Comentario"
- Tus comentarios aparecen al instante

### 4. Navega entre Páginas
- Usa el menú superior (Header) para navegar entre las 3 páginas
- El link activo se resalta en la navegación
- También hay botones internos en cada página para navegar

---

## 🎨 Personalización

Puedes personalizar el proyecto editando:

### Agregar más retos
Abre `js/main.js` y busca el array `retos`:
```javascript
const retos = [
    "Haz 10 sentadillas",
    "Tu nuevo reto aquí",
    // ...
];
```

### Cambiar colores
Abre `css/main.css` y modifica las variables CSS:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    /* ... */
}
```

### Cambiar tipografía
En `css/main.css`:
```css
--font-family-heading: 'Poppins', sans-serif;
--font-family-body: 'Inter', sans-serif;
```

---

## 📱 Responsividad

El sitio está optimizado para:
- **Móvil** (320px+)
- **Tablet** (768px+)
- **Desktop** (1024px+)
- **Pantalla Ancha** (1200px+)

---

## 🔒 Privacidad y Cookies

- Los comentarios se guardan **en tu navegador** (localStorage)
- No va a un servidor externo
- Tú tienes el control total de tus datos
- Puedes limpiar el historial borrando datos locales

---

## 🛠️ Stack Tecnológico

- **HTML5** - Estructura semántica
- **CSS3** - Variables CSS, Grid, Flexbox, Media Queries
- **JavaScript Vanilla** - Sin frameworks ni librerías externas
- **Canvas API** - Para dibujar la ruleta interactiva
- **Google Fonts** - Tipografía web

---

## 📖 Documentación

La documentación completa está en la carpeta `docs/`:
- **README.md** - Visión general del proyecto
- **design-system.md** - Sistema de diseño y principios
- **colors.md** - Paleta de colores
- **typography.md** - Tipografía y escala
- **spacing.md** - Espaciado y layout
- **components.md** - Componentes UI detallados

---

## 💬 ¿Preguntas?

Consulta `CHECKLIST.txt` o `INICIO_RAPIDO.txt` para más información.

¡Que disfrutes girando RetoRuleta! 🎡

---

**Última actualización**: Mayo 2024
**Versión**: 2.0 (Con 3 páginas separadas)
