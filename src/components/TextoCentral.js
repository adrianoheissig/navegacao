import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

export default props => {
  const bgColor = props.corFundo || '#000';
  const fgColor = props.corTexto || '#FFF';

  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <Text style={[styles.title, {color: fgColor}]}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
  },
});
