# Candia Construcciones SRL — Landing page

Landing page de una sola página para **Candia Construcciones SRL** (Rosario, Argentina).
Repo: https://github.com/hmendoza711/candia-construcciones

## Secciones del sitio (`index.html`)

| # | Sección (id) | Contenido |
|---|---|---|
| 1 | Header | Logo, menú de navegación y botón de WhatsApp flotante |
| 2 | Hero | Video de fondo, titular con palabras rotativas, CTA y stats (obras realizadas, años de experiencia, etc.) |
| 3 | `#quienes-somos` | Texto institucional + foto |
| 4 | Misión y visión | Dos bloques de texto |
| 5 | Servicios | Grid de tarjetas (hormigón, mantenimiento, obras y reformas, impermeabilizaciones, yesería, piscinas) |
| 6 | `#obras` | Grid de obras — cada tarjeta es un collage 2×2 de fotos con tag de estado y título |
| 7 | `#contacto` | Datos de contacto (teléfono/WhatsApp, email, zona) + formulario que abre WhatsApp con el mensaje cargado |
| 8 | Footer | Links rápidos y copyright |

## Estructura de archivos

```
index.html                  Toda la maquetación del sitio (una sola página)
PREGUNTAS-CLIENTE.md         Checklist de datos/fotos pendientes de confirmar con el cliente
assets/
  css/style.css              Estilos (variables de color, layout, componentes, responsive)
  js/script.js                Header sticky, preloader, rotador de palabras, reveal on scroll,
                               envío del formulario de contacto a WhatsApp
  img/
    logo*.png                 Variantes del logo (blanco, transparente)
    hero.jpg, about-stock.jpg Imágenes institucionales
    obra-<nombre>-<n>.jpg     Fotos de obras, agrupadas por nombre de obra
  video/hero.mp4              Video de fondo del hero
```

### Obras cargadas actualmente
- **Maipú 1433** — 2 fotos (`obra-maipu-1/2.jpg`)
- **Fluvial** — 1 foto (`obra-fluvial-1.jpg`)
- **Lote 31, Los Pasos** — 1 foto (`obra-pasos-2.jpg`)
- **La Paz** — 4 fotos en collage (`obra-lapaz-1..4.jpg`)
- **Ricchieri** — 4 fotos en collage (`obra-ricchieri-1..4.jpg`)

Para sumar una obra nueva: copiar las fotos a `assets/img/` con el patrón `obra-<nombre>-<n>.jpg` y agregar una tarjeta `.project-card` (foto única) o `.project-card.project-collage` (collage 2×2) en la sección `#obras` de `index.html`.

## Formulario de contacto

El formulario (`#contact-form`) no envía datos a un servidor: al enviarlo, `script.js` arma un mensaje con nombre, teléfono y consulta, y abre `https://wa.me/543413145562` con el texto precargado.

## Cómo verlo localmente

No requiere build. Desde la carpeta del proyecto:

```bash
python -m http.server 5173
```

Y abrir http://localhost:5173 — o simplemente doble clic en `index.html`.

> El contenido, las fotos de obras y los datos de contacto pertenecen a Candia Construcciones SRL.
