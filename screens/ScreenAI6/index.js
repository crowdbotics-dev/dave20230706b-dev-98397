import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.header}>Header Title</Text>
        <Text style={styles.body}>Body Text</Text>
        <Text style={styles.footer}>Footer Text</Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF5F7'
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  header: {
    fontSize: 24,
    fontFamily: 'Lato',
    color: '#376D89',
    backgroundColor: '#DFEDF4',
    padding: 16,
    textAlign: 'center'
  },
  body: {
    fontSize: 16,
    fontFamily: 'Lato',
    color: '#376D89',
    backgroundColor: '#EFF5F7',
    padding: 16
  },
  footer: {
    fontSize: 16,
    fontFamily: 'Lato',
    color: '#376D89',
    backgroundColor: '#DFEDF4',
    padding: 16,
    textAlign: 'center'
  }
});
export default Screen;