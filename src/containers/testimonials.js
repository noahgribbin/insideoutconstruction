import React from 'react';
import Testimonials from '../components/testimonials';

class TestimonialsContainer extends React.Component {
  render() {
    // map out testimonial components
    // const testimonials = data.map( testimonial => {
    // create <Testimonial data={testimonial}/>'s
    // })
    return (
      <section className="testimonial-container container clear" id="testimonials">
        <h3>Customer Testimonials</h3>
        <Testimonials />
      </section>
    )
  }
}

export default TestimonialsContainer;