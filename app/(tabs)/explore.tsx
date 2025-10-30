import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../../context/AuthContext';

export default function ExploreScreen() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Explorar</Text>
      {user && (
        <Text style={styles.userText}>
          Usuario: {user.username}
        </Text>
      )}
      <Text style={styles.descriptionText}>
        Aquí puedes explorar contenido adicional
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  userText: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
