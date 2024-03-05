import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabScreen1 from './TabScreen1'; 
import TabScreen2 from './TabScreen2';
import TabScreen3 from './TabScreen3';
import TabScreen4 from './TabScreen4'; 

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: 'black' },
        tabBarLabelStyle: { fontWeight: 'bold'  },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#b2b2b2'
      }}
    >
      <Tab.Screen name="TabScreen1" component={TabScreen1} options={{ tabBarLabel: '오늘의 질문' }} />
      <Tab.Screen name="TabScreen2" component={TabScreen2} options={{ tabBarLabel: '소통해요' }} />
      <Tab.Screen name="TabScreen3" component={TabScreen3} options={{ tabBarLabel: '유저 소식' }} />
      <Tab.Screen name="TabScreen4" component={TabScreen4} options={{ tabBarLabel: '씨몬 이야기' }} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
