import React from 'react';

import {Button, StyleSheet, View} from 'react-native';

export default props => {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        {props.voltar ? (
          <Button title="Voltar" onPress={() => props.navigation.goBack()} />
        ) : (
          false
        )}
        {props.avancar ? (
          <Button
            title="Avançar"
            onPress={() => props.navigation.navigate(props.avancar)}
          />
        ) : (
          false
        )}
        {props.avancarComPush ? (
          <Button
            title="Avançar"
            onPress={() =>
              props.navigation.push(props.avancarComPush, props.params)
            }
          />
        ) : (
          false
        )}
      </View>

      <View style={styles.container}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
