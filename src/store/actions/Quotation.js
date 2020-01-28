import axios from 'axios';

export async function SendQuotation (values) {
  const api = process.env.REACT_APP_BASE_URL.toString();
  const accessData = process.env.REACT_APP_USER_SERVICE + ":" + process.env.REACT_APP_PASSWORD_SERVICE;
  let encoded = window.btoa(accessData);
  let auth = 'Basic ' + encoded;
  var config = {
    headers: {'Accept': 'application/json', 'Authorization': auth},
  };
  console.log(values);
  const body = {
    coverage_begin: values.begin.toString(),
    coverage_end: values.end.toString(),
    destination: parseInt(values.destination),
    coverages: [1]
  }

  const requestQuotation = await axios.post(api+'/quotation', body, config);
  const requestProduct = await axios.get(api+'/base/products', config);

  return {
    type: 'GET_QUOTATION',
    payloadQuotation: requestQuotation,
    payloadProduct: requestProduct,
  };
}