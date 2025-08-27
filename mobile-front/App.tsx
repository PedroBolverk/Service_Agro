// mobile-front/App.tsx
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';

const Stack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isAuthenticated ? (
          <>
            <Stack.Screen name="Login" options={{ headerShown: false }}>
              {(props) => <LoginScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
            <Stack.Screen name="Cadastro" component={CadastroScreen} />
          </>
        ) : (
          // Expo Router irá gerenciar a navegação por abas automaticamente
          null
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
