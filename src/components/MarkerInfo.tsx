import React, {PureComponent} from 'react';

export default class MarkerInfo extends PureComponent<{ data: any }> {
  render() {
    const {data} = this.props;
    const coordinates = `${data.longitude}, ${data.latitude}`;
    

    return (
      <div>
        <div>
          <p>Name: {data.name}</p>
          <br/>
          <p>Description: {data.description}</p>
          <br/>
          <p>Coordinates: {coordinates} {' '}</p>
          
        </div>
      </div>
    );
  }
}