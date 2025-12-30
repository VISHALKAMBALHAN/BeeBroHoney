import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const ORDERS = [
  {
    id: 'ORD-1001',
    date: '12 Jan 2025',
    amount: '₹899',
    status: 'Delivered',
  },
  {
    id: 'ORD-1002',
    date: '05 Jan 2025',
    amount: '₹1,299',
    status: 'Shipped',
  },
  {
    id: 'ORD-1003',
    date: '28 Dec 2024',
    amount: '₹499',
    status: 'Cancelled',
  },
];

export default function OrdersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Orders</Text>

      <FlatList
        data={ORDERS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.orderItem}>
            <View style={styles.row}>
              <Text style={styles.orderId}>{item.id}</Text>
              <Text
                style={[
                  styles.status,
                  item.status === 'Delivered' && styles.delivered,
                  item.status === 'Cancelled' && styles.cancelled,
                ]}
              >
                {item.status}
              </Text>
            </View>

            <Text style={styles.text}>Order Date: {item.date}</Text>
            <Text style={styles.text}>Total Amount: {item.amount}</Text>

            <View style={styles.viewRow}>
              <Text style={styles.viewText}>View Details</Text>
              <Ionicons name="chevron-forward" size={16} color="#999" />
            </View>
          </TouchableOpacity>
        )}
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
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
    marginVertical: 20,
  },

  orderItem: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },

  orderId: {
    fontSize: 16,
    fontWeight: '600',
  },

  status: {
    fontSize: 13,
    fontWeight: '600',
    color: '#555',
  },

  delivered: {
    color: '#2a9d8f',
  },

  cancelled: {
    color: '#e63946',
  },

  text: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },

  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  viewText: {
    fontSize: 14,
    color: '#f4a261',
    marginRight: 4,
    fontWeight: '500',
  },
});
