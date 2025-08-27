// screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootTabParamList } from '@/types';


type LoginScreenNavigationProp = NavigationProp<RootTabParamList, 'Login'>;

interface Props {
  navigation: LoginScreenNavigationProp;
}


const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Chame a API de login aqui
    navigation.navigate('Dashboard');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ width: '80%', height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 10 }}
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={{ width: '80%', height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 10 }}
      />
      <Button title="Entrar" onPress={handleLogin} />
      <Text onPress={() => navigation.navigate('Cadastro')}>Ainda não tem uma conta? Cadastre-se</Text>
    </View>
  );
};

export default LoginScreen;