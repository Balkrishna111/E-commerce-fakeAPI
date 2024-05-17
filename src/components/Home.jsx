import { useContext, useEffect } from "react";
import useFetch from "../customHooks/useFetch";
import { StoreContext } from "../context+reducer/StoreContext";
import "./style/home.css";
import Container from "react-bootstrap/Container";
import ProductCard from "./ProductCard";
import NavigationBar from "./NavigationBar";
import TopSegment from "./Extras/TopSegment";
import CategoryBar from "./Extras/CategoryBar";
import TopAd from "../AdSegment/TopAd";
import FlashSale from "./FlashSale/FlashSale";
import Footer from "./Extras/Footer";
import MiddleAd from "../AdSegment/MiddleAd";
import BottomAd from "../AdSegment/BottomAd";

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
      <TopSegment />
      <NavigationBar />
      <CategoryBar />
      <TopAd />
      <FlashSale />
      <MiddleAd />
      {filteredProduct && (
        <Container className='container'>
          {filteredProduct.map((product) => (
            <ProductCard details={product} key={product.id} />
          ))}
        </Container>
      )}
      <BottomAd />
      <Footer />
    </div>
  );
};
export default Home;
