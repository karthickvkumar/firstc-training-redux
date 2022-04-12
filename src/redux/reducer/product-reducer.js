const initialState = {
  product : []
};

export default function ProductReducer(state = initialState , action){
  console.log(action);
  switch(action.type){
    case "ADD_TO_CART":
      return {...state, product : [...state.product, action.value ] }
    default:
      return state;
  }
}