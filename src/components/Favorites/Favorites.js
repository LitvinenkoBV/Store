import React, { useState, useEffect } from "react";
import "./Favorites.scss";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  getFavoriteProductsAction,
  removeFavoriteProductsAction,
} from "../../store/favorite_products/action";

const Favorites = (props) => {
  const dispatch = useDispatch();
  const arrFavoriteProducts = useSelector((state) => state.favoriteProducts);
  const [onClick, setOnClick] = useState(false);

  useEffect(() => {
    JSON.parse(localStorage.getItem("arrFavorite")).forEach((element) => {
      if (JSON.stringify(element) == JSON.stringify(props.productToFavorites)) {
        setOnClick(() => {
          return !onClick;
        });
      }
    });
  }, []);

  const { productToFavorites } = props;

  const addProductsToFavorites = (productToFavorites) => {
    if (!arrFavoriteProducts.includes(productToFavorites)) {
      localStorage.setItem(
        "arrFavorite",
        JSON.stringify([...arrFavoriteProducts, productToFavorites])
      );
      let arr = [...arrFavoriteProducts, productToFavorites];
      console.log(arr);
      dispatch(getFavoriteProductsAction(arr));
    } else {
      let arr = arrFavoriteProducts.filter((product) => {
        if (JSON.stringify(product) == JSON.stringify(productToFavorites)) {
          return false;
        } else {
          return true;
        }
      });
      dispatch(removeFavoriteProductsAction(arr));
      localStorage.setItem("arrFavorite", JSON.stringify(arr));
    }
  };
  return (
    <a
      onClick={() => {
        addProductsToFavorites(productToFavorites);
        setOnClick(() => {
          return !onClick;
        });
      }}
      className="header__favorites"
    >
      {onClick ? (
        <img src="./img/favorite-check.png" />
      ) : (
        <img src="./img/favorite.png" alt="" />
      )}
    </a>
  );
};

Favorites.propTypes = {
  addProductsToFavorites: PropTypes.func,
  product: PropTypes.object,
  productToFavorites: PropTypes.object,
};

export default Favorites;
