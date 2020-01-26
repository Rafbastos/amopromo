import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SelectDestination from '../../components/forms/SelectBox';

class FormQuotation extends Component {  
  render(){
    const data = {
      start: '2020-08-22',
      end: '2020-08-22',
    }

    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} >
        <SelectDestination api='/base/destinations' name='destination'/>
        <Field name="start" component="input" type="date" />
        <Field name="end" component="input" type="date" />

        <button type='submit'>Consultar</button>

      </form>
    )
  }

}

export default reduxForm({form: 'FormQuotation'})(FormQuotation);