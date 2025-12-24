import ProductCard from '@/components/ui/ProductCard';
import { Colors } from '@/constants/Colors';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* HERO BANNER */}
      <View style={styles.bannerWrapper}>
        <Image
          source={require('@/assets/images/honeyhome.jpg')}
          style={styles.banner}
        />
        <View style={styles.bannerOverlay}>
          <Text style={styles.bannerTitle}>Pure & Natural Honey</Text>
          <Text style={styles.bannerSub}>
            Direct from Beekeepers • No Sugar • No Chemicals
          </Text>
        </View>
      </View>

      {/* SECTION */}
      <Text style={styles.sectionTitle}>Featured Products</Text>

      <View style={styles.productGrid}>
        <ProductCard
          id={1}
          name="Lychee Honey"
          price={999}
          image={require('@/assets/images/product1.jpg')}
        />

        <ProductCard
          id={2}
          name="Eucalyptus Honey"
          price={1099}
          image={require('@/assets/images/product2.jpg')}
        />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  bannerWrapper: {
    position: 'relative',
  },

  banner: {
    width: '100%',
    height: 240,
  },

  bannerOverlay: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
  },

  bannerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#fff',
  },

  bannerSub: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 12,
    color: Colors.textDark,
  },

  productGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
});
