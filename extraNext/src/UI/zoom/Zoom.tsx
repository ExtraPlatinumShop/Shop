import React, { useState } from 'react';

import  "./zoomStyle.scss";

const Zoom = (props:any) => {
  const [backgroundImage, setBackgroundImage] = useState(`url(${props.image})`);
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');

  const handleMouseMove = (e:any) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 10;
    const y = ((e.pageY - top) / height) * 10;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <figure onMouseMove={handleMouseMove} style={{ backgroundImage, backgroundPosition }}>
      
    </figure>
  );
};

export default Zoom;
