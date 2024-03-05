import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Header from './Header';
import TopTabNavigator from './TopTabNavigator';

const ListScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header title={<Text style={styles.titleText}>커뮤니티</Text>} icon="search" />
      <TopTabNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 25,
    fontWeight: 'bold'
  },
});

export default ListScreen;
