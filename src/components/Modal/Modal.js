import React from "react";
import "./Modal.scss";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductsToBuyAction,
  removeProductsToBuyAction,
} from "../../store/products_to_buy/action";

const Modal = (props) => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const arrProductsToBuy = useSelector((state) => state.productsToBuy);
  const { id, title, text, closeButton, closeModal } = props;

  const addProductsToBuy = () => {
    if (!arrProductsToBuy.includes(modal.currentProduct)) {
      localStorage.setItem(
        "arrProductsToBuy",
        JSON.stringify([...arrProductsToBuy, modal.currentProduct])
      );
      dispatch(
        addProductsToBuyAction([...arrProductsToBuy, modal.currentProduct])
      );
    } else {
      let arr = arrProductsToBuy.filter((product) => {
        if (JSON.stringify(product) !== JSON.stringify(modal.currentProduct)) {
          return product;
        }
      });
      localStorage.setItem("arrProductsToBuy", JSON.stringify(arr));
      dispatch(removeProductsToBuyAction(arr));
    }
    closeModal();
  };

  return (
    <div className="modal" onClick={() => props.closeModal()}>
      <div
        className="modal__content"
        onClick={(e) => e.stopPropagation()}
        key={id}
      >
        <div className="modal__title">{title}</div>
        {closeButton && (
          <button onClick={() => closeModal()} className="modal__close-button">
            +
          </button>
        )}
        <div className="modal__text">{text}</div>
        <div className="modal__button-confirm">
          <>
            {id === 0 && (
              <button
                onClick={() => addProductsToBuy()}
                className="modal__button-ok"
                value={true}
              >
                Так
              </button>
            )}
            {id === 1 && (
              <button
                onClick={() => addProductsToBuy()}
                className="modal__button-ok"
                value={true}
              >
                Так
              </button>
            )}

            <button
              onClick={() => closeModal()}
              className="modal__button-cancel"
              value={false}
            >
              Ні
            </button>
          </>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  addProductsToBuy: PropTypes.func,
  closeButton: PropTypes.bool,
  closeModal: PropTypes.func,
  id: PropTypes.number,
  text: PropTypes.string,
  title: PropTypes.string,
};
Modal.defaultProps = {
  title: "Додати товар до кошику?",
};

export default Modal;
