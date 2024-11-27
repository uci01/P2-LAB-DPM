import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const teks = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Suci Suryani</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3D3D3', 
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default teks;
