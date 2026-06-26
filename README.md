# Candia Construcciones SRL — Landing page (demo)

Demo de landing page para **Candia Construcciones SRL** (Rosario, Argentina).

Sitio estático de una sola página con:

- Preloader animado con el logo de la empresa.
- Hero con titular de palabras rotativas y CTA a WhatsApp.
- Secciones: Quiénes somos, Misión y Visión, Servicios, Obras y Proyectos, Contacto.
- Animaciones de entrada con CSS + IntersectionObserver (sin dependencias externas).
- Diseño responsive y botón flotante de WhatsApp.

## Estructura

```
index.html
assets/
  css/style.css
  js/script.js
  img/            (logo y fotos de obras)
```

## Cómo verlo localmente

No requiere build. Desde la carpeta del proyecto:

```bash
python -m http.server 5173
```

Y abrir http://localhost:5173 — o simplemente doble clic en `index.html`.

> Sitio de demostración. El contenido y las imágenes pertenecen a Candia Construcciones SRL.
