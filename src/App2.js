import React, { useEffect, useState } from 'react';

import Identificar from './components/Identificar'
import Capturar from './components/Capturar'
import Compartilhar from './components/Compartilhar'

import screensaver from './assets/Screensaver.webm';

import socketIOClient from "socket.io-client";

function App2() {
  const [identificarCategory, setIdentificar] = useState(true);
  const [capturarCategory, setCapturar] = useState(false);
  const [compartilharCategory, setCompartilhar] = useState(false);
  const [screensaverBool, setScreensaver] = useState(false);
  const ENDPOINT = "http://127.0.0.1:4001";

  let timeout, iniciar = true;
  const [dataBtn, setDataBtn] = useState(null);
  
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT, {transports: ['websocket', 'polling', 'flashsocket']});
   
    socket.on("FromAPI", data => {
      setDataBtn(null);
      console.log(data);
      handleKeyDown("",data);
      setDataBtn(data);
    });

    makeTimeout();

    window.addEventListener('keydown', handleKeyDown, false);
    return () => window.removeEventListener('keydown', handleKeyDown, false);
  },[]);


  const handleKeyDown = async (e, dataBtn) => {
    clearTimeout(timeout);
    setScreensaver(false);
    makeTimeout();

      if (e.keyCode === 49 || dataBtn === 49 ) {
        setIdentificar(true);
        setCapturar(false);
        setCompartilhar(false);
      }
  
      else if (e.keyCode === 50 || dataBtn === 50 ) {
        setCapturar(true);
        setIdentificar(false);
        setCompartilhar(false);
      }
  
      else if (e.keyCode === 51 || dataBtn === 51 ) {
        setCompartilhar(true);
        setIdentificar(false);
        setCapturar(false);
      }
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

  return (
    <>
      {screensaverBool && <Screensaver />}
      {identificarCategory && <Identificar dataBtn={dataBtn} iniciar={iniciar}/>}
      {capturarCategory && <Capturar dataBtn={dataBtn}/>}
      {compartilharCategory && <Compartilhar dataBtn={dataBtn}/>}
    </>
  );
}

export default App2;