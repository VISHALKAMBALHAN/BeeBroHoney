import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export default function ProductDetailScreen() {
  const { id, name, price } = useLocalSearchParams<{
    id: string;
    name: string;
    price: string;
  }>();

  const { user } = useAuth();
  const { addToCart } = useCart();

  // ✅ UPDATED ADD TO CART LOGIC
  const handleAddToCart = () => {
    // 🔒 LOGIN REQUIRED ONLY WHEN BUYING
    if (!user) {
      router.push('/auth/login');
      return;
    }

    addToCart({
      id,
      name,
      price,
      qty: 1,
    });

    Alert.alert('Added to Cart', `${name} added successfully`, [
      { text: 'Go to Cart', onPress: () => router.push('/cart') },
      { text: 'OK' },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: 'https://via.placeholder.com/400x400.png?text=BeeBro+Product',
        }}
        style={styles.image}
      />

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>

      <Text style={styles.desc}>
        100% pure and natural BeeBro product. Carefully sourced and packed
        to maintain quality and taste.
      </Text>

      {/* ✅ BUTTON */}
      <TouchableOpacity style={styles.cartBtn} onPress={handleAddToCart}>
        <Text style={styles.cartText}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { width: '100%', height: 300 },
  name: { fontSize: 22, fontWeight: '600', margin: 15 },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#f4a261',
    marginHorizontal: 15,
  },
  desc: {
    fontSize: 14,
    color: '#555',
    margin: 15,
    lineHeight: 20,
  },
  cartBtn: {
    backgroundColor: '#f4a261',
    padding: 16,
    margin: 15,
    borderRadius: 10,
  },
  cartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
