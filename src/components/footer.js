import React from "react";

import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitch,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const FooterMenu = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column; /* make main axis vertical */
  justify-content: center; /* center items vertically, in this case */
  align-items: center; /* center items horizontally, in this case */
  flex-shrink: 0;
  background-color: #000;
  color: #fff;
  overflow: hidden;
  div {
    padding: 0.5rem;
    margin-bottom: 1.4rem;
  }
  .social_items {
    text-align: center;
    ::after {
      content: "";
      display: flex;
      flex-direction: row;
      width: 75%;
      margin: 0 auto;
      bottom: 0;
      height: 0.2rem;
      border: 0;
      background-color: #f5cd80;
      background: -webkit-gradient(
        linear,
        0 0,
        100% 0,
        from(transparent),
        to(transparent),
        color-stop(50%, #f5cd80)
      );
    }
    h4 {
      margin: 0.9rem;
    }
    a {
      color: #fff;
      padding: 1rem;
      margin: 0.7rem;
      @media (max-width: 920px) {
        padding: 0.5rem;
        margin: 0.5rem;
      }
    }
  }
`;

const Footer = () => (
  <>
    <FooterMenu>
      <div className="social_items">
        <h4>Let's get social</h4>
        <a href="https://www.facebook.com/TritonPoker/" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com/tritonpoker">
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/tritonpokerseries/"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a href="https://www.twitch.tv/tritonpoker" aria-label="Twitch">
          <FaTwitch />
        </a>
        <a href="https://www.youtube.com/tritonpoker" aria-label="YouTube">
          <FaYoutube />
        </a>
      </div>
      <div>Triton Poker 2020 ©</div>
    </FooterMenu>
  </>
);

export default Footer;
