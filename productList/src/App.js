import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Header from './components/HeaderComponent/Header';
import Input from './components/InputComponent/Input';
import List from './components/List';

const App = () => {
  const [artans, setArtans] = useState([]);
  const [azalans, setAzalans] = useState([]);
  const [tarihs, setTarihs] = useState([]);
  const [product, setProduct] = useState([]);

  const [productb, setProductb] = useState(true);
  const [artanb, setArtanb] = useState(false);
  const [azalanb, setAzalanb] = useState(false);
  const [tarihb, setTarihb] = useState(false);

  const SaveProduct = (nameText, price) => {
    const newProduct = {
      id: Date.now(),
      title: nameText,
      price,
    };
    setProduct([...product, newProduct]);
  };
  useEffect(() => {
    if (artanb) {
      artan();
    } else if (azalanb) {
      azalan();
    } else {
      tarih();
    }
  }, [product]);

  const artan = () => {
    const newProduct = product.sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price),
    );
    setArtanb(true);
    setAzalanb(false);
    setTarihb(false);
    setProductb(false);

    setArtans(newProduct);
  };

  const azalan = () => {
    const newProduct = product.sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price),
    );
    setAzalanb(true);
    setArtanb(false);
    setTarihb(false);
    setProductb(false);

    setAzalans(newProduct);
  };
  const tarih = () => {
    const newProduct = product.sort(
      (a, b) => parseFloat(b.id) - parseFloat(a.id),
    );

    setTarihb(true);
    setArtanb(false);
    setAzalanb(false);
    setProductb(false);

    setTarihs(newProduct);
  };

  const renderList = ({item}) => {
    return <List product={item} />;
  };
  const renderSeperator = () => <View style={styles.seperator} />;

  return (
    <View style={styles.container}>
      <Header
        artan={artan}
        azalan={azalan}
        tarih={tarih}
        artanb={artanb}
        azalanb={azalanb}
        tarihb={tarihb}
      />

      <FlatList
        data={productb ? product : tarihb ? tarihs : azalanb ? azalans : artans}
        renderItem={renderList}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={renderSeperator}
      />

      <Input SaveProduct={SaveProduct} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 3,
  },
  seperator: {
    borderWidth: 0.5,
    borderColor: '#e0e0e0',
  },
});
