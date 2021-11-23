import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './Input.style';

const Input = ({SaveProduct}) => {
  const [nameText, setNameText] = useState('');
  const [price, setPrice] = useState();

  const handleClick = () => {
    if (nameText === '' || price === '') return;
    SaveProduct(nameText, price);
    setNameText('');
    setPrice('');
  };
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.text}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNameText}
          value={nameText}
          placeholder="Ürün adını giriniz..."
        />
        <Text style={styles.text}>Price</Text>

        <TextInput
          style={styles.input}
          onChangeText={setPrice}
          value={price}
          placeholder="Fiyatı giriniz.."
        />
        <TouchableOpacity style={styles.button} onPress={handleClick}>
          <Text style={styles.button_text}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Input;
