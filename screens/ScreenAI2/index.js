import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

const PetGalleryScreen = () => {
  const [filter, setFilter] = useState('explore');
  const [pets, setPets] = useState([{
    id: 1,
    name: 'Buddy',
    type: 'Dog',
    image_url: 'https://tinyurl.com/42evm3m3',
    is_favorite: false,
    description: 'A friendly and playful dog.',
    date_adopted: '2022-01-01',
    user: 'John Doe'
  } // Add more pets here
  ]);

  const handleFilterChange = newFilter => {
    setFilter(newFilter);
  };

  const handleFavoriteToggle = petId => {
    setPets(prevPets => prevPets.map(pet => pet.id === petId ? { ...pet,
      is_favorite: !pet.is_favorite
    } : pet));
  };

  return <SafeAreaView style={_styles.WtOCTGMG}>
      <View style={_styles.tjWZzpex}>
        <Text style={_styles.VSTwwJsV}>Explore</Text>
        <TouchableOpacity onPress={() => {}}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.vOlzNEaj} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{
      backgroundColor: '#EFF5F7',
      padding: 16
    }}>
        <View style={_styles.GvyAUvFN}>
          {pets.map(pet => <TouchableOpacity key={pet.id} onPress={() => {}} style={_styles.sdWJesCl}>
              <Image source={{
            uri: pet.image_url
          }} style={_styles.ghBIkDxx} />
              <Text style={_styles.hQjeWCSs}>{pet.name}</Text>
              <TouchableOpacity onPress={() => handleFavoriteToggle(pet.id)}>
                <Image source={{
              uri: 'https://tinyurl.com/42evm3m3'
            }} style={_styles.sdDwtkhh} />
              </TouchableOpacity>
            </TouchableOpacity>)}
        </View>
      </ScrollView>
      <View style={_styles.zxwyOyYv}>
        <TouchableOpacity onPress={() => handleFilterChange('explore')}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.oObpSJiZ} />
          <Text style={_styles.FhPHaSjK}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFilterChange('my_pets')}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.qURNixsb} />
          <Text style={_styles.zEQtJTLj}>My Pets</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFilterChange('my_favs')}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.xFDzKQux} />
          <Text style={_styles.XpevPiJm}>My Favs</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

export default PetGalleryScreen;

const _styles = StyleSheet.create({
  WtOCTGMG: {
    flex: 1
  },
  tjWZzpex: {
    backgroundColor: "#DFEDF4",
    padding: 16
  },
  VSTwwJsV: {
    color: "#376D89",
    fontSize: 20,
    textAlign: "center"
  },
  vOlzNEaj: {
    width: 24,
    height: 24,
    alignSelf: "flex-end"
  },
  GvyAUvFN: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  sdWJesCl: {
    width: "48%",
    marginBottom: 16,
    backgroundColor: "#EFF5F7",
    borderRadius: 8,
    padding: 8
  },
  ghBIkDxx: {
    width: "100%",
    height: 150,
    borderRadius: 8
  },
  hQjeWCSs: {
    color: "#376D89",
    marginTop: 8
  },
  sdDwtkhh: {
    width: 24,
    height: 24,
    alignSelf: "flex-end"
  },
  zxwyOyYv: {
    backgroundColor: "#DFEDF4",
    padding: 16
  },
  oObpSJiZ: {
    width: 24,
    height: 24,
    alignSelf: "center"
  },
  FhPHaSjK: {
    color: "#376D89",
    textAlign: "center"
  },
  qURNixsb: {
    width: 24,
    height: 24,
    alignSelf: "center"
  },
  zEQtJTLj: {
    color: "#376D89",
    textAlign: "center"
  },
  xFDzKQux: {
    width: 24,
    height: 24,
    alignSelf: "center"
  },
  XpevPiJm: {
    color: "#376D89",
    textAlign: "center"
  }
});