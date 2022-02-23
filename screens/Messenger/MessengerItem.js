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
const MessengerItem = props => {
  const {url, isSender, messages, timestamp, isShowUrl} = props.item;
  return isSender == false ? (
    <TouchableOpacity
      style={{
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginVertical: 1.4,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {isShowUrl == true ? (
        <Image
          style={{
            height: 40,
            width: 40,
            resizeMode: 'cover',
            borderRadius: 25,
            marginHorizontal: 7,
          }}
          source={{
            uri: url,
          }}
        />
      ) : (
        <View style={{height: 40, width: 40, marginHorizontal: 7}}></View>
      )}

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingEnd: 20,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: fontSize.h6,
            paddingVertical: 10,
            paddingHorizontal: 7,
            backgroundColor: 'rgba(0,0,0,0.1.8)',
            borderRadius: 10,
          }}>
          {messages}
        </Text>
        <View style={{width: 40}} />
      </View>
    </TouchableOpacity>
  ) : (
    //isSender == true
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        marginVertical: 1.4,
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <View style={{}}>
        <View style={{width: 40}} />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingStart: 20,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: fontSize.h6,
              paddingVertical: 10,
              paddingHorizontal: 7,
              backgroundColor: Colors.messagesTrue,
              borderRadius: 10,
            }}>
            {messages}
          </Text>
        </View>
      </View>
      {isShowUrl == true ? (
        <Image
          style={{
            height: 40,
            width: 40,
            resizeMode: 'cover',
            borderRadius: 25,
            marginHorizontal: 7,
          }}
          source={{
            uri: url,
          }}
        />
      ) : (
        <View style={{height: 40, width: 40, marginHorizontal: 7}}></View>
      )}
    </TouchableOpacity>
  );
};

export default MessengerItem;

const styles = StyleSheet.create({});
