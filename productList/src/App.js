import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import styles from './App.style'

import Header from './components/HeaderComponent/Header';
import Input from './components/InputComponent/Input';
import List from './components/List';

const App = () => {
  const [product, setProduct] = useState([]);

  const [sortedProduct, setSortedProduct] = useState({
    increasing: [],
    decreasing: [],
    date: [],
  });
  const [boolean, setBoolean] = useState({
    productBoolen: true,
    increasedBoolen: false,
    decreasingBoolen: false,
    dateBoolen: false,
  });
  const {increasingBoolen} = boolean;
  const {decreasingBoolen} = boolean;
  const {dateBoolen} = boolean;
  const {productBoolen} = boolean;

  const {increasing} = sortedProduct;
  const {decreasing} = sortedProduct;
  const {date} = sortedProduct;


  const SaveProduct = (nameText, price) => {
    const newProduct = {
      id: Date.now(),
      title: nameText,
      price,
    };
    setProduct([...product, newProduct]);
  };


  const handleIncreasingButton = () => {
    const newProduct = product.sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price),
    );
    setBoolean({
      increasingBoolen: true,
      decreasingBoolen: false,
      dateBoolen: false,
      productBoolen: false,
    });
    setSortedProduct({
      increasing: newProduct,
    });
  };

  const handleDecreasingButton = () => {
    const newProduct = product.sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price),
    );
    setBoolean({
      increasingBoolen: false,
      decreasingBoolen: true,
      dateBoolen: false,
      productBoolen: false,
    });
    setSortedProduct({
      decreasing: newProduct,
    });
  };

  const handleDateButton = () => {
    const newProduct = product.sort(
      (a, b) => parseFloat(b.id) - parseFloat(a.id),
    );
    setBoolean({
      increasingBoolen: false,
      decreasingBoolen: false,
      dateBoolen: true,
      productBoolen: false,
    });
    setSortedProduct({
      date: newProduct,
    });
  };

  useEffect(() => {
    if (increasingBoolen) {
      handleIncreasingButton();
    } else if (decreasingBoolen) {
      handleDecreasingButton();
    } else {
      handleDateButton();
    }
  }, [product]);
  

  const renderSeperator = () => <View style={styles.seperator} />;

  const renderList = ({item}) => {
    return <List product={item} />;
  };

  return (
    <View style={styles.container}>
      <Header
        increasingBoolen={increasingBoolen}
        handleIncreasingButton= {handleIncreasingButton}
        decreasingBoolen={decreasingBoolen}
        handleDecreasingButton={handleDecreasingButton}
        dateBoolen={dateBoolen}
        handleDateButton={handleDateButton}
      />

      <FlatList
        data={
          productBoolen
            ? product
            : dateBoolen
            ? date
            : decreasingBoolen
            ? decreasing
            : increasing
        }
        renderItem={renderList}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={renderSeperator}
      />

      <Input SaveProduct={SaveProduct} />
    </View>
  );
};

export default App;