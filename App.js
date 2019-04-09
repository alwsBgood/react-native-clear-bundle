import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './app/navigation/AppNavigator';
import layout from './app/constanstants/Layout';
import store from './app/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={layout.window}>
        <AppNavigator />
      </View>
    </Provider>
  );
}
