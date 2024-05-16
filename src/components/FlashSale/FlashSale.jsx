import { IoIosFlash } from "react-icons/io";
import "./flashSale.css";
import saleData from "./saleData.js";
import ProductCard from "../ProductCard.jsx";
import Container from "react-bootstrap/Container";

const FlashSale = () => {
  //   console.log(saleData);
  return (
    <div className='container flash-sale-container border border-1'>
      <div className='d-flex flex-column'>
        <div className='flash-sale-title d-flex justify-content-center align-items-center'>
          <IoIosFlash className='text-warning' size={30} />
          <h5>Flash Sale</h5>
        </div>
        <div>
          {saleData && (
            <Container className='container'>
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
