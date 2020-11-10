import React, { useRef, useEffect } from 'react';

import video01 from '../assets/03_compartilhar/renders/Compartilhar_final_corte1.mp4';
import video02 from '../assets/03_compartilhar/renders/Compartilhar_final_corte2.mp4';
import video03 from '../assets/03_compartilhar/renders/Compartilhar_final_corte3.mp4';
import video04 from '../assets/03_compartilhar/renders/Compartilhar_final_corte4.mp4';
import video05 from '../assets/03_compartilhar/renders/Compartilhar_final_corte5.mp4';
import video06 from '../assets/03_compartilhar/renders/Compartilhar_final_corte6.mp4';
import video07 from '../assets/03_compartilhar/renders/Compartilhar_final_corte7.mp4';
import video08 from '../assets/03_compartilhar/renders/Compartilhar_final_corte8.mp4';
import video09 from '../assets/03_compartilhar/renders/Compartilhar_final_corte9.mp4';

function Compartilhar({ categoryEnd }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown, false);
    return () => window.removeEventListener('keydown', handleKeyDown, false);
  });

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
    {
      ref: useRef(),
    },
  ];

  function handleKeyDown(e) {
    if (e.keyCode === 51) {

      refs.some((atual, i) => {
        const current = atual?.ref?.current;

        if(current.classList.contains('active') && refs.length !== (i+1)) {
          current.pause();
          return false; 
        }

        current.classList.add('active');
        current.play();
        return true;
      })
    }
  };

  function executeVideo() {
    refs.some((atual, i) => {
      const current = atual?.ref?.current;

      if(current.classList.contains('active')){
        return false; 
      }

      current.classList.add('active');
      current.play();
      return true;
    })
  }

  useEffect(() => {
    const current = refs[0].ref.current;
    current.classList.add('active');
    current.play();  
  })

  return (
    <div>
      <video ref={refs[0].ref} src={video01} onEnded={executeVideo} type="video/mp4" />
      <video ref={refs[1].ref} src={video02} onEnded={executeVideo} type="video/mp4" />
      <video ref={refs[2].ref} src={video03} onEnded={executeVideo} type="video/mp4" />
      <video ref={refs[3].ref} src={video04} onEnded={executeVideo} type="video/mp4" />
      <video ref={refs[4].ref} src={video05} onEnded={executeVideo} type="video/mp4" />
      <video ref={refs[5].ref} src={video06} onEnded={executeVideo} type="video/mp4" />
      <video ref={refs[6].ref} src={video07} onEnded={executeVideo} type="video/mp4" />
      <video ref={refs[7].ref} src={video08} onEnded={executeVideo} type="video/mp4" />
      <video ref={refs[8].ref} src={video09} onEnded={categoryEnd} type="video/mp4" />
    </div>
  );
}

export default Compartilhar;
