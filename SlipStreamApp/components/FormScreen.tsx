import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Alert, ActivityIndicator } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function FormScreen() {
  const [form, setForm] = useState({
    customerName: '',
    location: '',
    accountNumber: '',
    timeIn: new Date(),
    timeOut: new Date(),
    cashSlips: '',
    chequeSlips: '',
    cashAmount: '',
    chequeAmount: '',
    totalAmount: '',
    depositorName: '',
    depositorSignature: '',
    contactNumber: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showTimeInPicker, setShowTimeInPicker] = useState(false);
  const [showTimeOutPicker, setShowTimeOutPicker] = useState(false);

  const handleInputChange = (name: string, value: string | Date) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://slip-stream-api-5188d417eed2.herokuapp.com/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      Alert.alert('Success', 'Form submitted successfully!');
      setForm({
        customerName: '',
        location: '',
        accountNumber: '',
        timeIn: new Date(),
        timeOut: new Date(),
        cashSlips: '',
        chequeSlips: '',
        cashAmount: '',
        chequeAmount: '',
        totalAmount: '',
        depositorName: '',
        depositorSignature: '',
        contactNumber: '',
      });
    } catch (error: any) {
      setError(error.message || 'Something went wrong!');
      Alert.alert('Error', error.message || 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        label="Customer Name"
        value={form.customerName}
        onChangeText={(text) => handleInputChange('customerName', text)}
        style={styles.input}
      />
      <TextInput
        label="Location"
        value={form.location}
        onChangeText={(text) => handleInputChange('location', text)}
        style={styles.input}
      />
      <TextInput
        label="Account Number"
        value={form.accountNumber}
        onChangeText={(text) => handleInputChange('accountNumber', text)}
        style={styles.input}
      />
      
      <Button onPress={() => setShowTimeInPicker(true)}>Select Time In</Button>
      {showTimeInPicker && (
        <DateTimePicker
          value={form.timeIn}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={(event, selectedDate) => {
            setShowTimeInPicker(false);
            handleInputChange('timeIn', selectedDate || form.timeIn);
          }}
        />
      )}

      <Button onPress={() => setShowTimeOutPicker(true)}>Select Time Out</Button>
      {showTimeOutPicker && (
        <DateTimePicker
          value={form.timeOut}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={(event, selectedDate) => {
            setShowTimeOutPicker(false);
            handleInputChange('timeOut', selectedDate || form.timeOut);
          }}
        />
      )}

      <TextInput
         label="Cash Slips"
         value={form.cashSlips}
         onChangeText={(text) => handleInputChange('cashSlips', text)}
         keyboardType="numeric"
         style={styles.input}
      />
      <TextInput
        label="Cheque Slips"
        value={form.chequeSlips}
        keyboardType="numeric"
        onChangeText={(text) => handleInputChange('chequeSlips', text)}
        style={styles.input}
      />
      <TextInput
        label="Cash Amount"
        value={form.cashAmount}
        keyboardType="numeric"
        onChangeText={(text) => handleInputChange('cashAmount', text)}
        style={styles.input}
      />
      <TextInput
        label="Cheque Amount"
        value={form.chequeAmount}
        onChangeText={(text) => handleInputChange('chequeAmount', text)}
        style={styles.input}
      />
      <TextInput
        label="Total Amount"
        value={form.totalAmount}
        onChangeText={(text) => handleInputChange('totalAmount', text)}
        style={styles.input}
      />
      <TextInput
        label="Depositor's Name"
        value={form.depositorName}
        onChangeText={(text) => handleInputChange('depositorName', text)}
        style={styles.input}
      />
      <TextInput
        label="Depositor's Signature"
        value={form.depositorSignature}
        onChangeText={(text) => handleInputChange('depositorSignature', text)}
        style={styles.input}
      />
      <TextInput
        label="Contact Number"
        value={form.contactNumber}
        onChangeText={(text) => handleInputChange('contactNumber', text)}
        style={styles.input}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button mode="contained" onPress={handleSubmit} style={styles.submitButton}>
          Submit
        </Button>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 20,
    backgroundColor: 'white',
  },
  submitButton: {
    marginTop: 20,
    marginBottom: 50,
  },
  error: {
    color: 'red',
    marginBottom: 20,
  },
});
