import React from 'react';
import RoutesTabs from '../components/RoutesTabs';
import MapContainer from '../components/MapContainer';

const RoutesPage: React.FC = () => {
  return (
    <div>
      <RoutesTabs />
      <MapContainer />
    </div>


  );
};

export default RoutesPage;
