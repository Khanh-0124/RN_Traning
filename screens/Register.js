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

const Register = ({navigation}) => {
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorRePassword, setErrorRePassword] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const checkPassword = (password, rePassword) => {
    let err = null;
    if (password != rePassword && rePassword.length > 0) {
      err = 'password incorrect';
    }
    return err;
  };
  const isValidationOk = () =>
    email.length > 0 &&
    password.length > 0 &&
    isValidEmail(email) == true &&
    isValidPassword(password) == true &&
    checkPassword(password, rePassword) == null;
  return (
    <KeyboardAvoidingView style={{flex: 1, backgroundColor: Colors.primary}}>
      <StatusBar backgroundColor={Colors.primary} />
      <View
        style={{
          flexDirection: 'row',
          height: 200,
          //   backgroundColor: 'pink',
          justifyContent: 'space-around',
        }}>
        <Text
          style={{
            color: 'white',
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

      <View
        style={{
          width: '93%',
          height: 350,
          backgroundColor: 'white',
          alignSelf: 'center',
          borderRadius: 20,
        }}>
        <View style={{marginHorizontal: 20}}>
          <Text
            style={{
              color: Colors.primary,
              fontSize: fontSize.h4,
              marginTop: 20,
            }}>
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
        {/* password */}
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
        {/* confirm password */}
        <View style={{marginHorizontal: 20}}>
          <Text style={{color: Colors.primary, fontSize: fontSize.h4}}>
            Confirm Password:
          </Text>
          <TextInput
            style={{height: 38}}
            secureTextEntry={true}
            placeholder="Re-Enter your password"
            placeholderTextColor={Colors.placeholder}
            onChangeText={pass => {
              setErrorRePassword(
                isValidPassword(pass)
                  ? ''
                  : 'Password must be more than 3 characters',
              );
              setRePassword(pass);
            }}
          />
          <View
            style={{
              width: '100%',
              height: 0.6,
              backgroundColor: 'red',
            }}
          />
          <Text style={{color: 'red', fontSize: fontSize.h6}}>
            {errorRePassword}
          </Text>
          <Text style={{color: 'red', fontSize: fontSize.h6}}>
            {checkPassword(password, rePassword)}
          </Text>
        </View>
        {/* button */}
        <TouchableOpacity
          disabled={isValidationOk() == false}
          // onPress={() => {
          //   alert(`Email: ${email} \nPassword: ${password}`);
          // }}
          style={{
            width: '50%',
            backgroundColor: isValidationOk()
              ? Colors.primary
              : Colors.disabled,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            alignSelf: 'center',
            borderRadius: 18,
          }}>
          <Text style={{color: 'white', fontSize: fontSize.h3}}>Register</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 22,
          marginTop: 70,
        }}>
        <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
        <Text style={{padding: 8, marginHorizontal: 5, color: 'white'}}>
          User other methods?
        </Text>
        <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          width: 150,
          height: 45,
          backgroundColor: 'white',
          borderRadius: 40,
          marginTop: 10,
        }}>
        <Icon name="facebook" size={30} color={Colors.facebook} />
        <View style={{width: 25}} />
        <Icon name="google" size={30} color={Colors.google} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({});
