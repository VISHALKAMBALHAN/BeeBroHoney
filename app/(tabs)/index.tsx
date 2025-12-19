import ProductCard from '@/components/ui/ProductCard';
import { Colors } from '@/constants/Colors';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* Banner */}
      <Image
        source={require('@/assets/images/banner.jpg')}
        style={styles.banner}
      />

      {/* Tagline */}
      <Text style={styles.heading}>Pure & Natural Honey</Text>
      <Text style={styles.sub}>
        Direct from beekeepers • No sugar • No chemicals
      </Text>

      {/* Featured */}
      <View style={styles.grid}>
        <ProductCard 
          id={1} 
          name="Lychee Honey" 
          price={999}
          image={require('@/assets/images/lychee-honey.jpg')}
        />
        <ProductCard 
          id={2} 
          name="Eucalyptus Honey" 
          price={1099}
          image={require('@/assets/images/eucalyptus-honey.jpg')}
        />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.light },
  banner: { width: '100%', height: 230 },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    margin: 16,
    color: Colors.textDark,
  },
  sub: {
    fontSize: 14,
    marginHorizontal: 16,
    marginBottom: 16,
    color: Colors.textLight,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
});