import React from "react";
import { View, Image, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from "react-native";

const CreateProfileScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("PetGallery")}>
          <Image style={styles.closeButton} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create</Text>
      </View>
      <ScrollView style={styles.body}>
        <TouchableOpacity style={styles.changePhotoButton}>
          <Text style={styles.changePhotoButtonText}>Change Photo</Text>
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Pet Name</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Pet Type</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Date of Adoption</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Description</Text>
          <TextInput style={styles.multilineInput} multiline />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Special Attributes</Text>
          <TextInput style={styles.multilineInput} multiline />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Image Url</Text>
          <TextInput style={styles.input} />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.createProfileButton}>
        <Text style={styles.createProfileButtonText}>Create Profile</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF5F7'
  },
  header: {
    backgroundColor: '#DFEDF4'
  },
  headerTitle: {
    color: '#376D89',
    fontFamily: 'Lato'
  },
  body: {
    backgroundColor: '#EFF5F7',
    color: '#7D9BAA',
    fontFamily: 'Lato'
  },
  label: {
    color: '#376D89',
    fontFamily: 'Lato'
  },
  input: {
    color: '#7D9BAA',
    fontFamily: 'Lato'
  },
  multilineInput: {
    color: '#7D9BAA',
    fontFamily: 'Lato'
  },
  createProfileButton: {
    backgroundColor: '#DFEDF4'
  },
  createProfileButtonText: {
    color: '#376D89',
    fontFamily: 'Lato'
  }
});
export default CreateProfileScreen;