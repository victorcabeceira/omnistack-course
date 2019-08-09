import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';

import api from '../../core/services/api';

import logo from '../../assets/logo.png';

import styles from './styles';

const Login = ({ navigation }) => {
  const [user, setUser] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        navigation.navigate('Main', { user });
      }
    });
  }, []);

  const handleLogin = async () => {
    const response = await api.post('/devs', { username: user });

    const { _id } = response.data;

    await AsyncStorage.setItem('user', _id);

    navigation.navigate('Main', { user: _id });
  };

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
        value={user}
        onChangeText={setUser}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.text}>Entrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Login;
