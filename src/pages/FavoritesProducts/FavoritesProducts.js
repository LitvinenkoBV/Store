import "./FavoritesProducts.scss";
import ProductCard from "../../components/ProductCard/ProductCard.js";
import { useSelector } from "react-redux";

const FavoritesProducts = (props) => {
  const arrFavoriteProducts = useSelector((state) => state.favoriteProducts);
  return (
    <>
      <ul
        className="products"
        style={{ maxWidth: "1200px", margin: "0 auto " }}
      >
        {arrFavoriteProducts.map((product) => {
          return (
            <ProductCard
              key={product.vendorCode}
              product={product}
              openModal={props.openModal}
            />
          );
        })}
      </ul>
    </>
  );
};

export default FavoritesProducts;
