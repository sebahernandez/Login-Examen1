# Informe Técnico: Aplicación Móvil de Autenticación

## 1. Descripción General

Esta es una aplicación móvil desarrollada con **React Native** y **Expo** que implementa un sistema básico de autenticación con navegación entre pantallas. La aplicación permite a los usuarios iniciar sesión con credenciales predefinidas y acceder a un dashboard principal.

## 2. Tecnologías Utilizadas

### 2.1 Framework y Entorno
- **React Native** (v0.81.5): Framework principal para desarrollo móvil multiplataforma
- **Expo** (~54.0.20): Plataforma de desarrollo que facilita la creación y despliegue
- **React** (19.1.0): Librería de JavaScript para construir interfaces de usuario
- **TypeScript** (^5.9.3): Superset tipado de JavaScript

### 2.2 Navegación
- **@react-navigation/native** (^7.1.19): Sistema de navegación principal
- **@react-navigation/native-stack** (^7.6.0): Navegación tipo pila (stack navigation)
- **react-native-screens** (^4.18.0): Optimización nativa de pantallas
- **react-native-safe-area-context** (^5.6.1): Manejo de áreas seguras del dispositivo

### 2.3 Soporte Multiplataforma
- **react-native-web** (^0.21.0): Soporte para ejecución en navegadores web
- **react-dom** (19.1.0): Renderizado en el DOM para la versión web

## 3. Estructura del Proyecto

```
examen1-movil/
├── src/
│   └── components/
│       ├── login/
│       │   └── LoginForm.tsx
│       └── dashboard/
│           └── HomeScreen.tsx
├── assets/
├── App.tsx
├── index.tsx
├── app.json
└── package.json
```

## 4. Componentes Principales

### 4.1 `index.tsx` - Punto de Entrada
**Ubicación:** `index.tsx:1`

```typescript
registerRootComponent(App);
```

- Registra el componente raíz de la aplicación usando Expo
- Configura el entorno apropiado para Expo Go o build nativo

### 4.2 `App.tsx` - Configuración de Navegación
**Ubicación:** `App.tsx:1-27`

**Responsabilidades:**
- Configura el contenedor de navegación (`NavigationContainer`)
- Define el stack de navegación con dos pantallas:
  - **Login** (inicial): Pantalla de inicio de sesión sin header
  - **Home**: Dashboard con título "Bienvenido"

**Estructura de navegación:**
```typescript
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};
```

### 4.3 `LoginForm.tsx` - Pantalla de Inicio de Sesión
**Ubicación:** `src/components/login/LoginForm.tsx:1-131`

**Funcionalidades:**
1. **Estado local:** Maneja username y password mediante hooks `useState`
2. **Validación de credenciales:**
   - Usuario: `admin`
   - Contraseña: `1234`
3. **Navegación:** Redirige a la pantalla Home tras autenticación exitosa
4. **Alertas multiplataforma:** Muestra alertas diferenciadas para web y móvil

**Flujo de autenticación:**
```typescript
const handleLogin = () => {
  (username === USUARIO.username && password === USUARIO.password)
    ? navigation.navigate('Home')
    : showAlert();
};
```

**Características de UI:**
- Dos campos de entrada (usuario y contraseña)
- Campo de contraseña con `secureTextEntry` para ocultar texto
- Botón "Entrar" para enviar credenciales
- Texto informativo mostrando las credenciales válidas
- Diseño centrado con estilos profesionales

### 4.4 `HomeScreen.tsx` - Dashboard Principal
**Ubicación:** `src/components/dashboard/HomeScreen.tsx:1-25`

**Funcionalidades:**
- Pantalla simple que muestra el texto "Dashboard"
- Diseño centrado vertical y horizontalmente
- Preparada para futuras expansiones de funcionalidad

## 5. Flujo de la Aplicación

```
[Inicio] → [LoginForm]
              ↓
         ¿Credenciales correctas?
              ↓
         [admin/1234]
              ↓
            Sí → [HomeScreen (Dashboard)]
              ↓
            No → [Alert de error]
```

## 6. Configuración de Expo (`app.json`)

### 6.1 Información General
- **Nombre:** examen1-movil
- **Versión:** 1.0.0
- **Orientación:** Portrait (vertical)
- **UI Style:** Light mode
- **Nueva Arquitectura:** Habilitada (`newArchEnabled: true`)

### 6.2 Configuraciones por Plataforma

**iOS:**
- Soporte para iPad habilitado

**Android:**
- Ícono adaptativo configurado
- Edge-to-edge habilitado

**Web:**
- Favicon configurado

## 7. Características de Seguridad

⚠️ **Nota de Seguridad:** Esta aplicación utiliza credenciales hardcodeadas para propósitos educativos y demostrativos. En un entorno de producción, se deberían implementar:

- Autenticación mediante API backend
- Encriptación de credenciales
- Tokens JWT o OAuth
- Almacenamiento seguro de tokens (AsyncStorage con encriptación)
- Validación del lado del servidor

## 8. Estilos y Diseño

### 8.1 Estilo General
- Uso de `StyleSheet.create()` para optimización de estilos
- Flexbox para layouts responsivos
- Paleta de colores profesional:
  - Azul primario: `#007AFF`
  - Fondo gris claro: `#f5f5f5`
  - Texto principal: `#333`
  - Bordes: `#ddd`

### 8.2 Componentes de UI
- Inputs con altura de 50px y bordes redondeados
- Botones con feedback visual
- Tipografía clara y legible
- Espaciado consistente

## 9. Scripts Disponibles

```json
"start": "expo start"        // Inicia el servidor de desarrollo
"android": "expo start --android"  // Inicia en emulador/dispositivo Android
"ios": "expo start --ios"    // Inicia en simulador/dispositivo iOS
"web": "expo start --web"    // Inicia en navegador web
```

## 10. Compatibilidad Multiplataforma

La aplicación está diseñada para funcionar en:
- ✅ **iOS** (iPhone/iPad)
- ✅ **Android** (smartphones/tablets)
- ✅ **Web** (navegadores modernos)

### Diferencias por Plataforma
- Las alertas se manejan de manera diferente (Alert nativo vs alert web)
- Detecta la plataforma usando `Platform.OS`

## 11. Mejoras Futuras Sugeridas

1. **Autenticación:**
   - Integración con backend real
   - Manejo de sesiones persistentes
   - Recuperación de contraseña

2. **UI/UX:**
   - Animaciones en transiciones
   - Modo oscuro
   - Validación en tiempo real de formularios
   - Indicadores de carga

3. **Funcionalidad:**
   - Agregar más pantallas al dashboard
   - Perfil de usuario
   - Cierre de sesión
   - Navegación por tabs

4. **Seguridad:**
   - Implementar autenticación real
   - Protección de rutas
   - Manejo seguro de tokens

## 12. Instalación y Ejecución

### Requisitos Previos
- Node.js instalado
- npm o yarn
- Expo CLI (opcional, pero recomendado)

### Pasos de Instalación
```bash
# Instalar dependencias
npm install

# Iniciar la aplicación
npm start

# O para plataforma específica
npm run android
npm run ios
npm run web
```

## 13. Conclusión

Esta aplicación móvil es un proyecto educativo que demuestra los conceptos fundamentales de:
- Desarrollo móvil con React Native
- Navegación entre pantallas
- Manejo de estado con hooks
- Estilización de componentes
- Desarrollo multiplataforma

Es una base sólida que puede extenderse para crear aplicaciones más complejas con funcionalidades adicionales de autenticación, gestión de datos y experiencia de usuario mejorada.

---

**Fecha del informe:** 2025-10-27
**Versión de la aplicación:** 1.0.0
**Autor del análisis:** Claude Code
