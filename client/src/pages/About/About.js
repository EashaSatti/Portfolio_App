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
                I'm Easha Zeb Satti, an IT student passionate about AI and
                frontend development. Currently, I'm honing my skills in web
                technologies and exploring artificial intelligence through
                various courses and projects. My goal is to innovate and create
                impactful solutions in the tech industry.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
