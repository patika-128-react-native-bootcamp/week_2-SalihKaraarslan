import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import styles from './App.style';
import Header from './components/HeaderComponent/Header';
import List from './components/List';
import Input from './components/InputComponent/Input';

const App = () => {
  const [product, setProduct] = useState([]);

  const [isActive, setIsActive] = useState({
    isIncreasing: false,
    isDecreasing: false,
    isDate: true,
  });

  const {isIncreasing, isDecreasing, isDate} = isActive;

  const SaveProduct = (name, price) => {
    const newProduct = {
      name,
      price,
      id: Date.now(),
    };
    setProduct([...product, newProduct]);
  };

  // Artan Fiyat butonuna basıldığında basılan butonu aktif diğer butonları pasif yapar ve Product arrayindeki elemanların price değerini büyükten küçüğe sıralar
  const IncreasingButton = () => {
    setIsActive({
      isIncreasing: true,
      isDecreasing: false,
      isDate: false,
    });
    setProduct(
      product.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)),
    );
  };

  // Azalan Fiyat butonuna basıldığında basılan butonu aktif diğer butonları pasif yapar ve Product arrayindeki elemanların price değerini küçükten büyüğe sıralar
  const DecreasingButton = () => {
    setIsActive({
      isIncreasing: false,
      isDecreasing: true,
      isDate: false,
    });
    setProduct(
      product.sort((a, b) => parseFloat(b.price) - parseFloat(a.price)),
    );
  };

  // Tarih butonuna basıldığında basılan butonu aktif diğer butonları pasif yapar ve Product arrayindeki elemanları eklenilme tarihine göre sıralar
  const DateButton = () => {
    setIsActive({
      isIncreasing: false,
      isDecreasing: false,
      isDate: true,
    });
    setProduct(product.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)));
  };

  // Product dizisine yeni eleman eklenince, eklenen elemanı hangi buton aktif ise ona göre product arrayini tekrardan sıralayıp uygun olduğu sıraya koyar
  useEffect(() => {
    if (isIncreasing) {
      product.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (isDecreasing) {
      product.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else {
      product.sort((a, b) => parseFloat(b.id) - parseFloat(a.id));
    }
  }, [product]);

  const renderSeperator = () => <View style={styles.seperator} />;
  const renderList = ({item}) => {
    return <List product={item} />;
  };

  return (
    <View style={styles.container}>
      <Header
        IncreasingButton={IncreasingButton}
        DecreasingButton={DecreasingButton}
        DateButton={DateButton}
        isIncreasing={isIncreasing}
        isDecreasing={isDecreasing}
        isDate={isDate}
      />
      <FlatList
        data={product}
        renderItem={renderList}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={renderSeperator}
      />
      <Input SaveProduct={SaveProduct} />
    </View>
  );
};

export default App;
