import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button as RNEButton } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TelaLogin = ({ navigation }) => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const login = async () => {
    const usuarioGuardado = await AsyncStorage.getItem('usuario');
    if (usuario === usuarioGuardado && senha === 'senha') {
      await AsyncStorage.setItem('userToken', 'abc');
      navigation.replace('AbasPrincipais');
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        placeholderTextColor="#aaa"
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <RNEButton
        title="Login"
        buttonStyle={styles.button}
        onPress={login}
      />
      <RNEButton
        title="Cadastrar"
        type="outline"
        buttonStyle={styles.buttonOutline}
        titleStyle={{ color: '#fff' }}
        onPress={() => navigation.navigate('Cadastro')}
      />
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
  title: {
    fontSize: 24,
    marginBottom: 20,
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
    width: '100%',
    marginVertical: 10,
  },
  buttonOutline: {
    borderColor: '#00cc44',
    width: '100%',
    marginVertical: 10,
  },
});

export default TelaLogin;
