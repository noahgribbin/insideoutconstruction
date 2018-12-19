import React from 'react';
import About from '../components/about'
import Contact from '../components/contact'

class AboutContainer extends React.Component {
  render() {
    return (
      <section className="about-container" id="about">
        <About />     
        <Contact />    
      </section>
    )
  }
}

export default AboutContainer;