import React from 'react';
import Service from '../components/service';

class ServiceContainer extends React.Component {
  render() {
    // map out service components
    // const services = data.map( service => {
      // create <Service data={sercive}/>'s
    // })
    return (
      <section className="service-container container clear" id="services">
        <h3 className="service-title">Services</h3>
        <Service />
      </section>
    )
  }
}

export default ServiceContainer;