import Carousel from "react-bootstrap/Carousel";

function ProductCarousel({ details }) {
  return (
    <Carousel
      data-bs-theme='dark'
      className='carousel'
      style={{ width: "full" }}
    >
      <Carousel.Item>
        <img
          height={250}
          // width={250}
          className='d-block w-100'
          src={details.image}
          alt='First slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          height={250}
          className='d-block w-100'
          src='data:image/jpeg;base64,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'
          alt='Second slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          height={250}
          className='d-block w-100'
          src='data:image/jpeg;base64,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'
          alt='Third slide'
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarousel;
