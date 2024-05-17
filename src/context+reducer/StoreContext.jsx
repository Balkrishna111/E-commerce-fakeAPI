import { createContext, useContext, useEffect, useState } from "react";

export const StoreContext = createContext(undefined);
export const StoreContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartProductsSubTotal, setCartProductsSubTotal] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [WishList, setWishList] = useState([]);

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
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
