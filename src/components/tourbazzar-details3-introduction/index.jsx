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
              Tour Bazzar is dedicated in tours & Travel related service. We are dedicated to provide great standards of services to our customers at an reasonable price while gaining a reasonable profit. Our greatest strength is our committed staff to provide high end service to our valued customers, to whom we dedicate our success.
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>tourbazzar</h6>
              <p>
                <a href="https://tourbazzar.com/">https://tourbazzar.com/</a>
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
                <Link href="/works/works-dark">Web Design </Link> ,
                <Link href="/works/works-dark"> web Development</Link>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsIntroduction;
