import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context+reducer/StoreContext";

export default function NavigationBar() {
  const {
    allProducts,
    setAllProducts,
    cartProducts,
    setCartProducts,
    cartProductsSubTotal,
    setCartProductsSubTotal,
    filteredProduct,
    setFilteredProduct,
  } = useContext(StoreContext);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setFilteredProduct(allProducts);
  }, [allProducts]);

  useEffect(() => {
    if (inputValue !== "") {
      const newFilteredProduct = allProducts.filter((item) =>
        item.title.startsWith(inputValue)
      );
      setFilteredProduct(newFilteredProduct);
    } else {
      setFilteredProduct(allProducts);
    }
  }, [inputValue]);
  // console.log(inputValue);

  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container fluid>
        <Link to='/' style={{ textDecoration: "none" }}>
          <Navbar.Brand>STORE</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div className='d-flex gap-2'>
              <Link to='/'>
                <Button variant='primary'>Home</Button>
              </Link>
              <Link to='/basket'>
                <Button variant='secondary'>Basket</Button>
              </Link>
            </div>
          </Nav>
          <Form className='d-flex'>
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
              value={inputValue}
              onChange={(e) => {
                e.preventDefault();
                setInputValue(e.target.value);
              }}
            />
            {/* <Button variant='outline-success'>Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
