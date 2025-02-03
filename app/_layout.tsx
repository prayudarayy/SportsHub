import React from 'react';
import { Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerBackground: () => (
          <LinearGradient
            colors={['#fffb00', '#000000']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
          />
        ),
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: 'bold',
        },
      }}
    >
      {/* Tambahkan halaman utama */}
      <Stack.Screen name="index" options={{ title: "Sports Hub" }} />

      {/* Tambahkan halaman khusus Football */}
      <Stack.Screen name="Football" options={{ title: "Football News" }} />
    </Stack>
  );
}
