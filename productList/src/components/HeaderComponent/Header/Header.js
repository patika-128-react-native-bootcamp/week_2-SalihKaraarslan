import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Header.style';
import CustomHeader from '../CustomHeader';

const Header = ({artan, azalan, tarih, artanb, azalanb, tarihb}) => {
  return (
    <View style={styles.container}>
      <View
        style={
          artanb ? {backgroundColor: 'gray'} : {backgroundColor: 'lightgray'}
        }>
        <CustomHeader onPress={artan} buttonTitle={'Artan Fiyat'} />
      </View>
      <View
        style={
          azalanb ? {backgroundColor: 'gray'} : {backgroundColor: 'lightgray'}
        }>
        <CustomHeader onPress={azalan} buttonTitle={'Azalan Fiyat'} />
      </View>
      <View
        style={
          tarihb ? {backgroundColor: 'gray'} : {backgroundColor: 'lightgray'}
        }>
        <CustomHeader onPress={tarih} buttonTitle={'Tarih'} />
      </View>
    </View>
  );
};

export default Header;
