import React from 'react';
import { connect } from 'react-redux';
import { addAmount } from '../store/actions';
import { View, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import TabBarIcon from '../components/TabBarIcon';

const AddButton = ({addAmount}) => {
  return (
    <View style={styles.container} >
      <TouchableOpacity onPress={addAmount}>
      <TabBarIcon
        size={50}
        name={Platform.OS === 'ios'
          ? 'ios-add-circle-outline'
          : 'md-add-circle-outline'}
      />
      </TouchableOpacity>
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
    amounts: state.amounts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addAmount: () => {
      dispatch(addAmount())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddButton);