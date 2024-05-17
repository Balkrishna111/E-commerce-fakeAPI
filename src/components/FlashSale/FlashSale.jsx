import { IoIosFlash } from "react-icons/io";
import "./flashSale.css";
import saleData from "./saleData.js";
import ProductCard from "../ProductCard.jsx";
import Container from "react-bootstrap/Container";

const FlashSale = () => {
  //   console.log(saleData);
  return (
    <div className='container flash-sale-container'>
      <div className='d-flex flex-column align-items-center'>
        <div className='d-flex flex-column justify-content-center align-items-center head-container w-50'>
          <div className='w-100 p-2 flash-sale-title d-flex justify-content-center align-items-center'>
            <h5>Flash Sale</h5>
            <IoIosFlash className='text-warning' size={30} />
          </div>
          <div className='counter py-2 w-100'>
            <div
              data-role='countdown'
              data-days='1'
              data-hours='2'
              data-minutes='3'
              data-seconds='4'
            ></div>
          </div>
        </div>
        <div>
          {saleData && (
            <Container className='container d-flex justify-content-center align-items-center'>
              {saleData.map((product) => (
                <ProductCard details={product} key={product.id} />
              ))}
            </Container>
          )}
        </div>
      </div>
    </div>
  );
};
export default FlashSale;
