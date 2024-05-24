import DropDownMenu from "../dropdown/DropDown";
import "./categoryBar.css";
import { Link } from "react-router-dom";

const CategoryBar = () => {
  return (
    <>
      <div className='py-2 category-bar d-flex align-items-center justify-content-between'>
        <DropDownMenu />
        <div
          style={{ fontSize: "0.9rem" }}
          className='fw-bold text-light gap-4 d-flex align-items-center justify-content-between'
        >
          <Link
            to='/'
            style={{ textDecoration: "none" }}
            className='text-light fw-bold'
          >
            {" "}
            <p className='my-auto'>Home</p>
          </Link>
          <p className='my-auto'>Flash Sale</p>
        </div>
      </div>
    </>
  );
};
export default CategoryBar;
