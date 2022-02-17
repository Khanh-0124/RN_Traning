import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {Images, Icons, fontSize, Colors} from '../constants/Index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {isValidEmail, isValidPassword} from '../itilies/Validation';

const Login = ({navigation}) => {
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [email, setEmail] = useState('khanhzua@gmail.com');
  const [password, setPassword] = useState('123');
  const isValidationOk = () =>
    email.length > 0 &&
    password.length > 0 &&
    isValidEmail(email) == true &&
    isValidPassword(password) == true;
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <StatusBar backgroundColor={Colors.background} />

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
          style={{height: 38}}
          placeholder="E.g: KhanhZua@gmail.com"
          placeholderTextColor={Colors.placeholder}
          onChangeText={text => {
            setErrorEmail(isValidEmail(text) ? '' : 'Email invalidate');
            setEmail(text);
          }}
          value={email}
        />
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: 'red',
          }}
        />
        <Text style={{color: 'red', fontSize: fontSize.h6, marginBottom: 10}}>
          {errorEmail}
        </Text>
      </View>
      <View style={{marginHorizontal: 20}}>
        <Text style={{color: Colors.primary, fontSize: fontSize.h4}}>
          Password :
        </Text>
        <TextInput
          style={{height: 38}}
          secureTextEntry={true}
          placeholder="Enter your password"
          placeholderTextColor={Colors.placeholder}
          onChangeText={pass => {
            setErrorPassword(
              isValidPassword(pass)
                ? ''
                : 'Password must be more than 3 characters',
            );
            setPassword(pass);
          }}
          value={password}
        />
        <View
          style={{
            width: '100%',
            height: 0.6,
            backgroundColor: 'red',
          }}
        />
        <Text style={{color: 'red', fontSize: fontSize.h6}}>
          {errorPassword}
        </Text>
      </View>
      {/* button */}
      <TouchableOpacity
        disabled={isValidationOk() == false}
        onPress={() => navigation.navigate('BottomTab')}
        style={{
          width: '50%',
          backgroundColor: isValidationOk() ? Colors.primary : Colors.disabled,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 37,
          alignSelf: 'center',
          borderRadius: 18,
        }}>
        <Text style={{color: 'white', fontSize: fontSize.h3}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
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
