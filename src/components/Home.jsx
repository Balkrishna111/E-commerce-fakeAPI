import { useContext, useEffect } from "react";
import useFetch from "../customHooks/useFetch";
import { StoreContext } from "../context+reducer/StoreContext";
import "./style/home.css";
import Container from "react-bootstrap/Container";
import ProductCard from "./ProductCard";
import NavigationBar from "./NavigationBar";

const Home = () => {
  const URL = "https://fakestoreapi.com/products/";
  const { loading, fetchedData, error } = useFetch(URL);
  const {
    allProducts,
    setAllProducts,
    cartProducts,
    setCartProducts,
    cartProductsSubTotal,
    setCartProductsSubTotal,
    filteredProduct,
    setFilteredProduct,
  } = useContext(StoreContext);

  useEffect(() => {
    setAllProducts(fetchedData);
  }, [fetchedData]);

  // console.log(cartProductsSubTotal);
  // console.log(allProducts.length);
  return (
    <div>
      <NavigationBar />
      {filteredProduct && (
        <Container className='container'>
          {filteredProduct.map((product) => (
            <ProductCard details={product} key={product.id} />
          ))}
        </Container>
      )}
    </div>
  );
};
export default Home;
