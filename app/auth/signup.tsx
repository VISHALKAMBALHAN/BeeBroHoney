import { useRouter } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignupScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>My Account</Text>
        <Text style={styles.subtitle}>Sign Up</Text>

        <TextInput placeholder="First Name" style={styles.input} />
        <TextInput placeholder="Last Name" style={styles.input} />
        <TextInput
          placeholder="Email Address"
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Mobile Number"
          style={styles.input}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          secureTextEntry
        />

        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace('/auth/login')}>
          <Text style={styles.link}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b2b20',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  submitBtn: {
    backgroundColor: '#7BC043',
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
  },
  submitText: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },
  link: {
    textAlign: 'center',
    marginTop: 16,
    color: '#7BC043',
    fontWeight: '600',
  },
});
