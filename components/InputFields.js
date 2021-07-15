import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const InputFields = ({value, onChangeText, placeholder, security}) => {
  return (
    <View style={{width: '100%'}}>
      <TextInput
        style={{
          height: 40,
          paddingHorizontal: 12,
          backgroundColor: '#fff',
          elevation: 6,
          width: '100%',
          borderRadius: 10,
        }}
        placeholder={placeholder}
        value={value}
        secureTextEntry={security}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default InputFields;

const styles = StyleSheet.create({});
