import {Text, View, StatusBar, SafeAreaView, Switch} from 'react-native';
import React, {useState, useRef} from 'react';
import {Images, Icons, fontSize, Colors} from '../constants/Index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {isValidEmail, isValidPassword} from '../../itilies/Validation';

const Setting = ({navigation}) => {
  //   const {navigation} = props;
  const [isEnabledLookApp, setIsEnabledLookApp] = useState(false);
  const [isEnablePassTouch, setIsEnablePassTouch] = useState(true);
  const [isChangePass, setIsChangePass] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <View style={{height: 50, backgroundColor: 'rgba(0,0,0,0.08)'}}>
        <Text
          style={{
            lineHeight: 47,
            color: Colors.primary,
            fontSize: fontSize.h3 * 0.9,
            fontWeight: '600',
            marginStart: 12,
          }}>
          Common
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Icon name="globe" size={20} color={'#333'} style={{marginStart: 10}} />
        <Text style={{fontSize: 16, marginStart: 10}}>Language</Text>
        <View style={{flex: 1}}></View>
        <Text style={{fontSize: 16, marginEnd: 7, opacity: 0.6}}>English</Text>
        <Icon
          name="chevron-right"
          size={20}
          color={'#333'}
          style={{marginEnd: 10, marginTop: 1, opacity: 0.5}}
        />
      </View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Icon name="cloud" size={16} color={'#333'} style={{marginStart: 10}} />
        <Text style={{fontSize: 16, marginStart: 9.9}}>Environment</Text>
        <View style={{flex: 1}}></View>
        <Text style={{fontSize: 16, marginEnd: 7, opacity: 0.6}}>
          Production
        </Text>
        <Icon
          name="chevron-right"
          size={20}
          color={'#333'}
          style={{marginEnd: 10, marginTop: 1, opacity: 0.5}}
        />
      </View>
      {/* Acounters */}
      <View
        style={{
          height: 50,
          backgroundColor: 'rgba(0,0,0,0.08)',
          marginTop: 10,
        }}>
        <Text
          style={{
            lineHeight: 47,
            color: Colors.primary,
            fontSize: fontSize.h3 * 0.9,
            fontWeight: '600',
            marginStart: 12,
          }}>
          Acounters
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Icon name="phone" size={20} color={'#333'} style={{marginStart: 10}} />
        <Text style={{fontSize: 16, marginStart: 10}}>Phone number</Text>
        <View style={{flex: 1}} />
        <Icon
          name="chevron-right"
          size={20}
          color={'#333'}
          style={{marginEnd: 10, marginTop: 1, opacity: 0.5}}
        />
      </View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Icon
          name="envelope"
          size={20}
          color={'#333'}
          style={{marginStart: 10}}
        />
        <Text style={{fontSize: 16, marginStart: 9.9}}>Email</Text>
        <View style={{flex: 1}} />
        <Icon
          name="chevron-right"
          size={20}
          color={'#333'}
          style={{marginEnd: 10, marginTop: 1, opacity: 0.5}}
        />
      </View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Icon
          name="sign-out-alt"
          size={20}
          color={'#333'}
          style={{marginStart: 10}}
        />
        <Text style={{fontSize: 16, marginStart: 9.9}}>Sign out</Text>
        <View style={{flex: 1}} />
        <Icon
          name="chevron-right"
          size={20}
          color={'#333'}
          style={{marginEnd: 10, marginTop: 1, opacity: 0.5}}
        />
      </View>

      {/* security */}
      <View
        style={{
          height: 50,
          backgroundColor: 'rgba(0,0,0,0.08)',
          marginTop: 10,
        }}>
        <Text
          style={{
            lineHeight: 47,
            color: Colors.primary,
            fontSize: fontSize.h3 * 0.9,
            fontWeight: '600',
            marginStart: 12,
          }}>
          Security
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Icon name="lock" size={20} color={'#333'} style={{marginStart: 10}} />
        <Text style={{fontSize: 16, marginStart: 10}}>
          Lock app in background
        </Text>
        <View style={{flex: 1}} />
        <Switch
          style={{marginEnd: 10}}
          trackColor={{false: '#adb5bd', true: '#f4a261'}}
          thumbColor={isEnabledLookApp ? '#f3722c' : '#8b8c89'}
          onValueChange={() => {
            setIsEnabledLookApp(!isEnabledLookApp);
          }}
          value={isEnabledLookApp}
        />
      </View>

      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Icon
          name="fingerprint"
          size={20}
          color={'#333'}
          style={{marginStart: 10}}
        />
        <Text style={{fontSize: 16, marginStart: 10}}>Use fingerprint</Text>
        <View style={{flex: 1}} />
        <Switch
          style={{marginEnd: 10}}
          trackColor={{false: '#adb5bd', true: '#f4a261'}}
          thumbColor={isEnablePassTouch ? '#f3722c' : '#8b8c89'}
          onValueChange={() => {
            setIsEnablePassTouch(!isEnablePassTouch);
          }}
          value={isEnablePassTouch}
        />
      </View>

      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Icon
          name="user-lock"
          size={16}
          color={'#333'}
          style={{marginStart: 10}}
        />
        <Text style={{fontSize: 16, marginStart: 10}}>Change password</Text>
        <View style={{flex: 1}} />
        <Switch
          style={{marginEnd: 10}}
          trackColor={{false: '#adb5bd', true: '#f4a261'}}
          thumbColor={isChangePass ? '#f3722c' : '#8b8c89'}
          onValueChange={() => {
            setIsChangePass(!isChangePass);
          }}
          value={isChangePass}
        />
      </View>
      <View
        style={{
          height: 50,
          backgroundColor: 'rgba(0,0,0,0.08)',
          marginTop: 10,
        }}>
        <Text
          style={{
            lineHeight: 47,
            color: Colors.primary,
            fontSize: fontSize.h3 * 0.9,
            fontWeight: '600',
            marginStart: 12,
          }}>
          Misc
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Icon
          name="file-alt"
          size={20}
          color={'#333'}
          style={{marginStart: 10}}
        />
        <Text style={{fontSize: 16, marginStart: 10}}>Term of server</Text>
        <View style={{flex: 1}} />
        <Icon
          name="chevron-right"
          size={20}
          color={'#333'}
          style={{marginEnd: 10, marginTop: 1, opacity: 0.5}}
        />
      </View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Icon
          name="box-open"
          size={18}
          color={'#333'}
          style={{marginStart: 7}}
        />
        <Text style={{fontSize: 16, marginStart: 7}}>Phone number</Text>
        <View style={{flex: 1}} />
        <Icon
          name="chevron-right"
          size={20}
          color={'#333'}
          style={{marginEnd: 10, marginTop: 1, opacity: 0.5}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Setting;
