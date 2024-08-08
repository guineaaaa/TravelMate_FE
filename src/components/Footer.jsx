const Footer = () => {
  return (
    <footer className="bg-dark bg-opacity-75 py-4 text-light">
      <div className="container">
        <div className="row mb-5 mt-4">
          <div className="align-items-center border-bottom col d-flex justify-content-between pb-5 px-0 text-start">
            <span className='h3 fw-bold me-3'>Travle Mate</span>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search.." aria-label="Search" />
              <button className="btn btn-primary" type="submit">Subcribe</button>
            </form>
          </div>
        </div>
        <div className="row text-start border-bottom pb-5">
          <div className="col-md-3">
            <h5>Column One</h5>
            <ul className="list-unstyled fs-7">
              <li>Twenty One</li>
              <li>Thirty Two</li>
              <li>Fourty Three</li>
              <li>Fifty Four</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Column Two</h5>
            <ul className="list-unstyled fs-7">
              <li>Sixty Five</li>
              <li>Seventy Six</li>
              <li>Eighty Seven</li>
              <li>Ninety Eight</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Column Three</h5>
            <ul className="list-unstyled fs-7">
              <li>One Two</li>
              <li>Three Four</li>
              <li>Five Six</li>
              <li>Seven Eight</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Column Four</h5>
            <div className="d-flex mb-2">
              <a href="#" className="btn btn-dark me-2">
                <img src="path/to/app-store-icon.png" alt="App Store" />
              </a>
              <a href="#" className="btn btn-dark">
                <img src="path/to/google-play-icon.png" alt="Google Play" />
              </a>
            </div>
            <h5>Join Us</h5>
            <div className="d-flex">
              <a href="#" className="text-light me-3"><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-light me-3"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-light me-3"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-light me-3"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-light"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <small>CompanyName @ 202X. All rights reserved.</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;