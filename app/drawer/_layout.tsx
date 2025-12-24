import { Colors } from '@/constants/theme';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: { backgroundColor: Colors.light.background },
        headerTintColor: '#000',
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{ title: 'BeeBro Honey' }}
      />
      <Drawer.Screen name="about" options={{ title: 'About Us' }} />
      <Drawer.Screen name="contact" options={{ title: 'Contact' }} />
      <Drawer.Screen name="orders" options={{ title: 'My Orders' }} />
    </Drawer>
  );
}
