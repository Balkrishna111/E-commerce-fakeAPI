import Basket from "./components/basket/Basket";
import DescriptionPage from "./components/DescriptionPage/DescriptionPage";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import { StoreContextProvider } from "./context+reducer/StoreContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <StoreContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/basket' element={<Basket />}></Route>
            <Route path='/details' element={<DescriptionPage />}></Route>
          </Routes>
        </Router>
      </StoreContextProvider>
    </>
  );
}

export default App;