import React from 'react';
import { createContext, useState } from 'react';
import getCotizacion from '../services/getCotizacion';

const CriptosContext = createContext(null);

const CriptosProvider = ({ children }) => {
  // Estados
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState(false);
  const [cargando, setCargando] = useState(false);

  // Funciones
  const setMonedaCripto = (moneda, cripto) => {
    setCargando(true);
    setError(false);
    getCotizacion({ moneda, cripto })
      .then(({ DISPLAY }) => {
        setResultado(DISPLAY[cripto][moneda]);
      })
      .catch(err => {
        console.log(err);
        setError(true);
      });

    setTimeout(() => {
      setCargando(false);
    }, 3000);
  };

  return (
    <CriptosContext.Provider
      value={{ resultado, error, cargando, setMonedaCripto }}
    >
      {children}
    </CriptosContext.Provider>
  );
};

export { CriptosContext };
export default CriptosProvider;
