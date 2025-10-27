import { View, Text, StyleSheet } from 'react-native';


function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.helloText}>Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  helloText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
