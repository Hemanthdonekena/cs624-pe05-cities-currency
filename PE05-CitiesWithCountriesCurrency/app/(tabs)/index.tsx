import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import AddCountry from '../screens/AddCountry';
import Countries from '../screens/Countries';

export default function HomeScreen() {
  const [countries, setCountries] = useState<{ country: string; currency: string }[]>([]);

  return (
    <ScrollView>
      <View>
        <AddCountry countries={countries} setCountries={setCountries} />
        <Countries countries={countries} />
      </View>
    </ScrollView>
  );
}
