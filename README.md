# Diego Portfolio

Landing page personal para presentar perfil profesional, stack tecnológico, proyectos en curso y canales de contacto.

## Descripción

Este proyecto es una web tipo landing page desarrollada con React + TypeScript + Vite. No tiene backend ni conexiones a APIs externas; el contenido es estático y se gestiona desde componentes y archivos de configuración local.

La página está pensada para:

- presentar la identidad profesional
- mostrar experiencia y áreas de trabajo
- destacar tecnologías y herramientas
- difundir proyectos activos y aprendizaje continuo
- facilitar contacto con redes sociales y correo

## Stack

- React 19
- TypeScript
- Vite
- CSS Modules / CSS en componentes
- Framer Motion para animaciones
- i18next para internacionalización
- React Icons y Lucide React para iconografía

## Características principales

- Diseño moderno y enfocado en una landing personal
- Secciones claras: hero, about, highlights, stack, building, learning y contact
- Navegación con anchors internos
- Soporte de idiomas con archivos JSON de traducción
- Animaciones sutiles para mejorar la experiencia visual
- Sin dependencias de backend ni autenticación

## Estructura del proyecto

```bash
src/
├── App.tsx
├── components/
│   └── Header/
├── data/
│   ├── learning.ts
│   └── projects.ts
├── i18n/
│   ├── en.json
│   ├── es.json
│   └── index.ts
├── sections/
│   ├── About/
│   ├── Building/
│   ├── Contact/
│   ├── Hero/
│   ├── Highlights/
│   ├── Learning/
│   └── Stack/
├── assets/
│   ├── icons/
│   └── images/
├── index.css
└── main.tsx
```

## Requisitos

- Node.js 18 o superior
- npm o pnpm

## Instalación

```bash
npm install
```

## Scripts disponibles

```bash
npm run dev
```
Inicia el servidor de desarrollo de Vite.

```bash
npm run build
```
Genera la versión de producción.

```bash
npm run preview
```
Sirve la build localmente para comprobar el resultado final.

```bash
npm run lint
```
Ejecuta ESLint para revisar el código.

## Cómo se maneja el contenido

El contenido principal de la landing está localizado en:

- archivos de traducción dentro de [src/i18n](src/i18n)
- datos estructurados en [src/data](src/data)
- secciones en [src/sections](src/sections)

Esto permite modificar textos, proyectos, cursos o redes sociales sin necesidad de backend.

## Nota importante

Esta web es una landing estática orientada a presentación profesional. No hay formularios con envío de datos ni integración con bases de datos ni servicios del lado del servidor. La información se presenta directamente en el frontend.

## Despliegue

Se puede desplegar fácilmente en cualquier servicio estático como:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Solo requiere publicar la carpeta de build generada por Vite.
