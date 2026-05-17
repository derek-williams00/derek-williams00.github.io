import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar.jsx';
import Bio from './components/Bio.jsx';
import Grid from './components/Grid.jsx';
import Footer from './components/Footer.jsx';
import './components/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import experiences from './data/experiences.json';
import completed from './data/completed.json';
import Activities from './components/Activities.jsx';
import Resume from './components/Resume.jsx';

const featuredProjects = [
  completed.find(p => p.title === 'Nexus'),
  completed.find(p => p.title === 'AI Gesture Art'),
  completed.find(p => p.title === 'Are You Smarter Than AI?'),
].filter(Boolean);

const App = () => {
  return (
    <>
      <NavBar />
      <Bio />
      <Grid
        id="experience"
        title="Experience"
        items={experiences}
      />
      <Grid
        id="projects"
        title="Selected Projects"
        items={featuredProjects}
      />
      <Activities />
      <Resume />
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));


