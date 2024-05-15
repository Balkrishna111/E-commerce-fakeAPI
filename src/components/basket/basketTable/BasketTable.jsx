import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import "./basketTable.css";
import BasketItem from "./BasketItem";
import { useContext } from "react";
import { StoreContext } from "../../../context+reducer/StoreContext";

function BasketTable() {
  const { allProducts, setAllProducts, cartProducts, setCartProducts } =
    useContext(StoreContext);

  return (
    <Container>
      <Table striped>
        <thead>
          <tr className='text-center'>
            <th>image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Product Count</th>
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
    </Container>
  );
}

export default BasketTable;
