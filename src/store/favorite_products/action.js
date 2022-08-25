import { REMOVE_FAVORITE_PRODUCTS, ADD_FAVORITE_PRODUCTS } from "./type";

export const getFavoriteProductsAction = (payload) => ({
  type: ADD_FAVORITE_PRODUCTS,
  payload,
});
export const removeFavoriteProductsAction = (payload) => ({
  type: REMOVE_FAVORITE_PRODUCTS,
  payload,
});
