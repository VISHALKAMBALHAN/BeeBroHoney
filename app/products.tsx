import ProductCard from '@/components/ui/ProductCard';
import { Colors } from '@/constants/Colors';
import { PRODUCTS } from '@/data/productss';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function ProductsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Natural Products</Text>

      <FlatList
        data={PRODUCTS}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <ProductCard
            name={item.name}
            price={item.price}
            image={item.image}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8E1',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.textDark,
    marginBottom: 16,
  },
});
