import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({title, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btnstyle, {...style}]}>
      <Text style={{fontWeight: 'bold', fontSize: 16, color: '#fff'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnstyle: {
    height: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderRadius: 10,
  },
});
