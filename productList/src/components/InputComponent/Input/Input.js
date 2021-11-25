import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import CustomInput from '../CustomInput/CustomInput';
import styles from './Input.style'

const Input = ({SaveProduct}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState();


  const handleClick = () => {
    if (name === '' || !Number(price)) return;
    SaveProduct(name, price);
    setName('');
    setPrice('');
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.text}>Name</Text>
        <CustomInput
          onChangeText={setName}
          value={name}
        />
        <Text style={styles.text}>Price</Text>
        <CustomInput
          onChangeText={setPrice}
          value={price}
        />
        <TouchableOpacity style={styles.button} onPress={handleClick}>
          <Text style={styles.button_text}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Input;
