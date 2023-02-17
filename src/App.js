import React, {Component} from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';

import TextoCentral from './components/TextoCentral';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TextoCentral>App</TextoCentral>
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
