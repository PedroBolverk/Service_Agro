// screens/DashboardScreen.tsx
import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  const mecanicos = [
    { id: 1, nome: 'Mecânico 1', status: 'Disponível' },
    { id: 2, nome: 'Mecânico 2', status: 'Indisponível' },
    { id: 3, nome: 'Mecânico 3', status: 'Disponível' },
  ];

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Bem-vindo ao Dashboard</Text>
      <FlatList
        data={mecanicos}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20 }}>
            <Text>{item.nome}</Text>
            <Text>Status: {item.status}</Text>
            <Button
              title="Selecionar Mecânico"
              onPress={() => navigation.navigate('PerfilMecanico', { id: item.id })}
            />
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default DashboardScreen;
