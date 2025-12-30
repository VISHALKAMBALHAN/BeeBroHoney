import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text } from 'react-native';

export default function ProductDetailScreen() {
  const { id, name, price, image } = useLocalSearchParams<{
    id: string;
    name: string;
    price: string;
    image?: string;
  }>();

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri:
            image ||
            'https://via.placeholder.com/400x400.png?text=BeeBro+Product',
        }}
        style={styles.image}
      />

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>

      <Text style={styles.desc}>
        100% pure and natural BeeBro Honey product. Carefully sourced and packed
        to maintain quality and taste.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { width: '100%', height: 300 },
  name: {
    fontSize: 22,
    fontWeight: '600',
    margin: 15,
  },
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
});
