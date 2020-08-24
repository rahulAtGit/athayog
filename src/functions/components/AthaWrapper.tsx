import React from "react";
import styled from "styled-components";

type TWrapper = {
  deviceWidth: number;
  isMobile: boolean;
  whyUsSrc: string;
  videoSrc: string;
};
const Wrapper = styled.div<TWrapper>`
  height: 100%;

  .m_cover {
    font-family: "Josefin Sans", sans-serif;
    width: 100%;
    height: 100%;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    font-family: "Josefin Sans", sans-serif;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__bg {
      position: absolute;
      background-image: url(${props => props.videoSrc});
      width: 100%;
      height: 100%;
      background-size: cover;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__text-layer {
      width: 100%;
      position: relative;
    }
    &__header {
      height: 124px;
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    &__logo {
      width: 100px;
      height: 100px;
      margin: 32px 0 0 52px;
      object-fit: contain;
      display: inline-block;
    }

    &__nav {
      width: 50%;
      display: flex;
      justify-content: space-evenly;
      font-size: 20px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }

    &__nav-links {
      color: #ffffff;
      text-decoration: none;
      text-align: center;
      padding: 24px;
      display: flex;
      align-items: center;
      opacity: 0.75;

      &:focus,
      &:hover {
        opacity: 1;
      }
    }

    &__overlay {
      width: 100%;

      height: 100%;
    }

    &__tagline {
      color: #e4efe3;
      font-size: 92px;
      width: 60%;
      letter-spacing: -2.64px;
      margin: 0 auto;
      text-align: center;
      margin-top: 160px;
    }
  }

  .m-about-us {
    background-color: #e0ebdf;
    width: 100%;
    padding: 12px;
    box-sizing: border-box;

    .m-a-u {
      &__header {
        color: #a19244;
        font-size: 64px;
        font-family: "Josefin Sans", sans-serif;
        font-weight: 500;
        text-align: center;
        margin-bottom: 0;
      }

      &__sub-header {
        letter-spacing: 2.24px;
        color: #414642;
        font-size: 20px;
        font-family: "Josefin Sans", sans-serif;
        text-align: center;
        margin-top: 0;
        font-weight: 500;
      }

      &__desc-block {
        font-size: 20px;
        color: #191919;
        width: 60%;
        margin: 40px auto 0 auto;
        text-align: center;
      }

      &__description {
        margin-top: 0;
        margin-bottom: 44px;
        font-weight: 300;
        font-family: "IBM Plex Sans", sans-serif;
        letter-spacing: 1px;

        &--no-bottom-margin {
          margin-bottom: 0;
        }
      }
    }
  }

  @keyframes loop {
    0% {
      transform: translate3d(0, 0, 0);
    }

    100% {
      transform: ${props =>
        props.isMobile
          ? `translate3d(${props.deviceWidth - 268 * 8}px, 0, 0);`
          : `translate3d(${props.deviceWidth - 288 * 8}px, 0, 0);`};
    }
  }
  .m-gallery {
    display: flex;
    justify-content: flex-start;
    background-color: #e0ebdf;
    padding-bottom: 52px;
    width: 100%;
    overflow: hidden;

    &__container {
      display: flex;
      animation-duration: 40s;
      animation-name: loop;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-timing-function: linear;
      transform-origin: left;
    }
    &__pic {
      width: 280px;
      height: 194px;
      border-radius: 5px;
      margin: 0 4px;
      box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
        0 2px 6px 2px rgba(60, 64, 67, 0.149);
    }
  }
  @import url(https://fonts.googleapis.com/css?family=Rye);

  body {
    background: #eee;
  }

  .banner {
    position: absolute;
    left: 50%;
    display: block;
    margin: 100px -200px;
    width: 400px;
    height: 60px;
    border: 1px solid #8a1;
    font: normal 30px/60px "Rye";
    text-align: center;
    color: #451;
    background: #9b2;
    border-radius: 4px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.15) inset,
      0 6px 10px rgba(0, 0, 0, 0.15);
  }

  .banner::before,
  .banner::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: -70px;
    top: 24px;
    display: block;
    width: 40px;
    height: 0px;
    border: 30px solid #9b2;
    border-right: 20px solid #791;
    border-bottom-color: #94b81e;
    border-left-color: transparent;
    transform: rotate(-5deg);
  }

  .banner::after {
    left: auto;
    right: -70px;
    border-left: 20px solid #791;
    border-right: 30px solid transparent;
    transform: rotate(5deg);
  }

  .m-why-us {
    width: 100%;
    background-size: cover;
    padding: 12px;
    box-sizing: border-box;
    background-image: url(${props => props.whyUsSrc});

    &__section {
      background-color: #81a57c;
      width: 26%;
      margin: 80px auto 40px 140px;
      padding: 20px;
      /* box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.25),
        0 2px 6px 2px rgba(60, 64, 67, 0.3);
      border-radius: 5px; */
    }

    &__header {
      font-size: 56px;
      font-family: "Josefin Sans", sans-serif;
      font-weight: 500;
      color: #e0ebdf;
      margin: 16px 0 24px 0;
    }

    &__desc {
      font-size: 16px;
      margin-top: 0;
      margin-bottom: 24px;
      font-weight: 300;
      font-family: "IBM Plex Sans", sans-serif;
      color: #e0ebdf;
      letter-spacing: 1px;
      line-height: 1.25;
    }
  }

  .m-enquiry {
    background-color: #375b5a;
    padding: 44px 24px 52px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    &--banner {
      width: calc(100% + 56px);
      position: relative;
      left: -52px;
      margin-bottom: 40px;
      padding: 44px 24px;

      .m-enquiry__header {
        color: #d9eede;
        color: #d2d4ae;
        /* font-weight: 400; */
        letter-spacing: 2px;
      }
    }
    &__header {
      letter-spacing: 1.7px;
      color: #f7f7f7;
      font-size: 44px;
      font-family: "Josefin Sans", sans-serif;
      font-weight: 300;
      margin: 0;

      &--highlight {
        letter-spacing: 1;
        text-shadow: 1px 1px #ac9939, 2px 2px #998833, 3px 3px #86772d,
          4px 4px #82742b, 5px 5px #7e702a, 6px 6px #7a6d29, 7px 7px #776928,
          8px 8px #736626, 9px 9px #6f6325, 10px 10px #6b5f24,
          10px 10px 30px rgba(0, 0, 0, 0.7);
      }
    }

    .parallax-banner {
      height: 48px !important;
    }

    &__border {
      display: none;
      width: 112px;
      height: 4px;
      background: #d9eede;
      background: #d2d4ae;
      position: absolute;
      top: -7px;
      left: -42px;
      transform: rotate(-45deg);
      transform-origin: right;

      &--above {
        width: 80px;
      }

      &--right {
        right: -36px;
        left: auto;
        transform: rotate(45deg);
        transform-origin: left;
      }
    }

    &__sub-header {
      letter-spacing: 1.55px;
      color: #d2d4ae;
      font-size: 16px;
      margin-top: 0;
      margin-bottom: 48px;
      font-weight: 200;
      font-family: "IBM Plex Sans", sans-serif;
    }

    &__input-box {
      position: relative;
      width: 242px;

      &--margin-top {
        margin-top: 24px;
      }
      &--margin-sides {
        margin: 0 12px;
      }

      &--full-width {
        width: 100%;
        height: 100px;
      }
    }
    &__input-label {
      position: absolute;
      font-size: 16px;
      font-weight: 400;
      max-width: calc(100% - (2 * 8px));
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      left: 8px;
      top: -8px;
      padding: 0 8px;
      transition: 250ms;
      user-select: none;
      pointer-events: none;
      color: #d2d4ae;
      z-index: 1;
      background: #375b5a;
      outline: none;
      font-family: "Josefin Sans", sans-serif;
      font-weight: 300;
    }
    &__inputs {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: calc(60% + 24px);
    }
    &__submit-wrapper {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 32px auto 0 auto;
    }
    &__submit {
      margin: 0 0 0 34px;
      color: #414642;
      background-color: #d2d4ae;
      width: 147px;
      height: 38px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      border-radius: 4px;
      font-weight: 400;
      font-family: "IBM Plex Sans", sans-serif;
      letter-spacing: 1.4px;
      cursor: pointer;
      outline: none;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4),
        0 1px 3px 1px rgba(0, 0, 0, 0.4);

      &:hover {
        background-color: #a9ad93;
      }

      &--disabled {
        cursor: default;
        opacity: 0.6;

        &:hover {
          background-color: #d2d4ae;
        }
      }
    }
    .MuiCircularProgress-colorPrimary {
      margin: 0 8px;
      color: #2b5c5a;
      color: #d1d5a9;
      display: inline-block;
      visibility: hidden;

      &--show-loader {
        visibility: visible !important;
      }
    }

    &__action-info {
      letter-spacing: 1px;
      color: #d2d4ae;
      font-size: 14px;
      margin-top: 4px;
      margin-bottom: 0;
      font-weight: 200;
      font-family: "IBM Plex Sans", sans-serif;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
      background-color: transparent !important;
    }
    &__input {
      box-sizing: border-box;
      height: 50px;
      width: 100%;
      border-radius: 4px;
      border: 2px solid #ffffff;
      padding: 13px 15px;
      background-color: transparent !important;
      color: #d2d4ae;
      font-size: 20px;

      &:-internal-autofill-selected {
        background-color: transparent !important;
      }
      &:focus {
        outline: none;
      }

      &--text-area {
        height: 100px;
      }
    }
  }

  .m-footer {
    display: flex;
    justify-content: space-between;
    background-color: #e0ebdf;
    padding: 60px 52px 8px 52px;
    flex-direction: column;

    .m-about-team {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 40px;

      &__header {
        font-size: 36px;
        margin: 0;
        color: #a19244;
        margin-bottom: 12px;
        font-family: "Josefin Sans", sans-serif;
        font-weight: 500;
        display: flex;
        flex-direction: column;
        align-items: center;

        .header__underline {
          margin-bottom: 32px;
          display: inline-block;
          width: 90%;
          height: 1px;
          background-color: #becbc0;
        }
      }
      &__cards-wrapper {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
      &__card {
        color: #616e4c;
        background-color: #e9ede9e0;
        border-radius: 10px;
        font-weight: 400;
        font-size: 15px;
        font-family: "IBM Plex Sans", sans-serif;
        letter-spacing: 1.5px;
        line-height: 1.2;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2),
          0 1px 3px 1px rgba(0, 0, 0, 0.2);
        display: flex;
        width: 49%;
      }
      &__img {
        width: 35%;
        border-radius: 10px 0 0 10px;
        overflow: hidden;

        &--sharath {
          img {
            transform: scale(1.9) translate(-11px, 28px);
          }
        }
        &--neeraj {
          img {
            transform: scale(2) translate(15px, 33px);
          }
        }
      }
      img {
        width: 100%;
      }
      &__desc-content {
        width: 62%;
        padding: 10px;
        box-sizing: border-box;
      }
      &__title {
        font-family: "Josefin Sans", sans-serif;
        font-weight: 500;
        font-size: 22px;
        color: #616e4c;
      }
      &__desc {
      }
    }

    &__contact-us {
      display: flex;
      justify-content: space-between;
    }
    &__address {
      display: flex;
      flex-direction: column;
      width: 32%;
      /* margin-bottom: 40px; */
    }
    &__address-logo {
      width: 80px;
      height: 80px;
      display: inline-block;
      margin: 0 0 40px 0;
    }
    &__address-header {
      font-size: 32px;
      color: #4e4e4e;
      font-family: "Josefin Sans", sans-serif;
      font-weight: 300;
      margin: 0 0 16px 0;
    }
    &__address-desc {
      font-size: 20px;
      font-family: "Josefin Sans", sans-serif;
      font-weight: 300;
      color: #4e4e4e;
      line-height: 1.2;

      &--separator {
        margin-bottom: 12px;
        display: block;
      }
    }
    &__map {
      width: 34%;
      border-radius: 5px;
      box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
        0 2px 6px 2px rgba(60, 64, 67, 0.149);
    }
    &__social {
      display: flex;
      justify-content: center;
      margin-top: 80px;
      margin-top: 0;
      justify-content: flex-start;
      font-size: 24px;
      font-size: 32px;
      color: #4e4e4e;
      font-family: "Josefin Sans", sans-serif;
      font-weight: 300;
      align-items: flex-end;
      height: 40px;
    }

    &__social-links {
      width: 36px;
      height: 36px;
      /* opacity: 0.8; */

      img {
        width: 100%;
      }

      &:hover {
        opacity: 1;
      }
    }
  }

  .m-copy {
    font-size: 12px;
    margin: 52px 0 0 0;
    display: flex;
    text-align: center;
    justify-content: center;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 300;
    color: #4e4e4e;
  }

  #dd {
    height: 100%;
  }

  #md {
    height: 100%;
    .m_cover {
      &__header {
        height: 84px;
      }

      &__logo {
        margin: 12px 8px;
        width: 72px;
        height: 72px;
      }

      &__nav {
        width: 75%;
        font-size: 12px;
        letter-spacing: 0.2px;
      }

      &__nav-links {
        padding: 2px;
        opacity: 0.6;
        font-size: 20px;
      }

      &__overlay {
      }

      &__tagline {
        font-size: 42px;
        width: 90%;
        margin-top: 185px;
        font-weight: 500;
      }

      &__menu-overlay {
        pointer-events: none;
        opacity: 0;
        width: 100%;
        height: 800px;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
      }
      &__menu {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        z-index: 1;

        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        /* padding-bottom: calc(100vh - 180px); */
        padding: 8px;
        background-color: #e0ebdf;

        transform: scale(0.95);
        transform-origin: 100% 0;
        opacity: 0;
        pointer-events: none;
        transition: 250ms;
        transition-property: transform, opacity;

        display: inline-flex;
        color: rgb(55 91 90 / 0.99);
        line-height: 1;
        width: 152px;
        border-radius: 4px;
        margin: 20px 16px 16px auto;
        box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25),
          0 30px 60px -30px rgba(0, 0, 0, 0.3);

        .menu {
          &__close {
            display: flex;
            justify-content: flex-end;
            align-self: flex-end;
            padding: 0 0 0 8px;
            display: inline;

            svg {
              position: relative;
              top: 4px;
              right: 4px;
              opacity: 0.8;
            }
          }
          &__list {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          &__item {
            padding: 4px;
          }
        }
      }
      &__mobile-nav {
        width: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #e1f0e2;
        font-size: 24px;

        &--show {
          .m_cover__menu-overlay {
            pointer-events: auto;
            opacity: 1;
          }
          .m_cover__menu {
            transform: scale(1);
            opacity: 1;
            pointer-events: auto;

            .menu {
              &__close {
              }
              &__list {
              }
              &__item {
              }
            }
          }
        }
        .m_cover__nav-links {
          color: rgb(55 91 90 / 0.99);
          font-weight: 300;
          opacity: 1;
        }
      }
    }

    .m-about-us {
      height: auto;
      .m-a-u {
        &__header {
        }

        &__sub-header {
        }

        &__desc-block {
          font-size: 16px;
          color: #191919c9;
          width: 90%;
        }

        &__description {
          margin-bottom: 36px;

          &--no-bottom-margin {
          }
        }
      }
    }

    .m-gallery {
      &__container {
        animation-duration: 28s;
      }
      &__pic {
        width: 260px;
        height: 180px;
      }
    }

    .m-why-us {
      &__section {
        width: 80%;
        margin: 10% auto;
      }

      &__header {
      }

      &__desc {
      }
    }

    .m-enquiry {
      &__header {
        font-size: 32px;
        text-align: center;
      }

      &--banner {
        box-sizing: border-box;
        width: calc(100% + 24px);
        left: 0px;
      }

      &__sub-header {
        margin-bottom: 36px;
      }

      &__input-box {
        margin-bottom: 24px;
        width: auto;

        &--margin-top {
          margin-top: 0;
        }
      }
      &__input-label {
      }
      &__inputs {
        flex-direction: column;
        width: auto;
      }
      &__submit-wrapper {
        margin: 8px auto 0 auto;
      }
      &__submit {
        margin: 0 0 0 34px;
      }
      &__input {
        &--text-area {
          height: 92px;
        }
        &:focus {
        }
      }
    }

    .m-footer {
      padding: 32px 12px 8px 12px;
      align-items: center;
      width: 100%;
      box-sizing: border-box;

      .m-about-team {
        &__header {
          .header__underline {
          }
        }
        &__cards-wrapper {
          width: 100%;
          flex-wrap: wrap;
          justify-content: space-around;
        }
        &__card {
          width: 100%;
          flex-direction: column;
          margin-bottom: 32px;
          line-height: 1.3;
          max-width: 360px;
          margin: 0 6px 8px 0;
        }
        &__img {
          width: 100%;
          height: 240px;
          border-radius: 10px 10px 0 0px;
          object-fit: cover;
          &--sharath {
            img {
              transform: scale(1.2) translate(-11px, -28px);
            }
          }
          &--neeraj {
            img {
              transform: scale(1.2) translate(-13px, -35px);
            }
          }
        }
        img {
          width: 100%;
        }
        &__desc-content {
          width: 100%;
        }
        &__title {
        }
        &__desc {
        }
      }

      &__contact-us {
        flex-direction: column;
      }
      &__address {
        width: 100%;
        margin-bottom: 32px;
        align-items: center;
      }
      &__address-logo {
      }
      &__address-header {
      }
      &__address-desc {
        text-align: center;
      }
      &__map {
        width: 100%;
      }
      &__social {
      }

      &__social-links {
      }
    }
    .m-copy {
      margin: 32px 0 0 0;
    }
  }
`;

const AthaWrapper: React.FC<{
  deviceWidth: number;
  isMobile: boolean;
  whyUsSrc: string;
  videoSrc: string;
}> = props => {
  return (
    <Wrapper
      deviceWidth={props.deviceWidth}
      isMobile={props.isMobile}
      whyUsSrc={props.whyUsSrc}
      videoSrc={props.videoSrc}
    >
      {props.children}
    </Wrapper>
  );
};

export default AthaWrapper;
