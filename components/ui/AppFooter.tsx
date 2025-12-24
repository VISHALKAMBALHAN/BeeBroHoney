import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AppFooter() {
  return (
    <View style={styles.footer}>

      {/* LOGO + DESC */}
      <View style={styles.col}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.desc}>
          We serve pure natural & organic honey and jaggery products at
          affordable prices with easy takeaway solutions.
        </Text>
      </View>

      {/* QUICK LINKS */}
      <View style={styles.col}>
        <Text style={styles.heading}>Quick Links</Text>
        <FooterLink label="About Us" />
        <FooterLink label="Our Products" />
        <FooterLink label="Buy Bulk Honey" />
        <FooterLink label="Seasonal Offers" />
      </View>

      {/* INFORMATION */}
      <View style={styles.col}>
        <Text style={styles.heading}>Information</Text>
        <FooterLink label="Privacy Policy" />
        <FooterLink label="Shipping Details" />
        <FooterLink label="Terms & Conditions" />
        <FooterLink label="Refund Policy" />
      </View>

      {/* CONTACT */}
      <View style={styles.col}>
        <Text style={styles.heading}>Contact Us</Text>
        <Text style={styles.text}>📍 Plot no -18, Durga Vihar Phase-2</Text>
        <Text style={styles.text}>Dhampur, Bijnor, UP – 246761</Text>
        <Text style={styles.text}>📞 +91 9319762495</Text>
        <Text style={styles.text}>✉ info@beebrohoney.com</Text>

        <Text style={[styles.heading, { marginTop: 14 }]}>We Accept</Text>
        <Image
          source={require('@/assets/images/payment.png')}
          style={styles.payment}
        />
      </View>

      {/* COPYRIGHT */}
      <Text style={styles.copy}>
        © 2024 Bee Brothers Honey – Pure Natural Honey & Jaggery
      </Text>
    </View>
  );
}

const FooterLink = ({ label }: any) => (
  <TouchableOpacity>
    <Text style={styles.link}>› {label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#2B210F',
    padding: 20,
    marginTop: 40,
  },
  col: {
    marginBottom: 24,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 12,
  },
  heading: {
    color: '#FFD36E',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  desc: {
    color: '#E8E1D3',
    fontSize: 13,
    lineHeight: 18,
  },
  link: {
    color: '#E8E1D3',
    fontSize: 14,
    marginVertical: 4,
  },
  text: {
    color: '#E8E1D3',
    fontSize: 13,
    marginVertical: 2,
  },
  payment: {
    width: 160,
    height: 50,
    resizeMode: 'contain',
    marginTop: 6,
  },
  copy: {
    color: '#BFB6A5',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
  },
});
