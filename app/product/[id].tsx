import { Colors } from '@/constants/Colors';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProductDetail() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/product1.jpg')}
        style={styles.image}
      />

      <Text style={styles.title}>Lychee Honey</Text>
      <Text style={styles.price}>₹999</Text>

      <Text style={styles.desc}>
        100% pure raw honey sourced directly from natural lychee farms.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: Colors.light, flex: 1 },
  image: { height: 260, borderRadius: 14 },
  title: { fontSize: 22, fontWeight: '700', marginTop: 16 },
  price: { fontSize: 20, color: Colors.primary, marginVertical: 8 },
  desc: { fontSize: 14, color: Colors.textLight, marginBottom: 20 },
  button: {
    backgroundColor: Colors.primary,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: { color: Colors.light, fontSize: 16, fontWeight: '700' },
});
