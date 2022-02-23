import {KeyboardAvoidingView, Text, View} from 'react-native';
import {
  FoodList,
  ProductGridView,
  Setting,
  Profile,
  Chat,
} from '../screens/Index.js';
import React, {useState, useRef} from 'react';
import {Images, Icons, fontSize, Colors} from '../constants/Index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {isValidEmail, isValidPassword} from '../../itilies/Validation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const screenOptions = ({route}) => {
    let screenName = route.name;
    let iconName = '';
    if (screenName == 'Home') {
      iconName = 'home';
    } else if (screenName == 'Search') {
      iconName = 'search';
    } else if (screenName == 'Settings') {
      iconName = 'cog';
    } else if (screenName == 'Chat') {
      iconName = 'comment-dots';
    } else iconName = 'user';
    return {
      headerShown: false,
      tabBarActiveTintColor: Colors.primary,
      tabBarInactiveTintColor: 'rgba(0,0,0,0.7)',
      tabBarActiveBackgroundColor: '#fff',
      tabBarInactiveBackgroundColor: '#fff',
      tabBarLabelStyle: {
        fontSize: 12,
      },
      tabBarStyle: {
        height: 57,
        marginHorizontal: 0,
      },
      tabBarIcon: ({focused, color, size}) => {
        return (
          <Icon
            name={iconName}
            size={route.name == 'Chat' ? 27 : 24}
            color={focused ? Colors.primary : 'rgba(0,0,0,0.6)'}
          />
        );
      },
    };
  };
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={ProductGridView}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{tabBarLabel: 'Chat'}}
      />
      <Tab.Screen
        name="Search"
        component={FoodList}
        options={{tabBarLabel: 'Search'}}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{tabBarLabel: 'Setting'}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{tabBarLabel: 'Account'}}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return <MyTabs />;
}
