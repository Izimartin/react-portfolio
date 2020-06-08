/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Container from "../Global/Container";

const Hero = () => (
  <section className="hero" css={styles}>
    <Navbar />
    <Container>
      <div className="heroContent">
        <div className="heroHeading">
          <h2>Eric Holdridge,</h2>
          <h2>Front-end Web Developer</h2>
        </div>
        <p>
          Hello. I'm an aspiring front-end web developer with a lot of passion.
        </p>
        <div className="heroButtons">
          <button>Explore Projects</button>
          <button>Contact Me</button>
        </div>
      </div>
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .container {
    .heroContent {
      .heroHeading {
        color: #000;
        font-size: 2rem;
        line-height: 3.6rem;
      }
      p {
        color: #000;
        padding: 20px 0 18px 0;
        opacity: 0.7;
        font-size: 1.3rem;
      }
      .heroButtons {
        button {
          background: transparent;
          border: 1px solid rgba(0, 0, 0, 0.8);
          color: #000;
          padding: 12px 20px;
          margin-right: 20px;
          border-radius: 4px;
          text-transform: uppercase;
          cursor: pointer;
          outline: none;
          transition: box-shadow 0.4s ease-in-out;
          &:hover {
            box-shadow: 0 8px 16px -6px black;
          }
        }
      }
    }
  }
`;

export default Hero;
