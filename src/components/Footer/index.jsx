/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";

const Footer = ({ noSubBG }) => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <footer className={`footer-half ${noSubBG ? '':'sub-bg'} section-padding pb-0`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont">
              <div className="logo">
                <a >
                  <img src={`${appData.lightLogo}`} alt="" />
                </a>
              </div>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>Email : </span> contact.us@alphaloop.net
                  </li>
                  <li>
                    <span>Address : </span> 80, 1st Floor, Laxmi nagar, near Jain travels, 
                    Sector 8, Panerion Ki Madri, Udaipur, Rajasthan 313001
                  </li>
                  <li>
                    <span>Phone : </span> +91 7357953308
                  </li>
                </ul>
              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Follow Us</h6>
                <div className="social">
                  <a href="https://www.facebook.com/people/Alphaloop-it/100094405376504/?mibextid=ZbWKwL" className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://x.com/AlphaloopIT" className="icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/alphaloop-it/" className="icon">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://www.instagram.com/alphaloopit/" className="icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
         
        </div>
        <div className="copyrights text-center">
          <p>
          <a href="https://www.alphaloop.net/"> © 2024, Alphaloop IT.</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
