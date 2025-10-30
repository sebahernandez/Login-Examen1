import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert(
      'Cerrar Sesión',
      '¿Estás seguro de que deseas cerrar sesión?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Cerrar Sesión',
          style: 'destructive',
          onPress: () => {
            logout();
            // La redirección la maneja automáticamente el _layout.tsx
            // pero la forzamos para asegurar navegación inmediata
            setTimeout(() => {
              router.replace('/(auth)/login');
            }, 100);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Ionicons name="person-circle" size={100} color="#007AFF" />
      </View>
      
      {user && (
        <Text style={styles.usernameText}>{user.username}</Text>
      )}

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Información del Usuario</Text>
        <Text style={styles.infoText}>
          Usuario: {user?.username || 'N/A'}
        </Text>
        <Text style={styles.infoText}>
          Estado: Conectado
        </Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24} color="white" />
        <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  avatarContainer: {
    marginTop: 40,
    marginBottom: 20,
  },
  usernameText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF3B30',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
    width: '100%',
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
