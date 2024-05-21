/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import removeOverlay from "../../common/removeOverlay";
import parallaxie from "../../common/parallaxie";

class Testimonials1 extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="arrows">
        <div
          onClick={() => this.slider.slickNext()}
          className="next cursor-pointer"
        >
          <span className="pe-7s-angle-right"></span>
        </div>
        <div
          onClick={() => this.slider.slickPrev()}
          className="prev cursor-pointer"
        >
          <span className="pe-7s-angle-left"></span>
        </div>
      </div>
    );
  };
  componentDidMount() {
    removeOverlay();
    parallaxie('.testimonials.bg-img.parallaxie');
  }
  render() {
    return (
      <section
        className={`testimonials section-padding ${this.props.subBgLftstl ? "sub-bg lftstl" : ""} ${this.props.withBG ? "bg-img" : ""} ${this.props.parallaxie ? "parallaxie" : ""} ${!this.props.overlay ? "noOverlay" : ""}`}
        style={{
          backgroundImage: `${
            this.props.withBG && !this.props.imgSrc
              ? "url(/img/slid/3.jpg)"
              : this.props.imgSrc
              ? `url(${this.props.imgSrc})`
              : "none"
          }`,
        }}
        data-overlay-dark={`${this.props.overlay ? "9" : "0"}`}
      >
        <div className="container position-re">
          <div className="sec-head custom-font text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              What Peapole Says?
            </h6>
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Testimonials.
              </h3>
            </Split>
            <span className="tbg">Testimonials</span>
          </div>
          <div
            className="row justify-content-center wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="col-lg-8">
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: true,
                  infinite: true,
                  arrows: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 1,
                }}
              >
          <div className="item">
  <p>
    Working with Alphaloop has been an incredible experience. Their team has greatly supported our organic and paid social media activities, extending the reach of our marketing efforts. Collaboration with Alphaloop has been seamless and efficient.
  </p>
  <div className="info">
    <div className="cont">
      <div className="author">
        {this.props.subBgLftstl ? (
          <>
            <div className="lxleft">
              <div className="img">
                <img src="/img/clients/7rays.jpg" alt="7rays" /> {/* Client image */}
              </div>
            </div>
            <div className="fxright">
              <h6 className="author-name custom-font">
                Himashu Joshi {/* Client name */}
              </h6>
              <span className="author-details">
                Founder, 7rays {/* Client details */}
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="img">
              <img src="/img/portfolio/project1/7rays.jpg" alt="7rays" /> {/* Client image */}
            </div>
            <h6 className="author-name custom-font">
               Gopal Menaria{/* Client name */}
            </h6>
            <span className="author-details">
              Founder, 7rays {/* Client details */}
            </span>
          </>
        )}
      </div>
    </div>
  </div>
</div>
<div className="item">
  <p>
    We initially engaged Alphaloop to manage our SEO efforts. Their scientific approach to digital marketing and the remarkable results they achieved made it an easy decision for us to entrust them with additional responsibilities.
  </p>
  <div className="info">
    <div className="cont">
      <div className="author">
        {this.props.subBgLftstl ? (
          <>
            <div className="lxleft">
              <div className="img">
                <img src="/img/clients/dsiara.jpg" alt="Dsiara" /> {/* Client image */}
              </div>
            </div>
            <div className="fxright">
              <h6 className="author-name custom-font">
                Gajendra Menaria {/* Client name */}
              </h6>
              <span className="author-details">
                Founder, Dsiara {/* Client details */}
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="img">
              <img src="/img/portfolio/project1/logo-01.png" alt="Dsiara" /> {/* Client image */}
            </div>
            <h6 className="author-name custom-font">
              Gajendra Menaria {/* Client name */}
            </h6>
            <span className="author-details">
              Founder, Dsiara {/* Client details */}
            </span>
          </>
        )}
      </div>
    </div>
  </div>
</div>
<div className="item">
  <p>
    We are incredibly impressed with the work of Alphaloop. Their team worked on an animation for our 'Click & Collect' service, and their dedication and creativity surpassed our expectations. Alphaloop is unlike any other agency we've worked with.
  </p>
  <div className="info">
    <div className="cont">
      <div className="author">
        {this.props.subBgLftstl ? (
          <>
            <div className="lxleft">
              <div className="img">
                <img src="/img/portfolio/project1/pp.jpg" alt="Wedding Stellars" /> {/* Client image */}
              </div>
            </div>
            <div className="fxright">
              <h6 className="author-name custom-font">
                Anil Jogiraj {/* Client name */}
              </h6>
              <span className="author-details">
                Founder, Wedding Stellars {/* Client details */}
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="img">
              <img src="/img/portfolio/project1/logo-01.png" alt="Wedding Stellars" /> {/* Client image */}
            </div>
            <h6 className="author-name custom-font">
             Anil Jogiraj {/* Client name */}
            </h6>
            <span className="author-details">
              Founder, Wedding Stellars {/* Client details */}
            </span>
          </>
        )}
      </div>
    </div>
  </div>
</div>

              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
      </section>
    );
  }
}

export default Testimonials1;
