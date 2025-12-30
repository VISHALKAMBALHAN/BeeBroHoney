import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

/* =======================
   MAIN SCREEN
======================= */
export default function ProfileScreen() {
  const [showEdit, setShowEdit] = useState(false);

  const [name, setName] = useState('BeeBro Honey');
  const [email, setEmail] = useState('support@beebrohoney.com');
  const [phone, setPhone] = useState('9876543210');

  const saveProfile = () => {
    setShowEdit(false);
    Alert.alert('Success', 'Profile updated successfully');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/300' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
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
          <Input label="Full Name" value={name} onChange={setName} />
          <Input label="Email" value={email} onChange={setEmail} />
          <Input label="Mobile" value={phone} onChange={setPhone} />

          <TouchableOpacity style={styles.saveBtn} onPress={saveProfile}>
            <Text style={styles.saveText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* MENU */}
      <View style={styles.menu}>
        <MenuItem
          icon="person-outline"
          label="Edit Profile"
          onPress={() => setShowEdit(!showEdit)}
        />
        <MenuItem icon="location-outline" label="Shipping Address" />
        <MenuItem icon="receipt-outline" label="My Orders" />
        <MenuItem icon="heart-outline" label="Wishlist" />
        <MenuItem icon="shield-checkmark-outline" label="Privacy Policy" />
        <MenuItem icon="log-out-outline" label="Logout" danger />
      </View>
    </ScrollView>
  );
}

/* =======================
   COMPONENTS (FIXED)
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
}: {
  label: string;
  value: string;
  onChange: (text: string) => void;
}) {
  return (
    <View style={{ marginBottom: 12 }}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={styles.input}
      />
    </View>
  );
}

/* =======================
   STYLES
======================= */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  header: {
    alignItems: 'center',
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 10,
  },

  name: { fontSize: 20, fontWeight: '600' },
  email: { color: '#777', marginTop: 4 },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  statBox: { alignItems: 'center' },
  statValue: { fontSize: 18, fontWeight: '600' },
  statLabel: { fontSize: 13, color: '#777', marginTop: 4 },

  editBox: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fafafa',
  },

  inputLabel: { fontSize: 13, color: '#666', marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
  },

  saveBtn: {
    backgroundColor: '#f4a261',
    padding: 14,
    borderRadius: 8,
    marginTop: 12,
  },

  saveText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },

  menu: { paddingHorizontal: 20 },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },

  menuText: { flex: 1, marginLeft: 12, fontSize: 16 },
});
