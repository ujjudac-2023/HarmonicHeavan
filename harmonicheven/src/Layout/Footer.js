import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="container my-5">
      <div className="container p-4 pb-0">
        <section className="">
          <div className="row">

              <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">
                  Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>


              <hr class="w-100 clearfix d-md-none" />


              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p>
                  <a class="text-white">MDBootstrap</a>
                </p>
                <p>
                  <a class="text-white">MDWordPress</a>
                </p>
                <p>
                  <a class="text-white">BrandFlow</a>
                </p>
                <p>
                  <a class="text-white">Bootstrap Angular</a>
                </p>
              </div>


              <hr class="w-100 clearfix d-md-none" />


              <hr class="w-100 clearfix d-md-none" />


              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                <p><i class="fas fa-envelope mr-3"></i> info@gmail.com</p>
                <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>



              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">Follow us</h6>



                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: '#3b5998' }}
                  href="#!"
                  role="button"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: '#55acee' }}
                  href="#!"
                  role="button"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: '#dd4b39' }}
                  href="#!"
                  role="button"
                >
                  <FontAwesomeIcon icon={faGoogle} />
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: '#ac2bac' }}
                  href="#!"
                  role="button"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: '#0082ca' }}
                  href="#!"
                  role="button"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: '#333333' }}
                  href="#!"
                  role="button"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>

              </div>
              </div>
        </section>
      </div>
      <div className="text-center p-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
    </div>
  );
}

export default Footer;