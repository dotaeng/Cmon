import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import ListScreen from './ListScreen';
import SettingsScreen from './SettingsScreen';

function ScriptScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>스크립트</Text>
    </View>
  );
}

function AlarmScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>AI알람</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator initialRouteName='홈'
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: 60
        },
        justifyContent: 'center',
        tabBarActiveTintColor: '#5C8374',
        tabBarInactiveTintColor: '#b2b2b2'
      })}>


        <Tab.Screen name="스크립트" component={ScriptScreen}  options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="pencil-square-o" color={color} size={size} />
          ), headerShown: false
        }} />

        <Tab.Screen name="AI알람" component={AlarmScreen}  options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="clock-o" color={color} size={size} />
          ), headerShown: false
        }} />

        <Tab.Screen name="홈" component={HomeScreen}  options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ), headerShown: false
        }} />

        <Tab.Screen name="커뮤니티" component={ListScreen}  options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="users" color={color} size={size} />
          ), headerShown: false
        }} />

        <Tab.Screen name="설정" component={SettingsScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="gear" color={color} size={size} />
          ), headerShown: false
        }} />

      </Tab.Navigator>
  );
}

