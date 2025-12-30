import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function PrivacyPolicyScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Privacy Policy</Text>
        <Text style={styles.headerSub}>
          Your trust is our most valuable asset.
        </Text>
      </View>

      {/* CONTENT */}
      <View style={styles.card}>

        <Text style={styles.paragraph}>
          At <Text style={styles.bold}>Bee Brothers Honey</Text>, we understand that in today’s
          digital age, data privacy is a primary concern. We are committed to
          maintaining the trust and confidence of our visitors and customers.
          We want you to know that we are not in the business of selling,
          renting, or trading email lists with other companies and businesses
          for marketing purposes.
        </Text>

        <View style={styles.divider} />

        {/* HOW WE PROTECT */}
        <Text style={styles.sectionTitle}>🔒 How We Protect Your Data</Text>
        <Text style={styles.paragraph}>
          We treat your personal information with the highest level of
          security. Here is how we handle your data:
        </Text>

        <Text style={styles.listItem}>
          🔐 <Text style={styles.bold}>Private Information:</Text> Any personal
          details (Name, Address, Phone) you provide are strictly used only for
          processing your order. This data is never shared publicly.
        </Text>

        <Text style={styles.listItem}>
          🚚 <Text style={styles.bold}>Logistics Sharing:</Text> We only share
          your shipping address and phone number with our trusted delivery
          partners to ensure your package reaches you on time.
        </Text>

        <Text style={styles.listItem}>
          🔑 <Text style={styles.bold}>Data Encryption:</Text> Our website uses
          SSL encryption to ensure that all data transmitted between your
          browser and our servers remains private.
        </Text>

        <View style={styles.divider} />

        {/* PAYMENT SECURITY */}
        <Text style={styles.sectionTitle}>💳 Payment Security</Text>
        <Text style={styles.paragraph}>
          We take your financial security seriously.
        </Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            <Text style={styles.bold}>IMPORTANT:</Text> Bee Brothers Honey does
            <Text style={styles.bold}> NOT </Text>
            store your Credit Card, Debit Card, or Net Banking details on our
            servers.
          </Text>
        </View>

        <Text style={styles.paragraph}>
          All monetary transactions are handled by a secure, certified 3rd
          Party Payment Gateway. When you make a payment, you are securely
          redirected to the banking gateway. We only receive a confirmation of
          whether the payment was successful or not.
        </Text>

        <View style={styles.divider} />

        {/* COOKIES */}
        <Text style={styles.sectionTitle}>🍪 Cookies & Analytics</Text>
        <Text style={styles.paragraph}>
          When visitors leave comments on the site, we collect the data shown
          in the comments form, and also the visitor’s IP address and browser
          user agent string to help spam detection. We may use standard cookies
          to improve your browsing experience and keep your cart updated while
          you shop.
        </Text>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF7',
  },

  header: {
    backgroundColor: '#FFF4D6',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#C46A00',
  },
  headerSub: {
    marginTop: 6,
    color: '#7A5A00',
    fontSize: 14,
  },

  card: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 18,
    borderRadius: 14,
    elevation: 2,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#C46A00',
    marginBottom: 8,
  },

  paragraph: {
    fontSize: 14,
    color: '#444',
    lineHeight: 22,
    marginBottom: 14,
  },

  listItem: {
    fontSize: 14,
    color: '#444',
    lineHeight: 22,
    marginBottom: 10,
  },

  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 16,
  },

  infoBox: {
    backgroundColor: '#EAF5FF',
    borderLeftWidth: 4,
    borderLeftColor: '#1E88E5',
    padding: 12,
    borderRadius: 8,
    marginVertical: 12,
  },

  infoText: {
    fontSize: 13,
    color: '#1E4E8C',
    lineHeight: 20,
  },

  bold: {
    fontWeight: '700',
  },
});
