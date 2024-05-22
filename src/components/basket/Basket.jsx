import NavigationBar from "../NavigationBar";
import BasketTable from "./basketTable/BasketTable";
import { useContext } from "react";
import { StoreContext } from "../../context+reducer/StoreContext";
import TopSegment from "../Extras/TopSegment";
import { IoCartOutline, IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import "./basket.css";
import { CiMap, CiDeliveryTruck, CiCreditCard1 } from "react-icons/ci";
import { ShippingContext } from "../../context+reducer/ShippingContext";
import ShippingIcons from "../Extras/ShippingIcons/ShippingIcons";
import ShippingAddress from "../../shipping/ShippingAddress";
import DeliveryInfo from "../../shipping/DeliveryInfo";
import Payment from "../../shipping/Payment";
import Confirmation from "../../shipping/Confirmation";
import CategoryBar from "../Extras/CategoryBar";

const Basket = () => {
  // const { cartTotal, setCartTotal } = useContext(StoreContext);
  const { currentPhase, setCurrentPhase } = useContext(ShippingContext);
  return (
    <>
      <div>
        <TopSegment />
        <NavigationBar />
        <CategoryBar />
        <div className='grand-total m-4 w-100'>
          {/* <h5>Grand Total: ${cartTotal}</h5> */}
        </div>
        <ShippingIcons />
        {currentPhase === 0 && <BasketTable />}
        {currentPhase === 1 && <ShippingAddress />}
        {currentPhase === 2 && <DeliveryInfo />}
        {currentPhase === 3 && <Payment />}
        {currentPhase === 4 && <Confirmation />}
      </div>
    </>
  );
};
export default Basket;
