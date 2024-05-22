import "./payment.css";
import { FaArrowLeft } from "react-icons/fa6";
import { useContext } from "react";
import { StoreContext } from "../context+reducer/StoreContext";
import { ShippingContext } from "../context+reducer/ShippingContext";
import { MdHeight } from "react-icons/md";
import { Link } from "react-router-dom";

const Payment = () => {
  const { currentPhase, setCurrentPhase } = useContext(ShippingContext);
  const {
    cartProducts,
    setCartProducts,
    cartTotal,
    setCartTotal,
    purchaseHistory,
    setPurchaseHistory,
  } = useContext(StoreContext);
  const handleContinue = () => {
    setPurchaseHistory(cartProducts);
    setCurrentPhase(currentPhase + 1);
    setCartProducts([]);
  };

  return (
    <div className='container border border-1'>
      <div className='summary row'>
        <div className='left-section col-md-8 col-12'>
          <div className='upper-section'>
            <p className='fw-bold'>Any Additional Info?</p>
            <textarea
              className='w-100 p-2'
              name='info'
              id='info'
              placeholder='Type your text'
              rows={4}
            ></textarea>
          </div>

          <div className='lower-section'>
            <p className='fw-bold'>Select a Payment option</p>
            <div className='payment-cards'>
              <div className='container'>
                <div className='container row w-100 d-flex justify-content-center d-flex justify-content-center align-items-center'>
                  <div>
                    <label>
                      <input
                        type='radio'
                        name='product'
                        selected
                        defaultChecked
                        className='card-input-element'
                      />

                      <div className='card card-default card-input w-25'>
                        <img
                          src='data:image/png;base64,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'
                          alt='esewa'
                        />
                      </div>
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type='radio'
                        name='product'
                        className='card-input-element'
                      />

                      <div className='card card-default card-input w-25'>
                        <img
                          src='data:image/png;base64,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'
                          alt='khalti'
                        />
                      </div>
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type='radio'
                        name='product'
                        className='card-input-element'
                      />

                      <div className='card card-default card-input w-25'>
                        <img
                          src='data:image/png;base64,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'
                          alt=''
                        />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='right-section col-md-3 col-12 border border-1'>
          <div>
            <h4 className='mt-2'>Summary</h4>
          </div>
          <div className='product container w-100 text-secondary'>
            <div className='d-flex justify-content-between w-100'>
              <p className='mb-0'>Product</p>
              <p className='mb-0'>Total</p>
            </div>
            <div
              className='w-100 bg-secondary mb-0'
              style={{ height: "2px" }}
            ></div>
          </div>

          <div className='product-names'>
            <table className='table table-borderless'>
              <tbody style={{ fontSize: "0.8rem" }}>
                {cartProducts.map((item) => (
                  <tr key={item.id}>
                    <td className='w-75 text-start'>
                      <p>{item.title}</p>
                    </td>
                    <td className='w-25 text-danger'>
                      <p>${item.price}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='w-100 bg-secondary' style={{ height: "2px" }}></div>
          </div>

          <table className='table table-borderless'>
            <tbody style={{ fontSize: "0.8rem" }}>
              <tr>
                <td className='w-75 text-start'>
                  <p>Subtotal</p>
                </td>
                <td className='w-25 text-danger'>
                  <p>${cartTotal}</p>
                </td>
              </tr>
              <tr>
                <td className='w-75 text-start'>
                  <p>Tax</p>
                </td>
                <td className='w-25 text-danger'>
                  <p>$0.00</p>
                </td>
              </tr>
              <tr>
                <td className='w-75 text-start'>
                  <p>Total Shipping</p>
                </td>
                <td className='w-25 text-danger'>
                  <p>$0.00</p>
                </td>
              </tr>
              <div
                className='w-100 bg-secondary mb-0'
                style={{ height: "2px" }}
              ></div>
              <tr>
                <td className='w-75 text-start'>
                  <p>Grand Total</p>
                </td>
                <td className='w-25 text-danger'>
                  <p>${cartTotal}</p>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='coupon-input'>
            <input
              type='text'
              placeholder='Enter Coupon Code'
              className='rounded px-2 py-2'
            />
            <button className='btn btn-danger py-2 rounded'>Enter</button>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='w-100 button-container d-flex justify-content-between'>
          <Link to='/' style={{ textDecoration: "none" }}>
            <button className='btn btn-light d-flex justify-content-center align-items-center gap-1 text-danger px-4 py-2 fw-bold'>
              <FaArrowLeft />
              Return to Shop
            </button>
          </Link>

          <button
            onClick={handleContinue}
            className=' btn btn-danger px-4 py-2 fw-bold'
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};
export default Payment;
