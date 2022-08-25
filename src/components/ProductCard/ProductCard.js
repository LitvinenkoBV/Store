import "./ProductCard.scss";
import Button from "../Button/Button";
import Favorites from "../Favorites/Favorites";
import PropTypes from "prop-types";
import { SwitcherContext } from "../App/App";
import { useContext } from "react";

const ProductCard = (props) => {
  const { name, price, url, color } = props.product;
  const switcher = useContext(SwitcherContext);

  return (
    <>
      {switcher.switcher === "cards" ? (
        <li className="products__product-item-cards">
          {props.deleteCard && (
            <div
              onClick={() => props.openModal(props.dataModalId, props.product)}
              className="products__product-item-delete"
            >
              +
            </div>
          )}
          <img className="products__product-item-img" src={url}></img>
          <div className="products__product-item-name"> {name}</div>
          <div className="products__product-item-price"> {price}₴</div>
          <div className="products__product-item-color">Колір: {color}</div>
          <div>
            <Favorites
              product={props.product}
              productToFavorites={props.product}
            />
            {!props.disabledBtn && (
              <Button
                text="Add to Card"
                style={{ backgroundColor: "purple" }}
                openModal={props.openModal}
                dataModalId={0}
                product={props.product}
              />
            )}
          </div>
        </li>
      ) : (
        <li className="products__product-item-list">
          {props.deleteCard && (
            <div
              onClick={() => props.openModal(props.dataModalId, props.product)}
              className="products__product-item-delete"
            >
              +
            </div>
          )}
          <div className="products__product-item-img-wrapper">
            <img className="products__product-item-img-list" src={url}></img>
          </div>
          <div className="products__product-item-name"> {name}</div>
          <div className="products__product-item-price"> {price}₴</div>
          <div className="products__product-item-color">Колір: {color}</div>
          <div>
            <Favorites
              product={props.product}
              productToFavorites={props.product}
            />
            {!props.disabledBtn && (
              <Button
                text="Add to Card"
                style={{ backgroundColor: "purple" }}
                openModal={props.openModal}
                dataModalId={0}
                product={props.product}
              />
            )}
          </div>
        </li>
      )}
    </>
  );
};

ProductCard.propTypes = {
  addProductsToFavorites: PropTypes.func,
  openModal: PropTypes.func,
  product: PropTypes.object,
};

export default ProductCard;
