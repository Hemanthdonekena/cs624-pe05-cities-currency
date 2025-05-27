import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Countries({ countries }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of Countries</Text>
      {countries.map((item, index) => (
        <Text key={index}>
          {item.country} - {item.currency}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, marginBottom: 10 }
});
