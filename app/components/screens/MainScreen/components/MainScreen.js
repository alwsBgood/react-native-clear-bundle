import React, { useState } from 'react';
import { Platform, Text, View } from 'react-native';
import styles from './styles';

export default function MainScreen() {
  const [instructions] = useState(
    Platform.select({
      ios: `Press Cmd+R to reload,\n Cmd+D or shake for dev menu`,
      android: `Double tap R on your keyboard to reload,\n Shake or press menu button for dev menu`,
    })
  );

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Text style={styles.instructions}>To get started, edit App.js</Text>
      <Text style={styles.instructions}>{instructions}</Text>
    </View>
  );
}
