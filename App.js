import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import LoginScreen from './Login';
import HomePage from './HomePage'

export default function App() {
  return (
    <SafeAreaView>
      <HomePage />
    </SafeAreaView>
  );
}

