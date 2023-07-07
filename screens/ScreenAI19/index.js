import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';

const CreateProfileScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('PetGallery')}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.closeButton} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={styles.changePhotoButton}>
          <Text style={styles.changePhotoButtonText}>Change Photo</Text>
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder="Pet Name" />
        <TextInput style={styles.input} placeholder="Pet Type" />
        <TextInput style={styles.input} placeholder="Date of Adoption" />
        <TextInput style={styles.input} placeholder="Description" multiline={true} />
        <TextInput style={styles.input} placeholder="Special Attributes" multiline={true} />
        <TextInput style={styles.input} placeholder="Image Url" />
      </View>
      <TouchableOpacity style={styles.createProfileButton}>
        <Text style={styles.createProfileButtonText}>Create Profile</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFEDF4'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DFEDF4',
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  closeButton: {
    width: 24,
    height: 24,
    tintColor: '#376D89'
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#376D89',
    marginLeft: 16
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFF5F7',
    paddingHorizontal: 16
  },
  changePhotoButton: {
    backgroundColor: '#EFF5F7',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 16
  },
  changePhotoButtonText: {
    fontSize: 16,
    color: '#376D89'
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#EFF5F7',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    color: '#376D89'
  },
  createProfileButton: {
    backgroundColor: '#376D89',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignSelf: 'center',
    marginBottom: 16
  },
  createProfileButtonText: {
    fontSize: 16,
    color: 'white'
  }
});
export default CreateProfileScreen;