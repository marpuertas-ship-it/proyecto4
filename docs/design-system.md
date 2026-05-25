# Sistema de Diseño - RetoRuleta

## Personalidad de Marca

RetoRuleta es una plataforma **divertida, energética e inclusiva** que busca entretener a personas de todas las edades. La marca transmite:

- **Energía**: A través de gradientes vibrantes y animaciones dinámicas
- **Accesibilidad**: Interfaz intuitiva y clara, fácil de entender
- **Comunidad**: Enfoque en la interacción social y compartimiento de experiencias
- **Modernidad**: Diseño contemporáneo con tecnología web actual

---

## Principios de Diseño

### 1. **Simplicidad**
La interfaz es clara y directa. El usuario sabe exactamente qué hacer: girar la ruleta, ver el reto y comentar.

### 2. **Consistencia**
Todos los botones, colores, espaciados y tipografías siguen un sistema definido usando CSS variables.

### 3. **Accesibilidad**
- Contraste suficiente entre texto y fondo
- Tamaños de fuente legibles (mínimo 16px en móvil)
- Navegación clara con hiperenlaces descriptivos
- Formularios con labels visibles

### 4. **Responsividad**
Cada componente funciona perfectamente en:
- Móviles (320px+)
- Tablets (768px+)
- Desktops (1024px+)

### 5. **Performance**
- Sin imágenes pesadas (solo emojis)
- Canvas renderizado eficientemente
- CSS minimalista y sin animaciones que hagan lag

---

## Estructura Visual

### Jerarquía de Navegación
1. **Header** - Fijo en la parte superior con logo y navegación
2. **Hero** - Impacto visual con llamada a la acción
3. **Ruleta** - El core interactivo
4. **Comunidad** - Engagement social
5. **Footer** - Links legales y sociales

### Espaciado General
- Padding top/bottom de secciones: 2rem (móvil) a 4rem (desktop)
- Gaps entre elementos: escala de 0.5rem a 3rem
- Máximo ancho del contenedor: 1200px

### Tipografía Jerárquica
- **H1 (Hero)**: 2.5rem bold - Impacto máximo
- **H2 (Sección)**: 2rem bold - Títulos de sección
- **H3 (Subsección)**: 1.5rem semi-bold - Subtítulos
- **Body**: 1rem regular - Texto de párrafos
- **Small**: 0.875rem - Textos secundarios

---

## Componentes Principales

### Botones
- **Primario**: Gradiente azul-púrpura con sombra
- **Secundario**: Fondo claro con borde
- **Estados**: Normal, Hover (lift), Active, Disabled

### Tarjetas (Cards)
- Border-radius: 1rem
- Padding: 1.5rem
- Sombra suave en hover
- Borde izquierdo de color de acento

### Formularios
- Labels siempre visibles
- Inputs con border 2px, color en focus
- Validación visual clara
- Botón call-to-action en contraste

### Animaciones
- Duración estándar: 0.3s
- Timing: ease-in-out
- Rotaciones suaves: 20s lineales
- Rebotes: 2s ease-in-out

---

## Paleta de Colores Base

```css
--primary: #6366f1 (Azul índigo)
--primary-dark: #4f46e5 (Azul más oscuro)
--secondary: #ec4899 (Rosa fuerte)
--accent: #f59e0b (Ámbar)
--success: #10b981 (Verde)
--warning: #f97316 (Naranja)
--danger: #ef4444 (Rojo)
--dark-bg: #1f2937 (Gris oscuro)
--light-bg: #f9fafb (Blanco roto)
--text-dark: #111827 (Negro)
--text-light: #6b7280 (Gris)
```

---

## Tipografía

```css
--font-family-heading: 'Poppins', sans-serif
--font-family-body: 'Inter', sans-serif
```

- **Poppins**: Bold para títulos (mayor impacto)
- **Inter**: Regular para body (máxima legibilidad)

---

## Referencias

Este documento fue generado usando GitHub Copilot como punto de partida y refinado manualmente para asegurar coherencia con el diseño implementado.

