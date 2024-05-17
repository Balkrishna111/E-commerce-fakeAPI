import { useContext } from "react";
import CategoryBar from "../Extras/CategoryBar";
import TopSegment from "../Extras/TopSegment";
import NavigationBar from "../NavigationBar";
import { StoreContext } from "../../context+reducer/StoreContext";
import Container from "react-bootstrap/Container";
import ProductCard from "../ProductCard";

const WishListComonent = () => {
  const {
    allProducts,
    setAllProducts,
    cartProducts,
    setCartProducts,
    cartProductsSubTotal,
    setCartProductsSubTotal,
    setCartTotal,
    WishList,
    setWishList,
  } = useContext(StoreContext);
  return (
    <div>
      <TopSegment />
      <NavigationBar />
      <CategoryBar />
      {WishList && (
        <Container className='container'>
          {WishList.map((product) => (
            <ProductCard details={product} key={product.id} />
          ))}
        </Container>
      )}
    </div>
  );
};
export default WishListComonent;
