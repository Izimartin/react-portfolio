/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../Global/Container";
import ProjectCard from "../Projects/ProjectCard";
import LiveDrinkImg from "../../images/livedrink.jpg";
import CreativeAgency from "../../images/creativeAgency.jpg";
import Project2 from "../../images/project2.jpg";

const Projects = () => (
  <div css={styles} id="projects">
    <h3>Projects</h3>
    <Container>
      <div className="projectWrapper">
        <ProjectCard
          img={LiveDrinkImg}
          cardTitle="Live Drink Website"
          cardDesc="Replicate template and add cart functionality. Learned how to implement and use tailwindCSS"
          techUsed="HTML5, TailwindCSS, JavaScript"
          projectLink="https://ericholdridge.github.io/live-drink-website/"
          codeLink="https://github.com/ericholdridge/live-drink-website"
        />
        <ProjectCard
          img={CreativeAgency}
          cardTitle="Creative Agency Website"
          cardDesc="Replicate template and learn responsiveness"
          techUsed="HTML5, SCSS"
          projectLink="https://ericholdridge.github.io/live-drink-website/"
          codeLink="https://github.com/ericholdridge/live-drink-website"
        />
        <ProjectCard
          img={Project2}
          cardTitle="Boomerang Template Website"
          cardDesc="Replicate template and learn responsiveness"
          techUsed="HTML5, SCSS"
          projectLink="https://ericholdridge.github.io/PracticeProject4/"
          codeLink="https://github.com/ericholdridge/PracticeProject4"
        />
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
  @media (max-width: 740px) {
    .container {
      .projectWrapper {
        flex-direction: column;
        align-items: center;
      }
    }
  }

  @media (min-width: 741px) and (max-width: 1121px) {
    .container {
      .projectWrapper {
        flex-wrap: wrap;
      }
    }
  }
`;

export default Projects;
