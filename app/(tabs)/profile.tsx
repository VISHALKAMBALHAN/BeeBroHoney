import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAuth } from '../context/AuthContext';

/* =======================
   PROFILE SCREEN
======================= */

export default function ProfileScreen() {
  const { user, isAuthenticated, logout } = useAuth();

  const [showEdit, setShowEdit] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Load user data when component mounts
  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setEmail(user.email || '');
      setPhone(user.phone || '');
    }
  }, [user]);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/auth/login');
    }
  }, [isAuthenticated]);

  const saveProfile = () => {
    // Validation
    if (!name.trim()) {
      Alert.alert('Error', 'Please enter your name');
      return;
    }

    if (!email.trim()) {
      Alert.alert('Error', 'Please enter your email');
      return;
    }

    // TODO: Save to backend/database
    setShowEdit(false);
    Alert.alert('Success', 'Profile updated successfully');
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => {
            logout();
            router.replace('/auth/login');
          },
        },
      ]
    );
  };

  // Show loading while checking authentication
  if (!user) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#E3B21B" />
        <Text style={styles.loadingText}>Loading profile...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={{ 
            uri: 'https://ui-avatars.com/api/?name=' + encodeURIComponent(name) + '&size=300&background=E3B21B&color=fff'
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        {phone && <Text style={styles.phone}>📱 {phone}</Text>}
      </View>

      {/* STATS */}
      <View style={styles.statsRow}>
        <Stat value="12" label="Orders" />
        <Stat value="4" label="Wishlist" />
        <Stat value="₹2,450" label="Saved" />
      </View>

      {/* EDIT PROFILE */}
      {showEdit && (
        <View style={styles.editBox}>
          <Input 
            label="Full Name" 
            value={name} 
            onChange={setName}
            placeholder="Enter your full name"
          />
          <Input 
            label="Email" 
            value={email} 
            onChange={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
          <Input 
            label="Mobile" 
            value={phone} 
            onChange={setPhone}
            placeholder="Enter your mobile number"
            keyboardType="phone-pad"
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity 
              style={[styles.saveBtn, styles.cancelBtn]} 
              onPress={() => setShowEdit(false)}
            >
              <Text style={[styles.saveText, styles.cancelText]}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveBtn} onPress={saveProfile}>
              <Text style={styles.saveText}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* MENU */}
      <View style={styles.menu}>
        <MenuItem
          icon="person-outline"
          label="Edit Profile"
          onPress={() => setShowEdit(!showEdit)}
        />
        <MenuItem
          icon="receipt-outline"
          label="My Orders"
          onPress={() => router.push('/profile/orders')}
        />
        <MenuItem 
          icon="heart-outline" 
          label="Wishlist"
          onPress={() => router.push('/profile/wishlist')}
        />
        <MenuItem 
          icon="notifications-outline" 
          label="Notifications"
          onPress={() => Alert.alert('Coming Soon', 'Notification settings will be available soon')}
        />
        <MenuItem 
          icon="settings-outline" 
          label="Settings"
          onPress={() => Alert.alert('Coming Soon', 'Settings will be available soon')}
        />
        <MenuItem 
          icon="shield-checkmark-outline" 
          label="Privacy Policy"
          onPress={() => Alert.alert('Privacy Policy', 'Your data is secure with us')}
        />
        <MenuItem 
          icon="help-circle-outline" 
          label="Help & Support"
          onPress={() => Alert.alert('Support', 'Contact us at support@beebrohoney.com')}
        />
        <MenuItem
          icon="log-out-outline"
          label="Logout"
          danger
          onPress={handleLogout}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Version 1.0.0</Text>
      </View>
    </ScrollView>
  );
}

/* =======================
   COMPONENTS
======================= */

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <View style={styles.statBox}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function MenuItem({
  icon,
  label,
  danger,
  onPress,
}: {
  icon: any;
  label: string;
  danger?: boolean;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Ionicons
        name={icon}
        size={22}
        color={danger ? '#e63946' : '#444'}
      />
      <Text style={[styles.menuText, danger && { color: '#e63946' }]}>
        {label}
      </Text>
      {!danger && (
        <Ionicons name="chevron-forward" size={18} color="#aaa" />
      )}
    </TouchableOpacity>
  );
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  keyboardType,
}: {
  label: string;
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
  keyboardType?: 'default' | 'email-address' | 'phone-pad';
}) {
  return (
    <View style={{ marginBottom: 12 }}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  );
}

/* =======================
   STYLES
======================= */

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  loadingText: {
    marginTop: 12,
    color: '#666',
    fontSize: 16,
  },

  header: {
    alignItems: 'center',
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fafafa',
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#E3B21B',
  },

  name: { 
    fontSize: 22, 
    fontWeight: '700',
    color: '#333',
  },
  
  email: { 
    color: '#777', 
    marginTop: 4,
    fontSize: 14,
  },

  phone: {
    color: '#666',
    marginTop: 4,
    fontSize: 14,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  statBox: { alignItems: 'center' },
  statValue: { 
    fontSize: 20, 
    fontWeight: '700',
    color: '#E3B21B',
  },
  statLabel: { 
    fontSize: 13, 
    color: '#777', 
    marginTop: 4 
  },

  editBox: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fafafa',
  },

  inputLabel: { 
    fontSize: 14, 
    color: '#666', 
    marginBottom: 6,
    fontWeight: '500',
  },
  
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
    fontSize: 16,
  },

  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
  },

  saveBtn: {
    flex: 1,
    backgroundColor: '#E3B21B',
    padding: 14,
    borderRadius: 8,
  },

  cancelBtn: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },

  saveText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },

  cancelText: {
    color: '#666',
  },

  menu: { 
    paddingHorizontal: 20,
    marginTop: 10,
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },

  menuText: { 
    flex: 1, 
    marginLeft: 12, 
    fontSize: 16,
    color: '#333',
  },

  footer: {
    alignItems: 'center',
    paddingVertical: 30,
  },

  footerText: {
    color: '#999',
    fontSize: 12,
  },
});