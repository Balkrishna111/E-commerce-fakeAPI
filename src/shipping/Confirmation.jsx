import { GiConfirmed } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Confirmation = () => {
  return (
    <div className='container border border-1 d-flex flex-column gap-5 p-20 justify-content-center align-items-center'>
      <GiConfirmed size={100} className='text-success' />
      <h1 className='text-success'>Thank you for Ordering</h1>
      <h2>Your Order has been placed successfully.</h2>
      <Link to='/' style={{ textDecoration: "none" }}>
        <button className='btn btn-light d-flex justify-content-center align-items-center gap-1 text-danger px-4 py-2 fw-bold'>
          <FaArrowLeft />
          Return back to Home
        </button>
      </Link>
    </div>
  );
};
export default Confirmation;
