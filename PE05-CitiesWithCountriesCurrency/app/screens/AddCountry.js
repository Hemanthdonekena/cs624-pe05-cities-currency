import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function AddCountry({ countries, setCountries }) {
  const [country, setCountry] = useState('');
  const [currency, setCurrency] = useState('');

  const addHandler = () => {
    if (country && currency) {
      setCountries([...countries, { country, currency }]);
      setCountry('');
      setCurrency('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Country" value={country} onChangeText={setCountry} />
      <TextInput style={styles.input} placeholder="Currency" value={currency} onChangeText={setCurrency} />
      <Button title="Add" onPress={addHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});
