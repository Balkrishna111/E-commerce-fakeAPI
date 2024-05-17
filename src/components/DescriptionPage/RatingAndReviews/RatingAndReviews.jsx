import "./style.css";

const RatingAndReviews = () => {
  return (
    <div className='container'>
      <div style={{ fontSize: "0.7rem" }} className='container row'>
        <div className='col-lg-3 col-md-4 col-10 mb-4 mb-lg-0 pr-lg-6'>
          <div className='mb-6'>
            <h4 className='mb-3'>Customer reviews</h4>
            <span className='font-14'>
              <i className='fas fa-star text-warning'></i>
              <i className='fas fa-star text-warning'></i>
              <i className='fas fa-star text-warning'></i>
              <i className='fas fa-star text-warning'></i>
              <i className='far fa-star text-warning'></i>
            </span>
            <span className='h5 fs-6 ml-2'>4.6 out of 5</span>
            <p className='font-14'>2,693 customer ratings</p>
            <div className='row align-items-center mb-1 '>
              <div className='col-md-2 col-2 pr-0'>
                <div className='font-12 text-dark'>5 Star</div>
              </div>
              <div className='col-md-8 col-8 pr-2'>
                <div className='progress' style={{ height: "8px" }}>
                  <div
                    className='progress-bar
                      bg-warning'
                    role='progressbar'
                    style={{ width: "78%" }}
                    aria-valuenow='78'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
              </div>
              <div className='col-md-2 col-2'>
                <div className='font-12 text-primary'>78%</div>
              </div>
            </div>
            <div className='row align-items-center mb-1'>
              <div className='col-md-2 col-2 pr-0'>
                <div className='font-12 text-dark'>4 Star</div>
              </div>
              <div className='col-md-8 col-8 pr-2'>
                <div className='progress' style={{ height: "8px" }}>
                  <div
                    className='progress-bar
                      bg-warning'
                    role='progressbar'
                    style={{ width: "12%" }}
                    aria-valuenow='12'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
              </div>
              <div className='col-md-2 col-2'>
                <div className='font-12 text-primary'>12%</div>
              </div>
            </div>
            <div className='row align-items-center mb-1'>
              <div className='col-md-2 col-2 pr-0'>
                <div className='font-12 text-dark'>3 Star</div>
              </div>
              <div className='col-md-8 col-8 pr-2'>
                <div className='progress' style={{ height: "8px" }}>
                  <div
                    className='progress-bar
                      bg-warning'
                    role='progressbar'
                    style={{ width: "5%" }}
                    aria-valuenow='5'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
              </div>
              <div className='col-md-2 col-2'>
                <div className='font-12 text-primary'>5%</div>
              </div>
            </div>
            <div className='row align-items-center mb-1'>
              <div className='col-md-2 col-2 pr-0'>
                <div className='font-12 text-dark'>2 Star</div>
              </div>
              <div className='col-md-8 col-8 pr-2'>
                <div className='progress' style={{ height: "8px;" }}>
                  <div
                    className='progress-bar
                      bg-warning'
                    role='progressbar'
                    style={{ width: "2%" }}
                    aria-valuenow='2'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
              </div>
              <div className='col-md-2 col-2'>
                <div className='font-12 text-primary'>2%</div>
              </div>
            </div>
            <div className='row align-items-center mb-2'>
              <div className='col-md-2 col-2 pr-0'>
                <div className='font-12 text-dark'>1 Star</div>
              </div>
              <div className='col-md-8 col-8 pr-2'>
                <div className='progress' style={{ height: "8px" }}>
                  <div
                    className='progress-bar
                      bg-warning'
                    role='progressbar'
                    style={{ width: "1%" }}
                    aria-valuenow='1'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
              </div>
              <div className='col-md-2 col-2'>
                <div className='font-12 text-primary'>1%</div>
              </div>
            </div>
          </div>
          <div>
            <h4 className='mb-1'>Review this book</h4>
            <p className='font-12 '>Share your thoughts with other customers</p>
            <a href='#!' className='btn btn-primary btn-block'>
              Write A Review
            </a>
          </div>
        </div>
        <div className='col-lg-7 col-md-6 col-10'>
          <div className='d-flex align-items-center justify-content-between mb-4'>
            <div>
              <h4 className='mb-0'>Ratings &amp; Reviews</h4>
            </div>
            <div>
              <select className='custom-select'>
                <option defaultValue=''>Sort on</option>
                <option value='Most Recent'>Most Recent</option>
                <option value='Relevant'>Relevant</option>
                <option value='Newest'>Newest</option>
              </select>
            </div>
          </div>
          <div className='mb-4 pb-4 border-bottom'>
            <div className='d-flex mb-3 align-items-center'>
              <img
                src='../assets/images/avatar-1.png'
                alt=''
                className='rounded-circle avatar-lg'
              />
              <div className='ml-2'>
                <h5 className='mb-1'>
                  Sohail Rahman
                  <img src='../assets/images/verified.svg' alt='' />
                </h5>
                <p className='font-12 mb-0'>
                  <span>Kolkata</span> <span>October 03,2020</span>
                </p>
              </div>
            </div>
            <div className='mb-2'>
              <span className='font-14 mr-2'>
                <i className='fas fa-star text-warning'></i>
                <i className='fas fa-star text-warning'></i>
                <i className='fas fa-star text-warning'></i>
                <i className='fas fa-star text-warning'></i>
                <i className='far fa-star text-warning'></i>
              </span>
              <span className='h5'>Highly recommended</span>
            </div>
            <p>
              Nice book explained in simplified method surely it will bring
              meaningful changes in your lifestyle which you always dream off
              Beat of luck coach you are great continue bringing great stuffs
            </p>
            <a href='#!' className='btn btn-light btn-sm mr-2'>
              Helpful
            </a>
            <a href='#!' className='text-inherit font-14'>
              Report abuse
            </a>
          </div>
          <div className='mb-4 pb-4 border-bottom'>
            <div className='d-flex mb-3 align-items-center'>
              <img
                src='../assets/images/avatar-4.png'
                alt=''
                className='rounded-circle avatar-lg'
              />
              <div className='ml-2'>
                <h5 className='mb-1'>
                  Riya Poojary
                  <img src='../assets/images/verified.svg' alt='' />
                </h5>
                <p className='font-12 mb-0'>
                  <span>Ahmedabad</span> <span>4 Month ago</span>
                </p>
              </div>
            </div>
            <div className='mb-2'>
              <span className='font-14 mr-2'>
                <i className='fas fa-star text-warning'></i>
                <i className='fas fa-star text-warning'></i>
                <i className='fas fa-star text-warning'></i>
                <i className='fas fa-star text-warning'></i>
                <i className='far fa-star text-warning'></i>
              </span>
              <span className='h5'>
                Beware!! This Book can change your Life :)
              </span>
            </div>
            <p>
              And I absolutely mean it what I said in Headline of my comment. I
              have been following coach.com from very long. His one article has
              absolutely changed my life, imagine what this book can offer to
              you. If you are looking to form a new habit you have to read this
              Book.
            </p>
            <a href='#!' className='btn btn-light btn-sm mr-2'>
              Helpful
            </a>
            <a href='#!' className='text-inherit font-14'>
              Report abuse
            </a>
          </div>
          <div className='mb-4 pb-4 border-bottom'>
            <div className='d-flex mb-3 align-items-center'>
              <img
                src='../assets/images/avatar-7.png'
                alt=''
                className='rounded-circle avatar-lg'
              />
              <div className='ml-2'>
                <h5 className='mb-1'>
                  Francoise <img src='../assets/images/verified.svg' alt='' />
                </h5>
                <p className='font-12 mb-0'>
                  <span>United Kingdom</span> <span>4 Month ago</span>
                </p>
              </div>
            </div>
            <div className='mb-2'>
              <span className='font-14 mr-2'>
                <i className='fas fa-star text-warning'></i>
                <i className='fas fa-star text-warning'></i>
                <i className='fas fa-star text-warning'></i>
                <i className='fas fa-star text-warning'></i>
                <i className='far fa-star text-warning'></i>
              </span>
              <span className='h5'>Absolutely superb!</span>
            </div>
            <p>
              I have read so many books as part of my personal development but I
              always find that authors end up glorifying themselves throughout
              continuously going on and on about their own achievements. I urge
              anyone who loves the book to read his blog which has loads of
              truly awesome resources.
            </p>
            <a href='#!' className='btn btn-light btn-sm mr-2'>
              Helpful
            </a>
            <a href='#!' className='text-inherit font-14'>
              Report abuse
            </a>
          </div>
          <a href='#!' className='btn btn-primary'>
            Read More Reviews
          </a>
        </div>
      </div>
    </div>
  );
};
export default RatingAndReviews;
