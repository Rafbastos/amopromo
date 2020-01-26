import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { CreatePurchase } from '../../store/actions/Purchase';

import Form from './FormPurchase';

const Purchase  = ({CreatePurchase}) => {
    const checkId = '';
    return (
      <>
        <h1>Realizar Pedido</h1>
        <div>
          <Form onSubmit={ CreatePurchase } />
        </div>
      </>
    );
}

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => bindActionCreators({CreatePurchase}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Purchase);