import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MONEDAS } from '../constants/monedas';
import useCriptos from '../hooks/useCriptos';
import getCriptos from '../services/getCriptos';

const Formulario = () => {
  // Estados
  const [criptos, setCriptos] = useState([]);
  const [moneda, setMoneda] = useState('');
  const [cripto, setCripto] = useState('');

  // useCriptos
  const { setMonedaCripto } = useCriptos();

  // useEffect criptos
  useEffect(() => {
    getCriptos()
      .then(({ Data }) => {
        setCriptos(Data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // Funciones
  const handleCotizar = () => {
    // Validar
    if (moneda.trim() === '' || cripto.trim() === '') {
      Alert.alert('Validación', 'Ambos campos son obligatorios');
      return;
    }

    // Pasar los datos al componente principal
    setMonedaCripto(moneda, cripto);
  };
  return (
    <View style={styles.formulario}>
      <View style={styles.imagen}>
        <Image
          style={styles.image}
          source={require('../assets/img/cryptomonedas.png')}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Moneda</Text>
        <Picker
          style={styles.picker}
          selectedValue={moneda}
          onValueChange={setMoneda}
        >
          <Picker.Item label="- Seleccione -" value="" />
          {MONEDAS.length > 0 &&
            MONEDAS.map(({ id, label, value }) => (
              <Picker.Item key={id} label={label} value={value} />
            ))}
        </Picker>
      </View>

      <View style={styles.box}>
        <Text style={styles.label}>Criptomoneda</Text>
        <Picker
          style={styles.picker}
          selectedValue={cripto}
          onValueChange={setCripto}
        >
          <Picker.Item label="- Seleccione -" value="" />
          {criptos.length > 0 &&
            criptos.map(({ CoinInfo }) => (
              <Picker.Item
                key={CoinInfo?.Id}
                label={CoinInfo?.FullName}
                value={CoinInfo?.Name}
              />
            ))}
        </Picker>
      </View>

      <Pressable style={styles.btnCotizar} onPress={handleCotizar}>
        <Text style={styles.textoCotizar}>Cotizar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: '#102a41',
    padding: 30,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 30,
  },
  imagen: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 20,
  },
  image: {
    flex: 1,
    height: 150,
  },
  box: {
    marginBottom: 20,
  },
  label: {
    color: '#FFF',
    fontFamily: 'Lato-Black',
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
  },
  picker: {
    color: '#FFF',
    fontFamily: 'Lato-Black',
  },
  btnCotizar: {
    backgroundColor: '#5E49E2',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  textoCotizar: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 18,
  },
});

export default Formulario;
