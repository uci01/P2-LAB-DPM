import React from 'react';
import { View, StyleSheet } from 'react-native';

const kotak = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: 'blue' }]} />
      <View style={[styles.box, { backgroundColor: 'green' }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
    paddingHorizontal: 20,
  },
  box: {
    width: 100,
    height: 100,
  },
});

export default kotak;
