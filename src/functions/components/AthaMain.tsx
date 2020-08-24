import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useMediaQuery } from "react-responsive";
import Head from "next/head";
import {
  ParallaxProvider,
  Parallax,
  ParallaxBanner
} from "react-scroll-parallax";
import Form, { useForm } from "antd/lib/form/Form";
import Input from "antd/lib/input/Input";
import FormItem from "antd/lib/form/FormItem";
import AthaWrapper from "../components/AthaWrapper";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import TextArea from "antd/lib/input/TextArea";

const Enquire = (props: { isTabletOrMobile: boolean }) => {
  type TUserDetails = {
    name?: string;
    email?: string;
    phone?: string;
    comments?: string;
  };
  const initialValues = {
    phone: "+91"
  };
  const actionInfos = [
    "We'll get in touch with you soon.",
    "Please enter a valid Name",
    "Please enter a valid Email",
    "Please enter a valid Phone number"
  ];
  const [form] = useForm();
  const [actionInfo, setActionInfo] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const onReset = () => {
    form.resetFields();
  };
  const onFinish = (details: TUserDetails) => {
    if (!details.name) {
      setActionInfo(actionInfos[1]);
    } else if (!details.email) {
      setActionInfo(actionInfos[2]);
      // } else if (!details.phone || details.phone === initialValues.phone) {
      // setActionInfo(actionInfos[3]);
    } else {
      setShowLoader(true);
      var bodyFormData = new FormData();
      bodyFormData.set("name", details.name);
      bodyFormData.set("email", details.email);
      details.phone &&
        details.phone !== initialValues.phone &&
        bodyFormData.set("phone", details.phone);
      details.comments && bodyFormData.set("comments", details.comments);
      console.log(bodyFormData);
      axios({
        method: "post",
        url: "https://api.formcubes.com/reg/v1/s/reg_iqef10kchnfxb9",
        // url: "https://api.formcubes.com/reg/v1/s/reg_iqef10kc9gbg8g",
        // url: "https://formsubmit.co/nikitharahul07@gmail.com",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" }
      })
        .then(function(response) {
          //handle success
          console.log(response);
          setActionInfo(actionInfos[0]);
          onReset();
          setShowLoader(false);
        })
        .catch(function(response) {
          //handle error
          console.log(response);
          setActionInfo(actionInfos[0]);
          onReset();
          setShowLoader(false);
        });
    }
  };
  return (
    <>
      <Form
        name="enquire"
        className="m-enquiry login-form"
        onFinish={onFinish}
        initialValues={initialValues}
        onFieldsChange={() => {
          setActionInfo("");
        }}
        id="enquire"
        form={form}
        method="post"
        action="https://formsubmit.co/nikitharahul07@gmail.com"
      >
        <h2 className="m-enquiry__header">HAVE AN ENQUIRY?</h2>
        {/* <h2 className="m-enquiry__sub-header">We are just one mail away</h2> */}
        <h2 className="m-enquiry__sub-header">We're just a message away</h2>
        <div className="m-enquiry__inputs">
          <div className="m-enquiry__input-box">
            <FormItem
              name="name"
              label={
                <label className="m-enquiry__input-label">
                  Name <span>*</span>
                </label>
              }
            >
              <Input type="text" className="m-enquiry__input" />
            </FormItem>
          </div>
          <div
            className={`m-enquiry__input-box ${
              props.isTabletOrMobile ? "" : "m-enquiry__input-box--margin-sides"
            }`}
          >
            <FormItem
              name="email"
              label={
                <label className="m-enquiry__input-label">
                  Email <span>*</span>
                </label>
              }
            >
              <Input type="email" className="m-enquiry__input" />
            </FormItem>
          </div>
          <div className="m-enquiry__input-box">
            <FormItem
              name="phone"
              label={
                <label className="m-enquiry__input-label">Phone no.</label>
              }
            >
              <Input type="tel" className="m-enquiry__input" />
            </FormItem>
          </div>
          <div className="m-enquiry__input-box m-enquiry__input-box--full-width m-enquiry__input-box--margin-top">
            <FormItem
              name="comments"
              label={
                <label className="m-enquiry__input-label">
                  Ask us anything
                </label>
              }
            >
              <TextArea className="m-enquiry__input m-enquiry__input--text-area" />
            </FormItem>
          </div>
        </div>
        <div className={`m-enquiry__submit-wrapper`}>
          <button className={`m-enquiry__submit`} type="submit">
            ENQUIRE NOW
          </button>
          <CircularProgress
            className={`${
              showLoader ? "MuiCircularProgress-colorPrimary--show-loader" : ""
            }`}
            size={18}
          />
        </div>
        {actionInfo && (
          <span className={`m-enquiry__action-info`}>{actionInfo}</span>
        )}
      </Form>
      {/* <form
        id="enquire"
        method="POST"
        action="https://formsubmit.co/nikitharahul07@gmail.com"
        target="_blank"
      >
        <input
          type="email"
          className="m-enquiry__input"
          id="enquire_email"
          value="rahul.rvce.is@gmail.com"
          name="email"
        />
        <input
          type="tel"
          className=" m-enquiry__input"
          id="enquire_phone"
          value="08123735147"
          name="phone"
        />
        <input
          type="';"
          className="m-enquiry__input"
          id="enquire_name"
          value="Rahul R"
          name="name"
        />
        <button className="m-enquiry__submit" type="submit">
          ENQUIRE NOW
        </button>
      </form>
      <iframe name="my-iframe" src="iframe.php"></iframe> */}
    </>
  );
};

const AthaMain: React.FC<{ deviceWidth: number }> = props => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  const videoSrc =
    isTabletOrMobile === true
      ? `/assets/atha/cover1-mobile.png`
      : "/assets/atha/cover1.png";
  const whyUsSrc =
    isTabletOrMobile === true
      ? `/assets/atha/why-us.png`
      : "/assets/atha/why-us.png";
  useEffect(() => {
    const elm = document.querySelector(".m_cover__bg");
    window.addEventListener("scroll", function() {
      const distance = window.scrollY;
      // @ts-ignore
      elm.style.transform = `translate3d(0, ${distance * 0.7}px, 0)`;
    });
  }, []);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <ParallaxProvider scrollAxis="vertical">
      <AthaWrapper
        isMobile={isTabletOrMobile}
        deviceWidth={props.deviceWidth}
        whyUsSrc={whyUsSrc}
        videoSrc={videoSrc}
      >
        <div id={isTabletOrMobile ? "md" : "dd"}>
          <div className="m_cover">
            <div className="m_cover__bg"></div>
            <div className="m_cover__text-layer">
              <div className="m_cover__header">
                <img
                  src="/assets/atha/atha_logo.png"
                  className="m_cover__logo"
                  alt="Atha Yog"
                ></img>
                {isTabletOrMobile ? (
                  <div
                    className={`m_cover__mobile-nav ${
                      showMenu ? "m_cover__mobile-nav--show" : ""
                    }`}
                  >
                    <MenuIcon
                      onClick={e => {
                        setShowMenu(true);
                        e.stopPropagation();
                      }}
                    />
                    <div
                      className="m_cover__menu-overlay"
                      onClick={e => {
                        setShowMenu(false);
                        e.stopPropagation();
                      }}
                    >
                      <div
                        className="m_cover__menu"
                        onClick={e => {
                          setShowMenu(true);
                          e.stopPropagation();
                        }}
                      >
                        <div
                          className="menu__close"
                          onClick={e => {
                            setShowMenu(false);
                            e.stopPropagation();
                          }}
                        >
                          <CloseIcon />
                        </div>
                        <ul className="menu__list">
                          <li
                            className="menu__item"
                            onClick={e => {
                              setShowMenu(false);
                              e.stopPropagation();
                            }}
                          >
                            <a
                              className="m_cover__nav-links"
                              href="#about-us"
                              onClick={e => {
                                setShowMenu(false);
                                e.stopPropagation();
                              }}
                            >
                              About
                            </a>
                          </li>
                          <li className="menu__item">
                            <a
                              className="m_cover__nav-links"
                              href="#enquire"
                              onClick={e => {
                                setShowMenu(false);
                                e.stopPropagation();
                              }}
                            >
                              Enquire
                            </a>
                          </li>
                          <li className="menu__item">
                            <a
                              className="m_cover__nav-links"
                              href="#footer"
                              onClick={e => {
                                setShowMenu(false);
                                e.stopPropagation();
                              }}
                            >
                              Team
                            </a>
                          </li>
                          <li className="menu__item">
                            <a
                              className="m_cover__nav-links"
                              href="#contact-us"
                              onClick={e => {
                                setShowMenu(false);
                                e.stopPropagation();
                              }}
                            >
                              Contact Us
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="m_cover__nav">
                    <a className="m_cover__nav-links" href="#about-us">
                      About
                    </a>
                    <a className="m_cover__nav-links" href="#enquire">
                      Enquire
                    </a>
                    <a className="m_cover__nav-links" href="#footer">
                      Team
                    </a>
                    <a className="m_cover__nav-links" href="#contact-us">
                      Contact Us
                    </a>
                  </div>
                )}
              </div>
              <h1 className="m_cover__tagline">A SANCTUM FOR THE SPIRIT</h1>
            </div>
          </div>

          <div className="m-about-us" id="about-us">
            <h1 className="m-a-u__header">ATHAYOG</h1>
            <h3 className="m-a-u__sub-header">A Holistic Yogic Living</h3>
            <div className="m-a-u__desc-block">
              <p className="m-a-u__description m-a-u__description--no-bottom-margin">
                At AthaYog, our Yog (Yoga) studio embodies a sacred space; an
                oasis of knowledge and truth, where the soul experiences
                transformation, and one is in the pursuit for higher living.
              </p>
              <p className="m-a-u__description">
                When you embrace a holistic, Yogic lifestyle, there is a need to
                gain the right flow of knowledge that can mould you into this
                way of life. By encouraging you to -
              </p>
              <p className="m-a-u__description">
                Walk the four paths of Yog (Yoga) - Karma Yog, Bhakti Yog, Jnana
                Yog, Raja Yog
              </p>
              <p className="m-a-u__description">
                Become aware of the subtler levels or your Pancha Koshas –
                Annamaya kosha, Pranamaya kosha,Manamaya kosha, Vijnanamaya
                kosha, Anandamaya kosha,
              </p>
              <p className="m-a-u__description">
                Reduce Tamas, conserve Rajas, and enrich Sattva, we empower you
                to transcend the dimensions of your being, inspiring you to live
                better as a Yogi.
              </p>
              <p className="m-a-u__description">
                Our intention is to educate and illuminate anyone who comes to
                us, seeking a clear direction to spiritual fulfillment. Through
                transformational tools, we pass the torch to you for
                reconnecting with your true nature.
              </p>
            </div>
          </div>
          <div className="m-gallery">
            <div className="m-gallery__container">
              <img
                className="m-gallery__pic"
                src="/assets/atha/gallery8.jpg"
                alt="Atha Yog"
              ></img>
              <img
                className="m-gallery__pic"
                src="/assets/atha/gallery7.jpg"
                alt="Atha Yog"
              ></img>
              <img
                className="m-gallery__pic"
                src="/assets/atha/gallery1.png"
                alt="Atha Yog"
              ></img>
              <img
                className="m-gallery__pic"
                src="/assets/atha/gallery6.jpg"
                alt="Atha Yog"
              ></img>
              <img
                className="m-gallery__pic"
                src="/assets/atha/gallery4.png"
                alt="Atha Yog"
              ></img>
              <img
                className="m-gallery__pic"
                src="/assets/atha/gallery5.jpg"
                alt="Atha Yog"
              ></img>
              <img
                className="m-gallery__pic"
                src="/assets/atha/gallery2.png"
                alt="Atha Yog"
              ></img>
              <img
                className="m-gallery__pic"
                src="/assets/atha/gallery3.png"
                alt="Atha Yog"
              ></img>
            </div>
          </div>
          <div className="m-why-us">
            <div className="m-why-us__section">
              <h2 className="m-why-us__header">WHY US</h2>

              <p className="m-why-us__desc">
                With the introduction of authentic, primordial practices and
                philosophies into the modern-day reality, we have rewoven the
                fabric of Yog in today’s world. Our learnings have led us into
                the cosmos of this ancient Indian wisdom.
              </p>
              <p className="m-why-us__desc">
                We impart this wisdom by guiding you through: Traditional Hatha
                Yog practices including Asanas, Pranayama to equip you for
                higher Yogic Sadhana, Hatha Vinyasa to work on the body and
                breath harmony, Pranayama and Meditation to dwell deeper into
                our subtler levels, Bhajans, Keerthans, Lecture and Satsangs to
                accelerate your transformation.
              </p>
              <p className="m-why-us__desc">
                We hope to retain the roots of this Yogic knowledge with an
                interplay of the four paths of Yog, the Pancha Koshas, and the
                Gunas.
              </p>
            </div>
          </div>
          <Enquire isTabletOrMobile={isTabletOrMobile} />
          <div className="m-footer" id="footer">
            <div className="m-about-team" id="about-team">
              <h2 className="m-about-team__header">
                MEET THE TEAM
                <span className="header__underline"></span>
              </h2>
              <div className="m-about-team__cards-wrapper">
                <div className="m-about-team__card">
                  <div className="m-about-team__img m-about-team__img--sharath">
                    <img src="/assets/atha/sharath.jpg" />
                  </div>
                  <div className="m-about-team__desc-content">
                    <div className="m-about-team__title">
                      Sharath Basavaraju
                    </div>
                    <div className="m-about-team__desc">
                      <p>
                        Even as an idea still shaping up, AthaYog’s purpose was
                        clear. Sharath was certain that the faith in Yog had to
                        be restored. As a young teenager, he was intrigued by
                        his grandfather’s Sadhana. He found inspiration in his
                        grandfather’s discipline and perseverance; traits that
                        he would acquire himself in the years to come.
                      </p>
                      <p>
                        His initiation into the world of Yog led him under Swami
                        Satyananda Saraswati's teachings from Bihar School of
                        Yoga, and a formal Yogic education from Swami
                        Vivekananda Yoga Anusandhana Samsthana. With the
                        blessings of his gurus, his Yog practice evolved into a
                        way of being. His intent is to share these learnings and
                        guide people on their journey towards transformation
                        with consistent, directed, and self-motivated effort.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="m-about-team__card">
                  <div className="m-about-team__img m-about-team__img--neeraj">
                    <img src="/assets/atha/neeraj.jpg" />
                  </div>
                  <div className="m-about-team__desc-content">
                    <div className="m-about-team__title">Neeraj Raju</div>
                    <div className="m-about-team__desc">
                      <p>
                        Way before AthaYog became a reality, Neeraj was grounded
                        with a strong sense of integrity to spread the ancient
                        knowledge of Yog for what it is. It all started with the
                        realization that he is connected to all beings around
                        him; a humbling life lesson that stayed with him. This
                        shift in perception and reality, allowed him to rise
                        beyond his capabilities and inhibitions, beginning his
                        Yogic journey from the Akshar Power Yoga Academy.
                      </p>
                      <p>
                        With eternal gratitude to Grand Master Akshar, Master
                        Bindhu Madhvi, Swami Prabhupada, and Maharishi Patanjali
                        for their invaluable lessons, he intends to share
                        ancient wisdom with the world. By aligning with the
                        knowledge gained from his gurus and Yogic scriptures, he
                        aspires to retain the true meaning of Yog without losing
                        grip on its essence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <Parallax y={["100px", "-100px"]}> */}
            <div className="m-enquiry m-enquiry--banner">
              <div className="m-enquiry__border m-enquiry__border--above"></div>
              <div className="m-enquiry__border"></div>
              <Parallax
                y={isTabletOrMobile ? ["180px", "-24px"] : ["60px", "-24px"]}
              >
                <h2 className="m-enquiry__header">
                  PROGRAMS {isTabletOrMobile && <br />} AND
                  {isTabletOrMobile && <br />} COURSES COMING SOON...
                </h2>
              </Parallax>
            </div>
            {/* <div className="m-enquiry m-enquiry--banner">
              <ParallaxBanner
                layers={[
                  {
                    children: (
                      <h2 className="m-enquiry__header">
                        COURSES AND PROGRAMS COMING SOON...
                      </h2>
                    ),
                    amount: -0.3
                  }
                ]}
              >
                <h1>Banner Children</h1>
              </ParallaxBanner>
              <div className="m-enquiry__border m-enquiry__border--right m-enquiry__border--above"></div>
              <div className="m-enquiry__border m-enquiry__border--right"></div>
            </div> */}
            <div className="m-footer__contact-us" id="contact-us">
              <div className="m-footer__address">
                <img
                  src="/assets/atha/logo_address.png"
                  className="m-footer__address-logo"
                ></img>
                <div className="m-footer__address-header">REACH US</div>
                <div className="m-footer__address-desc">
                  <span>AthayogLiving 307, Sunrise Arcade,</span>
                  <span>
                    <br />
                    Devasandra Main Road,
                  </span>
                  <span>
                    <br />
                    Kodigehalli K R Puram,
                  </span>
                  <span className="m-footer__address-desc--separator">
                    Bangalore- 560036
                  </span>
                  <span>info@athayogliving.com</span>
                  <span>
                    <br />
                    +91 9900092733
                  </span>
                  <span>
                    <br />
                    +91 9741010750
                  </span>
                </div>
                <div className="m-footer__social">
                  {/* Follow us - */}
                  <a
                    className="m-footer__social-links"
                    href="https://instagram.com/atha.yog?igshid=1dfscb5ijtefg"
                    target="_blank"
                  >
                    <img
                      className="m-footer__social-logo"
                      src="/assets/atha/instagram.png"
                    ></img>
                  </a>
                </div>
              </div>
              <div className="m-footer__map">
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.741198986447!2d77.61924415!3d12.91187995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14fdb33194f9%3A0x96b2591ae30444c6!2s122%2C%202nd%20Cross%20Rd%2C%20BTM%202nd%20Stage%2C%20Kuvempu%20Nagar%2C%20Stage%202%2C%20BTM%20Layout%2C%20Bengaluru%2C%20Karnataka%20560076!5e0!3m2!1sen!2sin!4v1592862041121!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  frameBorder={0}
                  style={{
                    border: 0,
                    height: "100%",
                    width: "100%",
                    borderRadius: "5px"
                  }}
                  allowFullScreen={false}
                  tabIndex={0}
                ></iframe> */}
                <iframe
                  // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d485.9357581807971!2d77.71476799917869!3d13.00468935948864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11291dc28c27%3A0xd39ba6332f2b865c!2sAtha%20Yog!5e0!3m2!1sen!2sin!4v1594150257983!5m2!1sen!2sin"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4893399853977!2d77.71363161482236!3d13.00448039083435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzE2LjEiTiA3N8KwNDInNTcuMCJF!5e0!3m2!1sen!2sin!4v1596445848920!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  frameBorder={0}
                  style={{
                    border: 0,
                    height: "100%",
                    width: "100%",
                    borderRadius: "5px"
                  }}
                  allowFullScreen={false}
                  tabIndex={0}
                ></iframe>
              </div>
            </div>
            <h5 className="m-copy">Copyright All Rights Reserved © 2020</h5>
          </div>
          <Head>
            <link
              href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;500&display=swap"
              rel="stylesheet"
            ></link>
            <link
              href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;300;400&display=swap"
              rel="stylesheet"
            ></link>
          </Head>
        </div>
      </AthaWrapper>
    </ParallaxProvider>
  );
};

export default AthaMain;
