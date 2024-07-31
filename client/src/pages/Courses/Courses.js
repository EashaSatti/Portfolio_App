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
          I have earned certifications in Python for Data Science, AI, and
          Development from IBM, Creating a Website with WordPress from Coursera
          Project Network, Building a Full-Stack App with React and Express from
          Coursera Project Network, and AI for Everyone from DeepLearning.AI.
          These credentials reflect my expertise in data science, web
          development, and artificial intelligence.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm1WmVnFhpWmNP7q6iN5KxYsqgN7Dsud0czg&s"
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
                    target="_blank"
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nRUSXE02uWUqKGUhPAMPF4Hi1kU21v3JRg&s"
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
                    target="_blank"
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TvXYkd-i9L4TETD7NbFu5FEt8IKAYKTo9g&s"
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
                    target="_blank"
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkS2Rp5xQgYaA9z48nTX-lglgNGM_yjBCJSA&s"
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
                    target="_blank"
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
