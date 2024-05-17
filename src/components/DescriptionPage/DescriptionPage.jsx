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
import ProductCarousel from "../carousel/ProductCarousel";
import "./style.css";
import TopSegment from "../Extras/TopSegment";
import CategoryBar from "../Extras/CategoryBar";
import RatingAndReviews from "./RatingAndReviews/RatingAndReviews";

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
    WishList,
    setWishList,
  } = useContext(StoreContext);

  //   console.log(details);

  const handleAddToCart = (newProduct) => {
    if (cartProducts.includes(newProduct)) {
      console.log("product already exists");
    } else {
      setCartProducts([...cartProducts, newProduct]);
      setCartProductsSubTotal([...cartProductsSubTotal, newProduct.price]);
    }
  };
  const handleAddToWishList = (newProduct) => {
    if (WishList.includes(newProduct)) {
      console.log("product already exists");
    } else {
      setWishList([...WishList, newProduct]);
    }
  };
  const handleRemoveFromWishList = (id) => {
    const updatedWishList = WishList.filter((current) => current.id != id);
    // console.log(updatedCart);
    setWishList(updatedWishList);
  };

  const rating = Math.floor(product.rating.rate);
  let starArr = [];

  for (let i = 0; i < rating; i++) {
    starArr.push(<FaStar classNameNameNameName='text-warning' key={i} />);
  }
  return (
    <>
      <TopSegment />
      <NavigationBar />
      <CategoryBar />

      <section className='pt-5'>
        <div className='container'>
          <div className='row gx-5'>
            <aside className='col-lg-5'>
              <div className='border rounded-4 mb-3 d-flex justify-content-center'>
                <a
                  data-fslightbox='mygalley'
                  className='rounded-4'
                  target='_blank'
                  data-type='image'
                  href='https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp'
                >
                  <img
                    style={{
                      width: "400px",
                      maxWidth: "100%",
                      maxHeight: "100vh",
                      margin: "auto",
                    }}
                    className='rounded-4 fit'
                    src={product.image}
                  />
                </a>
              </div>
              <div className='d-flex justify-content-center mb-3'>
                <a
                  data-fslightbox='mygalley'
                  className='border mx-1 rounded-2 item-thumb'
                  target='_blank'
                  data-type='image'
                  href='https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp'
                >
                  <img
                    width='60'
                    height='60'
                    className='rounded-2'
                    src={product.image}
                  />
                </a>
                <a
                  data-fslightbox='mygalley'
                  className='border mx-1 rounded-2 item-thumb'
                  target='_blank'
                  data-type='image'
                  href='https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big2.webp'
                >
                  <img
                    width='60'
                    height='60'
                    className='rounded-2'
                    src='https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big2.webp'
                  />
                </a>
                <a
                  data-fslightbox='mygalley'
                  className='border mx-1 rounded-2 item-thumb'
                  target='_blank'
                  data-type='image'
                  href='https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big3.webp'
                >
                  <img
                    width='60'
                    height='60'
                    className='rounded-2'
                    src='https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big3.webp'
                  />
                </a>
                <a
                  data-fslightbox='mygalley'
                  className='border mx-1 rounded-2 item-thumb'
                  target='_blank'
                  data-type='image'
                  href='https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big4.webp'
                >
                  <img
                    width='60'
                    height='60'
                    className='rounded-2'
                    src='https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big4.webp'
                  />
                </a>
                <a
                  data-fslightbox='mygalley'
                  className='border mx-1 rounded-2 item-thumb'
                  target='_blank'
                  data-type='image'
                  href='https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp'
                >
                  <img
                    width='60'
                    height='60'
                    className='rounded-2'
                    src='https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp'
                  />
                </a>
              </div>
            </aside>
            <main className='col-lg-6'>
              <div className='ps-lg-3'>
                <h4 className='title text-dark'>{product.title}</h4>
                <div className='d-flex flex-row my-3'>
                  <div className='text-warning mb-1 me-2'>
                    <span className='ms-1'>{product.rating.rate}</span>
                  </div>
                  <span className='text-muted'>
                    <i className='fas fa-shopping-basket fa-sm mx-1'></i>
                    {product.rating.count} Reviews
                  </span>
                  <span className='text-success ms-2'>In stock</span>
                </div>

                <div className='mb-3'>
                  <span className='h5'>${product.price}</span>
                </div>

                <p>{product.description}</p>

                <div className='row'>
                  <dt className='col-3'>Type:</dt>
                  <dd className='col-8'>Regular</dd>

                  <dt className='col-3'>Color</dt>
                  <dd className='col-8'>Brown</dd>

                  <dt className='col-3'>Material</dt>
                  <dd className='col-8'>Cotton, Jeans</dd>

                  <dt className='col-3'>Brand</dt>
                  <dd className='col-8'>Reebook</dd>
                </div>

                <hr />
                <div className='button-container d-flex gap-2 border-0 '>
                  <a href='#' className='btn btn-warning shadow-0'>
                    {" "}
                    Buy now{" "}
                  </a>
                  <a
                    className='btn border-0 btn-primary border border-secondary py-2 icon-hover px-3'
                    style={
                      cartProducts.includes(product)
                        ? { pointerEvents: "none" }
                        : {}
                    }
                    onClick={() => {
                      handleAddToCart(product);
                    }}
                  >
                    <i className='me-1 fa fa-shopping-basket'></i>{" "}
                    {cartProducts.includes(product)
                      ? "Product Already Exists"
                      : "Add to Cart"}
                  </a>
                  <a
                    className='btn btn-danger border-0 border border-secondary py-2 icon-hover px-3'
                    style={
                      WishList.includes(product)
                        ? { pointerEvents: "none" }
                        : {}
                    }
                    onClick={() => {
                      handleAddToWishList(product);
                    }}
                  >
                    <i className='me-1 fa fa-heart fa-lg'></i>{" "}
                    {WishList.includes(product)
                      ? "Added to Wish List"
                      : "Add to Wish List"}
                  </a>

                  {WishList.includes(product) && (
                    <a
                      className='btn btn-light border-0 border border-secondary py-2 icon-hover px-3'
                      onClick={() => {
                        handleRemoveFromWishList(product.id);
                      }}
                    >
                      <i className='me-1 fa fa-heart fa-lg'></i> Remove From
                      Wish List
                    </a>
                  )}
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
      <h3 className='text-center text-underline'>Rating and Reviews </h3>
      <RatingAndReviews />
    </>
  );
};
export default DescriptionPage;
