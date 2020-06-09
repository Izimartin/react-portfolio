/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../../components/Global/Container";

const Contact = () => {
  return (
    <div className="contact" css={styles}>
      <h2>Contact</h2>
      <Container>
        <form action="">
          <label>Name:</label>
          <input type="text" placeholder="Name" />
          <label>Email:</label>
          <input type="text" placeholder="Email" />
          <button>Send Message</button>
        </form>
      </Container>
    </div>
  );
};

const styles = css`
  width: 100%;
  padding: 40px 0;
  h2 {
    text-align: center;
    font-size: 3rem;
  }
  form {
    margin: 20px 0 0 0;
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    label {
      display: block;
    }
    input {
      height: 42px;
      border-radius: 4px;
      border: 1px solid #ccc;
      padding: 0 0 0 10px;
      margin: 0 0 20px 0;
    }
    button {
      display: inline;
    }
  }
`;

export default Contact;
