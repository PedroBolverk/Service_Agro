// mobile-front/screens/CadastroScreen.tsx
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { ButtonRegister } from "../components/Button";  // Importando o botão de cadastro
import axios from "axios";  // Usando axios para comunicação com a API

const CadastroScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");  // Novo campo para nome completo
  const [role, setRole] = useState("PRODUCER"); // Defina um valor inicial válido para Role
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:4000/auth/register", {
        email,
        password,
        fullName,
        role,  // A role agora será um valor do enum "PRODUCER" ou "MECHANIC"
      });

      if (response.data.success) {
        setError("");  // Limpa o erro após sucesso no cadastro
        console.log("Cadastro realizado com sucesso!");
        // Você pode redirecionar o usuário para o login, ou uma outra tela
      } else {
        setError(response.data.message);  // Exibe a mensagem de erro caso haja
      }
    } catch (err) {
      setError("Erro ao tentar realizar o cadastro!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Papel (ex: PRODUCER, MECHANIC)"
        value={role}  // O valor de role deve ser um valor válido de Role
        onChangeText={setRole}
      />

      <ButtonRegister onPress={handleRegister} />  {/* Chama a função de registro */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
});

export default CadastroScreen;
