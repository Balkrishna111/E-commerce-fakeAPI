import "./shippingAddress.css";
import { FiPlus } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa6";
import { useContext } from "react";
import { ShippingContext } from "../context+reducer/ShippingContext";

const ShippingAddress = () => {
  const { currentPhase, setCurrentPhase } = useContext(ShippingContext);

  const handleContinue = () => {
    setCurrentPhase(currentPhase + 1);
  };
  return (
    <div className='container border border-1'>
      {/* <h1>Select Address</h1> */}
      <div className=' row'>
        <div className='w-100'>
          <label>
            <input
              type='radio'
              name='product'
              selected
              defaultChecked
              className='card-input-element'
            />

            <div className='card card-default card-input'>
              <div className='card-header'>
                3947 Lake Side Hallanchowk, Pokhara, Nepal
              </div>
              <div className='card-body'>
                <table className='table table-borderless '>
                  <tbody>
                    <tr>
                      <td scope='row'>Postal Code</td>
                      <td>1234</td>
                    </tr>
                    <tr>
                      <td scope='row'>City</td>
                      <td>Pokhara</td>
                    </tr>
                    <tr>
                      <td scope='row'>State</td>
                      <td colSpan='2'>Gandaki</td>
                    </tr>
                    <tr>
                      <td scope='row'>Country</td>
                      <td colSpan='2'>Nepal</td>
                    </tr>
                    <tr>
                      <td scope='row'>Phone</td>
                      <td colSpan='2'>9811111111</td>
                    </tr>
                  </tbody>
                </table>
                <div className='d-flex justify-content-end'>
                  <button className='btn btn-warning text-light fw-bold'>
                    Change
                  </button>
                </div>
              </div>
            </div>
          </label>
        </div>
        <div className='w-100'>
          <label>
            <input type='radio' name='product' className='card-input-element' />

            <div className='card card-default card-input'>
              <div className='card-header'>
                8364 Thadodhunga, Dhobighat, Lalitpur, Nepal
              </div>
              <div className='card-body'>
                <table className='table table-borderless '>
                  <tbody>
                    <tr>
                      <td scope='row'>Postal Code</td>
                      <td>5678</td>
                    </tr>
                    <tr>
                      <td scope='row'>City</td>
                      <td>Kathmandu</td>
                    </tr>
                    <tr>
                      <td scope='row'>State</td>
                      <td colSpan='2'>Bagmati</td>
                    </tr>
                    <tr>
                      <td scope='row'>Country</td>
                      <td colSpan='2'>Nepal</td>
                    </tr>
                    <tr>
                      <td scope='row'>Phone</td>
                      <td colSpan='2'>9822222222</td>
                    </tr>
                  </tbody>
                </table>
                <div className='d-flex justify-content-end'>
                  <button className='btn btn-warning text-light fw-bold'>
                    Change
                  </button>
                </div>
              </div>
            </div>
          </label>
        </div>
        <div className='new-address-btn w-100'>
          <button className='d-flex flex-column w-100 py-2'>
            <FiPlus size={30} />
            Add New Address
          </button>
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
            Continue to Delivery Info
          </button>
        </div>
      </div>
    </div>
  );
};
export default ShippingAddress;
