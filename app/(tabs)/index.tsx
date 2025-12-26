import ProductCard from '@/components/ui/ProductCard';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* ================= HERO SECTION ================= */}
      <View style={styles.hero}>
        <View style={styles.heroContent}>
          <Text style={styles.badge}>100% Raw & Unfiltered</Text>
          <Text style={styles.heroTitle}>
            Pure Goodness from the Hive:{'\n'}Bee Bro Honey
          </Text>
          <Text style={styles.heroDesc}>
            Experience the taste of nature with premium, handpicked organic honey,
            delivered straight from farm to your table.
          </Text>

          <TouchableOpacity style={styles.primaryBtn}>
            <Text style={styles.primaryBtnText}>🛒 Shop Best Sellers</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={require('@/assets/images/honeyhome.jpg')}
          style={styles.heroImage}
        />
      </View>

      {/* ================= FEATURED PRODUCTS ================= */}
      <Text style={styles.sectionTitle}>Our Featured Products</Text>
      <Text style={styles.sectionSub}>Taste the purity of nature in every jar.</Text>

      <View style={styles.productGrid}>
        <ProductCard
          id={1}
          name="Lychee Honey"
          price={999}
          image={require('@/assets/images/lych.jpg')}
        />
        <ProductCard
          id={2}
          name="Organic Jaggery"
          price={499}
          image={require('@/assets/images/jagg.jpg')}
        />
      </View>

      {/* ================= OFFER BANNER ================= */}
      <View style={styles.offerBanner}>
        <Text style={styles.offerTitle}>Get 5% Off On Your First Purchase!</Text>
        <Text style={styles.offerSub}>Use code: WELCOME5</Text>

        <TouchableOpacity style={styles.offerBtn}>
          <Text style={styles.offerBtnText}>🎁 Claim Your Discount</Text>
        </TouchableOpacity>
      </View>

      {/* ================= TRUST BADGES ================= */}
      <View style={styles.trustRow}>
        <TrustCard title="FSSAI Certified" sub="License No: 12723061000217" />
        <TrustCard title="10,000+ Happy Families" sub="Across India" />
        <TrustCard title="Free Shipping" sub="Above ₹1500" />
      </View>

      {/* ================= FOOTER ================= */}
      <Footer />

    </ScrollView>
  );
}

/* ================= SMALL COMPONENTS ================= */

const TrustCard = ({ title, sub }: any) => (
  <View style={styles.trustCard}>
    <Text style={styles.trustTitle}>{title}</Text>
    <Text style={styles.trustSub}>{sub}</Text>
  </View>
);

const Footer = () => (
  <View style={styles.footer}>
    <Image
      source={require('@/assets/images/logo.png')}
      style={styles.footerLogo}
    />

    <Text style={styles.footerText}>
      We serve pure natural & organic honey and jaggery products at affordable prices.
    </Text>

    <View style={styles.footerLinks}>
      <FooterLink text="About Us" />
      <FooterLink text="Our Products" />
      <FooterLink text="Privacy Policy" />
      <FooterLink text="Contact Us" />
    </View>

    <Text style={styles.footerCopy}>
      © 2024 Bee Brothers Honey – Pure Natural Honey & Jaggery
    </Text>
  </View>
);

const FooterLink = ({ text }: any) => (
  <Text style={styles.footerLink}>› {text}</Text>
);

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF7',
  },

  /* HERO */
  hero: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#FFF6E5',
  },
  heroContent: {
    flex: 1,
    paddingRight: 10,
  },
  badge: {
    backgroundColor: '#E3B21B',
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 12,
    fontWeight: '600',
  },
  heroTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#2E5E2E',
    marginBottom: 10,
  },
  heroDesc: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  primaryBtn: {
    backgroundColor: '#E3B21B',
    padding: 14,
    borderRadius: 30,
    marginTop: 16,
    alignSelf: 'flex-start',
  },
  primaryBtnText: {
    color: '#fff',
    fontWeight: '700',
  },
  heroImage: {
    width: 140,
    height: 160,
    borderRadius: 14,
  },

  /* SECTION */
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 30,
    color: '#2E5E2E',
  },
  sectionSub: {
    textAlign: 'center',
    color: '#777',
    marginBottom: 20,
  },

  productGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },

  /* OFFER */
  offerBanner: {
    margin: 20,
    padding: 24,
    borderRadius: 16,
    backgroundColor: '#5A3410',
    alignItems: 'center',
  },
  offerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
  },
  offerSub: {
    color: '#FFD77A',
    marginVertical: 6,
  },
  offerBtn: {
    backgroundColor: '#E3B21B',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    marginTop: 12,
  },
  offerBtnText: {
    color: '#fff',
    fontWeight: '700',
  },

  /* TRUST */
  trustRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  trustCard: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    width: '30%',
    alignItems: 'center',
  },
  trustTitle: {
    fontWeight: '700',
    fontSize: 13,
    textAlign: 'center',
  },
  trustSub: {
    fontSize: 11,
    color: '#777',
    textAlign: 'center',
  },

  /* FOOTER */
  footer: {
    backgroundColor: '#2C2418',
    padding: 20,
    marginTop: 30,
  },
  footerLogo: {
    width: 70,
    height: 70,
    marginBottom: 12,
  },
  footerText: {
    color: '#ddd',
    fontSize: 13,
    marginBottom: 16,
  },
  footerLinks: {
    marginBottom: 16,
  },
  footerLink: {
    color: '#F0B429',
    marginVertical: 4,
  },
  footerCopy: {
    color: '#aaa',
    fontSize: 11,
    textAlign: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#555',
    paddingTop: 12,
  },
});
