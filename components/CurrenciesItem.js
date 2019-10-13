import React, { useState, useEffect } from 'react';
import SelectInput from 'react-native-select-input-ios';
import { 
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import TabBarIcon from '../components/TabBarIcon';

const CurrenciesItems = ({ onEditValue, onDelete, item, rates }) => {
  const [input, setInput] = useState(null)
  const [currency, setCurrency] = useState('USD');
  const [rateNames, setRateNames] = useState([]);

  const handleInput = (value) => {
    setInput(value);
    onEditValue(item.id, value, currency)
  }

  const handleSelectInput = (itemValue) => {
    setCurrency(itemValue)
    onEditValue(item.id, input, itemValue)
  }

  const options = [];

  useEffect(() => {
    for (let key in rates) {
      options.push({ value: key, label: key })
    }
    setRateNames(options)
  }, [rates])

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
      <View style={styles.selectInput}>
        <SelectInput
          style={{paddingRight: 20}}
          onValueChange={(itemValue) => handleSelectInput(itemValue)}
          value={currency}
          options={rateNames}
        />
        <View >
          <TabBarIcon
              size={15}
              name={Platform.OS === 'ios'
                ? 'ios-arrow-down'
                : 'sort-down'}
            />
        </View>
      </View>
      <View>
        <TouchableOpacity style={{paddingHorizontal: 12}} onPress={() => onDelete(item.id)}>
          <TabBarIcon
            size={40}
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
  selectInput: {
    // paddingHorizontal: 15,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#bfbfbf",
    borderBottomWidth: 1,
    paddingVertical: 5,
  }
});

export default CurrenciesItems;

