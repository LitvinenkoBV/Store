import "./Header.scss";
import FavoritesHeader from "../FavoritesHeader/FavoritesHeader";
import Basket from "../Basket/Basket";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/">
          <div className="header__logo">
            <img src="./img/logo.svg" alt="" />
          </div>
        </Link>

        <div>
          <Basket />
          <FavoritesHeader />
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  arrProductsToBuy: PropTypes.array,
};

export default Header;
