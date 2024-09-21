import React from "react";
import "./about.css";
export default function About() {
  const backgroundImage =
    "https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-thien-nhien-90.jpg";
  return (
    <>
      <main className="bg-black text-white px-8">
        {/* HEADING */}
        <h1 className="text-center mb-6 py-[75px] project-header">
          <span>ABOUT</span> ME
        </h1>
        <div className="about-container">
          <div className="about-content">
            <div className="about-content-left">
              <h3 className="text-[26px] font-[600] pb-5 ">
                personal information
              </h3>

              <ul className="about-content-infor">
                <li>
                  <span>First name:</span> Duc
                </li>
                <li>
                  <span>Birthday:</span> 23 Years old
                </li>
                <li>
                  <span>National:</span> Vietnam
                </li>
                <li>
                  <span>Phone:</span> 07089592xxx
                </li>
                <li>
                  <span>Language:</span> Vietnamese, English
                </li>
                <li>
                  <span>Last Name:</span> Tran Trong
                </li>
                <li>
                  <span>Sex:</span> Male
                </li>
                <li>
                  <span>Home Town:</span> Hai Phong
                </li>
                <li>
                  <span>Facebook:</span> facebook.com/ductran.xxx
                </li>
                <li>
                  <span>Email:</span> ductt1531@gmail.com
                </li>
              </ul>

              <p>
                <button className="btnDowloadCV">
                  <a href="" rel="noopener">
                    {/*  download="" UP */}
                    <span className="btn-text">Download CV</span>
                    <span className="btn-icon">
                      <i className="bx bxs-download" />
                    </span>
                  </a>
                </button>
              </p>
            </div>

            <ul className="about-content-right">
              <li>
                <h3>1{/* <i></i> */}</h3>
                <p>
                  years of <span>experience</span>
                </p>
              </li>
              <li>
                <h3>1{/* <i></i> */}</h3>
                <p>
                  years of <span>experience</span>
                </p>
              </li>
              <li>
                <h3>1{/* <i></i> */}</h3>
                <p>
                  years of <span>experience</span>
                </p>
              </li>
              <li>
                <h3>1{/* <i></i> */}</h3>
                <p>
                  years of <span>experience</span>
                </p>
              </li>
            </ul>
          </div>

          <hr className="seprate" />

          <h3 className="text-center mb-3 text-[30px] font-[700]">MY SKILLS</h3>
          {/* IMAGE SKILL */}

          <div className="about-skills">
            {/* SKILL ITEM */}
            <div className="skill-item aos-init" data-aos="fade-up">
              <div className="skill-item__img mb-1">
                {/* <div
                  className="skill-item__img-wrap"
                  style={{
                    backgroundImage: `url("assets/skills/download.png")`,
                  }}
                /> */}
                <img
                  className="skill-item__img-wrap"
                  src="src/assets/skills/react.png"
                  alt=""
                />
              </div>
              <div className="skill-item__name">
                <h6 className=" text-[14px] font-[500]">HTML</h6>
              </div>
            </div>
            {/* SKILL ITEM */}

            <div className="skill-item aos-init" data-aos="fade-up">
              <div className="skill-item__img">
                {/* <div
                  className="skill-item__img-wrap"
                  style={{
                    backgroundImage: `url("assets/skills/download.png")`,
                  }}
                /> */}
                <img
                  className="skill-item__img-wrap"
                  src="src/assets/skills/download.png"
                  alt=""
                />
              </div>
              <div className="skill-item__name">
                <h6 className=" text-[14px] font-[500]">HTML</h6>
              </div>
            </div>
            <div className="skill-item aos-init" data-aos="fade-up">
              <div className="skill-item__img mb-1">
                {/* <div
                  className="skill-item__img-wrap"
                  style={{
                    backgroundImage: `url("assets/skills/download.png")`,
                  }}
                /> */}
                <img
                  className="skill-item__img-wrap"
                  src="src/assets/skills/download.png"
                  alt=""
                />
              </div>
              <div className="skill-item__name">
                <h6 className=" text-[14px] font-[500]">HTML</h6>
              </div>
            </div>
            <div className="skill-item aos-init" data-aos="fade-up">
              <div className="skill-item__img mb-1">
                {/* <div
                  className="skill-item__img-wrap"
                  style={{
                    backgroundImage: `url("assets/skills/download.png")`,
                  }}
                /> */}
                <img
                  className="skill-item__img-wrap"
                  src="src/assets/skills/download.png"
                  alt=""
                />
              </div>
              <div className="skill-item__name">
                <h6 className=" text-[14px] font-[500]">HTML</h6>
              </div>
            </div>
            <div className="skill-item aos-init" data-aos="fade-up">
              <div className="skill-item__img mb-1">
                {/* <div
                  className="skill-item__img-wrap"
                  style={{
                    backgroundImage: `url("assets/skills/download.png")`,
                  }}
                /> */}
                <img
                  className="skill-item__img-wrap"
                  src="src/assets/skills/download.png"
                  alt=""
                />
              </div>
              <div className="skill-item__name">
                <h6 className=" text-[14px] font-[500]">HTML</h6>
              </div>
            </div>
            <div className="skill-item aos-init" data-aos="fade-up">
              <div className="skill-item__img mb-1">
                {/* <div
                  className="skill-item__img-wrap"
                  style={{
                    backgroundImage: `url("assets/skills/download.png")`,
                  }}
                /> */}
                <img
                  className="skill-item__img-wrap"
                  src="src/assets/skills/download.png"
                  alt=""
                />
              </div>
              <div className="skill-item__name">
                <h6 className=" text-[14px] font-[500]">HTML</h6>
              </div>
            </div>
          </div>
          {/* out of skill */}

          <hr className="seprate" />

          <h3 className="text-center mb-3 text-[30px] font-[700]">
            EDUCATION & EXPERIENCE
          </h3>

          <div className="resume">
            <div className="resume__edu aos-init" data-aos="fade-right">
              <div className="resume__edu__item">
                <div className="icon">
                  <i className="bx bxs-briefcase" />
                </div>
                <span className="time">2018</span>
                <h3>
                  Ly Thuong Kiet <span className="place">High School</span>{" "}
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maxime, mollitia delectus. Accusantium amet qui molestiae
                  eveniet? Cupiditate maiores obcaecati sed quos delectus rem
                  natus, quas harum odit explicabo quia eveniet!
                </p>
              </div>
              <div className="resume__edu__item">
                <div className="icon">
                  <i className="bx bxs-briefcase" />
                </div>
                <span className="time">2019-2021</span>
                <h3>
                  KOBE SUMIYOSHI INTERNATIONAL JAPANESE SCHOOL{" "}
                  <span className="place">Japanese Course</span>{" "}
                </h3>
                <p>
                  2019年4月から2021年3月まで神戸住吉国際日本語学校で日本語を勉強しました。
                </p>
              </div>
              <div className="resume__edu__item">
                <div className="icon">
                  <i className="bx bxs-briefcase" />
                </div>
                <span className="time">2021-2023</span>
                <h3>
                  Chuo Computer &amp; Communication College{" "}
                  <span className="place">IT WEB</span>{" "}
                </h3>
                <p>
                  学校で、Java言語やICT基礎などを学ぶ傍ら、授業以外でも独学でIT技術の学習を続けています。{" "}
                </p>
              </div>
            </div>
            <div className="resume__exp aos-init" data-aos="fade-left">
              <div className="resume__exp__item">
                <div className="icon">
                  <i className="bx bxs-briefcase" />
                </div>
                <span className="time">2022/2/26</span>
                <h3>
                  Presentation <span className="place">WEB Development</span>{" "}
                </h3>
                <p>
                  学校のプレゼンテーション大会に参加し、４人のチームでウェブサイトを作り、１年の技術部の2位を受賞することができました。
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
