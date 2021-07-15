import React, {useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MenuIcon from 'react-native-vector-icons/Entypo';
const Profile = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuIcon
          name={'menu'}
          size={32}
          style={{marginLeft: 16}}
          onPress={() => navigation.openDrawer()}
        />
      ),
      headerTitle: '',
    });
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('New')}
        style={{
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 16,
          borderRadius: 10,
          backgroundColor: 'grey',
        }}>
        <Text>NextScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
