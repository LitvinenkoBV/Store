import { GET_PRODUCTS, LOADING_PRODUCTS, ERROR_PRODUCTS } from "./type";

const defaultState = {
  loading: false,
  products: [],
  error: null,
};

export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case LOADING_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case ERROR_PRODUCTS:
      return {
        ...state,
        loading: false,
        error: new Error(),
      };
    default:
      return state;
  }
};

export default productsReducer;
