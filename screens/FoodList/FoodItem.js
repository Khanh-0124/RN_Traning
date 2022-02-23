import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {Images, Icons, fontSize, Colors} from '../../constants/Index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {isValidEmail, isValidPassword} from '../../itilies/Validation';

function getColorStatus(status) {
  return status.toLowerCase().trim() === 'open now'
    ? Colors.success
    : status.toLowerCase().trim() === 'closing soon'
    ? Colors.alert
    : Colors.warning;
}
export default function FoodItem(props) {
  let {name, price, socialNetwork, status, website, url} = props.food;
  let {onPress} = props;
  debugger;
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          // backgroundColor: 'pink',
          height: 150,
          padding: 20,
          paddingStart: 10,
          flexDirection: 'row',
        }}>
        <Image
          style={{
            height: 100,
            width: 100,
            resizeMode: 'cover',
            borderRadius: 10,
            marginRight: 15,
          }}
          source={{
            uri: url,
          }}
        />
        <View style={{flex: 1}}>
          <Text style={{fontSize: fontSize.h5, fontWeight: 'bold'}}>
            {name}
          </Text>
          <View style={{backgroundColor: 'black', height: 1}} />
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#333'}}>Status: </Text>
            <Text style={{color: getColorStatus(status)}}>
              {status.toUpperCase()}
            </Text>
          </View>
          <View>
            <Text style={{color: '#333'}}>{price}$</Text>
            <Text style={{color: '#333', fontSize: fontSize.h5}}>
              Food Type:{' '}
              <Text style={{color: '#333', fontSize: 13.4}}>{website}</Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            {socialNetwork.facebook !== undefined && (
              <Icon
                name="facebook"
                color="#333"
                size={18}
                style={{marginRight: 3}}
              />
            )}
            {socialNetwork.twitter !== undefined && (
              <Icon
                name="twitter"
                color="#333"
                size={18}
                style={{marginHorizontal: 3}}
              />
            )}
            {socialNetwork.instagram !== undefined && (
              <Icon
                name="instagram"
                color="#333"
                size={18}
                style={{marginHorizontal: 3}}
              />
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
