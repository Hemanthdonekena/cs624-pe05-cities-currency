import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Countries({ countries }) {
  return (
    <View style={styles.container}>
      {countries.map((item, index) => (
        <Text key={index}>{item.country} - {item.currency}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
