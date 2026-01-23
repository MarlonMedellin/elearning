# 🏫 IE Capilla del Rosario - Plataforma Institucional

Plataforma educativa de alto rendimiento diseñada para la **Institución Educativa Capilla del Rosario**, centrada en la accesibilidad, velocidad y una experiencia de usuario premium.

🚀 **Despliegue Activo**: El sitio web se sirve actualmente bajo el dominio **[lacapilla.edu.co](https://lacapilla.edu.co)**, empleando la infraestructura global de **Cloudflare Pages** para realizar el deploy automático (CI/CD) directamente desde este repositorio.

<div align="center">

[![Build Status](https://github.com/MarlonMedellin/elearning/actions/workflows/build.yml/badge.svg)](https://github.com/MarlonMedellin/elearning/actions)
[![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?style=for-the-badge&logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)
[![SEO Optimized](https://img.shields.io/badge/SEO-91%2F100-blue?style=for-the-badge)](https://lacapilla.edu.co/sitemap-index.xml)
[![Accessibility](https://img.shields.io/badge/Accessibility-100%25-brightgreen?style=for-the-badge)](https://iecapilladelrosario.edu.co/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![Code Style: Prettier](https://img.shields.io/badge/Code_Style-Prettier-ff69b4?style=for-the-badge&logo=prettier&logoColor=white)](https://prettier.io)

</div>

---

## 🌟 Características Principales

- 🚀 **Ultra Performance**: Arquitectura estática con Astro para tiempos de carga casi instantáneos.
- ♿ **100% Accesible**: Cumplimiento de estándares de accesibilidad para una inclusión total.
- 🎨 **Diseño Premium**: Interfaz moderna, limpia y responsive utilizando Tailwind CSS.
- 🔍 **SEO de Élite**: Optimización para buscadores con sitemaps automáticos y metadatos dinámicos.
- 🛠️ **Ingeniería de Calidad**: Repositorio estandarizado con _Conventional Commits_ y guías de contribución.

## 🧩 Módulos del Sitio

El proyecto cuenta con secciones especializadas para atender las necesidades de la comunidad educativa:

- **🏠 Inicio**: Portada institucional con accesos rápidos y destacados.
- **📋 Admisiones**: Información detallada sobre procesos de matrícula, cupos y requisitos (`/admisiones`).
- **🏫 Vida Institucional**: Historia, símbolos y filosofía del colegio (`/vida-institucional`).
- **📷 Galería**: Registro fotográfico de eventos y actividades (`/galeria`).
- **📞 Contacto**: Canales de comunicación oficiales (`/contact`).
- **📄 Circulares**: Distribución de comunicados oficiales (`/circulares`).

## 🛠️ Stack Tecnológico

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Iconografía**: [Lucide Icons](https://lucide.dev/) & [Astro Icon](https://github.com/natemoo-re/astro-icon)
- **Tipografía**: [Fontsource](https://fontsource.org/) (Heebo & Nunito self-hosted)
- **Despliegue**: [Cloudflare Pages](https://pages.cloudflare.com/) (Conectado a [lacapilla.edu.co](https://lacapilla.edu.co))

## 🏗️ Estructura del Proyecto

```text
/
├── public/          # Recursos estáticos (favicons, robots.txt, imágenes)
├── src/
│   ├── components/  # Componentes modulares y reutilizables
│   ├── layouts/     # Plantillas base (MainLayout)
│   ├── pages/       # Rutas y páginas de la aplicación
│   └── styles/      # Configuraciones globales de diseño
└── CONTRIBUTING.md  # Guía de estándares y convenciones
```

## 🚀 Desarrollo y Comandos

| Comando           | Acción                                               |
| :---------------- | :--------------------------------------------------- |
| `npm install`     | Instala las dependencias del proyecto                |
| `npm run dev`     | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`   | Genera la versión de producción en `./dist/`         |
| `npm run preview` | Previsualiza localmente el build de producción       |
| `npm run lint`    | Analiza el código en busca de errores y estilo       |
| `npm run format`  | Formatea el código automáticamente con Prettier      |

---

## 👨‍💻 Calidad de Código

Este proyecto mantiene un estándar de desarrollo senior:

- **Commits**: Siguiendo la especificación `type(scope): summary`.
- **Fuentes**: Auto-alojadas para eliminar recursos que bloquean el renderizado.
- **Sitemap**: Generación automática bajo el dominio `lacapilla.edu.co`.

---

Desarrollado con pasión por la excelencia académica y técnica.
