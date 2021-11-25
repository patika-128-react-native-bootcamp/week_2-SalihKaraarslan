import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './CustomHeader.style';

const CustomHeader = ({buttonTitle,onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default CustomHeader;
