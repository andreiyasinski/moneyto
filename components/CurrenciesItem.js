import React, { useState } from 'react';
import SelectInput from 'react-native-select-input-ios';
import { 
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import TabBarIcon from '../components/TabBarIcon';

const CurrenciesItems = ({ onEditValue, onDelete, item }) => {
  const [input, setInput] = useState(null)
  const [currency, setCurrency] = useState('js');

  const handleInput = (value) => {
    setInput(value);
    onEditValue(item.id, value)
  }
  const options = [
    { value: 'kjavvasd', label: 'kjavvasd11' },
    { value: 'kjavv1asd', label: 'kj1avvasd11' }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput 
          onChangeText={text => handleInput(text) }
          value={input}
          placeholder="Amount..."
          keyboardType="numeric"
        />
      </View>
      <SelectInput value={'kjavvasd'} options={options} />
      <View>
        <TouchableOpacity style={{paddingHorizontal: 12}} onPress={() => onDelete(item.id)}>
          <TabBarIcon
            size={40}
            style={styles.addButton}
            name={Platform.OS === 'ios'
              ? 'ios-close'
              : 'close'}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 10
  },
  input: {
    flex: 1,
    borderBottomColor: "#bfbfbf",
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
});

export default CurrenciesItems;

