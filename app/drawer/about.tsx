import AppFooter from '@/components/ui/AppFooter';
import { Colors } from '@/constants/Colors';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <Text style={styles.pageTitle}>About BeeBro Honey</Text>
      <Text style={styles.subtitle}>
        Pure, natural honey directly from beekeepers.
      </Text>

      {/* WHO WE ARE */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Who We Are</Text>
        <Text style={styles.paragraph}>
          We're passionate beekeepers bringing you 100% pure, natural honey
          from the floral landscapes of Dhampur.
        </Text>
      </View>

      {/* HERO */}
      <View style={styles.hero}>
        <Text style={styles.badge}>🍯 Pure & Natural Since 2015</Text>
        <Text style={styles.heroTitle}>
          From Dhampur Beehives{'\n'}To Your Table
        </Text>
        <Text style={styles.paragraph}>
          Every jar tells a story of purity, passion, and commitment to nature.
        </Text>
      </View>

      {/* STATS */}
      <View style={styles.statsRow}>
        <Stat value="1000+" label="Happy Customers" />
        <Stat value="5+" label="Honey Varieties" />
        <Stat value="100+" label="Active Beehives" />
        <Stat value="8+" label="Years Experience" />
      </View>

      {/* HONEY JOURNEY */}
      <View style={styles.section}>
        <Image source={require('@/assets/images/nee.png')} style={styles.image} />
        <Text style={styles.sectionTitle}>Our Honey Journey</Text>
        <Text style={styles.paragraph}>
          What started as a small family venture in 2015 has grown into a trusted
          name across India.
        </Text>
      </View>

      {/* WHY CHOOSE */}
      <View style={styles.section}>
        <Text style={styles.heroTitle}>Why Choose Bee Brothers?</Text>
        <Feature title="FSSAI Certified" />
        <Feature title="100% Organic" />
        <Feature title="Farm to Home" />
      </View>

      {/* PROCESS */}
      <View style={styles.section}>
        <Text style={styles.heroTitle}>Our Pure Process</Text>
        <Process step="STEP 1" title="Natural Nectar Collection" />
        <Process step="STEP 2" title="Cold Extraction" />
        <Process step="STEP 3" title="Quality Testing" />
        <Process step="STEP 4" title="Direct Delivery" />
      </View>

      {/* CTA */}
      <View style={styles.cta}>
        <Text style={styles.ctaTitle}>Ready to Experience Pure Honey?</Text>
        <Text style={styles.ctaText}>
          Join thousands of satisfied customers today.
        </Text>
      </View>

      {/* FOOTER */}
      <AppFooter />

    </ScrollView>
  );
}

/* SMALL COMPONENTS */

const Stat = ({ value, label }: any) => (
  <View style={styles.stat}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const Feature = ({ title }: any) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
  </View>
);

const Process = ({ step, title }: any) => (
  <View style={styles.card}>
    <Text style={styles.step}>{step}</Text>
    <Text style={styles.cardTitle}>{title}</Text>
  </View>
);

/* STYLES */

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFDF7',
    padding: 16,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.textDark,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textLight,
    marginBottom: 20,
  },
  sectionCard: {
    backgroundColor: '#FFF6EA',
    padding: 16,
    borderRadius: 14,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 6,
  },
  paragraph: {
    fontSize: 14,
    color: Colors.textLight,
  },
  hero: {
    marginBottom: 20,
  },
  badge: {
    backgroundColor: '#FFF1CC',
    padding: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  heroTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#2E5E2E',
    marginVertical: 12,
  },
  statsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  stat: {
    width: '48%',
    marginBottom: 12,
  },
  statValue: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.primary,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.textLight,
  },
  section: {
    marginVertical: 24,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 16,
    marginBottom: 12,
  },
  card: {
    backgroundColor: Colors.light,
    padding: 16,
    borderRadius: 14,
    marginVertical: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  step: {
    color: Colors.primary,
    fontWeight: '700',
  },
  cta: {
    backgroundColor: '#1F4D2B',
    padding: 24,
    borderRadius: 20,
    marginVertical: 30,
  },
  ctaTitle: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
  },
  ctaText: {
    color: '#EAEAEA',
    textAlign: 'center',
    marginTop: 6,
  },
});
