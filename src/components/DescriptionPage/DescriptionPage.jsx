import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context+reducer/StoreContext";
import { useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import NavigationBar from "../NavigationBar";
import Image from "react-bootstrap/Image";
import IndividualIntervalsExample from "../carousel/ProductCarousel";
import DarkVariantExample from "../carousel/ProductCarousel";

const DescriptionPage = (details) => {
  const location = useLocation();
  const product = location.state.info;
  console.log(product);
  const {
    allProducts,
    setAllProducts,
    cartProducts,
    setCartProducts,
    cartProductsSubTotal,
    setCartProductsSubTotal,
    setCartTotal,
  } = useContext(StoreContext);

  //   console.log(details);

  const handleAddToCart = (newProduct) => {
    if (cartProducts.includes(newProduct)) {
      console.log("product already exists");
      return <AddToCartAlert />;
    } else {
      setCartProducts([...cartProducts, newProduct]);
      setCartProductsSubTotal([...cartProductsSubTotal, newProduct.price]);
    }
  };

  const rating = Math.floor(product.rating.rate);
  let starArr = [];

  for (let i = 0; i < rating; i++) {
    starArr.push(<FaStar className='text-warning' key={i} />);
  }
  return (
    <>
      <NavigationBar />
      <div className='container border-0'>
        <Card className='margin-0 bg-light'>
          <Card.Header
            style={{ height: "40vh" }}
            className='card-header d-flex justify-content-center align-items-center'
          >
            {/* <Image style={{ width: "200px" }} src={product.image} rounded /> */}
            {/* <DarkVariantExample style={{ width: "50%" }} details={product} /> */}
          </Card.Header>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
            <div className='rating-div d-flex align-items-center'>
              {starArr.map((item) => {
                return item;
              })}
              <p className='text-secondary fs-6 mb-auto'>
                ({product.rating.count})
              </p>
            </div>
            <Card.Text>{product.description}</Card.Text>
            <Button
              style={{ marginTop: "2rem", marginBottom: "1rem" }}
              variant='primary'
              disabled={cartProducts.includes(product)}
              onClick={() => {
                handleAddToCart(product);
              }}
            >
              {cartProducts.includes(product)
                ? "Product already Exists"
                : "Add to Cart"}
            </Button>{" "}
            <div className='available fs-6 text-danger'>
              Available Quantity: 5
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default DescriptionPage;
