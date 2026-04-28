# GitHub Explorer

Aplicación Angular para explorar usuarios y repositorios de GitHub.

## Características

- Listado y detalle de **Usuarios** de GitHub
- Listado y detalle de **Repositorios** de GitHub
- Navegación con top navbar y rutas

## Desarrollo

```bash
ng serve
```

Abre `http://localhost:4200/` en el navegador.

## Build

```bash
ng build
```

## Tests

```bash
ng test
```

## Estructura

```
src/app/
  app.module.ts          # Módulo raíz (NgModules)
  app.component.*        # Componente raíz con navbar
  app.routes.ts          # Rutas principales
  users/                 # Módulo de usuarios
  repositories/          # Módulo de repositorios
```
