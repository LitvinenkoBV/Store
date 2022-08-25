import { addProductsAction } from "./action";
import { loadingProductsAction } from "./action";
import { errorProductsAction } from "./action";
import { fetchProducts } from "../../api/products";

export const getProducts = () => {
  return (dispatch) => {
    dispatch(loadingProductsAction());
    fetchProducts()
      .then((res) => {
        setTimeout(() => {
          dispatch(addProductsAction(res.data));
        }, 500);
      })
      .catch((err) => dispatch(errorProductsAction(err.message)));
  };
};
