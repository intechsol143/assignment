import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../../../components/Button';
import InputFields from '../../../components/InputFields';

const login = ({navigation}) => {
  const [Email, setEmail] = useState('');
  const [pass, setpass] = useState('');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 16,
        justifyContent: 'center',
      }}>
      <InputFields
        placeholder={'Email'}
        value={Email}
        onChangeText={text => setEmail(text)}
      />
      <View style={{height: 15}} />
      <InputFields
        placeholder={'Password'}
        value={pass}
        security={true}
        onChangeText={text => setpass(text)}
      />
      <View style={{height: 25}} />

      <Button title={'login'} onPress={() => navigation.navigate('Drawer')} />
    </View>
  );
};

export default login;

const styles = StyleSheet.create({});
