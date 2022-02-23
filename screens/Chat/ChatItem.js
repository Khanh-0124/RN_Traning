import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {Icons, fontSize, Colors} from '../../constants/Index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Rating, AirbnbRating} from 'react-native-ratings';

export default function ChatItem(props) {
  let {name, url, messages, numberOfMessages} = props.user;
  let {onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 80,
        paddingTop: 20,
        paddingStart: 10,
        flexDirection: 'row',
      }}>
      <Image
        style={{
          height: 50,
          width: 50,
          resizeMode: 'cover',
          borderRadius: 25,
          marginRight: 15,
        }}
        source={{
          uri: url,
        }}
      />
      {numberOfMessages > 0 ? (
        <View
          style={{
            backgroundColor: Colors.primary,
            width: 23,
            height: 23,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            top: -4,
            right: 26,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 13,
              fontWeight: 'bold',
            }}>
            {numberOfMessages}
          </Text>
        </View>
      ) : (
        <View
          style={{
            width: 23,
            height: 23,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            top: -4,
            right: 26,
          }}
        />
      )}

      <View style={{}}>
        <Text style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}>
          {name}
        </Text>
        <Text style={{color: 'black', fontSize: 14, color: 'rgba(0,0,0,0.5)'}}>
          {messages}
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 11,
            color: 'rgba(0,0,0,0.5)',
            marginRight: 20,
          }}>
          Online 6 minutes ago
        </Text>
      </View>
    </TouchableOpacity>
  );
}
