import { FaArrowDown } from "react-icons/fa";

import { useContext } from "react";
import { StoreContext } from "../../context+reducer/StoreContext";

function DropDown() {
  const {
    categoriesArray,
    filteredProduct,
    setFilteredProduct,
    allProducts,
    setAllProducts,
  } = useContext(StoreContext);
  return (
    <div className='dropdown open'>
      <button
        className='btn btn-danger '
        type='button'
        id='dropdownMenu5'
        data-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'
      >
        Categories
        <FaArrowDown className='ml-2' size={12} />
      </button>
      <div className='dropdown-menu'>
        <a
          onClick={() => {
            setFilteredProduct(allProducts);
          }}
          key='All'
          className='dropdown-item'
          style={{ cursor: "pointer" }}
        >
          All Items
        </a>
        {categoriesArray.map((item) => (
          <a
            onClick={() => {
              const newArr = [];
              allProducts.map((product) => {
                if (item == product.category) {
                  newArr.push(product);
                }
                setFilteredProduct(newArr);
              });
            }}
            key={item}
            className='dropdown-item'
            style={{ cursor: "pointer" }}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}
export default DropDown;
