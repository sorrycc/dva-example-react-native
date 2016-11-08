import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'dva/mobile';
import CounterText from '../components/CounterText';

const App = connect(({ count }) => ({ count }))((props) => {
  const { dispatch, count } = props;
  return (
    <View style={styles.container}>
      <CounterText count={count} />
      <TouchableOpacity onPress={() => { dispatch({ type: 'count/add' }) }}>
        <Text>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { dispatch({ type: 'count/addDelay' }) }}>
        <Text>Delay Add</Text>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;
