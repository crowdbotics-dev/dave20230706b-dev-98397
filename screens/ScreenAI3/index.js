import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const PetGallery = ({
  navigation
}) => {
  const [pets, setPets] = useState([{
    id: 1,
    name: 'Pet 1',
    image_url: 'https://tinyurl.com/42evm3m3',
    is_favorite: false
  }, {
    id: 2,
    name: 'Pet 2',
    image_url: 'https://tinyurl.com/42evm3m3',
    is_favorite: true
  } // Add more pets as needed
  ]);

  const toggleFavorite = id => {
    setPets(pets.map(pet => pet.id === id ? { ...pet,
      is_favorite: !pet.is_favorite
    } : pet));
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Pet Profile')}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.addButton} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.body}>
        {pets.map(pet => <TouchableOpacity key={pet.id} style={styles.card} onPress={() => navigation.navigate('Pet Details', {
        pet
      })}>
            <Image source={{
          uri: pet.image_url
        }} style={styles.petImage} />
            <Text style={styles.petName}>{pet.name}</Text>
            <TouchableOpacity onPress={() => toggleFavorite(pet.id)}>
              <Image source={{
            uri: pet.is_favorite ? 'https://tinyurl.com/42evm3m3' : 'https://tinyurl.com/42evm3m3'
          }} style={styles.favoriteButton} />
            </TouchableOpacity>
          </TouchableOpacity>)}
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.footerButton} />
          <Text style={styles.footerText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.footerButton} />
          <Text style={styles.footerText}>My Pets</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.footerButton} />
          <Text style={styles.footerText}>My Favs</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFEDF4'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#DFEDF4'
  },
  title: {
    fontSize: 20,
    color: '#376D89'
  },
  addButton: {
    width: 30,
    height: 30
  },
  body: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10
  },
  card: {
    width: '45%',
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#EFF5F7',
    padding: 10
  },
  petImage: {
    width: '100%',
    height: 100
  },
  petName: {
    textAlign: 'left',
    color: '#376D89'
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 30,
    height: 30
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#DFEDF4'
  },
  footerButton: {
    width: 30,
    height: 30
  },
  footerText: {
    textAlign: 'center',
    color: '#376D89'
  }
});
export default PetGallery;