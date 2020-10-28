import React, { useRef, useEffect } from 'react';

import video01 from '../assets/videos/capturar/1.0_EAN_completo.mp4';
import video02 from '../assets/videos/capturar/2.0_ITF_completo.mp4';
import video03 from '../assets/videos/capturar/3.0_GS1-DataBar-completo.mp4';
import video04 from '../assets/videos/capturar/4.0_GS1-128-completo.mp4';

function Capturar({ categoryEnd }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown, false);
    return () => window.removeEventListener('keydown', handleKeyDown, false);
  });

  const timeouts = [];
  const refs = [
    {
      ref: useRef(),
      time: 0,
    },
    {
      ref: useRef(),
      time: 13,
    },
    {
      ref: useRef(),
      time: 14,
    },
    {
      ref: useRef(),
      time: 17,
    },
  ];

  function handleKeyDown(e) {
    if (e.keyCode === 50) {

      refs.some((atual, i) => {
        const current = atual?.ref?.current;

        if(current.classList.contains('active')){
          current.pause();
          current.currentTime = 0;
          return false; 
        }

        current.classList.add('active');
        clearTimeout(timeouts[i]?.timeout);
        return true;
      })
    }
  };

  useEffect(() => {
    let time = 0;
    
    refs.forEach((atual) => {
      time += atual.time * 1000;

      timeouts.push({ 
        timeout: setTimeout(() => {
          // eslint-disable-next-line
          atual?.ref?.current?.classList.add('active');
          console.log('Capturar actived')
        }, time )
      });
    });   
  })

  return (
    <div>
      <video ref={refs[0].ref} src={video01} type="video/mp4" autoPlay muted />
      <video ref={refs[1].ref} src={video02} type="video/mp4" autoPlay muted />
      <video ref={refs[2].ref} src={video03} type="video/mp4" autoPlay muted />
      <video ref={refs[3].ref} src={video04} onEnded={categoryEnd} type="video/mp4" autoPlay muted />
    </div>
  );
}

export default Capturar;
