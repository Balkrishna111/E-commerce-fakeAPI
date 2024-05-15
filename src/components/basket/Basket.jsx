import NavigationBar from "../NavigationBar";
import BasketTable from "./basketTable/BasketTable";
import { useContext } from "react";
import { StoreContext } from "../../context+reducer/StoreContext";

const Basket = () => {
  const { cartTotal, setCartTotal } = useContext(StoreContext);
  return (
    <div>
      <NavigationBar />
      <div className='grand-total m-4 w-100'>
        {/* <h5>Grand Total: ${cartTotal}</h5> */}
      </div>
      <BasketTable />
    </div>
  );
};
export default Basket;
