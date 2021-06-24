import React from 'react';
import imgSrc from'../images/Joe-Doe.png';

const AboutSection = () => {
    return (
    <section id="about-me">
    <h1>
      Hello, my name is
      <span class="rotate text-important">John doe</span>,<br />
      and i make horrible websites.
    </h1>
    <img class="avatar" src="./images/John-Doe.jpg" alt="jhon-doe" />
  </section>
    );  
};

export default AboutSection ;

