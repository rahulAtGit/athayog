import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import { Context as ResponsiveContext } from "react-responsive";
import { CircularProgress } from "@material-ui/core";
import dynamic from "next/dynamic";
import WrapperHeadAtha from "../components/WrapperHeadAtha";
const dynamicLoadConfig = {
  loading: () => (
    <div className="initila-loader-wrapper">
      <div className="m-about-us" id="about-us">
        <h1 className="m-a-u__header">ATHAYOG</h1>
        <h3 className="m-a-u__sub-header">A Holistic Yogic Living</h3>
        <div className="m-a-u__desc-block">
          <p className="m-a-u__description m-a-u__description--no-bottom-margin">
            At AthaYog, our Yog (Yoga) studio embodies a sacred space; an oasis
            of knowledge and truth, where the soul experiences transformation,
            and one is in the pursuit for higher living.
          </p>
          <p className="m-a-u__description">
            When you embrace a holistic, Yogic lifestyle, there is a need to
            gain the right flow of knowledge that can mould you into this way of
            life. By encouraging you to -
          </p>
          <p className="m-a-u__description">
            Walk the four paths of Yog (Yoga) - Karma Yog, Bhakti Yog, Jnana
            Yog, Raja Yog
          </p>
          <p className="m-a-u__description">
            Become aware of the subtler levels or your Pancha Koshas – Annamaya
            kosha, Pranamaya kosha,Manamaya kosha, Vijnanamaya kosha, Anandamaya
            kosha,
          </p>
          <p className="m-a-u__description">
            Reduce Tamas, conserve Rajas, and enrich Sattva, we empower you to
            transcend the dimensions of your being, inspiring you to live better
            as a Yogi.
          </p>
          <p className="m-a-u__description">
            Our intention is to educate and illuminate anyone who comes to us,
            seeking a clear direction to spiritual fulfillment. Through
            transformational tools, we pass the torch to you for reconnecting
            with your true nature.
          </p>
        </div>
      </div>
      <div className="initila-loader">
        <CircularProgress color="inherit" size={60} thickness={3.6} />
      </div>
    </div>
  ),
  ssr: false
};
const AthaMain = dynamic(
  () => import("../components/AthaMain"),
  dynamicLoadConfig
);
const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        line-height: 1.15;
        background-color: #e0ebdf;
      #__next {
        height: 100%;
        font-size: 0;
      }
    }
    /* .parallax-banner-layer-0 {
      top: unset !important;
      right: unset !important;
      bottom: unset !important;
      left: unset !important;
      position: relative !important;
      overflow: hidden !important;
      width: 100% !important;
      height: 100% !important;
    } */
    .initila-loader {
      height: calc(100vh - 148px);
      height: calc(100% - 148px);
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 100%;
      z-index: 5;
      background-color: rgb(224, 235, 223);
    }
    .bg-img {
      visibility: hidden;
      width: 0;
      height: 0;
    }
    .MuiCircularProgress-circleIndeterminate {
      color: #a19244;
    }
  }
`;

const Atha = () => {
  const [w, setW] = useState(500);
  useEffect(() => {
    setW(window.innerWidth);
    console.log(window.innerWidth);

    setTimeout(() => {
      // @ts-ignore
      window.dataLayer = window.dataLayer || [];
      // @ts-ignore
      function gtag() {
        // @ts-ignore
        dataLayer.push(arguments);
      }
      // @ts-ignore
      gtag("js", new Date());
      // @ts-ignore
      gtag("config", "UA-172060828-1");

      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyCwCtD7on5EArSBHSpEza2NX6Ay-xE-9Wg",
        authDomain: "athayog-e4ff7.firebaseapp.com",
        databaseURL: "https://athayog-e4ff7.firebaseio.com",
        projectId: "athayog-e4ff7",
        storageBucket: "athayog-e4ff7.appspot.com",
        messagingSenderId: "442437570691",
        appId: "1:442437570691:web:465dba8c7a6ca1d4030bb6",
        measurementId: "G-0C9X11NLF1"
      };
      // Initialize Firebase
      // @ts-ignore
      firebase.initializeApp(firebaseConfig);
      // @ts-ignore
      firebase.analytics();
    });
  }, []);
  return (
    <ResponsiveContext.Provider value={{ width: w }}>
      <GlobalStyle />
      <img
        src={`${
          w > 1023
            ? "/assets/atha/cover1.png"
            : "/assets/atha/cover1-mobile.png"
        }`}
        className="bg-img"
      />
      <AthaMain deviceWidth={w} />
      <WrapperHeadAtha />
    </ResponsiveContext.Provider>
  );
};

export default Atha;
