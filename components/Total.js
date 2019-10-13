import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { editBase } from '../store/actions';
import { Text, View, StyleSheet, Platform } from 'react-native';
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
      <Text>Total: {total}</Text>
      <View style={styles.selectInput}>
        <SelectInput
          onValueChange={(itemValue) => handleSelectInput(itemValue)}
          value={currency}
          options={rateNames}
        />
        <View style={{marginLeft: 5}}>
          <TabBarIcon
              size={20}
              name={Platform.OS === 'ios'
                ? 'ios-arrow-down'
                : 'sort-down'}
            />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingHorizontal: 30,
    marginVertical: 20
  },
  selectInput: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
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