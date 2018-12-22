import React from 'react';
import Home from './home'
import Nav from './nav'
import About from './about'
import Service from './services'
import Email from './email'
import Footer from './footer'
import Testimonail from './testimonials';
import Gallery from './gallery';

class App extends React.Component {
  
  render(){
    return (
      <section className="app">
        <Nav />
        <Home />
        <About />
        <Service />
        <Gallery />
        <Testimonail />
        <Email />
        <Footer />
      </section>
    )
  }
}

export default App;