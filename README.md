# Aplicación de Login con Expo Router

## 📱 Descripción del Proyecto

Aplicación móvil desarrollada con React Native y Expo Router que implementa un sistema completo de autenticación con navegación protegida y tabs. La aplicación permite a los usuarios iniciar sesión, acceder a un dashboard personalizado y navegar entre diferentes secciones de la app.

## 📁 Estructura del Proyecto

```
examen1-movil/
├── app/                          → Carpeta principal de Expo Router
│   ├── _layout.tsx               → Layout raíz (maneja autenticación y navegación)
│   ├── index.tsx                 → Redirige a (auth)/login
│   ├── (auth)/
│   │   ├── _layout.tsx           → Layout para rutas de autenticación
│   │   └── login.tsx             → Pantalla de login
│   └── (tabs)/
│       ├── _layout.tsx           → Layout con BottomTabNavigator
│       ├── index.tsx             → Home/Dashboard (primera tab)
│       ├── explore.tsx           → Explorar (segunda tab)
│       └── profile.tsx           → Perfil (tercera tab con logout)
├── context/
│   └── AuthContext.tsx           → Contexto de autenticación del usuario
├── components/
│   └── dashboard/
│       └── HomeScreen.tsx        → Componente de dashboard
├── assets/                       → Imágenes y recursos
├── package.json                  → Dependencias del proyecto
├── tsconfig.json                 → Configuración de TypeScript
└── README.md                     → Este archivo
```

## 🔑 Características Principales

### 1. **Sistema de Autenticación**
- Contexto global de autenticación usando React Context API
- Usuario de prueba predefinido: 
  - **Usuario**: `admin` 
  - **Contraseña**: `1234`
- Validación de credenciales en tiempo real
- Estado de autenticación persistente durante la sesión
- La autenticación se valida en `app/_layout.tsx`

### 2. **Navegación Protegida**
- Sistema de rutas protegidas basado en el estado de autenticación
- Si el usuario NO está autenticado → redirige automáticamente a `/(auth)/login`
- Si el usuario está autenticado → redirige automáticamente a `/(tabs)` (Home)
- Usa `useRouter` de `expo-router` para todas las navegaciones
- Redirecciones automáticas según el estado de autenticación

### 3. **Tabs de Navegación**
La aplicación cuenta con 3 pestañas principales:

- **Home (index.tsx)**: 
  - Dashboard principal 
  - Muestra mensaje de bienvenida personalizado con el nombre del usuario
  - Interfaz limpia y moderna
  
- **Explorar (explore.tsx)**: 
  - Pantalla de exploración
  - Muestra información del usuario activo
  - Diseño adaptable

- **Perfil (profile.tsx)**: 
  - Información del usuario
  - Avatar personalizado
  - Botón de cerrar sesión con confirmación
  - Interfaz intuitiva con iconos

## 🚀 Flujo de la Aplicación

```
1. Usuario abre la app
   ↓
2. app/_layout.tsx verifica el estado de autenticación
   ↓
3a. Si NO está autenticado:
    ↓
    Redirige a → (auth)/login.tsx
    ↓
    Usuario ingresa credenciales (admin/1234)
    ↓
    Validación de credenciales
    ↓
    Si son correctas → Login exitoso
    ↓
    Guarda usuario en AuthContext
    ↓
    Redirige automáticamente a → (tabs)/
   
3b. Si está autenticado:
    ↓
    Redirige a → (tabs)/ (Home)
    ↓
    Muestra Home con mensaje: "Bienvenido, [nombre]!"
    ↓
    Usuario puede navegar libremente entre tabs:
    - Home
    - Explorar  
    - Perfil
    ↓
    En Perfil puede cerrar sesión
    ↓
    Al cerrar sesión → Vuelve a (auth)/login
```

## 📝 Componentes Clave

### `app/_layout.tsx` (Layout Raíz)
- Envuelve toda la aplicación con `AuthProvider`
- Monitorea constantemente el estado de autenticación
- Implementa lógica de redirección automática
- Maneja la navegación entre grupos de rutas `(auth)` y `(tabs)`

### `context/AuthContext.tsx` (Contexto de Autenticación)
- Define la interfaz `User` con información del usuario
- Provee funciones: `login()`, `logout()`, y estado `isAuthenticated`
- Gestiona el estado global del usuario
- Accesible desde cualquier componente mediante `useAuth()`

### `app/(auth)/login.tsx` (Pantalla de Login)
- Formulario de inicio de sesión con campos de usuario y contraseña
- Validación de credenciales contra usuario predefinido
- Alertas de error para credenciales incorrectas
- Usa `useAuth()` para guardar el usuario en el contexto
- Usa `useRouter()` para navegar a las tabs tras login exitoso
- Diseño responsive y amigable

### `app/(tabs)/index.tsx` (Home/Dashboard)
- Pantalla principal después del login
- Muestra mensaje de bienvenida personalizado con el nombre del usuario
- Accede al usuario desde `useAuth()`
- Título "Dashboard" para identificar la sección
- Diseño limpio y centrado

### `app/(tabs)/explore.tsx` (Explorar)
- Segunda pestaña de navegación
- Muestra información del usuario actual
- Permite explorar contenido adicional
- Mantiene acceso al contexto de autenticación

### `app/(tabs)/profile.tsx` (Perfil)
- Tercera pestaña de navegación
- Muestra información detallada del usuario
- Avatar con icono personalizado
- Tarjeta con información del perfil
- Botón de cerrar sesión con confirmación mediante `Alert`
- Usa `useRouter()` para redirigir al login después del logout
- Diseño profesional con sombras y estilos elevados

### `app/(tabs)/_layout.tsx` (Tab Navigator)
- Implementa `BottomTabNavigator` usando `<Tabs>` de Expo Router
- Configura 3 pestañas con iconos de `@expo/vector-icons`
- Personaliza colores activos e inactivos
- Headers visibles para cada pestaña

## 🔧 Tecnologías y Herramientas

- **React Native** `0.81.5`: Framework para desarrollo móvil multiplataforma
- **Expo** `~54.0.20`: Plataforma y conjunto de herramientas para React Native
- **Expo Router** `^6.0.14`: Sistema de navegación basado en el sistema de archivos
- **React** `19.1.0`: Biblioteca de JavaScript para construir interfaces de usuario
- **TypeScript** `^5.9.3`: Superset tipado de JavaScript
- **React Context API**: Gestión de estado de autenticación global
- **@expo/vector-icons**: Biblioteca de iconos para las tabs y UI
- **React Navigation**: Navegación integrada a través de Expo Router

## ⚙️ Instalación y Configuración

### Requisitos Previos
- Node.js (v14 o superior)
- npm o yarn
- Expo Go app (para pruebas en dispositivo móvil)

### Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>

# Navegar al directorio del proyecto
cd examen1-movil

# Instalar dependencias
npm install
```

## 🚀 Comandos Disponibles

```bash
# Iniciar la aplicación en modo desarrollo
npm start

# Iniciar en emulador Android
npm run android

# Iniciar en simulador iOS
npm run ios

# Iniciar en navegador web
npm run web
```

## 👤 Credenciales de Acceso

Para probar la aplicación, utiliza las siguientes credenciales:

- **Usuario**: `admin`
- **Contraseña**: `1234`

## 📱 Funcionalidades Implementadas

✅ Sistema de autenticación completo
✅ Navegación protegida por autenticación
✅ Bottom Tab Navigator con 3 pestañas
✅ Redirecciones automáticas
✅ Contexto global de usuario
✅ Cierre de sesión con confirmación
✅ Interfaz responsive y moderna
✅ Iconos personalizados en tabs
✅ Validación de formularios
✅ Manejo de errores con alertas
✅ TypeScript para tipado estático

## 🎨 Diseño y UI

- Paleta de colores moderna con azul `#007AFF` como color principal
- Diseño limpio y minimalista
- Componentes con sombras y elevación
- Inputs con bordes redondeados
- Botones con feedback visual
- Iconos de Ionicons para mejor UX
- Textos con jerarquía visual clara

## 📌 Notas Importantes

1. **Expo Router**: El archivo `App.tsx` ya no se utiliza, Expo Router usa `app/_layout.tsx` como punto de entrada
2. **Navegación File-based**: La estructura de carpetas en `app/` define automáticamente las rutas
3. **Grupos de Rutas**: Los paréntesis `(auth)` y `(tabs)` crean grupos que no aparecen en las URLs pero organizan la estructura
4. **Context API**: El contexto de autenticación está en `context/AuthContext.tsx` y es accesible desde toda la app
5. **TypeScript**: Todo el código está tipado para mejor autocompletado y detección de errores

## 🔐 Seguridad

⚠️ **Nota**: Esta es una aplicación de demostración educativa. En un entorno de producción:
- Las credenciales NO deben estar hardcodeadas
- Se debe implementar autenticación con backend seguro
- Usar tokens JWT o similar para sesiones
- Implementar hash de contraseñas
- Añadir validación del lado del servidor

## 👨‍💻 Autor

Desarrollado como proyecto de examen móvil

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.
