import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Login to Your Account</Text>

        {/* Email */}
        <Text style={styles.label}>Email address *</Text>
        <TextInput
          placeholder="Enter your email"
          style={styles.input}
          keyboardType="email-address"
        />

        {/* Password */}
        <Text style={styles.label}>Password *</Text>
        <TextInput
          placeholder="Enter your password"
          style={styles.input}
          secureTextEntry
        />

        {/* Login Button */}
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        {/* Signup */}
        <TouchableOpacity onPress={() => router.push('/auth/signup')}>
          <Text style={styles.link}>Don’t have an account? Sign Up</Text>
        </TouchableOpacity>

        {/* Forgot */}
        <Text style={styles.forgot}>Forgot your password?</Text>
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
  label: {
    marginTop: 12,
    marginBottom: 4,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
  },
  loginBtn: {
    backgroundColor: '#7BC043',
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  loginText: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },
  link: {
    textAlign: 'center',
    marginTop: 16,
    color: Colors.primary,
    fontWeight: '600',
  },
  forgot: {
    textAlign: 'center',
    marginTop: 10,
    color: '#7BC043',
  },
});
