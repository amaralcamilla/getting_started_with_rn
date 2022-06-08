import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { View } from 'react-native-web';

const ComponentsScreen = () => {
  const name = 'Camilla';
  
  return (
    <View> 
    <Text style={styles.text}>Getting started with React Native!</Text>
    <Text style={styles.textSubtitle}>Here is {name}</Text>
    </View>
 )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45
  },
  textSubtitle: {
    fontSize: 20
  }
});

export default ComponentsScreen;