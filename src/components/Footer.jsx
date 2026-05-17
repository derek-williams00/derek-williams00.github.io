import React from 'react';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer-inner">
        <span>© Derek Williams 2026</span>
        <span>
          <a href="https://github.com/derek-williams00" target="_blank" rel="noopener noreferrer">GitHub</a>
          {' · '}
          <a href="https://www.linkedin.com/in/derek-williams-116072148/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </span>
      </div>
      <div className="footer-disclaimer">
        The information expressed on this site is my own and does not reflect the views of my employer.
      </div>
    </footer>
  );
};

export default Footer;