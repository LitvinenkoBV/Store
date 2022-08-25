import { GET_PRODUCTS, LOADING_PRODUCTS, ERROR_PRODUCTS } from "./type";

export const addProductsAction = (payload) => ({
  type: GET_PRODUCTS,
  payload,
});

export const loadingProductsAction = (payload) => ({
  type: LOADING_PRODUCTS,
  payload,
});

export const errorProductsAction = (payload) => ({
  type: ERROR_PRODUCTS,
  payload,
});
