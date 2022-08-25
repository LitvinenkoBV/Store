import { REMOVE_FAVORITE_PRODUCTS, ADD_FAVORITE_PRODUCTS } from "./type";

export const getFavoriteProductsReducer = (state = [], action) => {
  switch (action.type) {
    case REMOVE_FAVORITE_PRODUCTS:
      return [...action.payload];
    case ADD_FAVORITE_PRODUCTS:
      return [...action.payload];
    default:
      return state;
  }
};

export default getFavoriteProductsReducer;
