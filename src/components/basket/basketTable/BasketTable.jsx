import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import "./basketTable.css";
import BasketItem from "./BasketItem";
import { useContext } from "react";
import { StoreContext } from "../../../context+reducer/StoreContext";
import { FaArrowLeft } from "react-icons/fa6";
import { ShippingContext } from "../../../context+reducer/ShippingContext";

function BasketTable() {
  const { allProducts, setAllProducts, cartProducts, setCartProducts } =
    useContext(StoreContext);

  const { currentPhase, setCurrentPhase } = useContext(ShippingContext);

  const handleContinue = () => {
    setCurrentPhase(currentPhase + 1);
  };

  return (
    <Container>
      <Table striped>
        <thead>
          <tr className='text-center'>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sub Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((item) => (
            <BasketItem details={item} key={item.id} />
          ))}
        </tbody>
      </Table>
      <div className='container'>
        <div className='w-100 button-container d-flex justify-content-between'>
          <button className='btn btn-light d-flex justify-content-center align-items-center gap-1 text-danger px-4 py-2 fw-bold'>
            <FaArrowLeft />
            Return to Shop
          </button>

          <button
            disabled={!cartProducts.length}
            onClick={handleContinue}
            className=' btn btn-danger px-4 py-2 fw-bold'
          >
            Continue to Shipping
          </button>
        </div>
      </div>
    </Container>
  );
}

export default BasketTable;
