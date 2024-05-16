import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Card from "react-bootstrap/Card";
import "./style/navigationbar.css";
import { StoreContext } from "../context+reducer/StoreContext";
import { CiUser } from "react-icons/ci";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import logo from "../assets/logo.png";

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
    <Navbar expand='lg' className='bg-body-tertiary p-0 h-lg-60px'>
      <Container fluid className='navbar px-3'>
        <Navbar.Toggle
          aria-controls='navbarScroll'
          style={{
            height: "30px",
            fontSize: "0.8rem",
            padding: "1px 8px",
            marginTop: "10px",
          }}
        />
        <Link to='/' style={{ textDecoration: "none" }}>
          <Navbar.Brand>
            {" "}
            <Card.Img
              className='logo-img'
              style={{ width: "15vw", height: "auto" }}
              variant='top'
              src={logo}
            />
          </Navbar.Brand>
        </Link>
        <Form className='d-flex form'>
          <Form.Control
            type='search'
            placeholder='Search'
            className='me-2 form'
            style={{ fontSize: "0.9rem" }}
            aria-label='Search'
            value={inputValue}
            onChange={(e) => {
              e.preventDefault();
              setInputValue(e.target.value);
            }}
          />
          {/* <Button variant='outline-success'>Search</Button> */}
        </Form>
        <div className='d-flex gap-2 d-flex justify-content-space-between'>
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div className='link-div gap-4'>
                <Link to='/'>
                  <Button className='bg-danger text-light border-0 '>
                    <FaHeart />
                    <span className='mx-2'>Wish List</span>
                  </Button>
                </Link>
                <Link to='/basket'>
                  <Button variant='secondary'>
                    <FaShoppingCart />
                    <span className='mx-2'>{cartProducts.length} Item(s)</span>
                  </Button>
                </Link>
                <div className='user-login text-secondary'>
                  <div className='user-img'>
                    <CiUser size={20} />
                  </div>
                  <div className='user-links'>
                    <p>Log In</p>
                    <p className='mx-1'> | </p>
                    <p>Register</p>
                  </div>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}
