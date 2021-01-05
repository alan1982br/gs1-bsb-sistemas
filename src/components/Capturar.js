import React, { useRef, useEffect } from 'react';

import mainVideo from '../assets/entrada.webm';
import video01 from '../assets/02_capturar/webm/Capturar_Final_corte1.webm';
import video02 from '../assets/02_capturar/webm/Capturar_Final_corte2.webm';
import video03 from '../assets/02_capturar/webm/Capturar_Final_corte3.webm';
import video04 from '../assets/02_capturar/webm/Capturar_Final_corte4.webm';
import video05 from '../assets/02_capturar/webm/Capturar_Final_corte5.webm';
import video06 from '../assets/02_capturar/webm/Capturar_Final_corte6.webm';
import video07 from '../assets/02_capturar/webm/Capturar_Final_corte7.webm';

function Capturar({dataBtn}) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown, false);
    handleBtnSocket(dataBtn)
    return () => window.removeEventListener('keydown', handleKeyDown, false);
  },[dataBtn]);

  useEffect(() => {
    const current = refs[0].ref.current;
    current.classList.add('active');
    current.play();  
  })

  const refs = [
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

  function handleKeyDown(e) {
    if (e.keyCode === 50) {

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
    }
  };

  function handleBtnSocket(e) {
    console.log('e ' , e);
    if (e === 50) {

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
    }
  };

  return (
    <div>
      <video ref={refs[0].ref} src={mainVideo} loop type="video/webm" />
      <video ref={refs[1].ref} src={video01} type="video/webm" />
      <video ref={refs[2].ref} src={video02} type="video/webm" />
      <video ref={refs[3].ref} src={video03} type="video/webm" />
      <video ref={refs[4].ref} src={video04} type="video/webm" />
      <video ref={refs[5].ref} src={video05} type="video/webm" />
      <video ref={refs[6].ref} src={video06} type="video/webm" />
      <video ref={refs[7].ref} src={video07} type="video/webm" />
    </div>
  );
}

export default Capturar;
