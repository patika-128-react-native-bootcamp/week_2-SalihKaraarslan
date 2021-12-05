import React from 'react';
import {View} from 'react-native';
import styles from './Header.style';
import CustomHeader from '../CustomHeader';

const Header = ({
  IncreasingButton,
  DecreasingButton,
  DateButton,
  isIncreasing,
  isDecreasing,
  isData,
}) => {
  return (
    <View style={styles.container}>
      <CustomHeader
        isActive={isIncreasing}
        onPress={IncreasingButton}
        buttonTitle={'Artan Fiyat'}
      />

      <CustomHeader
        isActive={isDecreasing}
        onPress={DecreasingButton}
        buttonTitle={'Azalan Fiyat'}
      />

      <CustomHeader
        isActive={isData}
        onPress={DateButton}
        buttonTitle={'Tarih'}
      />
    </View>
  );
};

export default Header;
