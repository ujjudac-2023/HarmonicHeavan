// Header.js

import React from "react";
import { Link } from "react-router-dom";
import myImage from '../Photos/Home/Music.jpg';

import { FaShoppingCart } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';



const Header = ({ currentUser, showModeratorBoard, showAdminBoard, logOut }) => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid " >

      <Link className="navbar-brand" to="/">
        <img src={myImage} style={{ height: '70px', width: '70px', borderRadius: '50%' }}></img>
      </Link>

     

      <a class="navbar-brand " href="/"><h3>HarmonicHaven</h3></a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          <li className="nav-item ">
            <Link className="nav-link active " aria-current="page" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>

          <li className="nav-item align-center">
            <Link className="nav-link" to="/music">
            <FontAwesomeIcon icon={faMusic} /> Music <span className="badge bg-secondary">New</span>
            </Link>
          </li>

          <li className="nav-item align-center">
            <Link className="nav-link" to="/shop">
              <FaShoppingCart />  Shop <span class="badge bg-secondary">New</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/service">Service</Link>
          </li>

          
          {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
            </ul>
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
      </div>
    </nav>
    </>
  );
};

export default Header;
