import React from 'react';
import { KeyboardAvoidingView, Platform, Text, TextInput, Image, TouchableOpacity } from 'react-native';

import logo from '../../assets/logo.png';

import styles from './styles';

const Login = () => {
  return (
    <KeyboardAvoidingView
      behavior='padding'
      enabled={Platform.OS === 'ios'}
      style={styles.container}
    >
      <Image source={logo} />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.textInput}
        placeholderTextColor='#999'
        placeholder='Digite seu usuário no Github'
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Entrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Login;
