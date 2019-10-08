import React from 'react';
import { connect } from 'react-redux';
import { deleteAmount, editAmount } from '../store/actions';
import { View, FlatList, StyleSheet } from 'react-native';
import CurrenciesItems from '../components/CurrenciesItem';


const Currencies = ({ amounts, deleteAmount, editAmount }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={amounts}
        renderItem={({ item }) => <CurrenciesItems onDelete={deleteAmount} item={item} onEditValue={editAmount} />}
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

const mapStateToProps = (state) => {
  return {
    amounts: state.amounts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAmount: (id) => {
      dispatch(deleteAmount(id))
    },
    editAmount: (id, value) => {
      dispatch(editAmount(id, value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);