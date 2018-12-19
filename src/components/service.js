import React from 'react';
import deck from '../assets/temp/deck5.jpg'
import bath from '../assets/temp/bath.jpg'
import kitchen from '../assets/temp/kitchen2.jpg'
class Service extends React.Component {
  render() {
    return (
      <section>
        <section className="service-component service-left" id="inside">
        <div>
          <h3>Inside</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
          <img src={bath}/>
      </section>
      <section className="service-component service-right" id="out">
        <div>
          <h3>Out</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
          <img src={deck}/>
      </section>
        {/* <section className="service-component service-left" id="decking">
        <div>
          <h3>Decking</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
          <img src={deck}/>
      </section>
      <section className="service-component service-right" id="bath">
        <div>
          <h3>Bathroom</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
          <img src={bath}/>
      </section>
      <section className="service-component service-left" id="kitchen">
        <div>
          <h3>Kitchen</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <img src={kitchen}/>
      </section> */}
      </section>
    )
  }
}

export default Service;