/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import Container from "../Global/Container";

const Navbar = () => (
  <nav css={styles}>
    <Container>
      <div className="navIcon">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
        <ul>
          <li ><a href="#">Home</a></li>
          <li ><a href="#about">About</a></li>
          <li ><a href="#projects">Projects</a></li>
          <li ><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </Container>
  </nav>
);

const styles = css`
  width: 100%;
  padding: 30px 0;
  position: absolute;
  top: 0;
  .container {
    display: flex;
    justify-content: flex-end;
    .navIcon {
      cursor: pointer;
      .bar1,
      .bar2,
      .bar3 {
        display: none;
        width: 24px;
        height: 3px;
        background-color: #fff;
        margin: 6px 0;
        transition: 0.4s;
      }
      ul {
        display: flex;
        align-items: center;
        li {
          padding: 0 10px;
          list-style: none;
          a {
            text-decoration: none;
            color: #fff;
          }
        }
      }
    }
  }
  @media (max-width: 996px) {
    .container {
      .navIcon {
        .bar1, 
        .bar2,
        .bar3 {
          display: block;
        }
        ul {
          display: none;
        }
      }
    }
  }
`;

export default Navbar;
