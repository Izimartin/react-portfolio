/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import Container from "../Global/Container";

const Navbar = () => (
  <nav css={styles}>
    <Container>
      <div className="navIcon">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
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
        width: 24px;
        height: 3px;
        background-color: #000;
        margin: 6px 0;
        transition: 0.4s;
      }
    }
  }
`;

export default Navbar;
