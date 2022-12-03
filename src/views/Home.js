import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Formulario from '../components/Formulario';
import Resultado from '../components/Resultado';
import useCriptos from '../hooks/useCriptos';

const Home = () => {
  // useCriptos
  const { error, cargando, resultado } = useCriptos();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <Formulario />

        {cargando ? (
          <ActivityIndicator color={'#24415b'} size={50} />
        ) : error ? (
          <Text style={styles.error}>Hubo un error</Text>
        ) : (
          Object.keys(resultado).length > 0 && <Resultado />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d2235',
    flex: 1,
  },
  error: {
    fontFamily: 'Lato-Black',
    backgroundColor: '#fa4a4a',
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    textTransform: 'uppercase',
  },
});

export default Home;
