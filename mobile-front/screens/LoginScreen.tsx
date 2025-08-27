// mobile-front/screens/LoginScreen.tsx
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { ButtonLogin } from "../components/Button";  // Importando o botão de login
import { ButtonRegister } from "../components/Button";  // Importando o botão de cadastro
import ModalRegister from "../components/ModalRegister";  // Importando o modal de cadastro
import axios from "axios";  // Usando axios para comunicação com a API

const LoginScreen = ({ setIsAuthenticated }: { setIsAuthenticated: (auth: boolean) => void }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [modalVisible, setModalVisible] = useState(false);  // Controlando a visibilidade do modal

    // Função de login
    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:4000/auth/login", {
                email,
                password,
            });

            if (response.data.success) {
                setIsAuthenticated(true);  // Usuário autenticado com sucesso
            } else {
                setError("Email ou senha incorretos!");
            }
        } catch (err) {
            setError("Erro ao tentar realizar login!");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
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

            <ButtonLogin onPress={handleLogin} />  {/* Chama a função de login */}
            
            {/* Botão para abrir o Modal de Cadastro */}
            <ButtonRegister onPress={() => setModalVisible(true)} />

            {/* Modal de Cadastro */}
            <ModalRegister modalVisible={modalVisible} setModalVisible={setModalVisible} />
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

export default LoginScreen;
