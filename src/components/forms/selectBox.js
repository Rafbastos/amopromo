import React from 'react';
import { Field } from 'redux-form';

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
        <Field name={props.name} component="select">
          <option value="">Selecione um destino</option>
          {data.map(location => (
            <option value={location.id} key={location.id}>
              {location.name}
            </option>
          ))}
        </Field>
      </div>
    )
}