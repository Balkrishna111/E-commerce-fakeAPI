import CategoryBar from "../Extras/CategoryBar";
import TopSegment from "../Extras/TopSegment";
import NavigationBar from "../NavigationBar";
import { FiTarget } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import logo from "../../assets/logo.png";

import "./dashboard.css";

const Dashboard = () => {
  return (
    <>
      <TopSegment />
      <NavigationBar />
      <CategoryBar />
      <div className='text-center my-4'>
        <h3>Dashboard</h3>
      </div>
      <div className='container'>
        <div className='w-100 d-flex flex-wrap '>
          <div className=' w-25'>
            <div className='userInfo pt-4 '>
              <div className='userImg text-center'>
                <img
                  height={70}
                  src='data:image/png;base64,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'
                  alt='userimage'
                />
              </div>
              <div className='user-description text-center'>
                <p className='fw-bold mt-2'>Sandesh Gautam</p>
                <p className='text-secondary mt-0'>1234-234-3456</p>
              </div>
            </div>
          </div>
          <div className=' w-50 pt-0'>
            <div class='container mt-0'>
              <div class='card bg-dark'>
                <div class='visa_logo'>
                  <img height={40} src={logo} alt='' />
                </div>
                <div className='name text-light fs-4 fw-bold ml-2 my-0'>
                  <p>Sandesh Gautam</p>
                </div>
                <div class='visa_info mt-0'>
                  <p>Wallet Balance: $112.89</p>
                  <button className='btn btn-light'>Recharge Wallet</button>
                </div>
              </div>
            </div>

            <div className='container'>
              <div className='cartProductCount w-100'>
                <div className='container   d-flex gap-4'>
                  <div className='cart-circle text-light bg-warning'>
                    <IoCartOutline size={30} />
                  </div>
                  <div className='box-data w-75 d-flex flex-column justify-content-center text-dark'>
                    <p className='mb-0  fw-bold fs-4'>20</p>
                    <p className='mt-0 text-secondary'>Items in cart</p>
                  </div>
                </div>
              </div>
              <div className='wishListProductCount w-100'>
                <div className='container d-flex gap-4'>
                  <div className='cart-circle text-light bg-danger'>
                    <FaHeart size={30} />
                  </div>
                  <div className='box-data w-75 d-flex flex-column justify-content-center text-dark'>
                    <p className='mb-0  fw-bold fs-4'>11</p>
                    <p className='mt-0 text-secondary'>Items in Wish List</p>
                  </div>
                </div>
              </div>
              <div className='boughtProductCount'></div>
            </div>
          </div>
          <div className=' w-25 p-4'>
            <div className='container bg-danger d-flex gap-2'>
              <div className='dollar-circle'>$</div>
              <div className='box-data w-75 d-flex flex-column justify-content-center text-light'>
                <p className='mb-0'>Total Expenditure</p>
                <p className='mt-0 fw-bold'>$ 13,9283.00</p>
              </div>
            </div>
            <div className='container bg-warning d-flex gap-2'>
              <div className='points-circle text-light'>
                <FiTarget size={30} />
              </div>
              <div className='box-data w-75 d-flex flex-column justify-content-center text-light'>
                <p className='mb-0'>Total Club Points</p>
                <p className='mt-0 fw-bold'>10985</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
