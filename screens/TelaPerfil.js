import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

const TelaPerfil = () => {
  const [nome, setNome] = useState('');
  const [imagemPerfil, setImagemPerfil] = useState(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const guardadoNome = await AsyncStorage.getItem('NomeUser');
      const guardadoImagem = await AsyncStorage.getItem('imagemPerfil');
      if (guardadoNome) {
        setNome(guardadoNome);
      }
      if (guardadoImagem) {
        setImagemPerfil(guardadoImagem);
      }
    };

    getData();
  }, []);

  const salvaNome = async () => {
    await AsyncStorage.setItem('NomeUser', nome);
  };

  const escolhaImagem = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImagemPerfil(result.uri);
      await AsyncStorage.setItem('imagemPerfil', result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={escolhaImagem}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <Image
          source={imagemPerfil ? { uri: imagemPerfil } : ('../assets/issac.jpeg')}
          style={styles.imagemPerfil}
        />
        {hovering && <Text style={styles.hoverText}>Trocar foto de perfil</Text>}
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        placeholderTextColor="#aaa"
        value={nome}
        onChangeText={setNome}
      />
      <Button title="Salvar" onPress={salvaNome} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1c', // Fundo cinza escuro
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
    borderRadius: 5,
    color: '#fff',
    backgroundColor: '#333',
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  imagemPerfil: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  hoverText: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    padding: 5,
    borderRadius: 50,
  },
});

export default TelaPerfil;
