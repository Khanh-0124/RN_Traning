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
import {Header} from '../../components/Index';
import ChatItem from './ChatItem';

const Chat = props => {
  const {navigation} = props;
  const [users, setUsers] = useState([
    {
      id: 1,
      url: 'https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-nam-1.jpg',
      name: 'KhanhZua',
      messages: 'hello, how are you?',
      numberOfMessages: 1,
    },
    {
      id: 2,
      url: 'https://haycafe.vn/wp-content/uploads/2021/12/hinh-anh-avatar-dep-cho-con-gai-dai-dien-Facebook-Zalo-Tiktok.jpg',
      name: 'Khanh2',
      messages: 'hello, how are you?',
      numberOfMessages: 12,
    },
    {
      id: 3,
      url: 'https://i.pinimg.com/550x/bb/b4/18/bbb418fa565ecb915e03dad41ad4a0e3.jpg',
      name: 'Khansh3',
      messages: 'hello, how are you?',
      numberOfMessages: 5,
    },
    {
      id: 4,
      url: 'https://photo2.tinhte.vn/data/attachment-files/2020/09/5136156_IMG_20200902_023158.jpg',
      name: 'KhanhZua',
      messages: 'hello, how are you?',
      numberOfMessages: 7,
    },
    {
      id: 5,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR13i8K0eUBvZOcLgG6E_j__0SJhOIl1NAkDPraRMfkNk8yQZdeIEHbs7GnIR0QlRuG2Wo&usqp=CAU',
      name: 'KhanhZua',
      messages: 'hello, how are you?',
      numberOfMessages: 0,
    },
    {
      id: 6,
      url: 'https://photo2.tinhte.vn/data/attachment-files/2020/09/5136156_IMG_20200902_023158.jpg',
      name: 'KhanhZua',
      messages: 'hello, how are you?',
      numberOfMessages: 2,
    },
    {
      id: 7,
      url: 'https://photo2.tinhte.vn/data/attachment-files/2020/09/5136156_IMG_20200902_023158.jpg',
      name: 'KhanhZua',
      messages: 'hello, how are you?',
      numberOfMessages: 13,
    },
  ]);
  return (
    <View style={styles.container}>
      <Header
        title="Chat"
        leftIconName="chevron-left"
        onPressLeftIcon={() => {
          alert('al');
        }}
        rightIconName="search"
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{padding: 6}}>6 messages unread</Text>
        <Icon
          name="search"
          size={17}
          color="#333"
          style={{margin: 8}}
          onPress={() => alert('as')}
        />
      </View>
      <View>
        <FlatList
          data={users}
          renderItem={({item}) => (
            <ChatItem
              onPress={() => {
                navigation.navigate('Messenger', {user: item});
              }}
              user={item}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
