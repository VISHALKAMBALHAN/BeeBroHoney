import { Colors } from '@/constants/Colors';
import { StyleSheet, Text, View } from 'react-native';

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your cart is empty 🛒</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light,
  },
  text: {
    fontSize: 18,
    color: Colors.textLight,
  },
});
