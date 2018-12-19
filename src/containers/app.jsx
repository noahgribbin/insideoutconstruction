import React from 'react';
import Home from './home'
import Nav from './nav'
import About from './about'
import Service from './services'
import Email from './email'
import Footer from './footer'
import Testimonail from './testimonials';

class App extends React.Component {
  
  render(){
    return (
      <section className="app">
        <Nav />
        <Home />
        <About />
        <Service />
        <Testimonail />
        <Email />
        <Footer />
      </section>
    )
  }
}

export default App;