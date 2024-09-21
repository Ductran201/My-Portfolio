import React from "react";

export default function Contact2() {
  return (
    <>
      <div className="section contact" data-aos="fade-up">
        <PageHeader white="get in" yellow="touch" titleBg="contact" />
        <div className="container">
          <div className="row">
            <div className="col col-4">
              <div className="contact-info mb-3">
                <h3>連絡先</h3>
                <p>
                  最後までご覧いただきありがとうございました。このサイトを通して、私のことを少しでも知っていただけたのなら嬉しいです。もしこのサイトや私について何かコメントがありましたら、フォームをご利用ください。
                </p>
                <ul className="contact-info__list">
                  <li>
                    <div className="icon">
                      <i className="bx bxs-map"></i>
                    </div>
                    <span>現住所</span>
                    埼玉県草加市
                  </li>
                  <li>
                    <div className="icon">
                      <i className="bx bxs-envelope-open"></i>
                    </div>
                    <span>メールアドレス</span>
                    cxxx150@ccg.ac.jp
                  </li>
                  <li>
                    <div className="icon">
                      <i className="bx bxs-phone-call"></i>
                    </div>
                    <span>電話番号</span>
                    <a href="tel:07089592557">07089592xxx</a>
                  </li>
                </ul>
                <ul className="social-list">
                  <li>
                    <a href="https://www.facebook.com/loc.la.9693/">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/LaPhuocLoc">
                      <i className="bx bxl-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-8">
              <form
                className="contact-form"
                id="contact-form"
                onSubmit={handleSubmit(onMessageSubmit)}
                ref={formRef}
              >
                <div className="field contact-form__info">
                  <div className="contact-form__info-name">
                    <input {...register("name")} placeholder="your name" />
                    {errors.name && (
                      <span className="error">{errors.name?.message}</span>
                    )}
                  </div>
                  <div className="contact-form__info-email">
                    <input {...register("email")} placeholder="your email" />
                    {errors.email && (
                      <span className="error">{errors.email?.message}</span>
                    )}
                  </div>
                </div>
                <div className="field contact-form__subject">
                  <input {...register("subject")} placeholder="your subject" />
                  {errors.subject && (
                    <span className="error">{errors.subject?.message}</span>
                  )}
                </div>
                <div className="field contact-form__message">
                  <textarea
                    {...register("message")}
                    placeholder="your message"
                  />
                  {errors.message && (
                    <span className="error">{errors.message?.message}</span>
                  )}
                </div>
                <div className="field">
                  <Button type="submit">
                    <span className="btn-text">send message</span>
                    <span className="btn-icon">
                      <i className="bx bx-mail-send bx-tada"></i>
                    </span>
                  </Button>
                  {/* <p className="status-message" ref={statusRef}>{statusMessage} </p> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
