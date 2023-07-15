import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar.jsx';
import Bio from './components/Bio.jsx';
import Grid from './components/Grid.jsx';
import Footer from './components/Footer.jsx';
import './components/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

// Import Project Data
import completed from './data/completed.json';
import experiences from './data/experiences.json';
import wip from './data/wip.json';


const App = () => {
  return (
    <>
      <NavBar />
      <Bio />
      <Grid
        id="completed"
        title="Completed Projects"
        items={completed}
      />
      <Grid 
        id="experience"
        title="Experiences"
        items={experiences}
      />
      <Grid
        id="wip"
        title="Works in Progress"
        items={wip}
      />
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

