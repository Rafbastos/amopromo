import React, { Component } from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <Form.Group as={Col} controlId={"form"+label}>
    <Form.Label>{label}</Form.Label>
    <div>
      <input {...input} className='form-control' type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </Form.Group>
)

const renderInsureds = ({ fields }) => (
  <div>
    <Form.Group as={Col} controlId="forminsureds">
      <Button variant="primary" title="Adicionar Assegurado" type="button" onClick={() => fields.push({})}>Adicionar Assegurado </Button>
      {fields.map((member, index) =>
        <div className="row" key={index}>
          <Form.Row>
            <h4>Assegurado Número{index + 1}</h4>
            <Form.Group as={Col} controlId="formNome"></Form.Group>
            <Field name={`${member}.firstName`} type="text" component={renderField} label="Nome"/>
            <Field name={`${member}.lastName`} type="text" component={renderField} label="Sobrenome"/>
          </Form.Row>

          <Form.Row>
            <Field name={`${member}.date_of_birth`} type="date" component={renderField} label="Nascimento"/>
            <Field name={`${member}.cpf`} type="text" component={renderField} label="CPF"/>
          </Form.Row>
          
          <Button variant="primary" title="Remover Assegurado" type="button" onClick={() => fields.remove(index)}>Remover Assegurado </Button>
        </div>
      )}
    </Form.Group>
  </div>
)

class FormPurchase extends Component {  
  render(){
    const { handleSubmit } = this.props;

    return (
      <>
        <Form onSubmit={handleSubmit} >
          <Form.Row>
            <Form.Group as={Col} controlId="formNome">
              <Form.Label>Nome:</Form.Label>
              <Field name="contact.name" className='form-control' component="input" type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="formEmail">
              <Form.Label>email</Form.Label>
              <Field name="contact.email" className='form-control' component="input" type="email" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formPhone">
              <Form.Label>Telefone:</Form.Label>
              <Field name="contact.phone" className='form-control' component="input" type="tel" />
            </Form.Group>

            <Form.Group as={Col} controlId="formAddress">
              <Form.Label>Endereço</Form.Label>
              <Field name="address.address" className='form-control' component="input" type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="formAddress">
              <Form.Label>CEP</Form.Label>
              <Field name="address.cep" className='form-control' component="input" type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formPhone">
              <Form.Label>Cidade:</Form.Label>
              <Field name="address.city" className='form-control' component="input" type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="formAddress">
              <Form.Label>Estado</Form.Label>
              <Field name="address.state" className='form-control' component="input" type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <FieldArray name="insureds" component={renderInsureds}/>
          </Form.Row>

          <Button variant="primary" type="submit">
            Pesquisar
          </Button>

          
        </Form>
      </>
    )
  }

}

export default reduxForm({form: 'FormPurchase'})(FormPurchase);