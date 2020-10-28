import React, { useRef, useEffect } from 'react';

import video01 from '../assets/videos/identificar/1_GTIN.mp4';
import video02 from '../assets/videos/identificar/2_SSCC.mp4';
import video03 from '../assets/videos/identificar/3_GIAI.mp4';
import video04 from '../assets/videos/identificar/4_GRAI.mp4';

function Identificar({ categoryEnd }) {
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
      time: 10,
    },
    {
      ref: useRef(),
      time: 10,
    },
    {
      ref: useRef(),
      time: 10,
    },
  ];

  function handleKeyDown(e) {
    if (e.keyCode === 49) {

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
          console.log('Identificar actived')
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

export default Identificar;
