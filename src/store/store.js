import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./products/reducer";
import { getFavoriteProductsReducer } from "./favorite_products//reducer";
import { productsToBuyReducer } from "./products_to_buy/reducer";
import { modalReducer } from "./modal/reducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  favoriteProducts: getFavoriteProductsReducer,
  productsToBuy: productsToBuyReducer,
  modal: modalReducer,
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devTools)
);
