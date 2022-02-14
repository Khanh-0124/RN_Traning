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
import {GridItem} from '../../screens/Index';
export default function ProductGridView({navigation}) {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Banh My Nuong',
      url: 'https://media.cooky.vn/recipe/g2/15117/s800x500/recipe15117-635690282198788337.jpg',
      price: 75,
      specification: [
        'Khdsu JAD',
        'cyclone  filter',
        'convenience cord storage',
      ],
      review: 19,
      stars: 5,
    },
    {
      id: 2,
      name: 'Salad, Banh Beo',
      url: 'https://ngonaz.com/wp-content/uploads/2020/11/banh-mi-lam-tu-gi.jpg',
      price: 83,
      specification: [
        'Khdsu JAD',
        'cyclone  filter',
        'convenience cord storage',
      ],
      review: 19,
      stars: 5,
      isSaved: true,
    },
    {
      id: 3,
      name: 'Banh My Ngot',
      url: 'https://img.tastykitchen.vn/resize/764x-/2021/05/31/thuong-thuc-mon-salad-ca-chua-voi-cong-thuc-che-bi-171d.jpg',
      price: 93,
      specification: [
        'Khdsu JAD',
        'cyclone  filter',
        'convenience cord storage',
      ],
      review: 19,
      stars: 5,
      isSaved: true,
    },
    {
      id: 4,
      name: 'Pho Bo sweh',
      url: 'https://songkhoe.medplus.vn/wp-content/uploads/2020/02/Mon-bo-tuyet-hao-cho-buoi-sang-1.png',
      price: 43,
      specification: [
        'Khdsu JAD',
        'cyclone  filter',
        'convenience cord storage',
      ],
      review: 19,
      stars: 5,
    },
    {
      id: 5,
      name: 'Pho Bo 24h',
      url: 'https://i-vnexpress.vnecdn.net/2020/02/06/image001-4927-1580979394.png',
      price: 43,
      specification: [
        'Khdsu JAD',
        'cyclone  filter',
        'convenience cord storage',
      ],
      review: 19,
      stars: 5,
    },
    {
      id: 6,
      name: 'Pho Bo 24h',
      url: 'https://cdn.huongnghiepaau.com/wp-content/uploads/2019/01/my-y-chay.jpg',
      price: 43,
      specification: [
        'Khdsu JAD',
        'cyclone  filter',
        'convenience cord storage',
      ],
      review: 19,
      stars: 5,
    },
    {
      id: 7,
      name: 'Pho Bo 24h',
      url: 'https://kenh14cdn.com/203336854389633024/2021/3/9/photo-1-16152645286081431737598.png',
      price: 487,
      specification: [
        'Khdsu JAD',
        'cyclone  filter',
        'convenience cord storage',
      ],
      review: 19,
      stars: 5,
    },
    {
      id: 8,
      name: 'Pho Bo 24h',
      url: 'https://bepxua.vn/wp-content/uploads/2020/11/2_194188.jpg',
      price: 43,
      specification: [
        'Khdsu JAD',
        'cyclone  filter',
        'convenience cord storage',
      ],
      review: 19,
      stars: 5,
    },
    {
      id: 9,
      name: 'Pho Bo 24h',
      url: 'https://image-us.eva.vn/upload/2-2020/images/2020-04-17/cach-lam-ga-ran-kfc-vang-gion-ngon-chuan-vi-ngoai-hang-an-suong-mieng-7-1587094121-418-width512height327.jpg',
      price: 43,
      specification: [
        'Khdsu JAD',
        'cyclone  filter',
        'convenience cord storage',
      ],
      review: 19,
      stars: 5,
    },
    {
      id: 10,
      name: 'Pho Bo 24h',
      url: 'https://monngonmoingay.com/wp-content/uploads/2020/07/ca-chien-xot-nam-500.jpg',
      price: 43,
      specification: [
        'Khdsu JAD',
        'cyclone  filter',
        'convenience cord storage',
      ],
      review: 19,
      stars: 5,
    },
    {
      id: 11,
      name: 'Pho Bo 24h',
      url: 'https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/05/cach-uop-thit-nuong.jpg',
      price: 43,
      specification: [
        'Khdsu JAD',
        'cyclone  filter',
        'convenience cord storage',
      ],
      review: 19,
      stars: 5,
    },
    {
      id: 11,
      name: 'Pho Bo 24h',
      url: 'https://cdn.tgdd.vn/Files/2017/04/14/972222/cach-uop-thit-nuong-tu-cac-loai-gia-vi-co-san-thit-mem-ngon-chuan-vi-nha-hang-201910031859355813.jpg',
      price: 43,
      specification: [
        'Khdsu JAD',
        'cyclone  filter',
        'convenience cord storage',
      ],
      review: 139,
      stars: 5,
    },
  ]);
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <FlatList
        style={{marginTop: 5}}
        data={products}
        numColumns={2}
        renderItem={({item, index}) => (
          <GridItem
            index={index}
            item={item}
            onPress={() => {
              let cloneProducts = products.map(eachProduct => {
                if (eachProduct.id === item.id) {
                  return {
                    ...eachProduct,
                    isSaved:
                      eachProduct.isSaved == undefined ||
                      eachProduct.isSaved == false
                        ? true
                        : false,
                  };
                }
                return eachProduct;
              });
              setProducts(cloneProducts);
            }}
          />
        )}
        keyExtractor={product => product.id}
      />
    </SafeAreaView>
  );
}
