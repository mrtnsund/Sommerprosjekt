import React from 'react';
import RoutesTabs from '../components/RoutesTabs';
import MapContainer from '../components/MapContainer';
import Header from '../components/Header';

const RoutesPage: React.FC = () => {
  return (
    <div>
      <Header />
      <MapContainer />
      <RoutesTabs />
    </div>


  );
};

export default RoutesPage;
