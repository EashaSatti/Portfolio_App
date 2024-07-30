import React from "react";
import "./About.css";
import profile from "../../assets/images/profile_pic.jpg";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={profile} alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                similique sequi velit aperiam totam quis iusto? Deleniti,
                similique id, sunt porro eos neq tempora quis fugit? Vitae,
                aperiam velit.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
