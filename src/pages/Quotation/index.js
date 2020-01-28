import React from 'react';
import '../../assets/css/quotation.css'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import NumberFormat from 'react-number-format';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SendQuotation } from '../../store/actions/Quotation';

import Form from './FormQuotation';

const Quotation  = ({quotations, products, SendQuotation}) => {

    return (
      <>
        <Row>
          <Col xs={12} md={12}>
            <Form onSubmit={SendQuotation} />
          </Col>
        </Row>

        <Row className="tableQuotation">
          <Col xs={12} md={12}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Produto/ Product:</th>
                  <th>Planos</th>
                </tr>
              </thead>
              <tbody>
                {quotations.map(quot => (
                <tr key={ quot.product_id}>
                    <td><strong> {quot.product_name}</strong><br /><br />Valor Líquido: R$<NumberFormat value={quot.net_price} displayType={'text'} thousandSeparator={true} prefix={''} /> <br />Valor Bruto: R${ quot.elder_net_price}<br /> Moeda: { quot.currency}<br />Taxa do Câmbio: R${ quot.exchange_rate}</td>
                    <td>
                      {products.map(prod => (
                        <div key={ prod.id}>
                          {prod.coverages.map(coverage => (
                            <div className="coverage-block" key={ coverage.coverage_id}>
                              <strong>Plano: { coverage.display_name_ptbr }/{ coverage.display_name_en } </strong><br />
                              <span>Valor do Plano/ Price: <NumberFormat value={coverage.coverage_value} displayType={'text'} thousandSeparator={true} prefix={''} /> { coverage.currency } </span>
                            </div>
                          ))}
                          
                        </div>
                      ))}
                    </td>
                    
                  </tr>
                ))}
                
              </tbody>
            </Table>
          </Col>
        </Row>
      </>
    );
}

const mapStateToProps = state => ({
  quotations: state.QuotationReducer.quotation,
  products: state.QuotationReducer.product
});

const mapDispatchToProps = dispatch => bindActionCreators({SendQuotation}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Quotation);
