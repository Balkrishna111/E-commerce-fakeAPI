import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./basketItem.css";
import { useContext } from "react";
import { StoreContext } from "../../../context+reducer/StoreContext";
const BasketItem = ({ details }) => {
  //   console.log(details);

  const {
    allProducts,
    setAllProducts,
    cartProducts,
    setCartProducts,
    cartProductsSubTotal,
    setCartProductsSubTotal,
  } = useContext(StoreContext);
  // console.log(cartProducts);
  const handleDelete = (id) => {
    const updatedCart = cartProducts.filter((current) => current.id != id);
    // console.log(updatedCart);
    setCartProducts(updatedCart);
  };

  const [productCount, setProductCount] = useState(1);
  const [subTotal, setSubTotal] = useState(details.price);

  useEffect(() => {
    setSubTotal(details.price * productCount);
    const updatePrice = () => {
      setCartProductsSubTotal([...cartProductsSubTotal, details.price]);
    };
    updatePrice();
  }, [productCount]);

  // console.log(cartProductsSubTotal);
  return (
    <tr className='text-center center all-container'>
      <td>
        {" "}
        <img height={100} width={100} src={details.image} alt='Product img' />
      </td>
      <td className='text-center '>
        <div className='d-flex flex-column text-center details'>
          <p>{details.title}</p>
        </div>
        <div className='mt-2 d-flex text-center align-items-center justify-content-center'>
          <FaStar className='text-warning text-center' /> :{" "}
          <div className='text-secondary'>
            {details.rating.rate}/ {details.rating.count}
          </div>
        </div>
      </td>
      <td>${details.price}</td>
      <td>
        <div className='btn-container'>
          <button
            className='bg-transparent'
            disabled={productCount == 1}
            onClick={() => {
              setProductCount(productCount - 1);
            }}
          >
            <FaMinus />
          </button>
          {productCount}
          <button
            className='bg-transparent'
            onClick={() => {
              setProductCount(productCount + 1);
            }}
          >
            <FaPlus />
          </button>
        </div>
      </td>
      <td>${subTotal.toFixed(2)}</td>
      <td>
        <MdDelete
          className='del-btn'
          size={30}
          onClick={() => {
            handleDelete(details.id);
          }}
        />
      </td>
    </tr>
  );
};
export default BasketItem;
