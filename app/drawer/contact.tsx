import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function ContactScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* LET'S CONNECT */}
      <View style={styles.connectSection}>
        <Text style={styles.badge}>Get in Touch</Text>
        <Text style={styles.heading}>Let's Connect</Text>
        <Text style={styles.subText}>
          Have questions about our pure honey or organic jaggery?  
          We're here to help.
        </Text>

        <View style={styles.btnRow}>
          <ActionBtn icon="call" label="Call Now" />
          <ActionBtn icon="mail" label="Email Us" dark />
          <ActionBtn icon="send" label="Send Message" />
        </View>
      </View>

      {/* CONTACT CARDS */}
      <View style={styles.cardRow}>
        <InfoCard
          icon="location"
          title="Visit Us"
          lines={[
            'Plot no -18, Durga Vihar Phase-2',
            'Dhampur, Bijnor',
            'Uttar Pradesh, 246761',
            '',
            'Business Hours:',
            'Mon–Sat: 9 AM – 7 PM',
            'Sun: 10 AM – 6 PM',
          ]}
        />

        <InfoCard
          icon="call"
          title="Call & Email"
          lines={[
            '+91 93197 62495',
            'info@beebrohoney.com',
            'support@beebrohoney.com',
          ]}
        />

        <InfoCard
          icon="time"
          title="Quick Response"
          lines={[
            'Phone: within 2 rings',
            'Emails: within 12 hours',
            'Orders: within 1 hour',
            'WhatsApp supported',
          ]}
        />
      </View>

      {/* MESSAGE FORM */}
      <View style={styles.formCard}>
        <Text style={styles.heading}>Send Us a Message</Text>
        <Text style={styles.subText}>
          Fill out the form and we’ll get back to you shortly.
        </Text>

        <Input label="Your Name" icon="person" />
        <Input label="Email Address" icon="mail" />
        <Input label="Phone Number" icon="call" />
        <Input label="Subject" icon="pricetag" />
        <Input label="Your Message" icon="chatbubble" multiline />

        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitText}>Send Message</Text>
        </TouchableOpacity>

        <Text style={styles.note}>
          We typically respond within 2–4 hours during business hours.
        </Text>
      </View>

      {/* GOOGLE MAP */}
      <View style={styles.mapSection}>
        <Text style={styles.heading}>Find Our Location</Text>
        <Text style={styles.subText}>
          Visit us in Dhampur, Uttar Pradesh
        </Text>

        <View style={styles.mapBox}>
          <WebView
            source={{
              uri: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.905325377399!2d78.49650747531574!3d29.314452675299368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390bc9b87dc60f3d%3A0xe1128bcc4c82ee55!2sBee%20Brothers%20Honey!5e0!3m2!1sen!2sin!4v1765191180065!5m2!1sen!2sin',
            }}
          />
        </View>
      </View>

    </ScrollView>
  );
}

/* ---------------- SMALL COMPONENTS ---------------- */

const ActionBtn = ({ icon, label, dark }: any) => (
  <TouchableOpacity
    style={[styles.actionBtn, dark && styles.actionBtnDark]}
  >
    <Ionicons name={icon} size={18} color="#fff" />
    <Text style={styles.actionText}>{label}</Text>
  </TouchableOpacity>
);

const InfoCard = ({ icon, title, lines }: any) => (
  <View style={styles.infoCard}>
    <Ionicons name={icon} size={30} color={Colors.primary} />
    <Text style={styles.cardTitle}>{title}</Text>
    {lines.map((l: string, i: number) => (
      <Text key={i} style={styles.cardText}>{l}</Text>
    ))}
  </View>
);

const Input = ({ label, icon, multiline }: any) => (
  <View style={{ marginBottom: 14 }}>
    <Text style={styles.inputLabel}>
      <Ionicons name={icon} size={14} /> {label}
    </Text>
    <TextInput
      placeholder={`Enter ${label.toLowerCase()}`}
      style={[styles.input, multiline && styles.textArea]}
      multiline={multiline}
    />
  </View>
);

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFDF7',
    padding: 16,
  },
  connectSection: {
    alignItems: 'center',
    marginVertical: 30,
  },
  badge: {
    backgroundColor: '#E8F1E4',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    color: Colors.primary,
    marginBottom: 10,
  },
  heading: {
    fontSize: 26,
    fontWeight: '800',
    color: Colors.primary,
    marginBottom: 10,
    textAlign: 'center',
  },
  subText: {
    fontSize: 14,
    color: Colors.textLight,
    textAlign: 'center',
    marginBottom: 20,
  },
  btnRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  actionBtn: {
    flexDirection: 'row',
    gap: 8,
    backgroundColor: Colors.primary,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 30,
  },
  actionBtnDark: {
    backgroundColor: '#1F4D2B',
  },
  actionText: {
    color: '#fff',
    fontWeight: '700',
  },
  cardRow: {
    marginVertical: 20,
  },
  infoCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 18,
    marginBottom: 16,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 10,
  },
  cardText: {
    fontSize: 13,
    color: Colors.textLight,
    textAlign: 'center',
    marginBottom: 4,
  },
  formCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 18,
    marginVertical: 20,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  submitBtn: {
    backgroundColor: '#E3B022',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  submitText: {
    color: '#fff',
    fontWeight: '800',
  },
  note: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
    color: Colors.textLight,
  },
  mapSection: {
    marginVertical: 30,
  },
  mapBox: {
    height: 280,
    borderRadius: 16,
    overflow: 'hidden',
    marginTop: 12,
  },
});
