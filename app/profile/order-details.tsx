import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export default function OrderDetailsScreen() {
  const { id, date, amount, status } = useLocalSearchParams<{
    id: string;
    date: string;
    amount: string;
    status: string;
  }>();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Order Details</Text>

      {/* Order Info */}
      <View style={styles.card}>
        <Text style={styles.label}>Order ID</Text>
        <Text style={styles.value}>{id}</Text>

        <Text style={styles.label}>Order Date</Text>
        <Text style={styles.value}>{date}</Text>

        <Text style={styles.label}>Status</Text>
        <Text
          style={[
            styles.value,
            status === 'Delivered' && styles.delivered,
            status === 'Cancelled' && styles.cancelled,
          ]}
        >
          {status}
        </Text>
      </View>

    {/* Items */}
<View style={styles.card}>
  <Text style={styles.sectionTitle}>Items</Text>

  <TouchableOpacity
    style={styles.row}
    onPress={() =>
      router.push({
        pathname: '/profile/product-detail',
        params: {
          id: 'P-101',
          name: 'Raw Honey 500g',
          price: '₹499',
        },
      })
    }
  >
    <Text style={styles.item}>Raw Honey 500g</Text>
    <Text style={styles.price}>₹499</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.row}
    onPress={() =>
      router.push({
        pathname: '/profile/product-detail',
        params: {
          id: 'P-102',
          name: 'Organic Jaggery',
          price: '₹400',
        },
      })
    }
  >
    <Text style={styles.item}>Organic Jaggery</Text>
    <Text style={styles.price}>₹400</Text>
  </TouchableOpacity>
</View>

    
    

    
    
    
    

    
    
    
    
    

    
    
    
    
    </ScrollView>
  );
}

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  label: {
    fontSize: 13,
    color: '#666',
    marginTop: 6,
  },
  value: {
    fontSize: 15,
    fontWeight: '500',
  },
  delivered: {
    color: '#2a9d8f',
  },
  cancelled: {
    color: '#e63946',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  item: {
    fontSize: 14,
  },
  price: {
    fontSize: 14,
    fontWeight: '500',
  },
  total: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'right',
  },
});
