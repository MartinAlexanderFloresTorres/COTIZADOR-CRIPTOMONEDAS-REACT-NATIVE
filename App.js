import React from 'react';
import CriptosProvider from './src/providers/CriptosProvider';
import Home from './src/views/Home';

const App = () => {
  return (
    <CriptosProvider>
      <Home />
    </CriptosProvider>
  );
};

export default App;
