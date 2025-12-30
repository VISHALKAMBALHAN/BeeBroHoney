import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ExploreScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.heading}>Explore BeeBro Honey</Text>
      <Text style={styles.subHeading}>
        Discover everything we offer in one place
      </Text>

      {/* PRODUCTS */}
      <ExploreItem
        title="All Products"
        desc="Browse all honey & jaggery products"
        onPress={() => router.push('/products')}
      />

      {/* CATEGORIES */}
      <ExploreItem
        title="Categories"
        desc="Honey types, jaggery & more"
        onPress={() => router.push('/categories')}
      />

      {/* ABOUT */}
      <ExploreItem
        title="About Us"
        desc="Know our story & values"
        onPress={() => router.push('/drawer/about')}
      />

      {/* TESTIMONIALS */}
     {/* <ExploreItem
        title="Customer Testimonials"
        desc="What our customers say"
        onPress={() => router.push('/testimonials')}
      /> */}

      {/* CONTACT */}
      <ExploreItem
        title="Contact Us"
        desc="Reach out for support & queries"
        onPress={() => router.push('/drawer/contact')}
      />

      {/* OFFERS */}
     
     
     
     
      

      {/* POLICY */}
      <ExploreItem
        title="Privacy Policy"
        desc="Your data & safety"
        onPress={() => router.push('/privacy-policy')}
      />

    </ScrollView>
  );
}

/* ================= REUSABLE ITEM ================= */

const ExploreItem = ({ title, desc, onPress }: any) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <View>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={styles.itemDesc}>{desc}</Text>
    </View>
    <Text style={styles.arrow}>›</Text>
  </TouchableOpacity>
);

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF7',
    padding: 16,
  },

  heading: {
    fontSize: 24,
    fontWeight: '800',
    color: '#2E5E2E',
    marginBottom: 6,
  },

  subHeading: {
    color: '#777',
    marginBottom: 20,
  },

  item: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 14,
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },

  itemTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2E5E2E',
  },

  itemDesc: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
  },

  arrow: {
    fontSize: 26,
    color: '#E3B21B',
    fontWeight: '800',
  },
});
