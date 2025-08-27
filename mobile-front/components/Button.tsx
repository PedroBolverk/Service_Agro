// mobile-front/components/Button.tsx
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type ButtonProps = {
  onPress: () => void;
  title: string;
};

const Button = ({ onPress, title }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const ButtonLogin = ({ onPress }: { onPress: () => void }) => {
  return <Button onPress={onPress} title="Login" />;
};

const ButtonRegister = ({ onPress }: { onPress: () => void }) => {
  return <Button onPress={onPress} title="Cadastrar" />;
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4CAF50",  // Cor do botão
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export { ButtonLogin, ButtonRegister };
