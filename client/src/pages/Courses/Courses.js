import React from "react";
import "./courses.css";
import Spin from "react-reveal/Spin";
const Courses = () => {
  return (
    <>
      <div className="continer project certificates" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Certificates
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a
          odit ab, eligendi cupiditate, minima quasi excepturi modi et quo
          delectus, iusto dolor atque aliquam aspernatur eveniet! Ipsam eum
          nobis omnis id voluptatibus quas eos maxime ipsum facere numquam,
          voluptate qui et animi doloribus nulla eius molestiae unde tempore ad
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">IBM</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Python for dataScience,AI and Development
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://drive.google.com/file/d/13whNmBzIHuzwdhDgeqZoSYJBTXJf6C6r/view?usp=sharing"
                  >
                    Certificate
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">
                    COURSERA PROJECT NETWORK
                  </span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Create a website using Wordpress: free hosting and domain
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://drive.google.com/file/d/1pZWZQCW8TJKm9lNdiHcRsZ7Npn2ImG2B/view?usp=sharing"
                  >
                    Certificate
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">
                    COURSERA PROJECT NETWORK
                  </span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      BuIld a fullstack app using react and express
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://drive.google.com/file/d/1nRx6eYY6aXi_XjxvWJhKQvazlRKt0InK/view"
                  >
                    Certificate
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">DEEPLEARNING.AI</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">AI for everyone</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://drive.google.com/file/d/1grKrW0e1uvMiXpvjH9PkuIBkeFoTN5KO/view?usp=sharing"
                  >
                    Certificate
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Courses;
