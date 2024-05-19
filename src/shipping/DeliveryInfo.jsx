import "./deliveryinfo.css";
import { FaArrowLeft } from "react-icons/fa6";
import { useContext } from "react";
import { ShippingContext } from "../context+reducer/ShippingContext";
import { StoreContext } from "../context+reducer/StoreContext";

const DeliveryInfo = () => {
  const { currentPhase, setCurrentPhase } = useContext(ShippingContext);
  const { cartProducts, setCartProduct } = useContext(StoreContext);
  const handleContinue = () => {
    setCurrentPhase(currentPhase + 1);
  };
  console.log(cartProducts);
  return (
    <div className='container bcontent w-100'>
      <div>
        <h5>In-House Products</h5>
      </div>
      <hr />

      {cartProducts.map((item) => (
        <div key={item.id} className='card w-100'>
          <div className='row no-gutters'>
            <div className='col-sm-4 pl-10'>
              <img
                className='card-img w-25'
                src={item.image}
                alt='Suresh Dasari Card'
              />
            </div>
            <div className='col-sm-7 h-100'>
              <div className='card-body text-center h-100 d-flex justify-content-start align-items-center'>
                <p className='card-text text-secondary'>{item.title}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className='container'>
        <div className='row w-100 d-flex justify-content-between align-items-center'>
          <p className='col-2 text-center'>Choose Delivery Type:</p>
          <div className='col-8 radio-container d-flex justify-content-end'>
            <div className='col-5'>
              <label>
                <input
                  type='radio'
                  name='product'
                  selected
                  defaultChecked
                  className='card-input-element'
                />

                <div className='card card-default card-input'>
                  <div className='card-body'>Home Delivery</div>
                </div>
              </label>
            </div>
            <div className='col-5'>
              <label>
                <input
                  type='radio'
                  name='product'
                  className='card-input-element'
                />

                <div className='card card-default card-input'>
                  <div className='card-body'>Local Pickup</div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='w-100 button-container d-flex justify-content-between'>
          <button className='btn btn-light d-flex justify-content-center align-items-center gap-1 text-danger px-4 py-2 fw-bold'>
            <FaArrowLeft />
            Return to Shop
          </button>

          <button
            onClick={handleContinue}
            className=' btn btn-danger px-4 py-2 fw-bold'
          >
            Continue to Payments
          </button>
        </div>
      </div>
    </div>
  );
};
export default DeliveryInfo;
