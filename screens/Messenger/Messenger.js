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
import MessengerItem from './MessengerItem';
import {Header} from '../../components/Index';

const Messenger = props => {
  const {navigation} = props;
  const [chatHistory, setChatHistory] = useState([
    {
      url: 'https://photo2.tinhte.vn/data/attachment-files/2020/09/5136156_IMG_20200902_023158.jpg',
      isSender: true,
      isShowUrl: true,
      messages: 'Hello',
      timestamp: 1645630555000,
    },
    {
      url: 'https://photo2.tinhte.vn/data/attachment-files/2020/09/5136156_IMG_20200902_023158.jpg',
      isShowUrl: false,
      isSender: true,
      messages: 'How are you?',
      timestamp: 1645630675000,
    },
    {
      url: 'https://photo2.tinhte.vn/data/attachment-files/2020/09/5136156_IMG_20200902_023158.jpg',
      isSender: true,
      isShowUrl: false,
      messages: 'How about your work',
      timestamp: 1645631875000,
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR13i8K0eUBvZOcLgG6E_j__0SJhOIl1NAkDPraRMfkNk8yQZdeIEHbs7GnIR0QlRuG2Wo&usqp=CAU',
      isSender: false,
      isShowUrl: true,
      messages: 'Yes',
      timestamp: 1645631935000,
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR13i8K0eUBvZOcLgG6E_j__0SJhOIl1NAkDPraRMfkNk8yQZdeIEHbs7GnIR0QlRuG2Wo&usqp=CAU',
      isSender: false,
      messages: "I'm fine",
      isShowUrl: false,
      timestamp: 1645631995000,
    },
    {
      url: 'https://photo2.tinhte.vn/data/attachment-files/2020/09/5136156_IMG_20200902_023158.jpg',
      isSender: true,
      isShowUrl: true,
      messages: 'Let go out',
      timestamp: 1645632055000,
    },
  ]);
  const {url, name} = props.route.params.user;
  return (
    <View style={styles.container}>
      <Header
        title={name}
        leftIconName="chevron-left"
        onPressLeftIcon={() => {
          navigation.goBack();
        }}
        rightIconName="ellipsis-v"
        onPressRightIcon={() => {
          alert('khnh');
        }}
      />
      <FlatList
        data={chatHistory}
        renderItem={({item}) => (
          <MessengerItem item={item} key={`${item.timestamp}`} />
        )}
      />
    </View>
  );
};

export default Messenger;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
