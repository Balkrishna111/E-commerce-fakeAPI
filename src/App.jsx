import Basket from "./components/basket/Basket";
import DescriptionPage from "./components/DescriptionPage/DescriptionPage";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import WishListComonent from "./components/WishList/WishListComonent";
import WishList from "./components/WishList/WishListComonent";
import { ShippingContext } from "./context+reducer/ShippingContext";
import { StoreContextProvider } from "./context+reducer/StoreContext";
import { ShippingContextProvider } from "./context+reducer/ShippingContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/User/Dashboard";
import PurchaseHistory from "./components/User/logout-modal-launch/purchaseHistory/PurchaseHistory";

function App() {
  return (
    <>
      <StoreContextProvider>
        <ShippingContextProvider>
          <Router>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/basket' element={<Basket />}></Route>
              <Route path='/details' element={<DescriptionPage />}></Route>
              <Route path='/wishList' element={<WishListComonent />}></Route>
              <Route path='/dashboard' element={<Dashboard />}></Route>
              <Route
                path='/purchase-history'
                element={<PurchaseHistory />}
              ></Route>
            </Routes>
          </Router>
        </ShippingContextProvider>
      </StoreContextProvider>
    </>
  );
}

export default App;
