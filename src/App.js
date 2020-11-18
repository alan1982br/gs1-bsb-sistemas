import React, { useEffect, useState } from 'react';

import Identificar from './components/Identificar'
import Capturar from './components/Capturar'
import Compartilhar from './components/Compartilhar'

import mainVideo from './assets/entrada.webm';
import screensaver from './assets/Screensaver.webm';

import socketIOClient from "socket.io-client";

function App() {
  const [identificarCategory, setIdentificar] = useState(false);
  const [capturarCategory, setCapturar] = useState(false);
  const [compartilharCategory, setCompartilhar] = useState(false);
  const [screensaverBool, setScreensaver] = useState(false);
  const ENDPOINT = "http://127.0.0.1:4001";

  let timeout, isKeyDownActive = true;
  
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


  const handleKeyDown = async (e, dataBtn) => {
    clearTimeout(timeout);
    setScreensaver(false);
    makeTimeout();

    if(isKeyDownActive){
      isKeyDownActive = false;
      keyDownDelay();

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
    }
  };

  function keyDownDelay() {
    window.setTimeout( 
      function() {
        isKeyDownActive = true;
    }, 5000); // 5s
  }

  function makeTimeout() {
    timeout = window.setTimeout( 
      function() {
        setScreensaver(true);
    }, 600000);
  }
  
  function categoryEnd() {
    setCompartilhar(false);
    setIdentificar(false);
    setCapturar(false);
  }

  const MainVideo = () => (
    <video src={mainVideo} className="main-video" type="video/webm" autoPlay muted loop/>
  )

  const Screensaver = () => (
    <video src={screensaver} className="screensaver" type="video/webm" autoPlay muted loop/>
  )
  
  return (
    <>
      {screensaverBool && <Screensaver />}
      {!identificarCategory && !capturarCategory && !compartilharCategory && <MainVideo />}
      {identificarCategory && <Identificar categoryEnd={categoryEnd} />}
      {capturarCategory && <Capturar categoryEnd={categoryEnd} />}
      {compartilharCategory && <Compartilhar categoryEnd={categoryEnd} />}
    </>
  );
}

export default App;