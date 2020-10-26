import React, { useRef } from 'react';

function Video({ category, elRefs }) {
  return (
    <div>
      {console.log('alou ref: ', elRefs)}
      {/* {elRefs[0]?.current?.classList.add('active')} */}
      {category.map((current, index) => (
        <video key={index} ref={elRefs[index]} src={current} type="video/mp4" autoPlay muted />
      ))}
    </div>
  );
}

export default Video;
