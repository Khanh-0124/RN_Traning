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
  FlatList,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {Images, Icons, fontSize, Colors} from '../../constants/Index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {isValidEmail, isValidPassword} from '../../itilies/Validation';
import FoodItem from './FoodItem';

const FoodList = ({navigation}) => {
  const [foods, setFoods] = useState([
    {
      id: 1,
      name: 'Paella Valenciana',
      status: 'Open soon',
      price: 234.45,
      website: 'https://www.foody.vn/ha-noi',
      url: 'https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg&ga=GA1.2.1526632342.1638921600',
      socialNetwork: {
        facebook: 'https://www.facebook.com/khanh0124',
        twitter: 'https://twitter.com/',
        instagram: 'https://instagram.com/',
      },
    },
    {
      id: 2,
      name: 'Ingredients Paella Valenciana',
      status: 'Open now',
      price: 343.23,
      website: 'https://www.foody.vn/ha-noi',
      url: 'https://media.baamboozle.com/uploads/images/152185/1607591595_198751',
      socialNetwork: {
        facebook: 'https://www.facebook.com/khanh0124',
        instagram: 'https://instagram.com/',
      },
    },
    {
      id: 3,
      name: 'Yow more abou',
      status: 'Closing soon',
      price: 152.85,
      website: 'https://www.foody.vn/ha-noi',
      url: 'https://i.ndtvimg.com/i/2015-12/junk-food_650x400_51450516259.jpg',
      socialNetwork: {
        twitter: 'https://twitter.com/',
      },
    },
    {
      id: 4,
      name: 'Lso learn to make health',
      status: 'Comming soon',
      price: 645.23,
      website: 'https://www.foody.vn/ha-noi',
      url: 'https://files.schudio.com/roseberry-academy/images/blog/Healthy_eating.jpg',
      socialNetwork: {
        twitter: 'https://twitter.com/',
        instagram: 'https://instagram.com/',
      },
    },
    {
      id: 5,
      name: 'Rcesses to cook Valenciana',
      status: 'Closing soon',
      price: 832.43,
      website: 'https://www.foody.vn/ha-noi',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxSUWF8luBWxO29pIt58Rl-mdjmgFURwdidQ&usqp=CAU',
      socialNetwork: {
        facebook: 'https://www.facebook.com/khanh0124',
        twitter: 'https://twitter.com/',
        instagram: 'https://instagram.com/',
      },
    },
    {
      id: 6,
      name: 'Rcesses to cook Valenciana',
      status: 'Open now',
      price: 832.43,
      website: 'https://www.foody.vn/ha-noi',
      url: 'https://cdn.tasteatlas.com/images/toplistarticles/fc20fbcfe5cd4690ba0cb9614192303a.jpg?w=375&h=280',
      socialNetwork: {
        facebook: 'https://www.facebook.com/khanh0124',
        twitter: 'https://twitter.com/',
        instagram: 'https://instagram.com/',
      },
    },
  ]);
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'BBQ',
      url: 'https://cdn.cet.edu.vn/wp-content/uploads/2018/01/BBQ-la-gi.jpg',
    },
    {
      id: 2,
      name: 'Breakfast',
      url: 'https://colonydiner.com/wp-content/uploads/2021/03/French.jpg',
    },
    {
      id: 3,
      name: 'Coffee',
      url: 'https://img.kidspot.com.au/4i6pv_0_/kk/2015/03/big_breakfast_kd-501643-1.jpg',
    },
    {
      id: 4,
      name: 'Noodles',
      url: 'https://thecoffeevn.com/wp-content/uploads/2019/06/cach-nhan-biet-ca-phe-nguyen-chat-vs-don-phu-gia.jpg',
    },
    {
      id: 5,
      name: 'Hot dogs',
      url: 'https://images.foody.vn/res/g26/252180/prof/s576x330/foody-mobile-hotdog-1-jpg-304-636125699859908592.jpg',
    },
    {
      id: 6,
      name: 'Dinner',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLrT_XQ_MW6Fib2NpvBk4HeH026npYrmV1jA&usqp=CAU',
    },
    {
      id: 7,
      name: 'Beverage',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoaino_CVZdYargopJWHAoWBDcJ-BuYMfsQ&usqp=CAU',
    },
    {
      id: 8,
      name: 'Dessert',
      url: 'https://images-gmi-pmc.edge-generalmills.com/7c1096c7-bfd0-4806-a794-1d3001fe0063.jpg',
    },
    {
      id: 9,
      name: 'Wine',
      url: 'http://chefjob.vn/wp-content/uploads/2020/07/fortified-wine.jpg',
    },
    {
      id: 10,
      name: 'Salas',
      url: 'https://img.tastykitchen.vn/resize/764x-/2021/05/31/thuong-thuc-mon-salad-ca-chua-voi-cong-thuc-che-bi-171d.jpg',
    },
    {
      id: 11,
      name: 'Bit Tet',
      url: 'https://ngonngon.net/wp-content/uploads/2019/02/16.-B%C3%ADt-t%E1%BA%BFt-s%E1%BB%91t-ti%C3%AAu-t%E1%BB%8Fi-%E2%80%93-Aha-Food-73-Ng%C3%B5-10-T%C3%B4n-Th%E1%BA%A5t-T%C3%B9ng-%C4%90%E1%BB%91ng-%C4%90a-65k.jpg',
    },
  ]);
  return (
    // <ScrollView style={{flex: 1}}>
    //   <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />
    //   {foods.map(eachFood => {
    //     return <FoodItem food={eachFood} key={eachFood.id} />;
    //   })}
    // </ScrollView>
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />
      <View>
        <View style={{height: 60}}></View>
        <View style={{height: 1, backgroundColor: '#333'}}></View>
        <View style={{height: 100, backgroundColor: 'pink'}}>
          <FlatList
            horizontal={true}
            data={categories}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => alert(`${item.name}`)}
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  style={{
                    height: 46,
                    width: 46,
                    margin: 10,
                    resizeMode: 'cover',
                    borderRadius: 25,
                  }}
                  source={{uri: item.url}}
                />
                <Text style={{fontSize: fontSize.h6, color: 'black'}}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
      <FlatList
        data={foods}
        renderItem={({item}) => {
          return <FoodItem food={item} onPress={() => alert('Comming Soon')} />;
        }}
        keyExtractor={eachFood => eachFood.id}
      />
    </View>
  );
};

export default FoodList;

const styles = StyleSheet.create({});
