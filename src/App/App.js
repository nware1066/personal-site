import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <Header />
        <AboutMe />
        <Projects />
      </Route>
      <Route exact path="/experience">
        <Experience />
      </Route>
    </div>
  );
}

export default App;
