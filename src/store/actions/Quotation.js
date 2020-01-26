import axios from 'axios';

export async function SendQuotation (values) {
  const accessData = process.env.REACT_APP_USER_SERVICE + ":" + process.env.REACT_APP_PASSWORD_SERVICE;
  let encoded = window.btoa(accessData);
  let auth = 'Basic ' + encoded;
  var config = {
    headers: {'Accept': 'application/json', 'Authorization': auth},
  };

  const body = {
    coverage_begin: values.start.toString(),
    coverage_end: values.end.toString(),
    destination: parseInt(values.destination),
    coverages: [
      1
    ]
  }

  const requestQuotation = await axios.post('https://demo.assisttrip.com.br/api/quotation', body, config);
  const requestProduct = await axios.get('https://demo.assisttrip.com.br/api/base/products', config);

  return {
    type: 'GET_QUOTATION',
    payloadQuotation: requestQuotation,
    payloadProduct: requestProduct,
  };
}