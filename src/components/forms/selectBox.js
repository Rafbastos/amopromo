import React from 'react';

import GetService from '../../services/Get';

export default (props) => {
    const {data, isLoading, error } = GetService(props.api);

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