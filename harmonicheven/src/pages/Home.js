import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import temp1 from '../Photos/temp1.jpg';
import temp2 from '../Photos/temp2.jpg';
import temp3 from '../Photos/temp3.jpeg';
import img2 from '../Photos/img2.jpg';
import img3 from '../Photos/img3.jpg';
import img4 from '../Photos/img4.avif';
import img5 from '../Photos/img5.jpg';
import img6 from '../Photos/img6.avif';
import c1 from '../Photos/c1.jpg';
import c2 from '../Photos/c2.webp';
import c3 from '../Photos/c3.jpg';




class Home extends React.Component {
  render() {
    return (
      <>
        <Header />


        <main >

          <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" />
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
            {/* <!-- Set interval to 2000 milliseconds --> */}
            <div class="carousel-inner">
              <div className="carousel-item active">
                <img src={temp1} className="d-block w-100" style={{ height: '600px', width: '100%' }} alt="Slide" />
                <div className="container">
                  <div className="carousel-caption text-start">
                    <h1>Music Heals lyrics kill</h1>
                    <p> Lyrics in music can evoke strong emotions, convey messages, and influence listeners in various ways.</p>
                    <p><a className="btn btn-lg btn-primary" href="login">Sign up today</a></p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <img src={temp2} className="d-block w-100" style={{ height: '600px', width: '100%' }} alt="Slide" />
                <div class="container">
                  <div class="carousel-caption">
                    <h1>Explor the world of music</h1>
                    <p>Here are some ways you can start exploring and enjoying music.</p>
                    <p><a class="btn btn-lg btn-primary" href="upcomingevent">Learn more</a></p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <img src={temp3} className="d-block w-100" style={{ height: '600px', width: '100%' }} alt="Slide" />
                <div class="container">
                  <div class="carousel-caption text-end">
                    <h1>Support Emerging Artists</h1>
                    <p>Discover new music by supporting emerging artists and independent musicians.</p>
                    <p><a class="btn btn-lg btn-primary" href="about">About</a></p>
                  </div>
                </div>
              </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div className="container mt-5 pt-3" />

          <div class="container marketing">
            <div class="row">
              <div class="col-lg-4">
                <img
                  className="bd-placeholder-img rounded-circle"
                  src={c1}
                  alt="Placeholder: 140x140"
                  width="140"
                  height="140"
                />
                <h2>Upcoming Events</h2>
                <p>From electrifying concerts to captivating cultural festivals, there's something for every taste and interest. Stay ahead of the curve by browsing through our meticulously curated lineup of upcoming events, featuring renowned performers, thought-provoking discussions..</p>
                <p><a class="btn btn-secondary" href="upcomingevent">View details &raquo;</a></p>
              </div>

              <div class="col-lg-4">
                <img
                  className="bd-placeholder-img rounded-circle"
                  src={c2}
                  alt="Placeholder: 140x140"
                  width="140"
                  height="140"
                />
                <h2>Local Talent</h2>
                <p> Discover emerging talents, support grassroots musicians, and immerse yourself in the vibrant rhythm of our community's creativity. Whether you're a music aficionado or a casual listener, there's something here for everyone to enjoy. Tune in, explore, and let....</p>
                <p><a class="btn btn-secondary" href="localtalent">View details &raquo;</a></p>
              </div>

              <div class="col-lg-4">
                <img
                  className="bd-placeholder-img rounded-circle"
                  src={c3}
                  alt="Placeholder: 140x140"
                  width="140"
                  height="140"
                />
                <h2>Respect To Legends</h2>
                <p>Subedar Major Bana Singh, Subedar Sanjay Kumar and Subedar Yogendra Singh Yadav, are the only living recipients of the highest honour of the army. We offer life time free service on any occation of the army officer who will win get the PARAM VIR CHAKRA alive .</p>
                <p><a class="btn btn-secondary" href="respecttolegends">View details &raquo;</a></p>
              </div>
            </div>
          </div>



          <div className="container mt-4 pt-3" />
          <div className="container mt-3 pt-3" />


          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">where every note is a journey, <span class="text-muted"> and every melody a masterpiece.</span></h2>
              <p class="lead">As the stage lights illuminate, Indian singers take their place, ready to enchant the audience with their mesmerizing melodies. With every note, they weave a tapestry of emotions, drawing from the rich cultural heritage of India. The audience is transported on a journey through the diverse musical landscapes of classical ragas, soul-stirring bhajans, and lively Bollywood hits.

                Each singer brings their unique style and interpretation, infusing the performance with personal flair and passion. The stage becomes a vibrant canvas where voices intertwine, creating harmonies that resonate deep within the hearts of the listeners. From the soulful alaaps to the energetic taans, every vocal nuance captivates the audience, holding them spellbound.</p>
            </div>
            <div class="col-md-5">
              <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={img4} alt="Placeholder: 500x500" width="500" height="500" />
            </div>
          </div>

          <div className="container mt-4" />
          <hr class="featurette-divider" />
          <div className="container mt-4" />


          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading">The Joker's Harmonious Discord Strikes<span class="text-muted"> a Chord of Madness</span></h2>
              <p class="lead">The Joker, amidst chaos, finds solace in the melody of his own making. Playing music on his harmonica, he weaves a discordant yet captivating harmony, mirroring the tumultuous rhythm of his mind. Each note resonates with his unpredictable nature, echoing the erratic dance of his thoughts. Through the haunting tunes, the Joker reveals a glimpse of his inner turmoil, blending madness with melody in a surreal symphony that captivates and unsettles those who dare to listen.</p>
              <br></br>
              <p class="lead">Unraveling Chaos Through Music: The Joker's Harmonious Discord Strikes a Chord of Madness</p>
            </div>
            <div class="col-md-5 order-md-1">
              <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={img2} alt="Placeholder: 500x500" width="500" height="500" />

            </div>
          </div>

          <div className="container mt-4" />
          <hr class="featurette-divider" />
          <div className="container mt-4" />

          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">Invitation to the Soul.<span class="text-muted">  Nadan Parinda, Return Home</span></h2>
              <p class="lead">Guided by the winds of nostalgia, Nadan Parinda, the wanderer bird, finds its way back home, beckoned by the warmth of familiar melodies and the embrace of cherished memories. In its flight, it carries tales of distant lands and encounters with the unknown, but it is the call of its roots that resonates the strongest. As it alights upon familiar branches, the air is filled with a symphony of reunion, blending the joyous chirps of homecoming with the echoes of distant adventures.
                Amidst the embrace of loved ones and the scent of familiar spices, Nadan Parinda finds solace, knowing that in the heart of its homeland, it is forever anchored. The journey may have taken it far and wide, but in the end, there is no greater destination than the sanctuary of home, where memories are etched in the fabric of time, and the soul finds its truest refuge</p>
            </div>
            <div class="col-md-5">
              <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={img3} alt="Placeholder: 500x500" width="500" height="500" />

            </div>
          </div>

          <div className="container mt-4" />
          <hr class="featurette-divider" />
          <div className="container mt-4" />

          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading">The Enthralling Artistry of a Musician <span class="text-muted">......</span></h2>
              <p class="lead">The musician, enveloped in a cloak of concentration, becomes a vessel for the symphony of sound. With nimble fingers dancing across the instrument's strings or keys, they breathe life into each note, infusing it with emotion and purpose.
                <br></br>
                Their passion radiates from every chord, carrying listeners on a journey through the depths of human experience.
                In the musician's hands, melodies weave tales of love and loss, joy and sorrow, echoing the myriad complexities of existence. Each composition is a reflection of their soul, a testament to their creative spirit and unwavering dedication to their craft.</p>
            </div>
            <div class="col-md-5 order-md-1">
              <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={img5} alt="Placeholder: 500x500" width="500" height="500" />

            </div>
          </div>

          <div className="container mt-4" />
          <hr class="featurette-divider" />
          <div className="container mt-4" />

          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
              <p class="lead">In the heart of service, amidst the echoes of bravery, the Indian Army orchestrates more than just defense; they compose melodies of solidarity and resilience. Their music transcends borders, weaving tales of sacrifice and honor. With each note, they serenade the nation with a symphony of courage, reminding us of their unwavering commitment and unwavering resolve to protect and inspire</p>
              <br></br>
              <p class="lead">Amidst the symphony of valor and duty, the Indian Army orchestrates melodies of courage, harmony, and unity, painting a picture of strength and pride with every note.</p>
            </div>
            <div class="col-md-5">
              <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={img6} alt="Placeholder: 500x500" width="500" height="500" />

            </div>
          </div>

          <div className="container mt-4" />
          <hr class="featurette-divider" />

        </main>

        <Footer />
      </>
    )
  }
}

export default Home;