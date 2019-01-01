import React from 'react';
import Home from './home'
import Nav from './nav'
import About from './about'
import Service from './services'
import Email from './email'
import Footer from './footer'
import Testimonail from './testimonials';
// import Gallery from './gallery';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronLeft)
library.add(faArrowLeft)
library.add(faArrowRight)

class App extends React.Component {
  
  render(){
    return (
      <section className="app">
        <Nav />
        <Home />
        <About />
        <Service />
        {/* <Gallery /> */}
        <Testimonail />
        <Email />
        <Footer />
      </section>
    )
  }
}

export default App;