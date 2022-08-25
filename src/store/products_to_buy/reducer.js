import {
  ADD_PRODUCT_TO_BUY,
  REMOVE_PRODUCT_TO_BUY,
  CLEAN_PRODUCTS_TO_BUT,
} from "./type";

export const productsToBuyReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_BUY:
      return [...action.payload];
    case REMOVE_PRODUCT_TO_BUY:
      return [...action.payload];
    case CLEAN_PRODUCTS_TO_BUT:
      localStorage.removeItem("arrProductsToBuy");
      return [];
    default:
      return state;
  }
};

export default productsToBuyReducer;
