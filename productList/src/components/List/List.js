import React from 'react';
import {Text, View} from 'react-native';
import styles from './List.style';

const List = ({product}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text_title}> {product.title} </Text>
      <Text style={styles.text_price}> {product.price} ₺ </Text>
    </View>
  );
};

export default List;
