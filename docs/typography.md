# Tipografía - RetoRuleta

## Familias Tipográficas

### Poppins (Títulos)
- **Fuente**: Google Fonts
- **Pesos**: 600, 700, 800
- **Usos**: H1, H2, H3, botones, logos
- **Características**: Moderna, geométrica, energética

### Inter (Cuerpo)
- **Fuente**: Google Fonts
- **Pesos**: 400, 500
- **Usos**: Párrafos, labels, texto general
- **Características**: Legible, neutra, clara

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500&display=swap" rel="stylesheet">
```

---

## Escala Tipográfica

```css
--font-size-xs: 0.75rem   /* 12px */
--font-size-sm: 0.875rem  /* 14px */
--font-size-base: 1rem    /* 16px */
--font-size-lg: 1.125rem  /* 18px */
--font-size-xl: 1.25rem   /* 20px */
--font-size-2xl: 1.5rem   /* 24px */
--font-size-3xl: 2rem     /* 32px */
--font-size-4xl: 2.5rem   /* 40px */
```

---

## Jerarquía de Títulos

### H1 - Hero Principal
```css
font-size: var(--font-size-4xl);  /* 40px */
font-family: Poppins;
font-weight: 800;
line-height: 1.2;
color: white;
```
Uso: "¡Atrévete a Girar la Ruleta!"

### H2 - Títulos de Sección
```css
font-size: var(--font-size-3xl);  /* 32px */
font-family: Poppins;
font-weight: 700;
line-height: 1.3;
color: var(--text-dark);
```
Uso: "Ruleta de Retos", "Comunidad"

### H3 - Subtítulos
```css
font-size: var(--font-size-2xl);  /* 24px */
font-family: Poppins;
font-weight: 700;
line-height: 1.4;
color: var(--text-dark);
```
Uso: "Últimos Retos", "Comentarios de la Comunidad"

---

## Texto de Cuerpo

### Párrafos Principales
```css
font-size: var(--font-size-base);  /* 16px */
font-family: Inter;
font-weight: 400;
line-height: 1.6;
color: var(--text-dark);
```

### Texto Secundario
```css
font-size: var(--font-size-sm);  /* 14px */
font-family: Inter;
font-weight: 400;
line-height: 1.5;
color: var(--text-light);
```

### Pequeño (Etiquetas, Metadatos)
```css
font-size: var(--font-size-xs);  /* 12px */
font-family: Inter;
font-weight: 500;
line-height: 1.4;
color: var(--text-light);
```

---

## Estilos Especiales

### Botones
```css
font-family: Poppins;
font-weight: 600;
font-size: var(--font-size-base);
text-transform: none;
letter-spacing: 0;
```

### Labels de Formulario
```css
font-family: Inter;
font-weight: 600;
font-size: var(--font-size-sm);
color: var(--text-dark);
```

### Comentarios (Nombre de usuario)
```css
font-family: Poppins;
font-weight: 600;
font-size: var(--font-size-base);
color: var(--primary-color);
```

---

## Responsive

En móviles (< 480px), se reduce un nivel:

```css
h1 { font-size: var(--font-size-2xl); }
h2 { font-size: var(--font-size-2xl); }
h3 { font-size: var(--font-size-xl); }
```

---

## Accesibilidad

✅ **Línea base mínima**: 16px en móviles
✅ **Alto contraste**: Ratios 4.5:1 o superior
✅ **Espaciado**: line-height mínimo de 1.5 para legibilidad
✅ **Fuentes web**: Google Fonts es rápido y accesible

---

**Última actualización**: 2024

