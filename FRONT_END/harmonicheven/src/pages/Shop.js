import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import img1 from "../Photos/Shop/img1.avif"
import img2 from "../Photos/Shop/img2.avif"
import img3 from "../Photos/Shop/img3.avif"
import img4 from "../Photos/Shop/img4.avif"
import img5 from "../Photos/Shop/img5.avif"
import img6 from "../Photos/Shop/img6.avif"
import img7 from "../Photos/Shop/img7.avif"
import img8 from "../Photos/Shop/img8.avif"

import img9 from "../Photos/Shop/img9.avif"
import img10 from "../Photos/Shop/img10.avif"
import img11 from "../Photos/Shop/img11.avif"
import img12 from "../Photos/Shop/img12.avif"
import img13 from "../Photos/Shop/img13.avif"
import img14 from "../Photos/Shop/img14.avif"
import img15 from "../Photos/Shop/img15.avif"
import img16 from "../Photos/Shop/img16.avif"


import img17 from "../Photos/Shop/img17.avif"
import img18 from "../Photos/Shop/img18.avif"
import img19 from "../Photos/Shop/img19.avif"
import img20 from "../Photos/Shop/img20.avif"
import img21 from "../Photos/Shop/img21.avif"
import img22 from "../Photos/Shop/img22.avif"
import img23 from "../Photos/Shop/img23.avif"
import img24 from "../Photos/Shop/img24.avif"

class Shop extends React.Component {
    render() {
        return (
            <>
                <Header />
                <header className="bg-dark py-5">
                    <div className="container px-4 px-lg-5 my-5">
                        <div className="text-center text-white">
                            <h1 className="display-4 fw-bolder">My  Shop </h1>
                            <p className="lead fw-normal text-white-50 mb-0">With this shop you don't need to look anywhere else</p>
                        </div>
                    </div>
                </header>
                <div className="bg-dark">
                    <section className="py-5 ">
                        <div className="container  px-4 px-lg-5 mt-5">
                            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img1} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Fancy Product</h5>

                                                Rs.40000.00 -Rs.80000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img2} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Special Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                <span className="text-muted text-decoration-line-through">Rs.20000.00</span>
                                                Rs.10008.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img3} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Sale Item</h5>

                                                <span className="text-muted text-decoration-line-through">Rs.50000.00</span>
                                                Rs.20005.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img4} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Popular Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                Rs.40000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img8} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Sale Item</h5>

                                                <span className="text-muted text-decoration-line-through">Rs.50000.00</span>
                                                Rs.20005.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img5} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Fancy Product</h5>

                                                Rs.100020.00 -Rs.200080.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img6} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Special Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                <span className="text-muted text-decoration-line-through">Rs.20000.00</span>
                                                Rs.10008.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img7} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Popular Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                Rs.40000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="py-5 ">
                        <div className="container  px-4 px-lg-5 mt-1">
                            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img9} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Fancy Product</h5>

                                                Rs.40000.00 -Rs.80000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img10} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Special Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                <span className="text-muted text-decoration-line-through">Rs.20000.00</span>
                                                Rs.10008.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img11} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Sale Item</h5>

                                                <span className="text-muted text-decoration-line-through">Rs.50000.00</span>
                                                Rs.20005.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img12} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Popular Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                Rs.40000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img13} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Sale Item</h5>

                                                <span className="text-muted text-decoration-line-through">Rs.50000.00</span>
                                                Rs.20005.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img14} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Fancy Product</h5>

                                                Rs.100020.00 -Rs.200080.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img15} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Special Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                <span className="text-muted text-decoration-line-through">Rs.20000.00</span>
                                                Rs.10008.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img16} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Popular Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                Rs.40000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="py-5 ">
                        <div className="container  px-4 px-lg-5 mt-5">
                            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img17} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Fancy Product</h5>

                                                Rs.40000.00 -Rs.80000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img18} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Special Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                <span className="text-muted text-decoration-line-through">Rs.20000.00</span>
                                                Rs.10008.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img19} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Sale Item</h5>

                                                <span className="text-muted text-decoration-line-through">Rs.50000.00</span>
                                                Rs.20005.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img20} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Popular Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                Rs.40000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img21} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Sale Item</h5>

                                                <span className="text-muted text-decoration-line-through">Rs.50000.00</span>
                                                Rs.20005.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img22} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Fancy Product</h5>

                                                Rs.100020.00 -Rs.200080.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img23} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Special Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                <span className="text-muted text-decoration-line-through">Rs.20000.00</span>
                                                Rs.10008.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img24} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Popular Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                Rs.40000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="py-5 ">
                        <div className="container  px-4 px-lg-5 mt-5">
                            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img1} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Fancy Product</h5>

                                                Rs.40000.00 -Rs.80000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img2} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Special Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                <span className="text-muted text-decoration-line-through">Rs.20000.00</span>
                                                Rs.10008.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img3} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Sale Item</h5>

                                                <span className="text-muted text-decoration-line-through">Rs.50000.00</span>
                                                Rs.20005.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img4} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Popular Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                Rs.40000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img8} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Sale Item</h5>

                                                <span className="text-muted text-decoration-line-through">Rs.50000.00</span>
                                                Rs.20005.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img5} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Fancy Product</h5>

                                                Rs.100020.00 -Rs.200080.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img6} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Special Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                <span className="text-muted text-decoration-line-through">Rs.20000.00</span>
                                                Rs.10008.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img7} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Popular Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                Rs.40000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="py-5 ">
                        <div className="container  px-4 px-lg-5 mt-1">
                            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img9} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Fancy Product</h5>

                                                Rs.40000.00 -Rs.80000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img10} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Special Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                <span className="text-muted text-decoration-line-through">Rs.20000.00</span>
                                                Rs.10008.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img11} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Sale Item</h5>

                                                <span className="text-muted text-decoration-line-through">Rs.50000.00</span>
                                                Rs.20005.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img12} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Popular Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                Rs.40000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img13} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Sale Item</h5>

                                                <span className="text-muted text-decoration-line-through">Rs.50000.00</span>
                                                Rs.20005.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img14} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Fancy Product</h5>

                                                Rs.100020.00 -Rs.200080.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img15} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Special Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                <span className="text-muted text-decoration-line-through">Rs.20000.00</span>
                                                Rs.10008.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img16} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Popular Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                Rs.40000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="py-5 ">
                        <div className="container  px-4 px-lg-5 mt-5">
                            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img17} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Fancy Product</h5>

                                                Rs.40000.00 -Rs.80000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img18} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Special Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                <span className="text-muted text-decoration-line-through">Rs.20000.00</span>
                                                Rs.10008.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img19} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Sale Item</h5>

                                                <span className="text-muted text-decoration-line-through">Rs.50000.00</span>
                                                Rs.20005.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img20} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Popular Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                Rs.40000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img21} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Sale Item</h5>

                                                <span className="text-muted text-decoration-line-through">Rs.50000.00</span>
                                                Rs.20005.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img22} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Fancy Product</h5>

                                                Rs.100020.00 -Rs.200080.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img23} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Special Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                <span className="text-muted text-decoration-line-through">Rs.20000.00</span>
                                                Rs.10008.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img24} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Popular Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                Rs.40000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="py-5 ">
                        <div className="container  px-4 px-lg-5 mt-5">
                            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img1} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Fancy Product</h5>

                                                Rs.40000.00 -Rs.80000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img2} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Special Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                <span className="text-muted text-decoration-line-through">Rs.20000.00</span>
                                                Rs.10008.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img3} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Sale Item</h5>

                                                <span className="text-muted text-decoration-line-through">Rs.50000.00</span>
                                                Rs.20005.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img4} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Popular Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                Rs.40000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img8} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Sale Item</h5>

                                                <span className="text-muted text-decoration-line-through">Rs.50000.00</span>
                                                Rs.20005.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img5} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Fancy Product</h5>

                                                Rs.100020.00 -Rs.200080.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img6} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Special Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                <span className="text-muted text-decoration-line-through">Rs.20000.00</span>
                                                Rs.10008.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img7} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Popular Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                Rs.40000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="py-5 ">
                        <div className="container  px-4 px-lg-5 mt-1">
                            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img9} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Fancy Product</h5>

                                                Rs.40000.00 -Rs.80000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img10} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Special Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                <span className="text-muted text-decoration-line-through">Rs.20000.00</span>
                                                Rs.10008.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img11} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Sale Item</h5>

                                                <span className="text-muted text-decoration-line-through">Rs.50000.00</span>
                                                Rs.20005.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img12} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Popular Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                Rs.40000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img13} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Sale Item</h5>

                                                <span className="text-muted text-decoration-line-through">Rs.50000.00</span>
                                                Rs.20005.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img14} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Fancy Product</h5>

                                                Rs.100020.00 -Rs.200080.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img15} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Special Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                <span className="text-muted text-decoration-line-through">Rs.20000.00</span>
                                                Rs.10008.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img16} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Popular Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                Rs.40000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="py-5 ">
                        <div className="container  px-4 px-lg-5 mt-5">
                            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img17} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Fancy Product</h5>

                                                Rs.40000.00 -Rs.80000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img18} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Special Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                <span className="text-muted text-decoration-line-through">Rs.20000.00</span>
                                                Rs.10008.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img19} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Sale Item</h5>

                                                <span className="text-muted text-decoration-line-through">Rs.50000.00</span>
                                                Rs.20005.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img20} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Popular Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                Rs.40000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img21} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Sale Item</h5>

                                                <span className="text-muted text-decoration-line-through">Rs.50000.00</span>
                                                Rs.20005.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img22} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Fancy Product</h5>

                                                Rs.100020.00 -Rs.200080.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img23} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Special Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                <span className="text-muted text-decoration-line-through">Rs.20000.00</span>
                                                Rs.10008.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img24} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Popular Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                Rs.40000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="py-5 ">
                        <div className="container  px-4 px-lg-5 mt-5">
                            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img1} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Fancy Product</h5>

                                                Rs.40000.00 -Rs.80000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img2} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Special Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                <span className="text-muted text-decoration-line-through">Rs.20000.00</span>
                                                Rs.10008.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img3} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Sale Item</h5>

                                                <span className="text-muted text-decoration-line-through">Rs.50000.00</span>
                                                Rs.20005.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img4} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Popular Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                Rs.40000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img8} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Sale Item</h5>

                                                <span className="text-muted text-decoration-line-through">Rs.50000.00</span>
                                                Rs.20005.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img5} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Fancy Product</h5>

                                                Rs.100020.00 -Rs.200080.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img6} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Special Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                <span className="text-muted text-decoration-line-through">Rs.20000.00</span>
                                                Rs.10008.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img7} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Popular Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                Rs.40000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="py-5 ">
                        <div className="container  px-4 px-lg-5 mt-1">
                            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img9} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Fancy Product</h5>

                                                Rs.40000.00 -Rs.80000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img10} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Special Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                <span className="text-muted text-decoration-line-through">Rs.20000.00</span>
                                                Rs.10008.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img11} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Sale Item</h5>

                                                <span className="text-muted text-decoration-line-through">Rs.50000.00</span>
                                                Rs.20005.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img12} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Popular Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                Rs.40000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img13} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Sale Item</h5>

                                                <span className="text-muted text-decoration-line-through">Rs.50000.00</span>
                                                Rs.20005.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img14} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Fancy Product</h5>

                                                Rs.100020.00 -Rs.200080.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img15} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Special Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                <span className="text-muted text-decoration-line-through">Rs.20000.00</span>
                                                Rs.10008.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img16} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Popular Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                Rs.40000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="py-5 ">
                        <div className="container  px-4 px-lg-5 mt-5">
                            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img17} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Fancy Product</h5>

                                                Rs.40000.00 -Rs.80000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img18} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Special Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                <span className="text-muted text-decoration-line-through">Rs.20000.00</span>
                                                Rs.10008.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img19} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Sale Item</h5>

                                                <span className="text-muted text-decoration-line-through">Rs.50000.00</span>
                                                Rs.20005.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img20} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Popular Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                Rs.40000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img21} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Sale Item</h5>

                                                <span className="text-muted text-decoration-line-through">Rs.50000.00</span>
                                                Rs.20005.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img22} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Fancy Product</h5>

                                                Rs.100020.00 -Rs.200080.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* <!-- Sale badge--> */}
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>

                                        <img className="card-img-top" src={img23} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Special Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                <span className="text-muted text-decoration-line-through">Rs.20000.00</span>
                                                Rs.10008.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">

                                        <img className="card-img-top" src={img24} alt="..." />

                                        <div className="card-body p-4">
                                            <div className="text-center">

                                                <h5 className="fw-bolder">Popular Item</h5>

                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>

                                                Rs.40000.00
                                            </div>
                                        </div>

                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>




                </div>

                <Footer />
            </>
        )
    }
}

export default Shop;