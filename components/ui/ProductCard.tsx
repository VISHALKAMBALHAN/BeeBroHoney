import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  id: number;
  name: string;
  price: number;
  image: any;
};

export default function ProductCard({ id, name, price, image }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: '/product/[id]' as any,
          params: { id: id.toString() },
        })
      }
    >
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} />
      </View>

      <Text style={styles.name} numberOfLines={1}>
        {name}
      </Text>

      <Text style={styles.price}>₹{price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 10,
    marginBottom: 18,

    // Shadow (iOS)
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },

    // Shadow (Android)
    elevation: 4,
  },

  imageWrapper: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },

  image: {
    width: '100%',
    height: 140,        // ✅ Fixed ratio
    resizeMode: 'cover',
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    color: Colors.textDark,
  },

  price: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.primary,
    marginTop: 4,
  },
});
