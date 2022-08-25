import "./Basket.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Basket = () => {
  const arrProductsToBuy = useSelector((state) => state.productsToBuy);
  return (
    <Link to="/basket" className="header__basket">
      <img src="./img/shopping-cart.png" alt="" />
      {arrProductsToBuy.length}
    </Link>
  );
};

Basket.propTypes = {
  arrProductsToBuy: PropTypes.array,
};

export default Basket;
