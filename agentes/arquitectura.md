# Arquitectura del sitio IE Capilla del Rosario

## Resumen funcional
- Sitio web estatico basado en la plantilla "eLEARNING" de HTML Codex, adaptado para la Institucion Educativa Capilla del Rosario.
- Se publica como sitio estatico (referencia a GitHub Pages en `sitemap.xml`). No existe backend ni logica de compilacion automatizada.
- Navegacion principal orientada a informar sobre perfiles institucionales, horizonte, admisiones y comunicaciones oficiales.

## Pila tecnologica
- **HTML5** para las vistas, con marcado semantico limitado al ofrecido por la plantilla.
- **Bootstrap 5** (`css/bootstrap.min.css` y `css/bootstrap.min.js` via CDN) para grillas, utilidades y componentes responsivos.
- **jQuery 3.4.1** y **Bootstrap Bundle** (CDN) como base JS.
- Librerias adicionales incluidas desde `/lib` o CDNs: WOW.js (animaciones al hacer scroll), Animate.css, jQuery Easing, Waypoints, Owl Carousel.
- **CSS personalizado** en `css/style.css` (sobrescribe colores, anclas activas, espaciados y componentes propios).
- **SCSS** fuente de Bootstrap en `scss/`, sin pipeline automatizado; si se modifica, la compilacion debe realizarse manualmente.

## Organizacion de carpetas
- `index.html`: Landing page con todas las secciones clave (hero con carrusel, categorias de cursos, llamados a la accion, perfiles, testimonios, FAQ, partners y footer completo).
- `about.html`, `courses.html`, `team.html`, `testimonial.html`, `404.html`: Paginas heredadas de la plantilla original, utiles como referencia o para contenidos futuros.
- `perfiles.html`, `horizonte.html`, `admisiones.html`, `vida-institucional.html`, `circulares.html`, `matricula.html`, `cupos.html`, `jornadas.html`, `proyectos.html`, `contact.html`: Paginas personalizadas con contenido institucional en espanol.
- `css/`: Bootstrap minificado y hoja `style.css` (457 lineas aprox.).
- `js/main.js`: Script principal que inicializa animaciones, sticky navbar, carruseles y boton "volver arriba".
- `lib/`: Dependencias front-end locales (WOW, Owl Carousel, Animate, Waypoints, Easing) para uso offline.
- `img/`: Activos de interfaz (carruseles, categorias, equipo, testimonios). Todos son JPG derivados de la plantilla.
- `scss/`: Estructura base de Bootstrap para personalizaciones futuras.
- `robots.txt` y `sitemap.xml`: Configuracion SEO minima apuntando a despliegue en GitHub Pages.
- `elearning-html-template.jpg`, `LICENSE.txt`, `READ-ME.txt`: Material heredado de la plantilla.

## Navegacion y paginas
- **Header global**: Spinner inicial (`#spinner`), barra sticky (`.navbar`) con enlaces a secciones internas (`#perfiles`, `#horizonte`) y paginas dedicadas (Admisiones, Vida Institucional, Comunicaciones, Contacto).
- **Footer global**: Seccion oscura con cuatro columnas (empresa, enlaces rapidos, contacto y galeria) + copyright con credito a HTML Codex.
- **Index**: Testimonios y "Featured Courses" usan Owl Carousel (`.header-carousel`, `.testimonial-carousel`). Secciones destacadas incluyen "Categorias", "Popular Courses", "Trainers", "FAQ".
- **Perfiles**: Cuadros informativos por actor (estudiante, familia, docente, directivo) usando `border` y `wow`.
- **Horizonte**: (similar a perfiles) detalla mision, vision y valores con bloques `border`/`p-4`.
- **Admisiones**: Secciones `#cupos` y `#matricula` con listas de requisitos y proceso; mantiene breadcrumb en espanol.
- **Vida Institucional**: Pestanas con jornadas, proyectos y circulares, incluye tabla de horarios y enlaces externos a PDFs.
- **Cupos / Matricula / Jornadas / Proyectos**: Paginas de detalle especificas para cada tema, enlazables desde Admisiones y Vida Institucional.
- **Circulares**: Listado de circulares con vinculos externos oficiales.
- **Contact**: Formulario de contacto (sin backend) y seccion de ubicacion. Los datos por defecto siguen en ingles y requieren personalizacion.
- **404**: Pagina de error estandar de la plantilla.

## Comportamiento JavaScript (`js/main.js`)
- Oculta el spinner tras cargar (`#spinner`).
- Inicializa WOW.js y Owl Carousel para header/testimonios.
- Gestiona navbar sticky (aparece tras 300px scroll) y dropdowns en desktop con hover.
- Controla boton "Back to top" con animacion `easeInOutExpo`.
- No hay validaciones de formularios ni logica de analytics.

## Estilos (`css/style.css`)
- Define paleta (`--primary: #1f3b8f`) y ajustes globales (scroll suave, pesos tipograficos).
- Personaliza estados activos de la navbar, backgrounds de secciones (`.service-item`, `.category`, `.testimonial-carousel`).
- Anade utilidades especificas (por ejemplo overlays para "popular courses", componentes FAQ, llamadas a la accion).
- Controla breakpoints con media queries especificas; no se usa un preprocesador en runtime.

## Contenido y assets
- Toda la informacion se sirve desde archivos estaticos; no se consumen APIs externas.
- Algunos textos permanecen en ingles (ej. hero principal, FAQ, contact). Requieren adaptacion manual.
- Varias paginas en espanol muestran caracteres de reemplazo (simbolo de sustitucion) y letras truncadas; indica problemas de codificacion. Guardar como UTF-8 sin BOM y revisar las fuentes originales.

## SEO y accesibilidad
- Se incluyen metadatos `description`/`keywords` en paginas clave, aunque muchos estan vacios o en ingles.
- `sitemap.xml` y `robots.txt` referencian dominio GitHub Pages `https://marlonmedellin.github.io/elearning/`.
- Breadcrumbs y encabezados jerarquicos (`h1`/`h2`) consistentes, pero faltan etiquetas de accesibilidad en formularios y textos alternativos enriquecidos.

## Flujo de trabajo sugerido
1. Editar HTML/CSS directamente en la raiz del proyecto.
2. Si se personaliza Bootstrap via SCSS, compilar manualmente y sustituir `css/bootstrap.min.css`.
3. Ejecutar pruebas visuales en distintos tamanos (Bootstrap). No hay pruebas automatizadas.
4. Desplegar subiendo los archivos al hosting estatico (GitHub Pages u otro).

## Consideraciones para futuras IAs/agentes
- Mantener coherencia bilingue: decidir entre espanol o ingles y normalizar caracteres especiales (guardar como UTF-8).
- Centralizar componentes repetidos (navbar/footer) con includes o motor de plantillas si el proyecto crece, para evitar inconsistencias.
- Evaluar reemplazar jQuery/Owl Carousel por alternativas modernas si se requiere optimizacion de rendimiento.
- Documentar cualquier integracion adicional (formularios, analytics) porque actualmente no existe backend ni endpoints.
- Si se agregan nuevos recursos, actualizar `sitemap.xml` y `robots.txt` para mantener el SEO consistente.
