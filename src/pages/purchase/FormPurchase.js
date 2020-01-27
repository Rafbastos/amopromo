import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
var i = 1;
class FormQuotation extends Component {  
  
  state = {
    coverages: [],
    
  }

  addNum(){
    i = i + 1;
    return i;
  }

  removeNum(){
    i = i - 1;
    return i;
  }

  addCoverage(e, concat){
    this.setState({coverages:[...this.state.coverages, { firstName: "first_Name"+i, last_name: "last_name"+i, date_of_birth:"date_of_birth"+i, cpf:"cpf"+i}]});
    this.addNum();
  }

  removeCoverage(e, index){
    this.setState(this.state.coverages.splice(index, 1));
    this.removeNum();
  }


  render(){

    const { handleSubmit } = this.props;

    return (
      <>
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

          <div>Segurados</div><button type="button" onClick={(e) => this.addCoverage(e, i)} >Adicionar Assegurado</button>
          {
            this.state.coverages.map((coverage, index)=>{
              return(
                <div key={index}>
                  <label>ID</label>
                  <Field name="external_id" component="input" type="text" />
                  <label>Nome</label>
                  <Field name={coverage.firstName} component="input" type="text" />
                  <label>Sobrenome</label>
                  <Field name={coverage.last_name} component="input" type="text" />
                  <label>Nascimento</label>
                  <Field name={coverage.date_of_birth} component="input" type="text" />
                  <label>CPF</label>
                  <Field name={coverage.cpf} component="input" type="text" />
                  <button type="button" onClick={(e) => this.removeCoverage(e, index)} >Remover Assegurado</button>
                  
                </div>
              )
            })
          }
         
          <button type='submit'>Consultar</button>
        </form>
      </>
    )
  }

}

export default reduxForm({form: 'FormQuotation'})(FormQuotation);