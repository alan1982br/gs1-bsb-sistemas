import React, { useEffect, useState } from 'react';

import Screensaver from './components/Screensaver'
import Identificar from './components/Identificar'
import Capturar from './components/Capturar'
import Compartilhar from './components/Compartilhar'

/*
[x] Keydown
[x] Referenciar cada video
[ ] Ao apertar o botão descer o próximo video
[x] Trocar os videos ao apertar outro botao
[x] Deixar os videos passando sozinhos
[ ] Screensaver
[ ] Leitura de files
[ ] Arrumar resolução do video
*/

function App() {
  const [identificarCategory, setIdentificar] = useState(false);
  const [capturarCategory, setCapturar] = useState(false);
  const [compartilharCategory, setCompartilhar] = useState(false);
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown, false);
    return () => window.removeEventListener('keydown', handleKeyDown, false);
  });

  function handleKeyDown(e) {
    if (e.keyCode === 49) {
      setIdentificar(true);
      setCapturar(false);
      setCompartilhar(false);
    }

    else if (e.keyCode === 50) {
      setCapturar(true);
      setIdentificar(false);
      setCompartilhar(false);
    }

    else if (e.keyCode === 51) {
      setCompartilhar(true);
      setIdentificar(false);
      setCapturar(false);
    }
  };
  
  return (
    <>
      {!identificarCategory && !capturarCategory && !compartilharCategory && <Screensaver />}
      {identificarCategory && <Identificar />}
      {capturarCategory && <Capturar />}
      {compartilharCategory && <Compartilhar />}
    </>
  );
}

export default App;