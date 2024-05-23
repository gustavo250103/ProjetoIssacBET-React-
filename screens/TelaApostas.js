import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card, Button as RNEButton } from 'react-native-elements';

const TelaApostas = ({ route }) => {
  const [numero, setNumero] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [numeroAleatorio, setNumeroAleatorio] = useState(Math.floor(Math.random() * 100) + 1);
  const [saldo, setSaldo] = useState(100);

  useEffect(() => {
    const obterSaldo = async () => {
      const saldoGuardado = await AsyncStorage.getItem('saldo');
      const saldoAtual = saldoGuardado ? parseInt(saldoGuardado) : 0;
      setSaldo(saldoAtual);
    };

    if (route.params?.novoSaldo) {
      setSaldo(route.params.novoSaldo);
    } else {
      obterSaldo();
    }
  }, [route.params?.novoSaldo]);

  const verificarNumero = async () => {
    if (saldo >= 10) {
      const numeroApostado = parseInt(numero);
      const novoSaldo = saldo - 10;
      setSaldo(novoSaldo);
      await AsyncStorage.setItem('saldo', novoSaldo.toString());

      if (numeroApostado === numeroAleatorio) {
        setMensagem('Você acertou!');
        const novoSaldo = saldo + 20;
        setSaldo(novoSaldo);
      } else if (numeroApostado > numeroAleatorio) {
        setMensagem('Tente um número menor');
      } else {
        setMensagem('Tente um número maior');
      }
    } else {
      setMensagem('Saldo insuficiente!');
    }
  };

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.title}>Aposte no Número</Card.Title>
        <Text style={styles.balance}>Saldo: R${saldo}</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite um número entre 1 e 100"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={numero}
          onChangeText={setNumero}
        />
        <RNEButton
          title="Verificar"
          buttonStyle={styles.button}
          onPress={verificarNumero}
        />
        {mensagem ? <Text style={styles.message}>{mensagem}</Text> : null}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
    padding: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#2c2c2c',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  balance: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#444',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 5,
    color: '#fff',
  },
  button: {
    backgroundColor: '#00cc44',
    marginTop: 10,
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default TelaApostas;
