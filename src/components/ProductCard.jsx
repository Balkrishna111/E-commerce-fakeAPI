import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./style/productCard.css";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context+reducer/StoreContext";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

function ProductCard({ details }) {
  const rating = Math.floor(details.rating.rate);
  let starArr = [];

  for (let i = 0; i < rating; i++) {
    starArr.push(<FaStar className='text-warning' key={i} />);
  }

  const {
    allProducts,
    setAllProducts,
    cartProducts,
    setCartProducts,
    cartProductsSubTotal,
    setCartProductsSubTotal,
    setCartTotal,
    WishList,
    setWishList,
  } = useContext(StoreContext);

  const handleAddToCart = (newProduct) => {
    if (cartProducts.includes(newProduct)) {
      console.log("already exists");
    } else {
      setCartProducts([...cartProducts, newProduct]);
      setCartProductsSubTotal([...cartProductsSubTotal, newProduct.price]);
    }
  };
  return (
    <>
      <Card
        // class="shadow p-3 mb-5 bg-white rounded"
        className='product-card position-relative border-0 d-flex justify-content-between shadow p-3 mb-3 bg-white rounded'
        style={{ width: "12rem", height: "100%" }}
      >
        <Card.Img
          style={{ height: "12rem" }}
          variant='top'
          src={details.image}
        />
        <Card.Body>
          <Card.Title
            className='title text-truncate'
            style={{ fontSize: "0.8rem" }}
          >
            {details.title}
          </Card.Title>
          <div className='card-details'></div>
          <p>${details.price}</p>
          <div
            className='rating-div d-flex align-items-center'
            style={{ fontSize: "0.8rem" }}
          >
            {starArr.map((item) => {
              return item;
            })}
            <p className='text-secondary mb-auto'>({details.rating.count})</p>
          </div>
        </Card.Body>

        <Link to={`/details`} state={{ info: details }}>
          <Button
            className='details-btn'
            style={{ width: "100%", fontSize: "0.8rem" }}
            variant='primary'
          >
            See Details
          </Button>
        </Link>
        <div className='bg-light m-1 rounded-circle wishlist-icon position-absolute top-0 end-0 p-2 text-danger'>
          {WishList.includes(details) ? (
            <FaHeart
              size={30}
              onClick={() => {
                setWishList(WishList.filter((item) => details.id != item.id));
              }}
            />
          ) : (
            <CiHeart
              size={30}
              onClick={() => {
                setWishList([...WishList, details]);
              }}
            />
          )}
        </div>
      </Card>
    </>
  );
}

export default ProductCard;
