import { Stack, useRouter, useSegments } from 'expo-router';
import { AuthProvider, useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

function RootLayoutNav() {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';

    // Esperar un momento para que el router esté listo
    const timeout = setTimeout(() => {
      if (!isAuthenticated && !inAuthGroup) {
        // Redirigir al login si no está autenticado
        router.replace('/(auth)/login');
      } else if (isAuthenticated && inAuthGroup) {
        // Redirigir al home si ya está autenticado
        router.replace('/(tabs)');
      }
    }, 1);

    return () => clearTimeout(timeout);
  }, [isAuthenticated, segments]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}

