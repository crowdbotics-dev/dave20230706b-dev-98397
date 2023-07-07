import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";

const PetGalleryScreen = ({
  navigation
}) => {
  const [pets, setPets] = useState([{
    id: "1",
    name: "RoboDog",
    type: "Dog",
    images: ["https://tinyurl.com/42evm3m3", "https://tinyurl.com/42evm3m3", "https://tinyurl.com/42evm3m3"],
    is_favorite: false,
    currentImageIndex: 0
  }, {
    id: "2",
    name: "RoboCat",
    type: "Cat",
    images: ["https://tinyurl.com/42evm3m3", "https://tinyurl.com/42evm3m3", "https://tinyurl.com/42evm3m3"],
    is_favorite: true,
    currentImageIndex: 0
  } // Add more pets as needed
  ]);
  const [filter, setFilter] = useState("Explore");
  const filteredPets = pets.filter(pet => {
    if (filter === "My Pets") return pet.user;
    if (filter === "My Favs") return pet.is_favorite;
    return true;
  });

  const toggleFavorite = id => {
    setPets(pets.map(pet => pet.id === id ? { ...pet,
      is_favorite: !pet.is_favorite
    } : pet));
  };

  const changeImage = (id, direction) => {
    setPets(pets.map(pet => pet.id === id ? { ...pet,
      currentImageIndex: (pet.currentImageIndex + direction + pet.images.length) % pet.images.length
    } : pet));
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Pet Profile")}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.addButton} />
        </TouchableOpacity>
      </View>
      <FlatList data={filteredPets} numColumns={2} keyExtractor={item => item.id} renderItem={({
      item
    }) => <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Pet Details", {
      pet: item
    })}>
            <TouchableOpacity onPress={() => changeImage(item.id, -1)}>
              <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.arrowButton} />
            </TouchableOpacity>
            <Image source={{
        uri: item.images[item.currentImageIndex]
      }} style={styles.petImage} />
            <TouchableOpacity onPress={() => changeImage(item.id, 1)}>
              <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.arrowButton} />
            </TouchableOpacity>
            <Text style={styles.petName}>{item.name}</Text>
            <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
              <Image source={{
          uri: item.is_favorite ? "https://tinyurl.com/42evm3m3" : "https://tinyurl.com/42evm3m3"
        }} style={styles.favoriteButton} />
            </TouchableOpacity>
          </TouchableOpacity>} />
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => setFilter("Explore")}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.footerButton} />
          <Text style={styles.footerText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter("My Pets")}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.footerButton} />
          <Text style={styles.footerText}>My Pets</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter("My Favs")}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.footerButton} />
          <Text style={styles.footerText}>My Favs</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF5F7"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#DFEDF4",
    padding: 10
  },
  title: {
    fontSize: 20,
    color: "#376D89"
  },
  addButton: {
    width: 30,
    height: 30
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: "#EFF5F7",
    borderRadius: 10,
    padding: 10,
    alignItems: "center"
  },
  petImage: {
    width: "100%",
    height: 100,
    borderRadius: 10
  },
  arrowButton: {
    position: "absolute",
    width: 30,
    height: 30
  },
  petName: {
    fontSize: 16,
    color: "#376D89",
    marginTop: 10
  },
  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 30,
    height: 30
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#DFEDF4",
    padding: 10
  },
  footerButton: {
    width: 30,
    height: 30
  },
  footerText: {
    fontSize: 14,
    color: "#376D89"
  }
});
export default PetGalleryScreen;