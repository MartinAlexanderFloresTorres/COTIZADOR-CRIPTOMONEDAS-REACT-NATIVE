import { useContext } from 'react';
import { CriptosContext } from '../providers/CriptosProvider';

const useCriptos = () => {
  return useContext(CriptosContext);
};

export default useCriptos;
