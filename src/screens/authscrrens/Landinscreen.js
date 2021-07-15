import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../../../components/Button';
const Landinscreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button title={'Login'} onPress={() => navigation.navigate('Login')} />
      <Button
        title={'Sign Up'}
        onPress={() => navigation.navigate('Register')}
        style={{marginTop: 10}}
      />
    </View>
  );
};

export default Landinscreen;
