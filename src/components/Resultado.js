import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import useCriptos from '../hooks/useCriptos';

const Resultado = () => {
  // useCriptos
  const { resultado } = useCriptos();

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL } =
    resultado;

  return (
    <View style={styles.resultado}>
      <View style={styles.imagen}>
        <Image
          style={styles.image}
          source={{ uri: 'https://www.cryptocompare.com' + IMAGEURL }}
        />
      </View>

      <Text style={styles.texto}>
        Precio:
        <Text style={styles.bold}> {PRICE}</Text>
      </Text>

      <Text style={styles.texto}>
        Precio más alto del día:
        <Text style={styles.bold}> {HIGHDAY}</Text>
      </Text>

      <Text style={styles.texto}>
        Precio más bajo del día:
        <Text style={styles.bold}> {LOWDAY}</Text>
      </Text>

      <Text style={styles.texto}>
        Variación últimas 24 horas:
        <Text style={styles.bold}> {CHANGEPCT24HOUR}</Text>
      </Text>

      <Text style={styles.texto}>
        Última actualización:
        <Text style={styles.bold}> {LASTUPDATE}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultado: {
    backgroundColor: '#102a41',
    padding: 30,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  imagen: {
    alignItems: 'center',
    marginBottom: 40,
  },
  image: {
    width: 150,
    height: 150,
  },
  texto: {
    color: '#F2F2F2',
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'Lato-Regular',
  },
  bold: {
    color: '#FFF',
    fontWeight: 'bold',
    fontFamily: 'Lato-Black',
  },
});

export default Resultado;
