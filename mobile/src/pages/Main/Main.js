import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../core/services';

import logo from '../../assets/logo.png';
import dislike from '../../assets/dislike.png';
import like from '../../assets/like.png';
import matchImg from '../../assets/itsamatch.png';

import styles from './styles';

const Main = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [matchDev, setMatchDev] = useState(false);
  const id = navigation.getParam('user', '');
  const headers = { user: id };

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      const response = await api.get('/devs', {
        headers: { user: id }
      });

      setUsers(response.data);
      setLoading(false);
    };

    loadUsers();
  }, [id]);

  useEffect(() => {
    const socket = io('http://localhost:3333', {
      query: { user: id }
    });

    socket.on('match', dev => {
      setMatchDev(dev);
    });
  }, [id]);

  const handleDislike = async () => {
    setLoading(true);

    const [user, ...otherUsers] = users;

    await api.post(`/devs/${user._id}/dislikes`, null, { headers });
    setUsers(otherUsers);

    setLoading(false);
  };

  const handleLike = async () => {
    setLoading(true);

    const [user, ...otherUsers] = users;

    await api.post(`/devs/${user._id}/likes`, null, { headers });
    setUsers(otherUsers);

    setLoading(false);
  };

  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleLogout}>
        <Image source={logo} style={styles.logo} />
      </TouchableOpacity>

      {loading ? (
        <View style={styles.loadingOrEmptyView}>
          <Text style={styles.loadingOrEmptyUsersText}>Loading...</Text>
        </View>
      ) : users.length ? (
        <View style={styles.userContainer}>
          <View style={styles.cardsContainer}>
            {users.map((user, i) => (
              <View
                style={[styles.card, { zIndex: users.length - i }]}
                key={user._id}
              >
                <Image
                  source={{
                    uri: user.avatar
                  }}
                  style={styles.avatar}
                />
                <View style={styles.footer}>
                  <Text style={styles.name}>{user.name}</Text>
                  <Text style={styles.bio} numberOfLines={3}>
                    {user.bio}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleDislike()}
            >
              <Image source={dislike} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleLike()}
            >
              <Image source={like} />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.loadingOrEmptyView}>
          <Text style={styles.loadingOrEmptyUsersText}>
            No one to like or dislike...
          </Text>
        </View>
      )}
      {matchDev && (
        <View style={styles.matchContainer}>
          <Image source={matchImg} style={styles.matchImage}/>
          <Image
            source={{
              uri: matchDev.avatar
            }}
            style={styles.matchAvatar}
          />
          <Text style={styles.matchName}>{matchDev.name}</Text>
          <Text style={styles.matchBio}>
            {matchDev.bio}
          </Text>
          <TouchableOpacity onPress={() => setMatchDev(false)}>
            <Text style={styles.closeMatch}>CLOSE</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Main;
