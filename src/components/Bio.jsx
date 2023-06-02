import React from 'react';

const Bio = () => {
  return (
    <div className="bio">
      <img src="/images/headshot.jpg" id="headshot" alt="Derek Williams" />
      <div className="bio-text">
        <p>
        Hello, I'm Derek Williams, a Computer Science student with a systems option at Oregon State University, 
        expected to graduate in 2024. This website serves as a testament to my journey, showcasing my projects,
        accomplishments, and offering a glimpse into my world. I am eager to contribute my skills to any organization that values 
        innovation, creativity, and positive social impact.
        </p>
        <p>
        My fascination with technology traces back to my early childhood. The desire to unravel the mysteries of technology
        drove me to create my own websites, run a Minecraft server, and learn how to program before high school.
        </p>
        <p>
        As a high school student at Tigard High, I found refuge in the world of programming and engineering, thanks to the Tigard 
        High School Technology Team. The team had a mission and a purpose as we delved into tools and principles of engineering.
        I successfully led a robotics team, creating high-performing autonomous programs for FTC and even helped redesign the
        autonomous for our sister team at the First World Championship. These experiences cultivated my love for designing and 
        implementing complex systems, which remains a driver in my current pursuits.
        </p>
        <p>
        Today, my interest has shifted towards Artificial Intelligence and Blockchain, two of the most promising technologies of 
        our time. I believe that these technologies can change the world.
        </p>
      </div>
    </div>
  );
};

export default Bio;
