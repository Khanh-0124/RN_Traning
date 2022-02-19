import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  RefreshControl,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {getUserDetail} from '../Reponsitories/User';
import {Images, Icons, fontSize, Colors} from '../constants/Index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {isValidEmail, isValidPassword} from '../itilies/Validation';
import {getPopulation} from '../Reponsitories/Population';
import {convertDateTimeToString} from '../itilies/DateTime';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
function Profile(props) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(800).then(() => setRefreshing(false));
  }, []);
  const [user, setUser] = useState({});
  const [populations, setPopulations] = useState([]);
  const {
    email,
    dateOfBirth,
    gender,
    userid,
    useraddress,
    username,
    url,
    userphone,
    userRegisteredDate,
  } = user;
  useEffect(() => {
    getUserDetail().then(responUser => setUser(responUser));
    getPopulation({
      drilldowns: 'Nation',
      measures: 'Population',
    }).then(responPopulations => setPopulations(responPopulations));
  }, []);
  return (
    <ScrollView
      style={{flex: 1}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressBackgroundColor={'#fff'}
          colors={['red', 'black']}
        />
      }>
      <View>
        <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />
        <Image
          style={{
            height: 160,
            width: 160,
            margin: 10,
            resizeMode: 'cover',
            borderRadius: 85,
            alignSelf: 'center',
          }}
          source={{uri: url}}
        />

        <View style={{marginLeft: 17}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold'}}>User name: </Text>
            <Text>{username}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold'}}>Date: </Text>
            <Text>{convertDateTimeToString(dateOfBirth)}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold'}}>Address: </Text>
            <Text>{useraddress}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold'}}>Email: </Text>
            <Text>{email}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold'}}>Gender: </Text>
            <Text>{gender}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold'}}>Phone: </Text>
            <Text>{userphone}</Text>
          </View>
        </View>

        <View
          style={{
            // backgroundColor: 'pink',
            width: '100%',
          }}>
          <LineChart
            data={{
              labels: populations
                .sort((a, b) => parseInt(a.year) - parseInt(b.year))
                .map(i => i.year),
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width * 0.93} // from react-native
            height={270}
            // yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: 'hotpink',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 10,
              alignItems: 'center',
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}>
          {populations.map((i, index) => (
            <View
              key={i.year}
              style={{
                marginTop: 10,
                backgroundColor: index % 2 == 0 ? '#fcbf49' : '#52b69a',
                width: '94%',
                alignSelf: 'center',
                borderRadius: 10,
                padding: 10,
                width: '45%',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text>Nation: </Text>
                <Text>{i.nation}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>Year: </Text>
                <Text>{i.year}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>Population: </Text>
                <Text>{i.population}</Text>
              </View>
            </View>
          ))}
          <View style={{width: '45%'}}></View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Profile;

const styles = StyleSheet.create({});
