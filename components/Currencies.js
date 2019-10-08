import React from 'react';
import { Text, View, FlatList, StyleSheet, KeyboardAvoidingView } from 'react-native';
import CurrenciesItems from '../components/CurrenciesItem';


const Currencies = ({ onEditValue, onDelete, items }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => <CurrenciesItems onDelete={onDelete} item={item} onEditValue={onEditValue} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default Currencies;