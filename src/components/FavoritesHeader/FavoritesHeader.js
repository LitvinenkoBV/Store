import "./FavoritesHeader.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const FavoritesHeader = () => {
  const arrFavoriteProducts = useSelector((state) => state.favoriteProducts);

  return (
    <Link className="header__favorites" to="/favorites">
      <img src="./img/favorite.png" alt="" />
      {arrFavoriteProducts !== null && arrFavoriteProducts.length}
    </Link>
  );
};

FavoritesHeader.propTypes = {
  arrFavoriteProducts: PropTypes.array,
};

export default FavoritesHeader;
