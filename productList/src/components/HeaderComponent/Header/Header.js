import React from 'react';
import {View} from 'react-native';
import styles from './Header.style';
import CustomHeader from '../CustomHeader';

const Header = ({
  increasingBoolen,
  handleIncreasingButton,
  decreasingBoolen,
  handleDecreasingButton,
  dateBoolen,
  handleDateButton,
}) => {
  return (
    <View style={styles.container}>
      <CustomHeader
        isActive={increasingBoolen}
        onPress={handleIncreasingButton}
        buttonTitle={'Artan Fiyat'}
      />

      <CustomHeader
        isActive={decreasingBoolen}
        onPress={handleDecreasingButton}
        buttonTitle={'Azalan Fiyat'}
      />

      <CustomHeader
        isActive={dateBoolen}
        onPress={handleDateButton}
        buttonTitle={'Tarih'}
      />
    </View>
  );
};

export default Header;
