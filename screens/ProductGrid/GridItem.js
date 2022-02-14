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
import {Images, Icons, fontSize, Colors} from '../../constants/Index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Rating, AirbnbRating} from 'react-native-ratings';

export default function GridItem(props) {
  const {item, index, onPress} = props;
  return (
    <View
      style={{
        //   backgroundColor: index % 2 == 0 ? 'pink' : 'hotpink',
        flex: 0.5,
        // height: 200,
        marginLeft: index % 2 == 0 ? 10 : 0,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 15,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{
            height: 100,
            width: 90,
            resizeMode: 'cover',
            borderRadius: 20,
            // marginLeft: 10,
            marginRight: 20,
          }}
          source={{uri: item.url}}
        />
        <Text
          style={{
            fontSize: fontSize.h2,
            color: 'black',
            textAlign: 'right',
          }}>
          $ {item.price}
        </Text>
      </View>
      <Text
        style={{
          color: Colors.primary,
          fontSize: fontSize.h5,
          marginTop: 5,
          // marginHorizontal: 10,
          fontWeight: 'bold',
        }}>
        {item.name}
      </Text>
      {item.specification.map(specification => (
        <Text key={specification}>* {specification}</Text>
      ))}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 5,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            marginLeft: -8,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 4,
          }}>
          <TouchableOpacity onPress={onPress}>
            <Icon
              name="heart"
              size={17}
              color={
                item.isSaved == false || item.isSaved == undefined
                  ? '#ccc'
                  : 'red'
              }
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 13,
              fontWeight: 'bold',
              color: 'green',
              position: 'relative',
              top: 8.5,
            }}>
            {item.review} reviews
          </Text>
        </View>
        <View style={{height: 15, width: 1, backgroundColor: 'black'}} />
        <View style={{position: 'relative', right: 0}}>
          <AirbnbRating
            reviewSize={13}
            count={5}
            reviews={['Terrible', 'Bad', 'OK', 'Good', 'Very Good']}
            defaultRating={index % 2 == 0 ? 3 : 5}
            size={12}
          />
        </View>
      </View>
    </View>
  );
}
