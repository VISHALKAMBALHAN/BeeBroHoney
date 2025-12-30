import { StyleSheet, Text, View } from 'react-native';

export default function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Categories</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFDF7',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#2E5E2E',
  },
});
