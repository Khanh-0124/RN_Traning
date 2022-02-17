import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {getUserDetail} from '../Reponsitories/User';
import {Images, Icons, fontSize, Colors} from '../constants/Index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {isValidEmail, isValidPassword} from '../itilies/Validation';

function Profile(props) {
  getUserDetail();
  return (
    <SafeAreaView>
      <Text>Profile </Text>
    </SafeAreaView>
  );
}

export default Profile;

const styles = StyleSheet.create({});
