const Footer = () => {
  return (
    <footer className='bg-dark text-light text-center text-lg-start'>
      <div className='p-4'>
        <div className='row d-flex justify-content-around'>
          <div className='col-lg-5 col-md-11 mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Footer text</h5>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              atque ea quis molestias. Fugiat pariatur
            </p>
          </div>

          <div className='col-lg-5 col-md-11 mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Footer text</h5>

            <p>Lorem ipsum dolor sit amet consectetur,</p>
          </div>
        </div>
      </div>

      <div
        className='text-center p-3'
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright: Sandesh Gautam
      </div>
    </footer>
  );
};
export default Footer;
