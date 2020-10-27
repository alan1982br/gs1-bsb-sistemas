import React, {useEffect, useState} from 'react';

function Video({ category, elRefs }) {
  return (
    <div>
      {category.map((current, index) => {
        console.log('return')
        return (
          <video key={index} ref={elRefs[index].current} src={current} type="video/mp4" autoPlay muted />
        )
      })}
      
    </div>
  );
}

export default Video;
