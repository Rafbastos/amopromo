const INITIAL_STATE = {quotation:[], product:[]};

export default function PurchaseReducer(state = INITIAL_STATE, action){
  switch(action.type){
    case 'CREATE_PURCHASE':
      const correctProducts = [],
      product_id = action.payloadQuotation.data[0].product_id;

      for (var i = 0; i < action.payloadProduct.data.length; i++) {
        if(product_id === action.payloadProduct.data[i].id)  {
          correctProducts.push(action.payloadProduct.data[i]);
        }
      }
      
      return {...state, quotation: action.payloadQuotation.data, product: correctProducts}
    default:
      return state
  }
}