import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios';
import Split from '../Split';
import * as Yup from "yup";


const ContactWithMap = ({ theme = "dark" }) => {
  const messageRef = React.useRef(null);
  const initialValues = {
    name: "",
    email: "",
    message: "", 
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    message: Yup.string().required("Required"),
  });
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      // Send form data to the server
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      // Handle the server response
      if (response.ok) {
        // Display success message
        messageRef.current.innerHTML =
          "<div class='alert alert-success'>Message sent successfully</div>";
        // Reset form values
        resetForm();
      } else {
        // Display error message
        messageRef.current.innerHTML =
          "<div class='alert alert-danger'>Failed to send message. Please try again later.</div>";
      }
    } catch (error) {
      console.error('Error sending form data:', error);
    } finally {
      // Reset submitting state
      setSubmitting(false);
    }
  };
  return (
    <>
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form md-mb50">
                <h4 className="extra-title mb-50">Get In Touch.</h4>

                <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form id="contact-form">
                  <div className="messages" ref={messageRef}></div>
                  <div className="controls">
                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error-message"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error-message"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      placeholder="Message"
                      rows="4"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="error-message"
                    />
                  </div>

                  <button type="submit" className="butn bord">
                    <span>Send Message</span>
                  </button>
                </Form>
              </Formik>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="cont-info">
                <h4 className="extra-title mb-50">Contact Info.</h4>
                <Split>
                  <h3 className="custom-font wow" data-splitting>
                    Let&apos;s Talk.
                  </h3>
                </Split>
                <div className="item mb-40">
                  <h5>
                    <a href="#">contact.us@alphaloop.net</a>
                  </h5>
                  <h5>+91 7357953308</h5>
                </div>
                <Split>
                  <h3 className="custom-font wow" data-splitting>
                    Visit Us.
                  </h3>
                </Split>
                <div className="item">
                  <h6>
                  80, 1st Floor, Laxmi nagar, near Jain travels, Sector 8, Panerion Ki Madri,
                    <br />
                    Udaipur, Rajasthan 313001
                  </h6>
                </div>
                <div className="social mt-50">
                  <a href="https://www.facebook.com/people/Alphaloop-it/100094405376504/?mibextid=ZbWKwL" className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://x.com/i/flow/login?redirect_after_login=%2FAlphaloopIT" className="icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/alphaloopit/" className="icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHmnvv8uWrvQwAAAY-GgtvQc8WOF4oT8vS-jeY6_Yvcxsmv-Rjken4yHsOtqLIbxacOynXx1nYkITcKgkeqlngpy5Gi_cFc6TZh6ZUcwciChtd20aEO69XV0lqbAoo43mXjNsg=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Falphaloop-it%2F" className="icon">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="map" id="ieatmaps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.971918379424!2d73.70670227440297!3d24.555632507389152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967ef7b68666d51%3A0x6ce1bb24d2deebde!2sALPHALOOP%20IT%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1715946767418!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

     
    </>
  );
};

export default ContactWithMap;
