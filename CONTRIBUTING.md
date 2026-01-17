# Contributing to IE Capilla del Rosario

## Commit Message Convention

Este proyecto sigue la especificación **[Conventional Commits](https://www.conventionalcommits.org/)** a partir del 17 de enero de 2026.

### Formato

```
<type>(<scope>): <summary>
```

### Reglas

1. **Escribe en inglés** técnico, claro y profesional
2. **Usa verbos en infinitivo**: add, fix, improve, refactor, apply
3. **Máximo 72 caracteres** en el summary
4. **Explica QUÉ cambia y con QUÉ propósito**
5. **No incluyas versiones** (beta, v1, v2) en el commit
6. **No uses lenguaje genérico**: update, changes, stuff

### Types

| Type | Descripción | Ejemplo |
|------|-------------|---------|
| `feat` | Nueva funcionalidad | `feat(navbar): add mobile menu toggle` |
| `fix` | Corrección de bugs | `fix(footer): resolve contrast ratio issue` |
| `style` | Cambios visuales/CSS | `style(header): apply semantic heading hierarchy` |
| `seo` | Mejoras de SEO | `seo(robots): add clean robots.txt configuration` |
| `perf` | Mejoras de rendimiento | `perf(fonts): self-host fonts to eliminate blocking` |
| `refactor` | Refactorización | `refactor(components): extract Card component` |
| `docs` | Documentación | `docs(readme): update installation instructions` |
| `test` | Tests | `test(navbar): add mobile menu integration tests` |
| `chore` | Tareas de mantenimiento | `chore(deps): update astro to v5.16.9` |
| `ci` | Integración continua | `ci(github): add automated deployment workflow` |

### Scopes Comunes

- `navbar`, `footer`, `header`
- `fonts`, `images`, `assets`
- `a11y` (accessibility)
- `robots`, `sitemap`, `meta`
- `deps`, `config`

### Ejemplos Correctos

✅ `feat(gallery): add image lightbox functionality`  
✅ `fix(a11y): improve aria-labels and contrast ratios`  
✅ `seo(meta): add Open Graph tags for social sharing`  
✅ `perf(fonts): self-host Google Fonts to reduce latency`  
✅ `style(cards): apply consistent hover effects`

### Ejemplos Incorrectos

❌ `Update stuff` (genérico, no descriptivo)  
❌ `Fixed things` (no especifica qué)  
❌ `Beta v2.1 - new features` (incluye versión)  
❌ `Cambios en el footer` (en español)  
❌ `WIP: working on navbar` (no usar WIP en commits finales)

## Workflow

1. Haz tus cambios en una rama feature
2. Escribe commits siguiendo la convención
3. Verifica que el build pase: `npm run build`
4. Haz push y crea un Pull Request

## Recursos

- [Conventional Commits Spec](https://www.conventionalcommits.org/)
- [Reglas del proyecto](.agent/rules/commit-standards.md)
