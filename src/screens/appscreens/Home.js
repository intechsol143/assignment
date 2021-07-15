import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import MenuIcon from 'react-native-vector-icons/Entypo';
const Home = ({navigation}) => {
  const [DummyPosts, setDummyPosts] = useState([]);
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
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setDummyPosts(json));
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FlatList
        data={DummyPosts}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Next', {id: item.id})}
              style={{
                flex: 1,
                backgroundColor: '#fff',
                elevation: 6,
                borderRadius: 10,
                padding: 12,
                margin: 6,
                paddingHorizontal: 16,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                {item.title}
              </Text>
              <Text style={{color: 'black'}}>{item.body}</Text>
            </TouchableOpacity>
          );
        }}
      />
      {/* <TouchableOpacity
        onPress={() => navigation.navigate('Next')}
        style={{
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 16,
          borderRadius: 10,
          backgroundColor: 'grey',
        }}>
        <Text>NextScreen</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
