import React from 'react';
import './crosshair.css';
import crosshair from '../images/red-crosshair.png'


const Crosshair: React.FC = () => {
  return (
    <img src={crosshair} className="crosshair" alt=""/>
  )
}

export default Crosshair