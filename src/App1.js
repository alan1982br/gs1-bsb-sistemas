import React, { useEffect, useState, useRef } from 'react';

// import Identificar from './components/Identificar'
// import Capturar from './components/Capturar'
// import Compartilhar from './components/Compartilhar'

import mainVideo from './assets/entrada.webm';
import comp01 from './assets/03_compartilhar/webm/Compartilhar_final_corte1.webm';
import comp02 from './assets/03_compartilhar/webm/Compartilhar_final_corte2.webm';
import comp03 from './assets/03_compartilhar/webm/Compartilhar_final_corte3.webm';
import comp04 from './assets/03_compartilhar/webm/Compartilhar_final_corte4.webm';
import comp05 from './assets/03_compartilhar/webm/Compartilhar_final_corte5.webm';
import comp06 from './assets/03_compartilhar/webm/Compartilhar_final_corte6.webm';
import comp07 from './assets/03_compartilhar/webm/Compartilhar_final_corte7.webm';
import comp08 from './assets/03_compartilhar/webm/Compartilhar_final_corte8.webm';
import comp09 from './assets/03_compartilhar/webm/Compartilhar_final_corte9.webm';

import cap01 from './assets/02_capturar/webm/Capturar_Final_corte1.webm';
import cap02 from './assets/02_capturar/webm/Capturar_Final_corte2.webm';
import cap03 from './assets/02_capturar/webm/Capturar_Final_corte3.webm';
import cap04 from './assets/02_capturar/webm/Capturar_Final_corte4.webm';
import cap05 from './assets/02_capturar/webm/Capturar_Final_corte5.webm';
import cap06 from './assets/02_capturar/webm/Capturar_Final_corte6.webm';
import cap07 from './assets/02_capturar/webm/Capturar_Final_corte7.webm';

import iden01 from './assets/01_identificar/webm/Identificar_Final_corte1.webm';
import iden02 from './assets/01_identificar/webm/Identificar_Final_corte2.webm';
import iden03 from './assets/01_identificar/webm/Identificar_Final_corte3.webm';
import iden04 from './assets/01_identificar/webm/Identificar_Final_corte4.webm';
import iden05 from './assets/01_identificar/webm/Identificar_Final_corte5.webm';
import iden06 from './assets/01_identificar/webm/Identificar_Final_corte6.webm';
import iden07 from './assets/01_identificar/webm/Identificar_Final_corte7.webm';
import iden08 from './assets/01_identificar/webm/Identificar_Final_corte8.webm';

import screensaver from './assets/Screensaver.webm';

import socketIOClient from "socket.io-client";

function App1() {
  const [identificarCategory, setIdentificar] = useState(true);
  const [capturarCategory, setCapturar] = useState(false);
  const [compartilharCategory, setCompartilhar] = useState(false);
  const [screensaverBool, setScreensaver] = useState(false);
  const ENDPOINT = "http://127.0.0.1:4001";

  let timeout;

  const comp = [
    {
      ref: useRef(),
    },
    {
      ref: useRef(),
    },
    {
      ref: useRef(),
    },
    {
      ref: useRef(),
    },
    {
      ref: useRef(),
    },
    {
      ref: useRef(),
    },
    {
      ref: useRef(),
    },
    {
      ref: useRef(),
    },
    {
      ref: useRef(),
    },
    {
      ref: useRef(),
    },
  ];

  
  const cap = [
    {
      ref: useRef(),
    },
    {
      ref: useRef(),
    },
    {
      ref: useRef(),
    },
    {
      ref: useRef(),
    },
    {
      ref: useRef(),
    },
    {
      ref: useRef(),
    },
    {
      ref: useRef(),
    },
    {
      ref: useRef(),
    },
  ];

  const iden = [
    {
      ref: useRef(),
    },
    {
      ref: useRef(),
    },
    {
      ref: useRef(),
    },
    {
      ref: useRef(),
    },
    {
      ref: useRef(),
    },
    {
      ref: useRef(),
    },
    {
      ref: useRef(),
    },
    {
      ref: useRef(),
    },
    {
      ref: useRef(),
    },
  ];
  
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT, {transports: ['websocket', 'polling', 'flashsocket']});
    socket.on("FromAPI", data => {
      console.log(data);
      handleKeyDown("",data);
      
    });

    makeTimeout();

    window.addEventListener('keydown', handleKeyDown, false);
    return () => window.removeEventListener('keydown', handleKeyDown, false);
  },[]);

  useEffect(() => {
    const current = iden[0].ref.current;
    current.classList.add('active');
  },[])

  const handleKeyDown = async (e, dataBtn) => {
    clearTimeout(timeout);
    setScreensaver(false);
    makeTimeout();
      if (e.keyCode === 49 || dataBtn === 49 ) {
        console.log("identificar");
        setIdentificar(true);
        setCapturar(false);
        setCompartilhar(false);
        AtualizaVideo(iden);
      }
  
      else if (e.keyCode === 50 || dataBtn === 50 ) {
        console.log("capturar");
        setCapturar(true);
        setIdentificar(false);
        setCompartilhar(false);
        AtualizaVideo(cap);
      }
  
      else if (e.keyCode === 51 || dataBtn === 51 ) {
        console.log("compartilhar");
        setCompartilhar(true);
        setIdentificar(false);
        setCapturar(false);
        AtualizaVideo(comp);
      }
  };

  function AtualizaVideo(refs) {
    console.log("chegou no atualiza video");

      refs.some((atual, i) => {
        const current = atual?.ref?.current;

        if(current.classList.contains('active')) {
          if(refs.length-1 === i){
            return false;
          }
          current.pause();
          return false; 
        }

        current.classList.add('active');
        current.play();
        return true;
      })
  };

  function makeTimeout() {
    timeout = window.setTimeout( 
      function() {
        setScreensaver(true);
    }, 300000); // 5min
  }

  const Screensaver = () => (
    <video src={screensaver} className="screensaver" type="video/webm" autoPlay muted loop/>
  )

  const Compartilhar = () => (
    <div>
      <video ref={comp[0].ref} src={mainVideo} loop type="video/webm" />
      <video ref={comp[1].ref} src={comp01} type="video/webm" />
      <video ref={comp[2].ref} src={comp02} type="video/webm" />
      <video ref={comp[3].ref} src={comp03} type="video/webm" />
      <video ref={comp[4].ref} src={comp04} type="video/webm" />
      <video ref={comp[5].ref} src={comp05} type="video/webm" />
      <video ref={comp[6].ref} src={comp06} type="video/webm" />
      <video ref={comp[7].ref} src={comp07} type="video/webm" />
      <video ref={comp[8].ref} src={comp08} type="video/webm" />
      <video ref={comp[9].ref} src={comp09} type="video/webm" />
    </div>
  )

  const Capturar = () => (
    <div>
      <video ref={cap[0].ref} src={mainVideo} loop type="video/webm" />
      <video ref={cap[1].ref} src={cap01} type="video/webm" />
      <video ref={cap[2].ref} src={cap02} type="video/webm" />
      <video ref={cap[3].ref} src={cap03} type="video/webm" />
      <video ref={cap[4].ref} src={cap04} type="video/webm" />
      <video ref={cap[5].ref} src={cap05} type="video/webm" />
      <video ref={cap[6].ref} src={cap06} type="video/webm" />
      <video ref={cap[7].ref} src={cap07} type="video/webm" />
    </div>
  )

  const Identificar = () => (
    <div>
      <video ref={iden[0].ref} src={mainVideo} autoPlay muted loop type="video/webm" />
      <video ref={iden[1].ref} src={iden01} type="video/webm" />
      <video ref={iden[2].ref} src={iden02} type="video/webm" />
      <video ref={iden[3].ref} src={iden03} type="video/webm" />
      <video ref={iden[4].ref} src={iden04} type="video/webm" />
      <video ref={iden[5].ref} src={iden05} type="video/webm" />
      <video ref={iden[6].ref} src={iden06} type="video/webm" />
      <video ref={iden[7].ref} src={iden07} type="video/webm" />
      <video ref={iden[8].ref} src={iden08} type="video/webm" />
    </div>
  )

  return (
    <>
      {screensaverBool && <Screensaver />}
      {identificarCategory && <Identificar />}
      {capturarCategory && <Capturar />}
      {compartilharCategory && <Compartilhar />}
    </>
  );
}

export default App1;