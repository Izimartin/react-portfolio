/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import './App.css';

import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects"

function App() {
  return (
    <div className="App">
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
