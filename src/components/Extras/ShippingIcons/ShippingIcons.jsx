import "./shippingIcons.css";
import { useContext } from "react";
import { StoreContext } from "../../../context+reducer/StoreContext";
import { IoCartOutline, IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { CiMap, CiDeliveryTruck, CiCreditCard1 } from "react-icons/ci";
import { ShippingContext } from "../../../context+reducer/ShippingContext";
const ShippingIcons = () => {
  const { currentPhase, setCurrentPhase } = useContext(ShippingContext);

  return (
    <div className='icon-container d-flex justify-content-center gap-3 '>
      <div className='card-container d-flex flex-column justify-content-center align-items-center gap-2 p-1'>
        <div
          className='icon d-flex flex-column px-4 align-items-center'
          style={currentPhase == 0 ? { color: "#dc3545" } : { color: "gray" }}
        >
          <IoCartOutline size={50} />
          <span>1. My Cart</span>
        </div>
        <div
          className='active-bar'
          style={
            currentPhase == 0
              ? { backgroundColor: "#dc3545" }
              : { backgroundColor: "gray" }
          }
        ></div>
      </div>
      <div className='card-container d-flex flex-column justify-content-center align-items-center gap-2  p-1'>
        <div
          className='icon d-flex flex-column px-4 align-items-center'
          style={currentPhase == 1 ? { color: "#dc3545" } : { color: "gray" }}
        >
          <CiMap size={50} />
          <span>2. Shipping info</span>
        </div>
        <div
          className='active-bar'
          style={
            currentPhase == 1
              ? { backgroundColor: "#dc3545" }
              : { backgroundColor: "gray" }
          }
        ></div>
      </div>
      <div className='card-container d-flex flex-column justify-content-center align-items-center gap-2 p-1'>
        <div
          className='icon d-flex flex-column px-4 align-items-center'
          style={currentPhase == 2 ? { color: "#dc3545" } : { color: "gray" }}
        >
          <CiDeliveryTruck size={50} />
          <span>3. Delivery info</span>
        </div>
        <div
          className='active-bar'
          style={
            currentPhase == 2
              ? { backgroundColor: "#dc3545" }
              : { backgroundColor: "gray" }
          }
        ></div>
      </div>
      <div className='card-container d-flex flex-column justify-content-center align-items-center gap-2 p-1'>
        <div
          className='icon d-flex flex-column px-4 align-items-center'
          style={currentPhase == 3 ? { color: "#dc3545" } : { color: "gray" }}
        >
          <CiCreditCard1 size={50} />
          <span>4. Payment</span>
        </div>
        <div
          className='active-bar'
          style={
            currentPhase == 3
              ? { backgroundColor: "#dc3545" }
              : { backgroundColor: "gray" }
          }
        ></div>
      </div>
      <div className='card-container d-flex flex-column justify-content-center align-items-center gap-2 p-1'>
        <div
          className='icon d-flex flex-column px-4 align-items-center'
          style={currentPhase == 4 ? { color: "#dc3545" } : { color: "gray" }}
        >
          <IoCheckmarkDoneCircleOutline size={50} />
          <span>5. Confirmation</span>
        </div>
        <div
          className='active-bar'
          style={
            currentPhase == 4
              ? { backgroundColor: "#dc3545" }
              : { backgroundColor: "gray" }
          }
        ></div>
      </div>
    </div>
  );
};
export default ShippingIcons;
