// mobile-front/components/ModalCadastro.tsx
import React, { useState } from "react";
import { Modal, View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import axios from "axios";  // Usando axios para comunicação com a API

// Importando o Picker para selecionar o tipo de usuário
import { Picker } from '@react-native-picker/picker';

interface ModalCadastroProps {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
}

const ModalRegister: React.FC<ModalCadastroProps> = ({ modalVisible, setModalVisible }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");  // Novo campo para nome completo
    const [role, setRole] = useState("PRODUCER"); // Defina um valor inicial válido para Role
    const [error, setError] = useState("");
    const [phone, setPhone] = useState("");
    const [cpfCnpj, setCpfCnpj] = useState("");

    // Função de registro do usuário
    const handleRegister = async () => {
        try {
            const response = await axios.post("http://localhost:4000/auth/register", {
                email,
                password,
                fullName,
                role, // O valor de role será enviado para o backend
                phone,
                cpfCnpj,

            });

            if (response.data.success) {
                setError("");  // Limpa o erro após sucesso no cadastro
                alert('Cadastro Realizado com Sucesso!');
                console.log("Cadastro realizado com sucesso!");
                setModalVisible(false);  // Fecha o modal após o cadastro
            } else {
                setError(response.data.message);  // Exibe a mensagem de erro caso haja
            }
        } catch (err) {
            setError("Erro ao tentar realizar o cadastro!");
        }
    };

    return (
        <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>Cadastro</Text>

                    {error ? <Text style={styles.error}>{error}</Text> : null}

                    <Text style={styles.inputLabel}>Tipo de Usuário</Text>
                    <Picker
                        selectedValue={role}
                        onValueChange={(itemValue) => setRole(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Produtor" value="PRODUCER" />
                        <Picker.Item label="Mecânico" value="MECHANIC" />
                    </Picker>

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
                        placeholder="(99) 99999-9999"
                        value={phone}
                        keyboardType="phone-pad"
                        onChangeText={(text) => {
                            let input = text.replace(/\D/g, '');
                            if (input.length > 11) input = input.slice(0, 11);
                            const formatted = input
                                .replace(/^(\d{2})(\d)/, '($1) $2')
                                .replace(/(\d{5})(\d)/, '$1-$2');

                            setPhone(formatted);
                        }}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="CPF ou CNPJ"
                        value={cpfCnpj}
                        keyboardType="numeric"
                        onChangeText={(text) => {
                            let input = text.replace(/\D/g, ""); // só números

                            if (input.length <= 11) {
                                // Formatar como CPF
                                input = input
                                    .replace(/^(\d{3})(\d)/, "$1.$2")
                                    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
                                    .replace(/\.(\d{3})(\d)/, ".$1-$2");
                            } else {
                                // Formatar como CNPJ
                                input = input
                                    .replace(/^(\d{2})(\d)/, "$1.$2")
                                    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
                                    .replace(/\.(\d{3})(\d)/, ".$1/$2")
                                    .replace(/(\d{4})(\d)/, "$1-$2");
                            }

                            setCpfCnpj(input);
                        }}
                    />

                    <TouchableOpacity style={styles.button} onPress={handleRegister}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                        <Text style={styles.closeButtonText}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",  // Fundo transparente com opacidade
    },
    modalContent: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        width: "80%",
        maxWidth: 400,
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
    inputLabel: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
    },
    picker: {
        height: 50,
        width: '100%',
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#4CAF50",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    error: {
        color: "red",
        textAlign: "center",
        marginBottom: 10,
    },
    closeButton: {
        marginTop: 10,
        padding: 10,
        alignItems: "center",
    },
    closeButtonText: {
        color: "#888",
        fontWeight: "bold",
    },
});

export default ModalRegister;
