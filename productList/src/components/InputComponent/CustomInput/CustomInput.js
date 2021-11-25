import React from 'react';
import {TextInput} from 'react-native';
import styles from './CustomInput.style';

const CustomInput = ({onChangeText,value}) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default CustomInput;
