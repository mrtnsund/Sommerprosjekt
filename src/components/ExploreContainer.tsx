import React from 'react';
import './ExploreContainer.css';
import MapContainer from './MapContainer';


interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = () => {

  return (
    <MapContainer/>
  );
};

export default ExploreContainer;
