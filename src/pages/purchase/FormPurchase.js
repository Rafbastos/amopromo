import React, { Component } from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderInsureds = ({ fields }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>Adicionar Assegurado</button>
    </li>
    {fields.map((member, index) =>
      <li key={index}>
        <button type="button" title="Remover Assegurado" onClick={() => fields.remove(index)}>Remover Assegurado</button>
        <h4>Assegurado Número{index + 1}</h4>

        <Field name={`${member}.firstName`} type="text" component={renderField} label="Nome"/>
        <Field name={`${member}.lastName`} type="text" component={renderField} label="Sobrenome"/>
        <Field name={`${member}.date_of_birth`} type="date" component={renderField} label="Nascimento"/>
        <Field name={`${member}.cpf`} type="text" component={renderField} label="CPF"/>
      </li>
    )}
  </ul>
)

class FormPurchase extends Component {  
  render(){
    const { handleSubmit } = this.props;

    return (
      <>
        <form onSubmit={handleSubmit} >
          <label>Nome:</label>
          <Field name="contact.name" component="input" type="text" />
          <label>Email</label>
          <Field name="contact.email" component="input" type="text" />
          <label>Telefone</label>
          <Field name="contact.phone" component="input" type="text" />
          <label>Endereço</label>
          <Field name="address.address" component="input" type="text" />
          <label>CEP</label>
          <Field name="address.cep" component="input" type="text" />
          <label>Cidade</label>
          <Field name="address.city" component="input" type="text" />
          <label>Estado</label>
          <Field name="address.state" component="input" type="text" />

          <FieldArray name="insureds" component={renderInsureds}/>
          <button type='submit'>Consultar</button>
        </form>
      </>
    )
  }

}

export default reduxForm({form: 'FormPurchase'})(FormPurchase);