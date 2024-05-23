import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button as RNEButton } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';

const TelaCadastro = ({ navigation }) => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [sound, setSound] = useState(null);

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/quico.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  };

  const cadastrar = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    await AsyncStorage.setItem('usuario', usuario);
    await playSound(); // Toca o som quando o usuário se cadastra
    navigation.replace('AbasPrincipais');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
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
        title="Cadastrar"
        buttonStyle={styles.button}
        onPress={cadastrar}
      />
      <RNEButton
        title="Voltar para o Login"
        type="outline"
        buttonStyle={styles.buttonOutline}
        titleStyle={{ color: '#fff' }}
        onPress={() => navigation.navigate('Login')}
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

export default TelaCadastro;
