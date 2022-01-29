import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../constants/Index';
const UIButton = props => {
  const {onPress, title, isSelected} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderWidth: 1,
        borderColor: 'white',
        height: 45,
        borderRadius: 6,
        marginHorizontal: 18,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isSelected == true ? 'white' : null,
      }}>
      {isSelected == true && (
        <Icon
          name="check-circle"
          color="green"
          size={20}
          style={{position: 'absolute', top: 10, left: 10}}
        />
      )}
      <Text
        style={{
          color: isSelected == true ? Colors.primary : 'white',
          fontSize: 14,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default UIButton;

const styles = StyleSheet.create({});
