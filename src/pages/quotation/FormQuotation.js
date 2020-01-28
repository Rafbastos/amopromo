import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SelectDestination from '../../components/forms/SelectBox';

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class FormQuotation extends Component {  
  render(){

    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit} >
        <SelectDestination api='/base/destinations' name='destination'/>
        <Form.Row>

          <Form.Group as={Col} controlId="formBegin">
            <Form.Label>Data de Início</Form.Label>
            <Field name="begin" className='form-control' component="input" type="date" />
            
          </Form.Group>

          <Form.Group as={Col} controlId="formEnd">
            <Form.Label>Data de Retorno</Form.Label>
            <Field name="end" className='form-control' component="input" type="date" />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit" className="mr-10">
          Pesquisar
        </Button>

        <Link to="/purchase">
          <Button variant="primary" type="button">
            Comprar
          </Button>
        </Link>
      </Form>
    )
  }

}

export default reduxForm({form: 'FormQuotation'})(FormQuotation);
