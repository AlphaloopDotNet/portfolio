import React from "react";
import { Formik, Form, Field } from "formik";
import axios from 'axios';
import Split from '../Split';

const ContactWithMap = ({ theme = "dark" }) => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <>
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form md-mb50">
                <h4 className="extra-title mb-50">Get In Touch.</h4>

                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    message: "",
                  }}
                  onSubmit={async (values) => {
                    await sendMessage(500);
                    // alert(JSON.stringify(values, null, 2));
                    // show message
                    const formData = new FormData();

                    formData.append('name', values.name);
                    formData.append('email', values.email);
                    formData.append('message', values.message);

                    const res = await axios.post('/contact.php', formData);

                    if (!res) return;

                    messageRef.current.innerText =
                      "Your Message has been successfully sent. I will contact you soon.";
                    // Reset the values
                    values.name = "";
                    values.email = "";
                    values.message = "";
                    // clear message
                    setTimeout(() => {
                      messageRef.current.innerText = "";
                    }, 2000);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form id="contact-form" method="POST" action="contact.php">
                      <div className="messages" ref={messageRef}></div>

                      <div className="controls">
                        <div className="form-group">
                          <Field
                            id="form_name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            required="required"
                          />
                        </div>

                        <div className="form-group">
                          <Field
                            validate={validateEmail}
                            id="form_email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required="required"
                          />
                          {errors.email && touched.email && (
                            <div>{errors.email}</div>
                          )}
                        </div>

                        <div className="form-group">
                          <Field
                            as="textarea"
                            id="form_message"
                            name="message"
                            placeholder="Message"
                            rows="4"
                            required="required"
                          />
                        </div>

                        <button type="submit" name="submit" value="submit"className={`btn-curve ${theme === 'dark' ? 'btn-lit':'btn-color'} disabled`}>
                          <span>Send Message</span>
                        </button>
                      </div>
                    </Form>
                  )}
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
