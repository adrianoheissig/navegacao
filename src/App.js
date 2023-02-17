import React, {Component} from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';

import TelaA from './views/TelaA';
import TelaB from './views/TelaB';
import TelaC from './views/TelaC';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TelaA />
        <TelaB />
        <TelaC />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
