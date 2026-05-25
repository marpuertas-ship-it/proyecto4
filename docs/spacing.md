# Espaciado y Layout - RetoRuleta

## Sistema de Espaciado

```css
--spacing-xs: 0.5rem    /* 8px */
--spacing-sm: 1rem      /* 16px */
--spacing-md: 1.5rem    /* 24px */
--spacing-lg: 2rem      /* 32px */
--spacing-xl: 3rem      /* 48px */
--spacing-2xl: 4rem     /* 64px */
```

---

## Padding y Márgenes

### Header
```css
padding: var(--spacing-md) 0;  /* 32px vertical */
```

### Secciones
```css
padding: var(--spacing-2xl) 0;  /* 64px vertical */

@media (max-width: 768px) {
    padding: var(--spacing-lg) 0;  /* 32px en tablet */
}
```

### Container (max-width)
```css
max-width: 1200px;
margin: 0 auto;
padding: 0 var(--spacing-lg);  /* 32px horizontal */

@media (max-width: 768px) {
    padding: 0 var(--spacing-md);  /* 24px en tablet */
}
```

---

## Border Radius

```css
--radius-sm: 0.375rem    /* 6px - inputs */
--radius-md: 0.5rem      /* 8px - botones pequeños */
--radius-lg: 1rem        /* 16px - cards, modal */
--radius-full: 9999px    /* Píldoras, avatares */
```

---

## Grid y Layout

### Hero Section
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: var(--spacing-2xl);
align-items: center;

@media (max-width: 768px) {
    grid-template-columns: 1fr;
}
```

### Ruleta Container
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: var(--spacing-2xl);
align-items: center;

@media (max-width: 768px) {
    grid-template-columns: 1fr;
}
```

### Retos Lista (Historial)
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
gap: var(--spacing-md);
```

### Comentarios
```css
display: grid;
gap: var(--spacing-md);
grid-template-columns: 1fr;
```

---

## Breakpoints

```css
/* Mobile First */
$mobile: 320px     /* Por defecto */
$tablet: 768px     /* @media (min-width: 768px) */
$desktop: 1024px   /* @media (min-width: 1024px) */
$wide: 1200px      /* Para contenedor */
```

### Media Queries Principales

```css
/* Tablets y superior */
@media (max-width: 768px) {
    /* Cambios para tablet y móvil */
}

/* Mobile pequeño */
@media (max-width: 480px) {
    /* Cambios extremos para móvil */
}
```

---

## Componentes Específicos

### Card / Comentario
```css
padding: var(--spacing-lg);        /* 32px */
gap: var(--spacing-md);            /* 24px entre elementos */
border-left: 4px;                  /* Grosor del borde */
margin-bottom: var(--spacing-md);  /* Entre cards */
```

### Formulario
```css
display: grid;
gap: var(--spacing-md);            /* 24px entre inputs */

input, textarea {
    padding: var(--spacing-sm);    /* 16px */
}

label {
    margin-bottom: var(--spacing-xs);  /* 8px */
}
```

### Navegación
```css
display: flex;
gap: var(--spacing-lg);            /* 32px entre links */

@media (max-width: 480px) {
    gap: var(--spacing-sm);        /* 16px en móvil */
}
```

### Botones en Grupo
```css
display: flex;
gap: var(--spacing-sm);            /* 16px entre botones */

@media (max-width: 768px) {
    flex-direction: column;
}
```

---

## Transiciones y Animaciones

```css
--transition-fast: 0.15s ease-in-out;
--transition-base: 0.3s ease-in-out;
--transition-slow: 0.5s ease-in-out;
```

### Usos Comunes
```css
/* Hover suave */
transition: all var(--transition-base);

/* Animaciones lentas */
animation: fadeIn var(--transition-slow);

/* Canvas rápido */
animation: spin 20s linear infinite;
```

---

## Densidad Visual

### Espaciamiento Compacto
Para componentes pequeños (badges, tags):
```css
padding: var(--spacing-xs) var(--spacing-sm);
```

### Espaciamiento Normal
Para componentes regulares (botones, inputs):
```css
padding: var(--spacing-sm) var(--spacing-lg);
```

### Espaciamiento Amplio
Para secciones y containers:
```css
padding: var(--spacing-lg) var(--spacing-2xl);
```

---

## Responsive Behavior

### Desktop (1200px+)
- Grid: 2 columnas
- Gap: 64px (var(--spacing-2xl))
- Font base: 16px

### Tablet (768px - 1199px)
- Grid: 1 columna generalmente
- Gap: 32px (var(--spacing-lg))
- Font base: 16px
- Padding container: 24px (var(--spacing-md))

### Móvil (320px - 767px)
- Grid: 1 columna siempre
- Gap: 16px (var(--spacing-sm))
- Font base: 16px (mínimo accesible)
- Padding container: 16px (var(--spacing-sm))
- Font heading: reducida 1 nivel

---

**Última actualización**: 2024

