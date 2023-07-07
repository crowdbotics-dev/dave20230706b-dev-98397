import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.body}>
        <Text style={styles.header}>Header Title</Text>
        <Text style={styles.label}>Body Content</Text>
      </ScrollView>
      <Text style={styles.footer}>Footer Content</Text>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFEDF4'
  },
  body: {
    flexGrow: 1,
    backgroundColor: '#EFF5F7',
    padding: 16
  },
  header: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Lato',
    color: '#376D89',
    marginTop: 16
  },
  label: {
    fontSize: 16,
    fontFamily: 'Lato',
    color: '#376D89',
    marginTop: 16
  },
  footer: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Lato',
    color: '#376D89',
    backgroundColor: '#DFEDF4',
    padding: 16
  }
});
export default Screen;