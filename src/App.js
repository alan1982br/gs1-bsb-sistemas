import React, { useEffect, useState } from 'react';

import Identificar from './components/Identificar'
import Capturar from './components/Capturar'
import Compartilhar from './components/Compartilhar'

import screensaver from './assets/bemvindo_compartilhar_FINAL_1.mp4';

/*
[x] Keydown
[x] Referenciar cada video
[x] Ao apertar o botão descer o próximo video
[x] Trocar os videos ao apertar outro botao
[x] Deixar os videos passando sozinhos
[x] Screensaver
[x] Ativar screensaver após terminar uma categoria
[ ] Limpar todos os timeOuts quando mudar de categoria (colocar dentro de um array e dar push?)
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
  
  function categoryEnd() {
    setCompartilhar(false);
    setIdentificar(false);
    setCapturar(false);
  }

  const Screensaver = () => (
    <div>
      <video src={screensaver} className="active" type="video/mp4" autoPlay muted loop/>
    </div>
  )
  
  return (
    <>
      {!identificarCategory && !capturarCategory && !compartilharCategory && <Screensaver />}
      {identificarCategory && <Identificar categoryEnd={categoryEnd} />}
      {capturarCategory && <Capturar categoryEnd={categoryEnd} />}
      {compartilharCategory && <Compartilhar categoryEnd={categoryEnd} />}
    </>
  );
}

export default App;