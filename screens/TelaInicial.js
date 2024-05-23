import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TelaInicial = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Bem Vindo ao <Text style={styles.isaac}>Isaac</Text><Text style={styles.bet}>Bet</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1c', // Fundo cinza escuro, mesmo tema do resto do app
  },
  welcome: {
    fontSize: 24,
    color: '#FFFFFF', // Cor branca para o texto "Bem Vindo ao"
  },
  isaac: {
    color: '#00FF00', // Cor verde para "Isaac"
  },
  bet: {
    color: '#FFFFFF', // Cor branca para "Bet"
  },
});

export default TelaInicial;
