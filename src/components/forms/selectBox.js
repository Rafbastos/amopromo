import React from 'react';

import getService from '../../services/get';

export default (props) => {
    const {data, isLoading, error } = getService(props.api);

    if(error){
      return <p>{error.message}</p>
    }
  
    if(isLoading){
      return <p>Aguarde um Momento...</p>
    }

    return (
      <div>
        {data.map(location => (
          <div key={location.id}>{location.name}</div>
        ))}
      </div>
    )
}