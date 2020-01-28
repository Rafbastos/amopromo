import React from 'react';
import '../../assets/css/purchase.css'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { CreatePurchase, init } from '../../store/actions/Purchase';

import Form from './FormPurchase';

const Purchase  = ({CreatePurchase}) => {
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

export default connect(null, mapDispatchToProps)(Purchase);