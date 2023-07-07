import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Header Title</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>Body Text</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer Text</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF5F7'
  },
  header: {
    backgroundColor: '#DFEDF4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  headerTitle: {
    color: '#376D89',
    fontFamily: 'Lato',
    fontSize: 20
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bodyText: {
    color: '#376D89',
    fontFamily: 'Lato',
    fontSize: 16
  },
  footer: {
    backgroundColor: '#DFEDF4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  footerText: {
    color: '#376D89',
    fontFamily: 'Lato',
    fontSize: 16
  }
});
export default Screen;