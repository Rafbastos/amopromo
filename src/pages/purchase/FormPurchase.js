import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class FormQuotation extends Component {  
  render(){

    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} >
        <label>Nome:</label>
        <Field name="name" component="input" type="text" />
        <label>Email</label>
        <Field name="email" component="input" type="text" />
        <label>Telefone</label>
        <Field name="phone" component="input" type="text" />
        <label>Endereço</label>
        <Field name="address" component="input" type="text" />
        <label>CEP</label>
        <Field name="cep" component="input" type="text" />
        <label>Cidade</label>
        <Field name="city" component="input" type="text" />
        <label>Estado</label>
        <Field name="state" component="input" type="text" />

        <div>Segurados</div>
        <label>ID</label>
        <Field name="external_id" component="input" type="text" />
        <label>Nome</label>
        <Field name="first_name" component="input" type="text" />
        <label>Sobrenome</label>
        <Field name="last_name" component="input" type="text" />
        <label>Nascimento</label>
        <Field name="date_of_birth" component="input" type="text" />
        <label>CPF</label>
        <Field name="cpf" component="input" type="text" />


        <button type='submit'>Consultar</button>

      </form>
    )
  }

}

export default reduxForm({form: 'FormQuotation'})(FormQuotation);