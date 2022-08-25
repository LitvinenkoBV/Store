import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import "../../nullstyles.css";
import arrModalWindows from "../../arrModalWindow.js";
import { Route, Routes } from "react-router-dom";
import BasketProducts from "../../pages/BasketProducts/BasketProducts";
import Home from "../../pages/Home/Home.js";
import FavoritesProducts from "../../pages/FavoritesProducts/FavoritesProducts.js";
import Header from "../Header/Header";
import { useDispatch, useSelector, connect } from "react-redux";
import { getFavoriteProductsAction } from "../../store/favorite_products/action";
import { addProductsToBuyAction } from "../../store/products_to_buy/action";
import { openModalAction, closeModalAction } from "../../store/modal/action";
import { getProducts } from "../../store/products/middleware";
export const SwitcherContext = React.createContext();

const App = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const [arrModalWindow] = useState(arrModalWindows);
  const [switcher, setSwitcher] = useState("cards");

  useEffect(() => {
    dispatch(getProducts());
    if (localStorage.getItem("arrFavorite")) {
      dispatch(
        getFavoriteProductsAction(
          JSON.parse(localStorage.getItem("arrFavorite"))
        )
      );
    } else {
      localStorage.setItem("arrFavorite", JSON.stringify([]));
    }
    if (localStorage.getItem("arrProductsToBuy")) {
      dispatch(
        addProductsToBuyAction(
          JSON.parse(localStorage.getItem("arrProductsToBuy"))
        )
      );
    } else {
      localStorage.setItem("arrProductsToBuy", JSON.stringify([]));
    }
  }, []);

  const switchDisplay = (switcher) => {
    setSwitcher(switcher);
  };

  const openModal = (id, product) => {
    dispatch(
      openModalAction({ product: product, arrModalWindow: arrModalWindow[id] })
    );
  };

  const closeModal = () => {
    dispatch(closeModalAction());
  };

  const { id, title, text, closeButton, actions } = modal.modalWindow;

  return (
    <>
      <SwitcherContext.Provider value={{ switcher, switchDisplay }}>
        <Header />
        <Routes>
          <Route
            path="/basket"
            element={<BasketProducts openModal={openModal} />}
          />
          <Route
            path="/favorites"
            element={<FavoritesProducts openModal={openModal} />}
          />
          <Route path="/" element={<Home openModal={openModal} />} />
        </Routes>
        {modal.isOpen && (
          <Modal
            id={id}
            title={title}
            text={text}
            closeButton={closeButton}
            actions={actions}
            closeModal={closeModal}
          />
        )}
      </SwitcherContext.Provider>
    </>
  );
};

export default App;
