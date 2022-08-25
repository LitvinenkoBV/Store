import React from "react";
import "./Button.scss";
import PropTypes from "prop-types";

const Button = (props) => {
  const { text, style, openModal, dataModalId, product } = props;
  return (
    <button
      data-modal-id={dataModalId}
      className="button__open-modal"
      style={style}
      onClick={() => {
        openModal(dataModalId, product);
      }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  dataModalId: PropTypes.number,
  openModal: PropTypes.func,
  product: PropTypes.object,
  style: PropTypes.object,
  text: PropTypes.string,
};
Button.defaultProps = {
  text: "Add to card?",
};

export default Button;
