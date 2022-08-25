import "./ProductList.scss";
import ProductCard from "../ProductCard/ProductCard";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { SwitcherContext } from "../App/App";

const ProductList = (props) => {
  const arrProducts = useSelector((state) => state.products.products);
  const { openModal } = props;
  const { switcher } = useContext(SwitcherContext);
  console.log(switcher);
  return (
    <>
      {switcher === "cards" ? (
        <ul className="products">
          {arrProducts.map((product) => {
            return (
              <ProductCard
                key={product.vendorCode}
                product={product}
                openModal={openModal}
              />
            );
          })}
        </ul>
      ) : (
        <ul className="products-list">
          {arrProducts.map((product) => {
            return (
              <ProductCard
                key={product.vendorCode}
                product={product}
                openModal={openModal}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};

ProductList.propTypes = {
  arrProducts: PropTypes.array,
  openModal: PropTypes.func,
};

export default ProductList;
