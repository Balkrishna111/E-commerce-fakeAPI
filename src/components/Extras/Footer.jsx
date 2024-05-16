const Footer = () => {
  return (
    <footer className='bg-dark text-light text-center text-lg-start'>
      <div className='container p-4'>
        <div className='row'>
          <div className='col-lg-6 col-md-12 mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Footer text</h5>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              atque ea quis molestias. Fugiat pariatur
            </p>
          </div>

          <div className='col-lg-6 col-md-12 mb-4 mb-md-0'>
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
