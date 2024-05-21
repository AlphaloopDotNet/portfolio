import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Who We Are ?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
              <p className="wow txt words chars splitting" data-splitting>
    Welcome to Alphaloop IT! We deliver avant-garde digital solutions tailored for businesses, boosting online presence, streamlining operations, and fostering growth.

    Specializing in bespoke software engineering, we craft solutions finely attuned to your business needs. Our expertise lies in seamless integration with existing systems and user-friendly web development, optimizing for search engines.
</p>


              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
