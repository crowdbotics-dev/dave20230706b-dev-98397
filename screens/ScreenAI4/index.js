import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';

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
    alignItems: 'center'
  },
  header: {
    fontSize: 24,
    fontFamily: 'Lato',
    color: '#376D89',
    backgroundColor: '#DFEDF4',
    padding: 10
  },
  body: {
    fontSize: 18,
    fontFamily: 'Lato',
    color: '#376D89',
    backgroundColor: '#EFF5F7',
    padding: 10
  },
  footer: {
    fontSize: 24,
    fontFamily: 'Lato',
    color: '#376D89',
    backgroundColor: '#DFEDF4',
    padding: 10
  }
});
export default Screen;