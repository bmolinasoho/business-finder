# Business Finder Application

## Objetivo

Desarrollar una aplicación web que permita a los usuarios buscar y visualizar comercios en un mapa interactivo, similar a Google Maps.

## Supuestos

* Contamos con un mock de API REST (`/shops`) que devuelve una lista de comercios con los siguientes campos:

  * `id`, `name`, `type`, `address`, `latitude`, `longitude`, `openingHours`, `imageUrl`
* Usamos React + Vite para frontend, Leaflet para mapas (basado en OpenStreetMap).
* Datos mockeados están en `src/mocks/shops.json` y se sirven mediante json-server.

## Tecnologías

* **Frontend**: React 18, Vite, TypeScript
* **Estilos**: Tailwind CSS
* **Mapas**: Leaflet + React-Leaflet
* **Mock API**: json-server

## Estructura de carpetas

```
business-finder/
├─ public/
├─ src/
│  ├─ components/         # Componentes visuales: SearchBar, ShopList, MapView, etc.
│  ├─ hooks/              # Hooks personalizados como useShops
│  ├─ mocks/              # Datos mock JSON para json-server
│  ├─ pages/              # Vistas principales como Home.tsx (opcional si se escala)
│  ├─ services/           # Servicios de datos (ej: fetchShops desde shopService.ts)
│  ├─ types/              # Definiciones de tipos como Shop
│  ├─ utils/              # Utilidades compartidas (ej: configureLeafletIcons)
│  ├─ App.tsx             # Composición principal
│  ├─ main.tsx            # Entrada Vite
│  └─ index.css           # Tailwind base styles
├─ package.json
├─ tsconfig.json
├─ tsconfig.app.json
├─ vite.config.ts
├─ tailwind.config.js
└─ README.md
```

## Instrucciones para correr localmente

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/tu-usuario/business-finder.git
   cd business-finder
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Iniciar mock API** (sirve `src/mocks/shops.json` en `http://localhost:4000/shops`)

   ```bash
   npm run mock:api
   ```

4. **Levantar la app**

   ```bash
   npm run dev
   ```

5. **Abrir en navegador**
   [http://localhost:5173](http://localhost:5173)

## Arquitectura y decisiones de diseño

### Composición

* La app se divide en un layout principal con dos áreas:

  * Panel izquierdo: barra de búsqueda, lista de resultados y detalles del comercio.
  * Panel derecho: mapa interactivo con marcadores (Leaflet).

### Flujo

* `useShops`: Hook personalizado que:

  * Obtiene comercios desde `shopService.ts` (ya desacoplado del hook)
  * Filtra resultados en base al texto ingresado.
* `shopService.ts`: contiene lógica de red para fetch a `/shops`.
* `SearchBar`: actualiza el término de búsqueda.
* `ShopList`: muestra comercios filtrados y permite seleccionar uno.
* `MapView`: muestra marcadores con íconos personalizados (Leaflet).
* `ShopDetails`: muestra información detallada del comercio.
* `configureLeafletIcons.ts`: encapsula configuración global de íconos Leaflet.
* `Shop.ts`: define el tipo `Shop`, usado en todo el proyecto.

### Estilo visual

* Inspirado en Google Maps (panel lateral fijo + mapa a la derecha).
* Interfaz responsive, moderna y accesible.
* Uso de Tailwind CSS para estilos rápidos y escalables.

### Mantenibilidad

* Código modular y separado en responsabilidades claras:

  * Tipos en `types/`
  * Lógica de negocio en `services/`
  * UI en `components/`
  * Configuración en `utils/`
* Preparado para migrar a una API real con mínima fricción.

## Próximos pasos sugeridos

* Agregar animaciones de transición al seleccionar marcador o resultado.
* Soporte a favoritos o filtros por tipo de comercio.
* Guardar el último comercio seleccionado en localStorage o query params.
* Implementar paginación o scroll infinito si hay muchos resultados.
* Soporte a internacionalización (`i18n`).

---

🚀 ¡La aplicación está lista para escalar y personalizar según tus necesidades!
