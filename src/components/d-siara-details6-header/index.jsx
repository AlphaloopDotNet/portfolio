import React from "react";
import Link from "next/link";

const ProjectDetails2Header = () => {
  return (
    <>
    <section
      className="page-header proj-det bg-img parallaxie valign"
      style={{ marginTop: '65px', backgroundImage: 'url(/img/portfolio/dsiara/1.jpg)' }}
      data-overlay-dark="4"
    >
      <div className="container">
    <div className="row">
      <div className="col-lg-7 col-md-11">
        <div className="cont">
          <h6>Website &amp; Design </h6>
          <h2> Hotel D-siara</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-10">
        <div className="item mt-30">
          <h6>Client</h6>
          <p>
            <a href="https://www.hoteldsiara.com/">https://www.hoteldsiara.com/</a>
          </p>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="item mt-30">
          <h6>Date</h6>
          <p> February 2024</p>
        </div>
      </div>
     
    
    </div>
  </div>
      
    </section>
    
  </>
  );
};

export default ProjectDetails2Header;
