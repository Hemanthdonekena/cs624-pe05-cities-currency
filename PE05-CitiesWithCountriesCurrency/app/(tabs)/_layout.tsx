import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="AddCountry" options={{ title: 'Add Country' }} />
      <Tabs.Screen name="Countries" options={{ title: 'Countries' }} />
    </Tabs>
  );
}
