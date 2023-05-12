import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Bio from './components/Bio.jsx';
import ProjectGrid from './components/ProjectGrid.jsx';
import Footer from './components/Footer.jsx';
import './components/App.css';

const App = () => {
  return (
    <div>
      <div id="home">
        <Header />
      </div>
      <div id="about">
        <Bio />
      </div>
      <div id="projects">
        <ProjectGrid />
      </div>
      <div id="connect">
        <Footer />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

