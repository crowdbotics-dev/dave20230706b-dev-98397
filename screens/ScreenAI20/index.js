import React from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const PetDetailsScreen = ({
  route,
  navigation
}) => {
  const pet = route?.params.pet || {};
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Pet Gallery")}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.closeButton} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{pet.name}</Text>
      </View>
      <Image source={{
      uri: pet.image_url
    }} style={styles.petImage} />
      <View style={styles.petInfo}>
        <Text style={styles.petName}>{pet.name}</Text>
        <Image source={{
        uri: pet.is_favorite ? "https://tinyurl.com/42evm3m3" : ""
      }} style={styles.favButton} />
      </View>
      <View style={styles.petDetails}>
        <Text style={styles.label}>Pet Name</Text>
        <Text style={styles.detail}>{pet.name}</Text>
        <Text style={styles.label}>Pet Type</Text>
        <Text style={styles.detail}>{pet.type}</Text>
        <Text style={styles.label}>Date of Adoption</Text>
        <Text style={styles.detail}>{pet.date_adopted}</Text>
        <Text style={styles.label}>Description</Text>
        <Text style={styles.detail}>{pet.description}</Text>
        <Text style={styles.label}>Special Attributes</Text>
        <Text style={styles.detail}>{pet.attributes}</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF5F7"
  },
  header: {
    backgroundColor: "#DFEDF4",
    padding: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  closeButton: {
    width: 30,
    height: 30
  },
  headerTitle: {
    color: "#376D89",
    fontSize: 20,
    textAlign: "center",
    flex: 1
  },
  petImage: {
    width: "100%",
    height: "50%"
  },
  petInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  petName: {
    fontSize: 18,
    color: "#376D89"
  },
  favButton: {
    width: 30,
    height: 30
  },
  petDetails: {
    padding: 10
  },
  label: {
    fontSize: 16,
    color: "#376D89"
  },
  detail: {
    fontSize: 16,
    color: "#7D9BAA"
  }
});
export default PetDetailsScreen;