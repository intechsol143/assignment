import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Next = ({route}) => {
  const {id} = route.params;
  console.log('Item Id', id);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Next</Text>
    </View>
  );
};

export default Next;

const styles = StyleSheet.create({});
