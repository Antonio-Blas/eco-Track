EcoHabits:

Una aplicación web desarrollada con Angular para promover hábitos ecológicos sostenibles. Permite a los usuarios registrar actividades ecológicas, rastrear su progreso, acceder a consejos y retos, interactuar en una comunidad y gestionar su perfil. La app utiliza almacenamiento local (localStorage) para persistir datos, lo que la hace ideal para un prototipo o uso personal sin backend.
Descripción
EcoHabits es una aplicación standalone de Angular que fomenta prácticas ecológicas en categorías como transporte, energía, reciclaje y consumo responsable. Las características principales incluyen:

Actividades: Registrar, editar, eliminar y ver detalles de actividades ecológicas con puntos asociados.
Progreso: Visualizar puntos totales, niveles, logros (badges) y resumen de actividades.
Consejos: Lista de tips filtrables por categoría, búsqueda, favoritos, paginación y creación/eliminación de tips personalizados.
Retos: Gestión de desafíos con progreso incremental y reset.
Comunidad: Publicar posts, dar likes, agregar comentarios y ver detalles de publicaciones.
Perfil: Ver y editar información de usuario, meta diaria, reset de progreso y borrado de cuenta.

La app usa componentes standalone (nueva característica de Angular), lazy loading para módulos de features, y servicios inyectables para manejar datos persistidos en localStorage. No requiere un servidor backend, pero podría extenderse fácilmente.
Requisitos

Node.js (versión 18+ recomendada).
Angular CLI (versión 17+ para soporte completo a standalone components).

Instalación

Clona el repositorio: git clone https://github.com/Antonio-Blas/eco-Track.git
cd ecohabits
Instala dependencias (asumiendo un package.json estándar con Angular): npm installNota: Si no hay package.json, crea uno básico e instala Angular y dependencias como @angular/core, @angular/router, etc., vía ng add.
Configura el entorno si es necesario (por defecto usa localStorage, sin APIs externas).

Uso

Inicia el servidor de desarrollo: ng serve
Abre el navegador en http://localhost:4200/. La app se recargará automáticamente con cambios.
Navegación principal:
/activities: Lista y registro de actividades.
/progress: Vista de progreso y badges.
/tips: Lista de consejos, con subrutas para nuevos, favoritos y retos.
/community: Feed de posts comunitarios.
/profile: Perfil de usuario, con ajustes.

Pruebas:
Registra actividades para acumular puntos.
Agrega tips y marca favoritos.
Publica en la comunidad y comenta.
Edita el perfil y establece metas diarias.


Para producción:
 ng build --prod
Despliega los archivos generados en dist/ a un servidor web (ej. GitHub Pages, Vercel).
Estructura del Proyecto
La app sigue una estructura modular por features, con componentes standalone para simplicidad.
 src/
├── app/
│   ├── app.config.ts          # Configuración global (proveedores, rutas)
│   ├── app.html               # Template root (navegación y router-outlet)
│   ├── app.routes.ts          # Rutas principales con lazy loading
│   ├── app.scss               # Estilos root
│   ├── app.ts                 # Componente root (AppComponent)
│   ├── features/              # Módulos por feature
│   │   ├── activities/        # Gestión de actividades
│   │   │   ├── activities.module.ts
│   │   │   ├── activities-routing.module.ts
│   │   │   └── components/    # Componentes: list, form, detail
│   │   ├── community/         # Feed y posts comunitarios
│   │   │   ├── community.module.ts
│   │   │   ├── community-routing.module.ts
│   │   │   └── components/    # Componentes: feed, post-detail
│   │   ├── profile/           # Perfil y ajustes
│   │   │   ├── profile.module.ts
│   │   │   ├── profile-routing.module.ts
│   │   │   └── components/    # Componentes: main, settings
│   │   ├── progress/          # Progreso y badges
│   │   │   ├── progress.module.ts
│   │   │   ├── progress-routing.module.ts
│   │   │   └── components/    # Componentes: home, badge
│   │   └── tips/              # Consejos y retos
│   │       ├── tips.module.ts
│   │       ├── tips-routing.module.ts
│   │       └── components/    # Componentes: list, detail, form, challenges, favorites
│   ├── models/                # Modelos de datos
│   │   ├── activity.model.ts
│   │   ├── challenge.model.ts
│   │   ├── tip.model.ts
│   │   └── user.model.ts
│   └── services/              # Servicios inyectables (persistencia en localStorage)
│       ├── activity.service.ts
│       ├── community.service.ts
│       ├── progress.service.ts
│       ├── tips.service.ts
│       └── user.service.ts
├── index.html                 # HTML base
├── main.ts                    # Bootstrap de la app
└── styles.scss                # Estilos globales

Servicios: Manejan CRUD en localStorage para actividades, tips, retos, posts, usuarios y progreso.
Modelos: Interfaces para Tip, Activity, Challenge, User y Post.
Rutas: Usan provideRouter y lazy loading para optimización.
Estilos: SCSS por componente, con temas ecológicos (verdes, azules).

Dependencias Principales

@angular/core, @angular/router, @angular/forms (para formularios reactivos y ngModel).
No hay dependencias externas más allá de Angular (ej. sin RxJS explícito, ya que no usa observables en este código).

Contribuciones

Forkea el repositorio.
Crea una branch: git checkout -b feature/nueva-funcion.
Commitea cambios: git commit -m 'Añade nueva función'.
Push: git push origin feature/nueva-funcion.
Abre un Pull Request.

Sugerencias:

Añadir autenticación real (Firebase/Auth0).
Integrar backend (API REST o Firebase) para persistencia multi-usuario.
Mejoras UI: Añadir charts para progreso (ej. ng2-charts).

Licencia
MIT License. Usa libremente, pero atribuye si es posible.