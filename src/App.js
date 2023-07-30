import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.scss";
import Header from "./components/Header";
import Title from "./components/Title";
import AboutMe from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <main>
          <Title />
          <AboutMe />
          <Projects />
        </main>
      </Router>
    </div>
  );
}

export default App;
