import React from 'react';
import {
  ScrollView,
  StyleSheet,
  SafeAreaView 
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Currencies from '../components/Currencies';
import Total from '../components/Total';
import AddButton from '../components/AddButton';

const HomeScreen = () => {
  return (
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView>
          <ScrollView>
            <Currencies />
            <AddButton />
          </ScrollView>
        </KeyboardAwareScrollView>
        <Total />
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
});

export default HomeScreen;
