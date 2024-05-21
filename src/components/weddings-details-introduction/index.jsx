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
              We have an insatiable passion for photography, which takes us on incredible journeys to meet and connect with beautiful people around the globe. Through our lens, we capture the essence of diverse cultures and create lasting memories that transcend borders. Every new encounter enriches our lives and inspires our art.              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>The Wedding Stellars</h6>
              <p>
                <a href="https://theweddingstellars.com/">https://theweddingstellars.com/</a>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Date</h6>
              <p>may 2023</p>
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
