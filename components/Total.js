import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

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

export default Total;