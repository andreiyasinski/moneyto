import React from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';

const Total = ({ total }) => {
  return (
    <View style={styles.container}>
      <Text>Total: {total}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});

const mapStateToProps = (state) => {
  return {
    total: state.amounts.reduce((sum, current) => {
      return sum + +current.value;
    }, 0)
  }
}

export default connect(mapStateToProps)(Total);