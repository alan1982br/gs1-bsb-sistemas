import React, { useEffect, useState } from 'react';

import capturar01 from './assets/videos/capturar/1.0_EAN_completo.mp4';
import capturar02 from './assets/videos/capturar/2.0_ITF_completo.mp4';
import capturar03 from './assets/videos/capturar/3.0_GS1-DataBar-completo.mp4';
import capturar04 from './assets/videos/capturar/4.0_GS1-128-completo.mp4';

import compartilhar01 from './assets/videos/compartilhar/1.0-DadosMestres-completo.mp4';
import compartilhar02 from './assets/videos/compartilhar/2.0-Dados_deEventos-completo.mp4';
import compartilhar03 from './assets/videos/compartilhar/3.0-Soluções-completo.mp4';
import compartilhar04 from './assets/videos/compartilhar/4.0-DadosTransacionais-completo.mp4';

import Video from './components/Video'


/*
[x] Keydown
[ ] Referenciar cada video
[x] Trocar os videos ao apertar outro botao
[ ] Deixar os videos passando sozinhos
[ ] Screensaver

[ ] Leitura de files
[ ] Arrumar resolução do video

*/

function App() {
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown, false);
    return () => window.removeEventListener('keydown', handleKeyDown, false);
  });

  const [category, setCategory] = useState([]);
  const capturarVideos = [capturar01, capturar02, capturar03, capturar04];
  const compartilharVideos = [compartilhar01, compartilhar02, compartilhar03, compartilhar04];

  function handleKeyDown(e) {
    if (e.keyCode === 49) {
      setCategory([...capturarVideos]);
      console.log(category)
    }
    else if (e.keyCode === 50) {
      setCategory([...compartilharVideos]);
      console.log(category)
    }
    else if (e.keyCode === 51) {
    }
  };

  return (
    <>
      <Video category={category}/>
    </>
  );
}

export default App;