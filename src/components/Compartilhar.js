import React, { useRef, useEffect } from 'react';

import video01 from '../assets/videos/compartilhar/1.0-DadosMestres-completo.mp4';
import video02 from '../assets/videos/compartilhar/2.0-Dados_deEventos-completo.mp4';
import video03 from '../assets/videos/compartilhar/3.0-Soluções-completo.mp4';
import video04 from '../assets/videos/compartilhar/4.0-DadosTransacionais-completo.mp4';

function Compartilhar() {
  const refs = [
    {
      ref: useRef(),
      time: 0,
    },
    {
      ref: useRef(),
      time: 30,
    },
    {
      ref: useRef(),
      time: 14,
    },
    {
      ref: useRef(),
      time: 12,
    },
  ];

  useEffect(() => {
    let time = 0;
    
    refs.forEach((atual) => {
      setTimeout(() => {
        // eslint-disable-next-line
        atual?.ref?.current?.classList.add('active');
      }, (time += atual.time * 1000))
    });   
  })

  return (
    <div>
      <video ref={refs[0].ref} src={video01} type="video/mp4" autoPlay muted />
      <video ref={refs[1].ref} src={video02} type="video/mp4" autoPlay muted />
      <video ref={refs[2].ref} src={video03} type="video/mp4" autoPlay muted />
      <video ref={refs[3].ref} src={video04} type="video/mp4" autoPlay muted />
    </div>
  );
}

export default Compartilhar;
