import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button as RNEButton } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TelaAdicionarDinheiro = ({ navigation }) => {
  const [quantidade, setQuantidade] = useState('');

  const adicionarDinheiro = async () => {
    if (!quantidade || isNaN(quantidade)) {
      alert('Por favor, insira um valor válido');
      return;
    }

    const saldoGuardado = await AsyncStorage.getItem('saldo');
    const saldoAtual = saldoGuardado ? parseInt(saldoGuardado) : 0;
    const novoSaldo = saldoAtual + parseInt(quantidade);

    await AsyncStorage.setItem('saldo', novoSaldo.toString());
    alert(`Adicionado R$${quantidade} à sua conta`);
    navigation.navigate('Apostas', { novoSaldo }); // Pass new balance to Bets screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Dinheiro</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a quantidade"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={quantidade}
        onChangeText={setQuantidade}
      />
      <RNEButton
        title="Adicionar Dinheiro"
        buttonStyle={styles.button}
        onPress={adicionarDinheiro}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1c1c1c',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 5,
    color: '#fff',
  },
  button: {
    backgroundColor: 'green',
    width: '100%',
    marginVertical: 10,
  },
});

export default TelaAdicionarDinheiro;
