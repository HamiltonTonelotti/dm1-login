// npx expo start (inicia o projeto para o seu celular)

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';


import logo from './assets/favicon.png'; 

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image 
        source={logo}  
        style={styles.logo}
      />
      <Text style={styles.loginText}>Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        autoCapitalize="none"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua Senha"
        secureTextEntry={true}
      />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
      
      <Text style={styles.signupText}>
        Não possui conta? <Text style={styles.signupLink}>faça inscrição!</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 130,
    height: 130,
    marginBottom: 30,
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 15,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#4681f4', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    fontSize: 14,
    color: '#777',
  },
  signupLink: {
    color: '#4681f4', 
    fontWeight: 'bold',
  },
});