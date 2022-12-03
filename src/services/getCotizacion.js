const getCotizacion = ({ moneda, cripto }) => {
  return fetch(
    `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`,
  ).then(res => res.json());
};

export default getCotizacion;
