import { GiConfirmed } from "react-icons/gi";

const Confirmation = () => {
  return (
    <div className='container border border-1 d-flex flex-column gap-5 p-20 justify-content-center align-items-center'>
      <GiConfirmed size={100} className='text-success' />
      <h1 className='text-success'>Thank you for Ordering</h1>
      <h2>Your Order has been placed successfully.</h2>
    </div>
  );
};
export default Confirmation;
