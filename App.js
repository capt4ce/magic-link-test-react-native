import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Magic } from '@magic-sdk/react-native';
import Web3 from 'web3';

const BSCOptions = {
  rpcUrl: '', // Smart Chain RPC URL
  chainId: 56, // Smart Chain chain id
};
const m = new Magic('', {
  network: BSCOptions,
});

const web3 = new Web3(m.rpcProvider);

export default function App() {
  const [balance, setBalance] = useState('0');

  web3.eth
    .getBalance('0x275e400c6f8b1cee71060c2c5C1AbbE0b72bBB60')
    .then((balance) => {
      setBalance(balance);
    })
    .catch((err) => setBalance(JSON.stringify(err)));
  return (
    <View style={styles.container}>
      {/* Remember to render the `Relayer` component into your app! */}
      <m.Relayer />
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Balance: {balance}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
