import React, { useEffect, useRef, useState, createRef } from 'react';

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
[x] Referenciar cada video
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
  const [elRefs, setElRefs] = useState([]);
  const [isEnter, setIsEnter] = useState({capturar: false, compartilhar: false, identificar: false})
  const capturarVideos = [capturar01, capturar02, capturar03, capturar04];
  const compartilharVideos = [compartilhar01, compartilhar02, compartilhar03, compartilhar04];
  var index = 0;

  function handleKeyDown(e) {

    if (e.keyCode === 49) {
      const length = capturarVideos.length;
      // const arr = Array(length).fill(createRef());
      setElRefs(elRefs => (
        Array(length).fill().map((_, i) => elRefs[i] || createRef())
      ));

      // setElRefs([...arr]);
      setCategory([...capturarVideos]);
      setIsEnter({
        capturar: true,
        compartilhar: false,
        identificar: false,
      });
      // handleNext(elRefs);
    }

    else if (e.keyCode === 50) {
      const length = compartilharVideos.length;
      const arr = Array(length).fill(createRef());

      setElRefs([...arr]);
      setCategory([...compartilharVideos]);
      setIsEnter({
        capturar: false,
        compartilhar: true,
        identificar: false,
      });
    }

    else if (e.keyCode === 51) {
    }
  };

  // function handleNext(elRefs) {
  //   console.log(elRefs[index]?.current);
  //   elRefs[0].current.classList.add('active')
  //   // elRefs.map((atual) => {
  //   //   console.log(atual.current)
  //   //   return atual.current;
  //   // })
  //   index++;
  // }

  useEffect((index) => {
    console.log(elRefs[index]?.current)
    // elRefs[index].current.classList.add('active')
    index++;
  }, [elRefs]);

  return (
    <>
      <Video category={category} elRefs={elRefs}/>
    </>
  );
}

export default App;