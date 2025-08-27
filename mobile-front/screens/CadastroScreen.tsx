// screens/CadastroScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const CadastroScreen = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');

  const handleCadastro = () => {
    // Realize o cadastro com as informações coletadas e envie para a API do back-end
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cadastro</Text>
      <TextInput
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
        style={{ width: '80%', height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 10 }}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ width: '80%', height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 10 }}
      />
      <TextInput
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        style={{ width: '80%', height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 10 }}
      />
      <TextInput
        placeholder="CPF ou CNPJ"
        value={cpfCnpj}
        onChangeText={setCpfCnpj}
        style={{ width: '80%', height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 10 }}
      />
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

export default CadastroScreen;
