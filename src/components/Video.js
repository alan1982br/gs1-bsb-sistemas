import React from 'react';

function Video({ category }) {
  return (
    <div>
      {category.map((current, index) => (
        <video key={index} src={current} type="video/mp4" autoPlay muted />
      ))}
    </div>
  );
}

export default Video;
