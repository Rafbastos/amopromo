import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SendQuotation } from '../../store/actions/Quotation';

import Form from './FormQuotation';

const Quotation  = ({quotations,products, SendQuotation}) => {

    return (
      <>
        <h1>Quotação</h1>
        <div>
          <ul>
            <Form onSubmit={SendQuotation} />
            
            {quotations.map(quot => (
              <li key={ quot.product_id}>
                { quot.product_id }
              </li>
            ))}

            {products.map(prod => (
              
              <li key={ prod.id}>
                { prod.id }
              </li>
            ))}
          </ul>
        </div>
      </>
    );
}

const mapStateToProps = state => ({
  quotations: state.QuotationReducer.quotation,
  products: state.QuotationReducer.product
});

const mapDispatchToProps = dispatch => bindActionCreators({SendQuotation}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Quotation);