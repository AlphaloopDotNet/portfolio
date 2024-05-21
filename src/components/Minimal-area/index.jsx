/* eslint-disable @next/next/no-img-element */
import React from "react";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import Split from "../Split";

const MinimalArea = () => {
  React.useEffect(() => {
    featuresEffect();
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/min-area.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  About us.
                </h4>
              </Split>

              <Split>
              <p className="wow txt words chars splitting" data-splitting>
    Welcome to AlphaLoop IT! We're a top-tier IT startup crafting bespoke digital solutions for businesses, boosting online presence and operational efficiency.
</p>

              </Split>
              <ul className="feat">
  <li className="wow fadeInUp" data-wow-delay=".2s">
    <h6>
      <span>1</span> Our Mission
    </h6>
    <p>
      Our mission is to revolutionize the digital landscape by providing innovative solutions tailored to our clients' needs.
    </p>
  </li>
  <li className="wow fadeInUp" data-wow-delay=".4s">
    <h6>
      <span>2</span> Our Goals
    </h6>
    <p>
      Our goals encompass delivering unparalleled digital experiences, fostering client success, and driving technological advancement.
    </p>
  </li>
  <li className="wow fadeInUp" data-wow-delay=".6s">
    <h6>
      <span>3</span> Why Us?
    </h6>
    <p>
      Choose us for our expertise, dedication, and track record of delivering exceptional results that exceed expectations.
    </p>
  </li>
</ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
