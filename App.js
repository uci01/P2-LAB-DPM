import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Teks from './components/teks';
import Kotak from './components/kotak';

export default function App() {
  const [showTeks, setShowTeks] = useState(true);

  return (
    <View style={styles.container}>
      {showTeks ? <Teks /> : <Kotak />}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, showTeks && styles.activeButton]}
          onPress={() => setShowTeks(true)}
        >
          <Text style={styles.buttonText}>Tampilkan Teks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, !showTeks && styles.activeButton]}
          onPress={() => setShowTeks(false)}
        >
          <Text style={styles.buttonText}>Tampilkan Kotak</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#D3D3D3', // Abu-abu terang
  },
  button: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF', // Biru standar
  },
  activeButton: {
    backgroundColor: '#005BB5', // Biru lebih gelap untuk tombol aktif
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
