import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { editBase } from '../store/actions';
import { Text, View, StyleSheet, Platform, Picker } from 'react-native';
import SelectInput from 'react-native-select-input-ios';
import TabBarIcon from '../components/TabBarIcon';

const Total = ({ total, rates, editBase }) => {
  const [currency, setCurrency] = useState('USD');
  const [rateNames, setRateNames] = useState([]);

  const handleSelectInput = (itemValue) => {
    setCurrency(itemValue);
    editBase(itemValue)
  } 

  const options = [];

  useEffect(() => {
    for (let key in rates) {
      options.push({ value: key, label: key })
    }
    setRateNames(options)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total: {total}</Text>
      <View style={styles.selectInput}>
        {
          Platform.OS === 'ios'
          ? 
          <SelectInput
            style={{paddingRight: 20}}
            onValueChange={(itemValue) => handleSelectInput(itemValue)}
            value={currency}
            options={rateNames}
          />
          : 
          <Picker
            selectedValue={currency}
            style={{height: 28, width: 120}}
            onValueChange={(itemValue) => handleSelectInput(itemValue)}
          >
            {
              rateNames.map(item => (
                <Picker.Item key={item.value} label={item.value}  value={item.value}  />
              ))
            }
          </Picker>
        }
        {
          Platform.OS === 'ios' &&
          <View style={{marginLeft: 5}}>
            <TabBarIcon
                size={15}
                name="ios-arrow-down"
              />
          </View>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    marginHorizontal: 30,
    paddingVertical: 15,
    borderTopColor: "#bfbfbf",
    borderTopWidth: 1,
  },
  text: {
    fontSize: 18
  },
  selectInput: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#bfbfbf",
    borderBottomWidth: 1,
    paddingVertical: 4,
  }
});

const mapStateToProps = (state) => {
  return {
    // total: state.amounts.reduce((sum, current) => {
    //   return sum + +current.value;
    // }, 0),
    total: state.amounts.reduce((sum, current) => {
      return sum + +current.value / state.rates[current.currency];
    }, 0) * state.rates[state.base],
    rates: state.rates,
    base: state.base
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editBase: (currency) => {
      dispatch(editBase(currency))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Total);