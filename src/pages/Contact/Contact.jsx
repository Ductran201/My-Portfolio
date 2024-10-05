import React from "react";
import "./contact.css";
import TitleHeader from "../../components/title-header";
import ButtonCustom from "../../components/button/ButtonCustom";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function Contact() {
  return (
    <>
      <div className="slide"></div>
      <div className="section contact" data-aos="fade-up">
        <TitleHeader first={"get in"} second={"touch"} third={"contact"} />
        <div className="container">
          <div className="row">
            <div className="col col-4">
              <div className="contact-info">
                <h3>Don't be shy</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione maiores voluptates libero possimus, iure corrupti,
                  voluptas et minus provident quam fugiat, repellendus dolorem
                  quibusdam. Laboriosam, voluptatibus at. Reprehenderit,
                  voluptatibus doloremque.
                </p>
                <ul className="contact-info__list">
                  <li>
                    <div className="icon">
                      {/* <i className="bx bxs-map"></i> */}
                      <PlaceIcon />
                    </div>
                    <span>Adress</span>
                    Ha Noi
                  </li>
                  <li>
                    <div className="icon">
                      {/* <i className="bx bxs-envelope-open"></i> */}
                      <EmailIcon />
                    </div>
                    <span>Email</span>
                    ductt1531@gmail.com
                  </li>
                  <li>
                    <div className="icon">
                      {/* <i className="bx bxs-phone-call"></i> */}
                      <CallIcon />
                    </div>
                    <span>Phone</span>
                    <a href="tel:07089592557">07089592xxx</a>
                  </li>
                </ul>
                <ul className="social-list">
                  <li>
                    <a href="https://www.facebook.com/loc.la.9693/">
                      <FacebookIcon />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/LaPhuocLoc">
                      <GitHubIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-8">
              <form className="contact-form" id="contact-form">
                <div className="field contact-form__info">
                  <div className="contact-form__info-name">
                    {/* <input {...register("name")} placeholder="your name" />
                    {errors.name && (
                      <span className="error">{errors.name?.message}</span>
                    )} */}
                    <input type="text" placeholder="name" />
                  </div>
                  <div className="contact-form__info-email">
                    {/* <input {...register("email")} placeholder="your email" />
                    {errors.email && (
                      <span className="error">{errors.email?.message}</span>
                    )} */}
                    <input type="text" placeholder="email" />
                  </div>
                </div>
                <div className="field contact-form__subject">
                  {/* <input {...register("subject")} placeholder="your subject" />
                  {errors.subject && (
                    <span className="error">{errors.subject?.message}</span>
                  )} */}
                  <input type="text" placeholder="subject" />
                </div>
                <div className="field contact-form__message">
                  {/* <textarea
                    {...register("message")}
                    placeholder="your message"
                  />
                  {errors.message && (
                    <span className="error">{errors.message?.message}</span>
                  )} */}
                  <textarea placeholder="your message"></textarea>
                </div>
                <div className="field">
                  <ButtonCustom type="submit">
                    <span className="btn-text">send message</span>
                    <span className="btn-icon">
                      <SendIcon />
                    </span>
                  </ButtonCustom>
                  {/* <p className="status-message" ref={statusRef}>{statusMessage} </p> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <Modal id="modal-1">
        <ModalContent className="success">
          <div className="icon">
            <i className="bx bx-check"></i>
          </div>

          <h3>Success!</h3>
          <p>We've sent a confirmation to your e-mail for verification.</p>
          <button type="button" className="redo-btn" onClick={handleClose1}>
            Ok
          </button>
          <span className="change">-- Click to close the modal --</span>
        </ModalContent>
      </Modal>
      <Modal id="modal-2">
        <ModalContent className="error">
          <div className="icon">
            <i className="bx bxs-dislike"></i>
          </div>

          <h3>Oh no!</h3>
          <p>Oops! Something went wrong, you should try again.</p>
          <button type="button" className="redo-btn" onClick={handleClose2}>
            Ok
          </button>
          <span className="change">-- Click to close the modal --</span>
        </ModalContent>
      </Modal> */}
    </>
  );
}
