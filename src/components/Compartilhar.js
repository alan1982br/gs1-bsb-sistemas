import React, { useRef, useEffect } from 'react';

import video01 from '../assets/03_compartilhar/placeholder/Compartilhar_Final.mp4';
import video02 from '../assets/03_compartilhar/placeholder/Compartilhar_Final 2.mp4';
import video03 from '../assets/03_compartilhar/placeholder/Compartilhar_Final 3.mp4';
import video04 from '../assets/03_compartilhar/placeholder/Compartilhar_Final 4.mp4';
import video05 from '../assets/03_compartilhar/placeholder/Compartilhar_Final 5.mp4';
import video06 from '../assets/03_compartilhar/placeholder/Compartilhar_Final 6.mp4';
import video07 from '../assets/03_compartilhar/placeholder/Compartilhar_Final 7.mp4';
import video08 from '../assets/03_compartilhar/placeholder/Compartilhar_Final 8.mp4';
import video09 from '../assets/03_compartilhar/placeholder/Compartilhar_Final 9.mp4';

function Compartilhar({ categoryEnd }) {
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
      time: 18,
    },
    {
      ref: useRef(),
      time: 8,
    },
    {
      ref: useRef(),
      time: 9,
    },
    {
      ref: useRef(),
      time: 9,
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
      time: 9,
    },
    {
      ref: useRef(),
      time: 9,
    },
  ];

  function handleKeyDown(e) {
    if (e.keyCode === 51) {

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
          console.log('Compartilhar actived')
        }, time )
      });
    });   
  })

  return (
    <div>
      <video ref={refs[0].ref} src={video01} type="video/mp4" autoPlay muted />
      <video ref={refs[1].ref} src={video02} type="video/mp4" autoPlay muted />
      <video ref={refs[2].ref} src={video03} type="video/mp4" autoPlay muted />
      <video ref={refs[3].ref} src={video04} type="video/mp4" autoPlay muted />
      <video ref={refs[4].ref} src={video05} type="video/mp4" autoPlay muted />
      <video ref={refs[5].ref} src={video06} type="video/mp4" autoPlay muted />
      <video ref={refs[6].ref} src={video07} type="video/mp4" autoPlay muted />
      <video ref={refs[7].ref} src={video08} type="video/mp4" autoPlay muted />
      <video ref={refs[8].ref} src={video09} onEnded={categoryEnd} type="video/mp4" autoPlay muted />
    </div>
  );
}

export default Compartilhar;
