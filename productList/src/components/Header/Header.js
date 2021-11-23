import React from 'react';
import { Text, TouchableOpacity, View} from 'react-native';
import styles from './Header.style';

const Header = ({artan, azalan, tarih, artanb, azalanb, tarihb}) => {
  return (
    <View style={styles.container}>
      <View
        style={
          artanb ? {backgroundColor: 'gray'} : {backgroundColor: 'lightgray'}
        }>
        <TouchableOpacity style={styles.button} onPress={artan}>
          <Text style={styles.text}>Artan Fiyat</Text>
        </TouchableOpacity>
      </View>
      <View
        style={
          azalanb ? {backgroundColor: 'gray'} : {backgroundColor: 'lightgray'}
        }>
        <TouchableOpacity style={styles.button} onPress={azalan}>
          <Text style={styles.text}>Azalan Fiyat</Text>
        </TouchableOpacity>
      </View>
      <View
        style={
          tarihb ? {backgroundColor: 'gray'} : {backgroundColor: 'lightgray'}
        }>
        <TouchableOpacity style={styles.button} onPress={tarih}>
          <Text style={styles.text}>Tarih</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
