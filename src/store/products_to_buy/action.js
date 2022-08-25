import {
  ADD_PRODUCT_TO_BUY,
  REMOVE_PRODUCT_TO_BUY,
  CLEAN_PRODUCTS_TO_BUT,
} from "./type";

export const addProductsToBuyAction = (payload) => ({
  type: ADD_PRODUCT_TO_BUY,
  payload,
});
export const removeProductsToBuyAction = (payload) => ({
  type: REMOVE_PRODUCT_TO_BUY,
  payload,
});
export const cleanProductsToBuy = (payload) => ({
  type: CLEAN_PRODUCTS_TO_BUT,
  payload,
});
