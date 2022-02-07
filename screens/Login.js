import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {Images, Icons, fontSize, Colors} from '../constants/Index';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Login = props => {
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          height: 200,
          //   backgroundColor: 'pink',
          justifyContent: 'space-around',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: fontSize.h1,
            alignSelf: 'center',
            fontWeight: 'bold',
            marginLeft: 40,
            flex: 1,
          }}>
          Already have an account?
        </Text>
        <View style={{flex: 1, alignSelf: 'center'}}>
          <Image source={Images.iconLogin} style={{width: 120, height: 120}} />
        </View>
      </View>
      <View style={{marginHorizontal: 20}}>
        <Text style={{color: Colors.primary, fontSize: fontSize.h4}}>
          Email :
        </Text>
        <TextInput
          placeholder="E.g: KhanhZua@gmail.com"
          placeholderTextColor={Colors.placeholder}
        />
        <View
          style={{
            width: '100%',
            height: 0.6,
            backgroundColor: 'red',
            marginBottom: 10,
          }}></View>
      </View>
      <View style={{marginHorizontal: 20}}>
        <Text style={{color: Colors.primary, fontSize: fontSize.h4}}>
          Password :
        </Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Enter your password"
          placeholderTextColor={Colors.placeholder}
        />
        <View
          style={{
            width: '100%',
            height: 0.6,
            backgroundColor: 'red',
            marginBottom: 10,
          }}></View>
      </View>

      {/* button */}
      <TouchableOpacity
        style={{
          width: '50%',
          backgroundColor: Colors.primary,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 37,
          alignSelf: 'center',
          borderRadius: 18,
        }}>
        <Text style={{color: 'white', fontSize: fontSize.h3}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={{
            color: Colors.primary,
            alignSelf: 'center',
            marginVertical: 13,
            fontSize: fontSize.h5,
          }}>
          New user? Register now
        </Text>
      </TouchableOpacity>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 22,
          marginTop: 70,
        }}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <Text style={{padding: 8, marginHorizontal: 5}}>
          User other methods?
        </Text>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Icon name="facebook" size={30} color={Colors.facebook} />
        <View style={{width: 15}}></View>
        <Icon name="google" size={30} color={Colors.google} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({});
