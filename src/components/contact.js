import React from 'react';

class Contact extends React.Component {
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this);
  }

  onClick(e, element) {
    e.preventDefault();
    const target = document.getElementById(element);
    const top = target.offsetTop;
    console.log(top);
    window.scrollTo({
      left: 0,
      top: top - 80,
      behavior: 'smooth',
    });
  }

  render() {
    
    return (
      <section className="contact-component">
        <div>
          <h4>Contact</h4>
          <h3>(206) - 353 - 4937</h3>
          <h3>insideoutconstruction@outlook.com</h3>
          <p>Lets get started! Contact us for a free estimate on your next home improvment project.</p>
          <button onClick={(e) => this.onClick(e, 'email')}>Contact Us</button>
        </div>
      </section>
    )
  }
}

export default Contact;