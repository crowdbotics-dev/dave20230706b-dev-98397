import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.header}>Header</Text>
        <Text style={styles.body}>Body</Text>
        <Text style={styles.footer}>Footer</Text>
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
    padding: 16
  },
  body: {
    fontSize: 16,
    fontFamily: 'Lato',
    color: '#376D89',
    backgroundColor: '#EFF5F7',
    padding: 16
  },
  footer: {
    fontSize: 18,
    fontFamily: 'Lato',
    color: '#376D89',
    backgroundColor: '#DFEDF4',
    padding: 16
  }
});
export default Screen;