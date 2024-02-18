import React from "react";
import delip from '../Photos/About/delip .jpg';
import ujju from '../Photos/About/ujju.jpg';
import sayli from '../Photos/About/sayli.jpg';
import tusar from '../Photos/About/tushar.jpg';
import deepak from '../Photos/About/deepak.jpg'


class About extends React.Component {
  render() {
    return (
      <>
        <section class="py-3 py-md-5 py-xl-8 bg-dark text-light">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-10 col-lg-8">
                <h2 class="display-5 mb-6">At our core, we prioritize pushing boundaries, embracing the unknown, and fostering a culture of continuous learning.</h2>
                <button type="button" class="btn btn-lg btn-primary mb-3 mb-md-4 mb-xl-5"><a style={{ textDecoration: 'none', color: 'inherit' }} href="contact">Contact Now</a></button>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row gy-3 gy-md-4 gy-lg-0">
              <div class="col-12 col-lg-6 text-dark">
                <div class="card bg-light p-3 m-0">
                  <div class="row gy-3 gy-md-0 align-items-md-center">
                    <div class="col-md-5">
                      <img src={delip} class="img-fluid rounded-start" alt="..." style={{ cursor: 'pointer', transition: 'transform 0.3s' }}  // Add cursor pointer and transition
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'scale(1.1)'; // Scale up on hover
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'scale(1)'; // Scale back to normal size on mouse out
                        }} />
                    </div>
                    <div class="col-md-7">
                      <div class="card-body p-0">
                        <h2 class="card-title h4 mb-3">Dileep Patel</h2>
                        <p class="card-text lead">With years of experience and deep industry knowledge, we have a proven track record of success and are pushing ourselves to stay ahead of the curve.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="card bg-light p-3 m-0">
                  <div class="row gy-3 gy-md-0 align-items-md-center">
                    <div class="col-md-5">
                      <img src={ujju} class="img-fluid rounded-start" alt="..." style={{ cursor: 'pointer', transition: 'transform 0.3s' }}  // Add cursor pointer and transition
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'scale(1.1)'; // Scale up on hover
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'scale(1)'; // Scale back to normal size on mouse out
                        }} />
                    </div>
                    <div class="col-md-7">
                      <div class="card-body p-0">
                        <h2 class="card-title h4 mb-3">Ujjwal Mishra</h2>
                        <p class="card-text lead">With a team of visionary engineers, developers, and creative minds, we embark on a journey to transform complex challenges into ingenious technological solutions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-4 pt-3" />
          <div className="container mt-3 pt-3" />

          <div class="container">
            <div class="row gy-3 gy-md-4 gy-lg-0">
              <div class="col-12 col-lg-6">
                <div class="card bg-light p-3 m-0">
                  <div class="row gy-3 gy-md-0 align-items-md-center">
                    <div class="col-md-5">
                      <img src={sayli} class="img-fluid rounded-start" alt="..."
                        style={{ cursor: 'pointer', transition: 'transform 0.3s' }}  // Add cursor pointer and transition
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'scale(1.1)'; // Scale up on hover
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'scale(1)'; // Scale back to normal size on mouse out
                        }} />
                    </div>
                    <div class="col-md-7">
                      <div class="card-body p-0">
                        <h2 class="card-title h4 mb-3">Why Choose Us?</h2>
                        <p class="card-text lead">With years of experience and deep industry knowledge, we have a proven track record of success and are pushing ourselves to stay ahead of the curve.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="card bg-light p-3 m-0">
                  <div class="row gy-3 gy-md-0 align-items-md-center">
                    <div class="col-md-5">
                      <img src={deepak} class="img-fluid rounded-start" alt="..." style={{ cursor: 'pointer', transition: 'transform 0.3s' }}  // Add cursor pointer and transition
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'scale(1.1)'; // Scale up on hover
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'scale(1)'; // Scale back to normal size on mouse out
                        }} />
                    </div>
                    <div class="col-md-7">
                      <div class="card-body p-0">
                        <h2 class="card-title h4 mb-3">Visionary Team</h2>
                        <p class="card-text lead">With a team of visionary engineers, developers, and creative minds, we embark on a journey to transform complex challenges into ingenious technological solutions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-4 pt-3" />
          <div className="container mt-3 pt-3" />

          <div class="container">
            <div class="row gy-3 gy-md-4 gy-lg-0">
              <div class="col-12 col-lg-6">
                <div class="card bg-light p-3 m-0">
                  <div class="row gy-3 gy-md-0 align-items-md-center">
                    <div class="col-md-5">
                      <img src={tusar} class="img-fluid rounded-start" alt="..."  style={{ cursor: 'pointer', transition: 'transform 0.3s' }}  // Add cursor pointer and transition
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'scale(1.1)'; // Scale up on hover
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'scale(1)'; // Scale back to normal size on mouse out
                        }} />
                    </div>
                    <div class="col-md-7">
                      <div class="card-body p-0">
                        <h2 class="card-title h4 mb-3">Why Choose Us?</h2>
                        <p class="card-text lead">With years of experience and deep industry knowledge, we have a proven track record of success and are pushing ourselves to stay ahead of the curve.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

      </>
    )
  }
}

export default About;