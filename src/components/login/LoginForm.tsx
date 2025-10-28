import React, { useCallback, useState } from 'react';
import {NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Platform
} from 'react-native';


type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
};

function LoginForm({navigation}: LoginScreenProps) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const USUARIO = {
        username: 'admin',
        password: '1234'
    }

    const showAlert = () => {
     (Platform.OS === 'web')
        ? alert("Usuario o contraseña incorrectos. Por favor, verifica tus credenciales.")
        : Alert.alert("Usuario o contraseña incorrectos");
};

    const handleLogin = useCallback(() => {
      if (username === USUARIO.username && password === USUARIO.password) {
        navigation.navigate('Home');
      } else {
        showAlert();
      }
    }, [username, password, navigation]);

    return (
         <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.hint}>
        Usuario: admin{'\n'}Contraseña: 1234
      </Text>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  hint: {
    marginTop: 20,
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
  },
  helloText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});

export default LoginForm;