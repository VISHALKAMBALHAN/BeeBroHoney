import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
  id: number;
  name: string;
  price: number;
  image: any;
};

export default function ProductCard({ id, name, price, image }: Props) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: '/product/[id]' as any,
          params: { id: id.toString() },
        })
      }
    >
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>₹{price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 8,
    marginBottom: 16,
  },
  image: {
    height: 120,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.primary,
    marginTop: 4,
  },
});