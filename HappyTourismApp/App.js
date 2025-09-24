import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const places = [
  { name: 'Taj Mahal', image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg' },
  { name: 'Goa Beach', image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Goa_beach_2016-11-29_2.jpg' },
  { name: 'Kerala Backwaters', image: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Kerala_Backwaters.JPG' },
  { name: 'Hampi Ruins', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Hampi_ruins.jpg' }
];

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to Happy Tourism!</Text>
      {places.map((place, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: place.image }} style={styles.image} />
          <Text style={styles.placeName}>{place.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#007acc'
  },
  card: {
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
    padding: 10
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8
  },
  placeName: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: '600',
    textAlign: 'center'
  }
});
