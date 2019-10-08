import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import id from 'uuid/v4';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  KeyboardAvoidingView,
  SafeAreaView 
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Currencies from '../components/Currencies';
import Total from '../components/Total';
import TabBarIcon from '../components/TabBarIcon';

const HomeScreen = () => {
  const [items, setItems] = useState([{value: null, id: id()}])

  const addItem = () => {
    setItems(
      [...items, { value: null, id: id() }]
    )
  }

  const onDelete = (id) => {
    setItems(
      items.filter(item => {
        return item.id !== id
      })
    )
  }

  const onEditValue = (id, value) => {
    setItems(
      items.map(item => {
        return item.id === id ? { value, id } : item
      })
    )
  }

  const total = items.reduce((sum, current) => {
    return sum + +current.value;
  }, 0);

  return (
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView>
          <ScrollView>
            <Currencies onDelete={onDelete} items={items} onEditValue={onEditValue} />
            <View style={styles.btn} >
              <TouchableOpacity onPress={addItem}>
              <TabBarIcon
                size={40}
                style={styles.addButton}
                name={Platform.OS === 'ios'
                  ? 'ios-add-circle-outline'
                  : 'add-circle-outline'}
              />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
        <Total total={total} />
      </SafeAreaView >
    
  );
}

HomeScreen.navigationOptions = {
  title: 'MoneyTo',
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between'
  },
  btn: {
    alignItems: 'center'
  },
  addButton: {

  }
});

export default HomeScreen;
