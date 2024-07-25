import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <div className="layout">
        <div className="main">
          <Header />
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
