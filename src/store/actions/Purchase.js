import axios from 'axios';

export async function CreatePurchase (values) {
  const api = process.env.REACT_APP_BASE_URL.toString();
  const accessData = process.env.REACT_APP_USER_SERVICE + ":" + process.env.REACT_APP_PASSWORD_SERVICE;
  let encoded = window.btoa(accessData);
  let auth = 'Basic ' + encoded;
  var config = {
    headers: {'Accept': 'application/json', 'Authorization': auth},
  };
  


  //const requestQuotation = await axios.post(api+'/quotation', body, config);

  return {
    type: 'CREATE_PURCHASE',
  };
}