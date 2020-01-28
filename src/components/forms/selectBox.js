import React from 'react';
import { Field } from 'redux-form';

import GetService from '../../services/Get';

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

export default (props) => {
    const {data, isLoading, error } = GetService(props.api);

    if(error){
      return <p>{error.message}</p>
    }
  
    if(isLoading){
      return <p>Aguarde um Momento...</p>
    }

    return (
      <>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridDestination">
            <Form.Label>Destino</Form.Label>
            <Field name={props.name} className="form-control" component="select">
              <option value="">Selecione um destino</option>
              {data.map(location => (
                <option value={location.id} key={location.id}>
                  {location.name}
                </option>
              ))}
            </Field>
          </Form.Group>
        </Form.Row>
      </>
    )
}