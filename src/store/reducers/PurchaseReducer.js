const INITIAL_STATE = {purchases: [{}]};

export default function PurchaseReducer(state = INITIAL_STATE, action){
  switch(action.type){
    case 'CREATE_PURCHASE':      
      return {...state}
    default:
      return state
  }
}