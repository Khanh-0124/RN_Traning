import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Welcome,
  Login,
  Register,
  FoodList,
  ProductGridView,
  Setting,
  BottomTab,
} from './screens/Index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from './constants/Index';
const Stack = createStackNavigator();

const App = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: Colors.primary,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerShown: false, headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
