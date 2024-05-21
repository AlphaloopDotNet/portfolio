import React from "react";
import Link from "next/link";

const ProjectDetailsIntroduction = () => {
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4>
                <span>01 </span> Introduction
              </h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
            <div className="text">
              <p className="extra-text">
              Alphacat ensures educators undergo comprehensive training and certification for student success. We strive to provide quality learning experiences, leveraging innovative technology and expert instructors to offer personalized and effective educational solutions              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Alphacat Software</h6>
              <p>
                <a href="">Alphacat Software</a>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Date</h6>
              <p>April 2023</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Categories</h6>
              <p>
                <Link href="/works/works-dark">Software Design </Link> 
                <Link href="/works/works-dark"> Software Development</Link>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsIntroduction;
