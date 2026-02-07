# OFICINA ANR - Portfolio

Portfolio moderno con galería de proyectos para arquitectura y diseño.

## 🚀 Instalación en GitHub Pages

### Opción 1: Subir archivos manualmente

1. **Crea el repositorio:**
   - Ve a GitHub.com y haz clic en "New repository"
   - Nombre: `tunombre.github.io` (reemplaza "tunombre" con tu usuario de GitHub)
   - Marca como "Public"
   - Clic en "Create repository"

2. **Sube los archivos:**
   - En tu repositorio, haz clic en "Add file" → "Upload files"
   - Arrastra estos 3 archivos:
     - `index.html`
     - `style.css`
     - `script.js`
   - Haz clic en "Commit changes"

3. **Activa GitHub Pages:**
   - Ve a Settings → Pages
   - En "Source" selecciona "main" branch
   - Guarda
   - Tu sitio estará en: `https://tunombre.github.io`

### Opción 2: Usar GitHub Desktop

1. Descarga GitHub Desktop: https://desktop.github.com
2. Clona tu repositorio
3. Copia los archivos a la carpeta del repositorio
4. Commit y Push

## 📁 Estructura de archivos

```
tunombre.github.io/
├── index.html          # Página principal
├── style.css           # Estilos
├── script.js           # JavaScript
└── README.md           # Este archivo
```

## 🎨 Personalización

### Cambiar imágenes de los proyectos

En `index.html`, encuentra cada proyecto y reemplaza la URL de la imagen:

```html
<img src="TU_IMAGEN_AQUI.jpg" alt="Proyecto 1">
```

**Opciones para imágenes:**

1. **Usar tus propias imágenes:**
   - Sube las imágenes a tu repositorio (carpeta `images/`)
   - Cambia el src: `src="images/proyecto1.jpg"`

2. **Usar Unsplash (gratis):**
   - Las imágenes actuales ya usan Unsplash
   - Solo cambia el ID: `https://images.unsplash.com/photo-XXXXXXX`

3. **Usar imgur (gratis):**
   - Sube a imgur.com
   - Usa el enlace directo

### Cambiar textos

Busca y reemplaza en `index.html`:

- **Logo/Nombre:** Busca `OFICINA ANR` 
- **Títulos de proyectos:** Busca `Casa Moderna Valle`, etc.
- **Categorías:** Busca `Residencial`, `Comercial`, etc.
- **Email/Teléfono:** En la sección de contacto

### Cambiar colores

En `style.css`, modifica las variables al inicio:

```css
:root {
    --color-bg: #0D0D0D;        /* Fondo negro */
    --color-text: #FFFFFF;       /* Texto blanco */
    --color-accent: #FF3D00;     /* Color de acento (naranja) */
}
```

**Sugerencias de colores:**
- Azul: `#0066FF`
- Verde: `#00FF88`
- Púrpura: `#9D00FF`
- Rosa: `#FF006E`

### Agregar más proyectos

Copia un bloque de proyecto y modifica:

```html
<article class="project-card" data-project="13">
    <a href="proyecto-13.html" class="project-link">
        <div class="project-image">
            <img src="TU_IMAGEN.jpg" alt="Proyecto 13">
        </div>
        <div class="project-overlay">
            <div class="project-info">
                <h3 class="project-title">Tu Proyecto</h3>
                <p class="project-category">Tu Categoría</p>
            </div>
        </div>
    </a>
</article>
```

## 🔧 Características

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Grid dinámico tipo Pinterest
- ✅ Animaciones suaves al hacer scroll
- ✅ Header fijo con efecto blur
- ✅ Hover effects en proyectos
- ✅ Cursor personalizado (desktop)
- ✅ Navegación suave
- ✅ Optimizado para performance

## 📱 Responsive

El sitio se adapta automáticamente a:
- 📱 Móviles (< 768px)
- 📱 Tablets (768px - 1024px)
- 💻 Desktop (> 1024px)

## 🌐 Dominio personalizado (Opcional)

Si tienes un dominio (ej: `oficina-anr.com`):

1. En tu proveedor de dominio, agrega estos DNS:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

2. En GitHub: Settings → Pages → Custom domain
3. Escribe tu dominio y guarda

## 📞 Soporte

Si tienes problemas:
1. Revisa que los archivos estén en la raíz del repositorio
2. Espera 2-3 minutos después de subir archivos
3. Limpia el caché del navegador (Ctrl + Shift + R)

## 📄 Licencia

Código libre para uso personal y comercial.

---

**Creado con ❤️ para OFICINA ANR**
