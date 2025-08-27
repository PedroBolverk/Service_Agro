import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

// Importando as telas
import LoginScreen from './screens/LoginScreen';
import CadastroScreen from "./screens/CadastroScreen";
import DashboardScreen from "./screens/DashboardScreen";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Login">
                <Tab.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="log-in" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Cadastro"
                    component={CadastroScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="person-add" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Dashboard"
                    component={DashboardScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" size={size} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
