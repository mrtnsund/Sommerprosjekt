import React, {PureComponent} from 'react';

export default class MarkerInfo extends PureComponent<{ data: any }> {
  render() {
    const {data} = this.props;
    const coordinates = `${data.longitude}, ${data.latitude}`;
    

    return (
      <div>
        <div style={{width: "60vw", height: "30vh"}}>
          <p>Name: {data.name}</p>
          
          <p>Description: {data.description}</p>
          
          <p>Coordinates: {coordinates} {' '}</p>
          
        </div>
      </div>
    );
  }
}