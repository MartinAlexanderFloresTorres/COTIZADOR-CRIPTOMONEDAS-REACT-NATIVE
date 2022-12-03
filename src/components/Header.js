import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.titulo}>Cotiza tus criptomonedas al instante</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#102a41',
    padding: 20,
  },
  titulo: {
    color: '#FFF',
    fontFamily: 'Lato-Black',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Header;
