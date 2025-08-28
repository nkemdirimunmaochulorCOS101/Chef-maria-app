import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
  FlatList,
  Alert,
} from 'react-native';

type Order = {
  id: string;
  orderDate: string;
  menuItem: string;
  specialInstructions: string;
  paymentMethod: string;
  nextReservationDate: string;
};

const OrderHistoryScreen = () => {
  /* form state */
  const [orderDate, setOrderDate] = useState('');
  const [menuItem, setMenuItem] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [nextReservationDate, setNextReservationDate] = useState('');
  /* simple local “history” list */
  const [orders, setOrders] = useState<Order[]>([]);

  const saveOrder = () => {
    if (!orderDate || !menuItem || !paymentMethod) {
      Alert.alert('Missing required fields', 'Order date, menu item, and payment method are mandatory.');
      return;
    }
    const newOrder: Order = {
      id: Date.now().toString(),
      orderDate,
      menuItem,
      specialInstructions,
      paymentMethod,
      nextReservationDate,
    };
    setOrders([newOrder, ...orders]);

    /* reset form */
    setOrderDate('');
    setMenuItem('');
    setSpecialInstructions('');
    setPaymentMethod('');
    setNextReservationDate('');
  };

  const renderOrder = ({ item }: { item: Order }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.menuItem}</Text>
      <Text style={styles.cardLine}>🗓️ Ordered on: {item.orderDate}</Text>
      {item.specialInstructions ? (
        <Text style={styles.cardLine}>✏️ Special instructions: {item.specialInstructions}</Text>
      ) : null}
      <Text style={styles.cardLine}>💳 Payment: {item.paymentMethod}</Text>
      {item.nextReservationDate ? (
        <Text style={styles.cardLine}>📅 Next reservation: {item.nextReservationDate}</Text>
      ) : null}
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Add New Order</Text>

      <Text style={styles.label}>Order Date (DD/MM/YYYY)</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 11/06/2025"
        value={orderDate}
        onChangeText={setOrderDate}
      />

      <Text style={styles.label}>Menu Item Ordered</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Jollof Rice"
        value={menuItem}
        onChangeText={setMenuItem}
      />

      <Text style={styles.label}>Special Instructions</Text>
      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="e.g. No pepper"
        value={specialInstructions}
        onChangeText={setSpecialInstructions}
        multiline
      />

      <Text style={styles.label}>Payment Method</Text>
      <TextInput
        style={styles.input}
        placeholder="Cash, Card, Mobile Payment…"
        value={paymentMethod}
        onChangeText={setPaymentMethod}
      />

      <Text style={styles.label}>Next Reservation Date (DD/MM/YYYY)</Text>
      <TextInput
        style={styles.input}
        placeholder="Optional"
        value={nextReservationDate}
        onChangeText={setNextReservationDate}
      />

      <Pressable style={styles.button} onPress={saveOrder}>
        <Text style={styles.buttonText}>Save Order</Text>
      </Pressable>

      {/* ------- saved orders list ------- */}
      <Text style={[styles.heading, { marginTop: 30 }]}>Order History</Text>

      {orders.length === 0 ? (
        <Text style={styles.emptyText}>No orders recorded yet.</Text>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={renderOrder}
          scrollEnabled={false}
        />
      )}
    </ScrollView>
  );
};

export default OrderHistoryScreen;

/* ---------- STYLES ---------- */
const RED = '#d00000';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: RED,
    marginBottom: 15,
    textAlign: 'center',
  },
  label: {
    fontWeight: '600',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: RED,
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
  },
  multiline: {
    minHeight: 60,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: RED,
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#555',
  },
  card: {
    borderWidth: 1,
    borderColor: RED,
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 4,
    color: RED,
  },
  cardLine: {
    fontSize: 14,
    marginVertical: 2,
  },
});

