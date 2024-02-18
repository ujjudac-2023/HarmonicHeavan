import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";


import { FaShoppingCart } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import myImage from './Photos/Home/Music.jpg';

import About from './pages/About';
import Contact from './pages/Contact';
import UpcomingEvent from './Activity/UpcomingEvent';
import LocalTalent from './Activity/LocalTalent';
import RespectToLegends from './Activity/RespectToLegends';
import Shop from './pages/Shop';
import Music from './pages/Music';
import Service from './pages/Service';
import Footer from "./Layout/Footer";
import Home1 from "./pages/Home1";



class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid " >

              <Link className="navbar-brand" to="/">
                <img src={myImage} style={{ height: '70px', width: '70px', borderRadius: '50%' }}></img>
              </Link>



              <a class="navbar-brand " href="/"><h3>HarmonicHaven</h3></a>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                  <li className="nav-item ">
                    <Link className="nav-link active " aria-current="page" to="/home">Home</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/service">Service</Link>
                  </li>

                  <li className="nav-item align-center">
                    <Link className="nav-link" to="/music">
                      <FontAwesomeIcon icon={faMusic} /> Music <span className="badge bg-secondary">New</span>
                    </Link>
                  </li>
                  {/* 
          <li className="nav-item align-center">
            <Link className="nav-link" to="/shop">
              <FaShoppingCart />  Shop <span class="badge bg-secondary">New</span>
            </Link>
          </li> */}



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

                  {/* {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )} */}
            
                  {currentUser && (
                    <li className="nav-item">
                      <Link to={"/shop"} className="nav-link">
                        <FaShoppingCart />  Shop <span class="badge bg-secondary">New</span>
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

          <div className="container " style={{maxWidth:"1800px", padding:"0px"}}>
            <Routes>
              <Route path="/" element={<Home1 />} />
              <Route path="/home" element={<Home1 />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/user" element={<BoardUser />} />
              <Route path="/mod" element={<BoardModerator />} />
              <Route path="/admin" element={<BoardAdmin />} />

              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='upcomingevent' element={<UpcomingEvent />} />
              <Route path='localtalent' element={<LocalTalent />} />
              <Route path='respecttolegends' element={<RespectToLegends />} />
              <Route path='shop' element={<Shop />} />
              <Route path='music' element={<Music />} />
              <Route path='service' element={<Service />} />

            </Routes>
          </div>

          {/* <AuthVerify logOut={this.logOut}/> */}
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
