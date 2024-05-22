import { createContext, useContext, useEffect, useState } from "react";

export const StoreContext = createContext(undefined);
export const StoreContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartProductsSubTotal, setCartProductsSubTotal] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [WishList, setWishList] = useState([]);
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const categoriesArray = [];
  const categories = (arr) => {
    arr.forEach((item) => {
      if (!categoriesArray.includes(item.category)) {
        categoriesArray.push(item.category);
      }
    });
  };

  allProducts && categories(allProducts);

  const allCartTotal = () => {
    let total = 0;
    cartProducts.forEach((item) => {
      total = total + item.price;
    });
    setCartTotal(total);
  };

  useEffect(() => {
    allCartTotal();
  }, [cartProducts]);

  return (
    <StoreContext.Provider
      value={{
        allProducts,
        setAllProducts,
        cartProducts,
        setCartProducts,
        cartTotal,
        setCartTotal,
        cartProductsSubTotal,
        setCartProductsSubTotal,
        filteredProduct,
        setFilteredProduct,
        WishList,
        setWishList,
        purchaseHistory,
        setPurchaseHistory,
        categoriesArray,
        loggedIn,
        setLoggedIn,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
