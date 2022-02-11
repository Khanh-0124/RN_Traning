import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {Images, Icons, fontSize, Colors} from '../constants/Index';
import UIButton from '../components/UIButton';

const Welcome = ({navigation}) => {
  const [accountTypes, setAccountTypes] = useState([
    {name: 'Influencer', isSelected: true},
    {name: 'Business', isSelected: false},
    {name: 'Individual', isSelected: false},
  ]);
  // debugger;
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={Images.background}
        resizeMode="cover"
        style={{flex: 1}}>
        <View
          style={{
            flex: 3,
            height: 40,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Image
            style={{height: 30, width: 30, margin: 10}}
            source={Icons.fireIcon}
          />
          <Text style={{color: 'white', fontSize: 18, marginTop: 17}}>
            KVCOMPANY.CO
          </Text>
          <View style={{flex: 1}}></View>
          <TouchableOpacity>
            <Image
              source={Icons.questionIcon}
              style={{
                height: 20,
                width: 20,
                marginRight: 10,
                marginTop: 10,
                tintColor: 'white',
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 3,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <Text style={{color: 'white', fontSize: fontSize.h6}}>
            Welcome to
          </Text>
          <Text style={{color: 'white', fontSize: fontSize.h5}}>
            KVCOMPANY.CO !
          </Text>
          <Text style={{color: 'white', fontSize: fontSize.h6}}>
            Please select account type
          </Text>
        </View>
        <View style={{flex: 7}}>
          {accountTypes.map(accountType => (
            <UIButton
              // debugger
              onPress={() => {
                setAccountTypes(
                  accountTypes.map(eachAccountType => {
                    return {
                      ...eachAccountType,
                      isSelected: eachAccountType.name == accountType.name,
                    };
                  }),
                );
              }}
              title={accountType.name}
              isSelected={accountType.isSelected}
            />
          ))}
        </View>
        <View style={{flex: 4}}>
          <UIButton
            onPress={() => navigation.navigate('Login')}
            title={'login'.toUpperCase()}
          />
          <Text
            style={{
              color: 'white',
              fontSize: fontSize.h6,
              alignSelf: 'center',
              marginVertical: 7,
            }}>
            Want to register new account
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: Colors.primary,
                fontSize: fontSize.h6,
                alignSelf: 'center',
                textDecorationLine: 'underline',
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
