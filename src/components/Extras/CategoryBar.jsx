import DropDownMenu from "../dropdown/DropDown";
import "./categoryBar.css";

const CategoryBar = () => {
  return (
    <>
      <div className='py-2 category-bar d-flex align-items-center justify-content-between'>
        <DropDownMenu />
        <div
          style={{ fontSize: "0.9rem" }}
          className='fw-bold text-light gap-4 d-flex align-items-center justify-content-between'
        >
          <p className='my-auto'>Home</p>
          <p className='my-auto'>Flash Sale</p>
          <p className='my-auto'>All Brands</p>
          <p className='my-auto'>Today's Deal</p>
        </div>
      </div>
    </>
  );
};
export default CategoryBar;
