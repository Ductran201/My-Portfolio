import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <>
      <main className="contact-main bg-black text-white">
        <div
          className="section contact aos-init aos-animate"
          data-aos="fade-up"
        >
          <div className="page-header">
            <h1>
              <span className="text-white">get in</span> touch
            </h1>
            {/* <span>contact</span> */}
          </div>
          <div className="container">
            <div className="row">
              <div className="col col-4">
                <div className="contact-info mb-8">
                  <h3>DON'T BE SHY !</h3>
                  <p>
                    Feel free to get in touch with me. I am always open to
                    discussing new projects, creative ideas or opportunities to
                    be part of your visions.
                  </p>
                  <ul className="contact-info__list">
                    <li>
                      <div className="icon">
                        <i className="bx bxs-map" />
                      </div>
                      <span>Address</span>Japan
                    </li>
                    <li>
                      <div className="icon">
                        <i className="bx bxs-envelope-open" />
                      </div>
                      <span>Email</span>cxxx150@ccg.ac.jp
                    </li>
                    <li>
                      <div className="icon">
                        <i className="bx bxs-phone-call" />
                      </div>
                      <span>Phone</span>
                      <a href="tel:07089592557">07089592xxx</a>
                    </li>
                  </ul>
                  <ul className="social-list">
                    <li>
                      <a href="https://www.facebook.com/loc.la.9693/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="bx bxl-github" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col col-8">
                <form className="contact-form" id="contact-form">
                  <div className="field contact-form__info">
                    <div className="contact-form__info-name">
                      <input name="name" placeholder="your name" />
                    </div>
                    <div className="contact-form__info-email">
                      <input name="email" placeholder="your email" />
                    </div>
                  </div>
                  <div className="field contact-form__subject">
                    <input name="subject" placeholder="your subject" />
                  </div>
                  <div className="field contact-form__message">
                    <textarea
                      name="message"
                      placeholder="your message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="field">
                    <button className="btn undefined" type="submit">
                      <span className="btn-text">send message</span>
                      <span className="btn-icon">
                        <i className="bx bx-mail-send bx-tada" />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
