
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Link } from 'react-router-dom';
import myImage from '../Photos/Music.jpg';
import { FaShoppingCart } from 'react-icons/fa';


function Header() {
  return (
    <>
      {/* <nav class="navbar navbar-dark bg-dark"> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid ">

          <Link className="navbar-brand" to="/">
            <img src={myImage} style={{ height: '70px', width: '70px', borderRadius: '50%' }}></img>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <a class="navbar-brand " href="/"><h3>HarmonicHaven</h3></a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item ">
                <Link className="nav-link active " aria-current="page" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>


              <li className="nav-item align-center">
                <Link className="nav-link" to="/shop">
                  <FaShoppingCart />  Shop <span class="badge bg-secondary">New</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  My Account
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>

              
            </ul>



            <div class="text-end">
              <button type="button" class="btn btn-outline-light me-2"><Link className="nav-link" to="/login">Login</Link></button>
            </div>

          </div>
        </div>
      </nav>

    </>
  )
}

export default Header;