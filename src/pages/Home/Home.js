import ProductList from "../../components/ProductList/ProductList";
import DisplayProduct from "../../components/DisplayProduct/DisplayProduct";
import { useSelector } from "react-redux";

const Home = (props) => {
  const products = useSelector((state) => state.products);

  return (
    <>
      <DisplayProduct />
      {products.loading && <h1 style={{ textAlign: "center" }}>Loading...</h1>}
      <ProductList openModal={props.openModal} />
    </>
  );
};

export default Home;
