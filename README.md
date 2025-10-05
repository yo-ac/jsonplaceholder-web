📰 JSONPlaceholder Web

Una aplicación web desarrollada con Next.js 14 que consume la API pública de JSONPlaceholder
para mostrar publicaciones, ver detalles y agregar comentarios de manera dinámica.


🚀 Tecnologías utilizadas

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Fetch API

📋 Funcionalidades
- Listado de usuarios, con nombre, apodo y email.
- Detalles de usuario con datos de contacto, dirección y más.
- Listado de publicaciones con título y resumen.
- Vista detallada de cada post con sus comentarios asociados.
- Formulario para agregar nuevos comentarios de manera dinámica.
- Actualización inmediata del estado local tras enviar un nuevo comentario.
- Diseño moderno y responsive con Tailwind CSS.

⚙️ Instalación y ejecución
1. Clona el repositorio:
git clone https://github.com/yo-ac/jsonplaceholder-web.git

2. Entra en la carpeta del proyecto:
cd jsonplaceholder-web

3. Instala las dependencias:
npm install

4. Ejecuta el entorno de desarrollo:
npm run dev

5. Abre en tu navegador:
http://localhost:3000 o http://127.0.0.1:3000

🧠 Decisiones arquitectónicas
1. Uso de Server Components
- Opté por Server Components y Server-Side Rendering (SSR) para aprovechar las ventajas de rendimiento y SEO que ofrece Next.js.
- Los datos iniciales (como el listado de usuarios o los posts) se obtienen desde el servidor antes del renderizado, lo que:
- Mejora la velocidad de carga percibida por el usuario.
- Permite que la aplicación sea indexable por motores de búsqueda.
- Reduce el tamaño del bundle que se envía al cliente.
- De esta manera, el cliente solo recibe lo necesario para interactuar, manteniendo una buena experiencia incluso en conexiones lentas.

2. Organización de la carpeta /app
El proyecto utiliza la estructura del App Router introducida en Next.js 13+.
Esta decisión permite:
- Una separación clara por rutas (por ejemplo /users, /users/[id], /posts/[id]).
- Aprovechar el renderizado asíncrono y el uso de Server Components por defecto.
- Simplificar la jerarquía de carpetas y evitar archivos como _app.tsx o _document.tsx.
- Cada página en /app representa una ruta con su propio layout y componentes UI, mientras que los componentes reutilizables (como - CommentSection o CommentForm) se encuentran dentro de /components para mantener la modularidad.

3. Estructura de la lógica con React Query
Aunque Next.js permite realizar el data fetching directamente en Server Components, decidí incluir React Query para manejar los datos en el front dentro del componente CommentSection. Esto permite que, al registrar un nuevo comentario, los datos se actualicen inmediatamente del lado del cliente, mostrando el comentario recién creado sin necesidad de recargar la página.

👨‍💻 Autor
Andrés Castañeda
Desarrollador Full-Stack especializado en el stack MERN + Next.js y desarollo mobile con React Native y Expo.

