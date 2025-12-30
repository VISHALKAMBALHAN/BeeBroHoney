import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Tabs, router } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}
    >
      {/* ================= HOME ================= */}
      <Tabs.Screen
        name="index"
        options={{
          title:'BeeBro Honey',
           headerTitleAlign: 'left',

          headerLeft: () => (
            <Pressable
              onPress={() => router.push('/menu')}
              style={{ paddingHorizontal: 15 }}
            >
              <Text style={{ fontSize: 22 }}>☰</Text>
            </Pressable>
          ),

          headerRight: () => (
            <View style={{ flexDirection: 'row', gap: 14, paddingRight: 15 }}>
              <Pressable onPress={() => router.push('/auth/login')}>
                <Text style={{ color: '#E3B21B', fontWeight: '700' }}>
                  Login
                </Text>
              </Pressable>

              <Pressable onPress={() => router.push('/auth/signup')}>
                <Text style={{ color: '#2E5E2E', fontWeight: '700' }}>
                  Sign Up
                </Text>
              </Pressable>
            </View>
          ),

          tabBarIcon: ({ focused }) => (
            <Image
              source={require('@/assets/icons/home.png')}
              style={{
                width: 22,
                height: 22,
                tintColor: focused ? '#E3B21B' : '#999',
              }}
            />
          ),
        }}
      />

      {/* ================= EXPLORE ================= */}
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('@/assets/icons/explore.png')}
              style={{
                width: 22,
                height: 22,
                tintColor: focused ? '#E3B21B' : '#999',
              }}
            />
          ),
        }}
      />

      {/* ================= CATEGORIES (NEW) ================= */}
      <Tabs.Screen
        name="categories"
        options={{
          title: 'Categories',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('@/assets/icons/category.png')}
              style={{
                width: 22,
                height: 22,
                tintColor: focused ? '#E3B21B' : '#999',
              }}
            />
          ),
        }}
      />

      {/* ================= CART ================= */}
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('@/assets/icons/cart.png')}
              style={{
                width: 22,
                height: 22,
                tintColor: focused ? '#E3B21B' : '#999',
              }}
            />
          ),
        }}
      />

      {/* ================= PROFILE ================= */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('@/assets/icons/profile.png')}
              style={{
                width: 22,
                height: 22,
                tintColor: focused ? '#E3B21B' : '#999',
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
