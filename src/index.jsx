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
        <Header />
      <div id="home">
        <div id="about" className="top-spacer">
          <Bio />
        </div>
        <div id="projects">
          <ProjectGrid />
        </div>
        <div id="connect">
          <Footer />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

