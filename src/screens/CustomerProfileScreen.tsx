import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';

const CustomerProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Customer Profile</Text>

      <Text style={styles.label}>First Name</Text>
      <TextInput style={styles.input} placeholder="Enter first name" />

      <Text style={styles.label}>Surname</Text>
      <TextInput style={styles.input} placeholder="Enter surname" />

      <Text style={styles.label}>Middle Name</Text>
      <TextInput style={styles.input} placeholder="Enter middle name" />

      <Text style={styles.label}>Date of Birth</Text>
      <TextInput style={styles.input} placeholder="DD/MM/YYYY" />

      <Text style={styles.label}>Home Address</Text>
      <TextInput style={styles.input} placeholder="Enter address" multiline />

      <Text style={styles.label}>Date of Registration</Text>
      <TextInput style={styles.input} placeholder="DD/MM/YYYY" />

      <Text style={styles.label}>Developer Matric Number (_23120111034)</Text>
      <TextInput style={styles.input} editable={false} value="_23120111034" />
    </ScrollView>
  );
};

export default CustomerProfileScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'red',
  },
  label: {
    marginTop: 10,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
  },
});
