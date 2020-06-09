/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../Global/Container";
import ProjectCard from "../Projects/ProjectCard";
import LiveDrinkImg from "../../images/livedrink.jpg";
import CreativeAgency from "../../images/creativeAgency.jpg";

const Projects = () => (
  <div css={styles}>
    <h3>Projects</h3>
    <Container>
      <div className="projectWrapper">
        <ProjectCard img={LiveDrinkImg} cardTitle="Live Drink Website" cardDesc="Replicate template and add cart functionality. Learned how to implement and use tailwindCSS" techUsed="HTML5, TailwindCSS, Javascript" />
        <ProjectCard img={CreativeAgency} cardTitle="Creative Agency Website" cardDesc="Replicate template" techUsed="HTML5, SCSS" />
        <ProjectCard img={LiveDrinkImg} cardTitle="Live Drink Website" cardDesc="Replicate template and add cart functionality" techUsed="HTML5, TailwindCSS, Javascript" />
      </div>
    </Container>
  </div>
);

const styles = css`
  width: 100%;
  padding: 100px 0;
  background: #1b242f;
  color: #000;
  h3 {
    text-align: center;
    color: #fff;
    font-size: 3rem;
  }
  .container {
    padding: 40px 0 0 0;
    .projectWrapper {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default Projects;
