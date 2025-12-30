import { Colors } from '@/constants/Colors';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProductCard({ name, price, image }: any) {
  return (
    <View style={styles.card}>
      <View style={styles.tag}>
        <Text style={styles.tagText}>PURE</Text>
      </View>

      <Image source={image} style={styles.image} />

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.rating}>★★★★★ 5.0</Text>

      <Text style={styles.price}>₹{price}</Text>

      <TouchableOpacity style={styles.cartBtn}>
        <Text style={styles.cartText}>ADD TO CART</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buyBtn}>
        <Text style={styles.buyText}>BUY NOW</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 14,
    padding: 12,
    marginBottom: 16,
    elevation: 3,
  },
  tag: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#2E7D32',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    zIndex: 10,
  },
  tagText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.textDark,
  },
  rating: {
    fontSize: 12,
    color: '#E3A300',
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.primary,
    marginBottom: 8,
  },
  cartBtn: {
    backgroundColor: '#FF9800',
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 6,
  },
  cartText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
  buyBtn: {
    backgroundColor: '#6D3A12',
    paddingVertical: 8,
    borderRadius: 8,
  },
  buyText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
});
