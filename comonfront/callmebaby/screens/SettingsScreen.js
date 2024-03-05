import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>로그아웃</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.buttonText1}>탈퇴하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  button: {
    backgroundColor: '#5c8374',
    paddingVertical: 15,
    paddingHorizontal: 130,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button1: {
    backgroundColor: 'white',
    borderColor: '#5c8374',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 130,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText1: {
    color: '#5c8374',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
