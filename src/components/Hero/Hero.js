/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Typist from "react-typist";
import Navbar from "../Navbar/Navbar";
import Container from "../Global/Container";

const Hero = () => (
  <section className="hero" css={styles}>
    <Navbar />
    <Container>
      <div className="heroContent">
        <div className="heroHeading">
          <h2>Welcome, </h2>
          <h2>I'm Eric Holdridge.</h2>
          <Typist>
            <p>A front-end web developer.</p>
            <Typist.Backspace count={26} delay={800} />
            <p>I love creating website's in React.</p>
            <Typist.Backspace count={35} delay={800} />
            <p>Let's make something cool together!</p>
          </Typist>
        </div>
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
  border-bottom: 1px solid #ccc;
  background: #1b242f;
  .container {
    .heroContent {
      .heroHeading {
        color: #fff;
        font-size: 2rem;
        line-height: 3.6rem;
        .Typist {
          display: flex;
          align-items: center;
        }
      }
    }
    p {
      color: #fff;
      padding: 20px 0 18px 0;
      opacity: 0.7;
      font-size: 1.3rem;
    }
    .heroButtons {
      button {
        background: transparent;
        border: 1px solid #fff;
        color: #fff;
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
`;

export default Hero;
