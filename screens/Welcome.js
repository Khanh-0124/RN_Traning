import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Images, Icons, fontSize} from '../constants/Index';
import UIButton from '../components/UIButton';

const Welcome = props => {
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
          <Text style={{color: 'white', fontSize: 18, marginTop: 10}}>
            KVCOMPANY.CO
          </Text>
          <View style={{flex: 1}}></View>
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
        </View>
        <View
          style={{
            flex: 4,
            alignItems: 'center',
            justifyContent: 'center',
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
        <View style={{flex: 5}}>
          {accountTypes.map(accountType => (
            <UIButton
              debugger
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
        <View style={{flex: 5}}></View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
