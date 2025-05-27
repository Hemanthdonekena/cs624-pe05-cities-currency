import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddCountry from './screens/AddCountry';
import Countries from './screens/Countries';

const Tab = createBottomTabNavigator();

export default function App() {
  const [countries, setCountries] = useState([]);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="AddCountry">
          {() => <AddCountry countries={countries} setCountries={setCountries} />}
        </Tab.Screen>
        <Tab.Screen name="Countries">
          {() => <Countries countries={countries} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
