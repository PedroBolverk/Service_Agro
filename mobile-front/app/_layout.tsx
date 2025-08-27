// mobile-front/app/_layout.tsx
import React from 'react';
import { Stack as ExpoStack } from 'expo-router';  // Renomeando a importação do Stack

export default function Layout() {
  return (
    <ExpoStack>
      {/* Carregar a navegação por tabs (já configurada no index.tsx dentro de (tabs)) */}
      <ExpoStack.Screen name="(tabs)" options={{ headerShown: false }} />
    </ExpoStack>
  );
}
