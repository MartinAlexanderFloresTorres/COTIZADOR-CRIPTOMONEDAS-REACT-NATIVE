const getCriptos = () => {
  return fetch(
    'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD',
  ).then(res => res.json());
};

export default getCriptos;
