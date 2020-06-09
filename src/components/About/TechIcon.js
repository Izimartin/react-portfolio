/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const TechIcon = ({imgIcon}) => {
  return(
    <div css={styles}>
      <img src={imgIcon} alt=""/>
    </div>
  )
}

const styles = css`
  width: 100%;
  max-width: 60px;
  img {
    display: block;
    width: 100%;
  }
`;

export default TechIcon;