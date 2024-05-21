/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksThreeColumnWithFilter = ({ filterPosition }) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000)
    }
  }, [pageLoaded]);
  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="row">
          <div
            className={`filtering ${
              filterPosition === "center"
                ? "text-center"
                : filterPosition === "left"
                ? "text-left"
                : "text-right"
            } smplx col-12`}
          >
            <div className="filter">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".web">Website</span>
              <span data-filter=".brand">Software</span>
              
            </div>
          </div>

          <div className="gallery full-width web">
            <div className="col-lg-4 col-md-6 items web lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/aarogyas">
                  <a>
                    <img src="/img/portfolio/full/1.gif" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Aarogyas</h6>
                <span>
                  <a href="#0">Design</a>, <a href="#0">Website</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/dsiara">
                  <a>
                    <img src="/img/portfolio/full/1.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Dsiara</h6>
                <span>
                  <a href="#0">Design</a>, <a href="#0">Website</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/elearning">
                  <a>
                    <img src="/img/portfolio/full/14.jpg" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>E-learning</h6>
                <span>
                  <a href="#0">Design</a>, <a href="#0">Software</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/hotelm">
                  <a>
                    <img src="/img/portfolio/full/33.jpg" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Hotel Mamangment </h6>
                <span>
                  <a href="#0">Design</a>, <a href="#0">Software</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/quiz">
                  <a>
                    <img src="/img/portfolio/full/16.jpg" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Quiz</h6>
                <span>
                  <a href="#0">Design</a>, <a href="#0">Software</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/sevenrays">
                  <a>
                    <img src="/img/portfolio/full/1.jpg" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Seven Rays</h6>
                <span>
                  <a href="#0">Design</a>, <a href="#0">Website</a>
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items web">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/WeddingS">
                  <a>
                    <img src="/img/portfolio/full/11.gif" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Wedding Stellars</h6>
                <span>
                  <a href="#0">Design</a>, <a href="#0">Website</a>
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items web">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/tourbazzar">
                  <a>
                    <img src="/img/portfolio/full/cm.gif" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Still Brewing</h6>
                <span>
                  <a href="#0">Ai</a>, <a href="#0">Software</a>
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items web">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/tourbazzar">
                  <a>
                    <img src="/img/portfolio/full/9.jpg" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Tour bazzar</h6>
                <span>
                  <a href="#0">Design</a>, <a href="#0">Website</a>
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksThreeColumnWithFilter;
