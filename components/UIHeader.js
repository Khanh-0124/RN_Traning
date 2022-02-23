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
import {Icons, fontSize, Colors} from '../constants/Index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {GridItem} from '../../screens/Index';
import {SliderBox} from 'react-native-image-slider-box';

const Header = props => {
  const {
    navigation,
    leftIconName,
    rightIconName,
    onPressLeftIcon,
    onPressRightIcon,
    title,
  } = props;
  return (
    <View
      style={{
        height: 55,
        backgroundColor: Colors.primary,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      {leftIconName != undefined ? (
        <Icon
          size={20}
          name={leftIconName}
          color="#fff"
          onPress={onPressLeftIcon}
          style={{marginStart: 10}}
        />
      ) : (
        <View style={{height: 50, width: 50, backgroundColor: 'yellow'}} />
      )}
      <Text
        style={{
          fontSize: 18,
          color: '#fff',
          fontWeight: 'bold',
        }}>
        {title}
      </Text>

      {rightIconName != undefined ? (
        <Icon
          size={18}
          name={rightIconName}
          color="#fff"
          onPress={onPressRightIcon}
          style={{marginEnd: 13}}
        />
      ) : (
        <View style={{height: 50, width: 50, backgroundColor: 'yellow'}} />
      )}
    </View>
  );
};

export default Header;
