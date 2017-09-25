import { LOADING_PRODUCTS } from './../actions/products/const';

// The initial application state
const initialState = {
    loadingProducts: false,
};


// Takes care of changing the application state
export default function products(state = initialState, action) {
  switch (action.type) {
    case LOADING_PRODUCTS:
        return {
            ...state,
            loadingProducts: action.state
        }
    default:
      return state;
  }
}
