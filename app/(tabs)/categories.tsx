import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function CategoriesScreen() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [weight, setWeight] = useState('all');

  const clearFilters = () => {
    setSearch('');
    setCategory('all');
    setWeight('all');
  };

  return (
    <ScrollView style={styles.container}>
      {/* SEARCH */}
      <Text style={styles.sectionTitle}>
        <Ionicons name="search" /> Search Products
      </Text>

      <TextInput
        placeholder="Search honey, jaggery..."
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />

      <TouchableOpacity style={styles.searchBtn}>
        <Text style={styles.searchText}>Search</Text>
      </TouchableOpacity>

      {/* CATEGORIES */}
      <Text style={styles.sectionTitle}>
        <Ionicons name="cube-outline" /> Categories
      </Text>

      <View style={styles.pickerBox}>
        <Picker
          selectedValue={category}
          onValueChange={setCategory}
        >
          <Picker.Item label="All Categories" value="all" />
          <Picker.Item label="Honey" value="honey" />
          <Picker.Item label="Dark and earthy honeys" value="dark_honey" />
          <Picker.Item label="Light and floral honeys" value="light_honey" />
          <Picker.Item label="Jaggery" value="jaggery" />
          <Picker.Item label="Gur" value="gur" />
          <Picker.Item label="Ghee" value="ghee" />
          <Picker.Item label="Milk" value="milk" />
        </Picker>
      </View>

      {/* WEIGHT */}
      <Text style={styles.sectionTitle}>
        <Ionicons name="scale-outline" /> Weight
      </Text>

      <View style={styles.pickerBox}>
        <Picker
          selectedValue={weight}
          onValueChange={setWeight}
        >
          <Picker.Item label="All Weights" value="all" />
          <Picker.Item label="Under 500g" value="under_500" />
          <Picker.Item label="500g - 1kg" value="500_1kg" />
          <Picker.Item label="1kg - 2kg" value="1_2kg" />
          <Picker.Item label="Over 2kg" value="over_2kg" />
        </Picker>
      </View>

      {/* CLEAR FILTER */}
      <TouchableOpacity style={styles.clearBtn} onPress={clearFilters}>
        <Text style={styles.clearText}>Clear All Filters</Text>
      </TouchableOpacity>

      {/* WHY CHOOSE US */}
      <Text style={styles.sectionTitle}>
        <Ionicons name="star-outline" /> Why Choose Us
      </Text>

      <View style={styles.benefit}>
        <Ionicons name="checkmark-circle" color="green" size={18} />
        <Text style={styles.benefitText}>100% Pure & Natural</Text>
      </View>

      <View style={styles.benefit}>
        <Ionicons name="shield-checkmark" color="green" size={18} />
        <Text style={styles.benefitText}>Quality Assured</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF6DB',
    padding: 16,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#d35400',
    marginBottom: 8,
    marginTop: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: '#f39c12',
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#fff',
  },

  searchBtn: {
    backgroundColor: '#ffa500',
    padding: 12,
    borderRadius: 6,
    marginTop: 10,
  },

  searchText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },

  pickerBox: {
    borderWidth: 1,
    borderColor: '#f39c12',
    borderRadius: 6,
    backgroundColor: '#fff',
  },

  clearBtn: {
    borderWidth: 1,
    borderColor: '#f39c12',
    padding: 12,
    borderRadius: 6,
    marginTop: 20,
  },

  clearText: {
    textAlign: 'center',
    color: '#d35400',
    fontWeight: '600',
  },

  benefit: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  benefitText: {
    marginLeft: 8,
    fontSize: 14,
  },
});
