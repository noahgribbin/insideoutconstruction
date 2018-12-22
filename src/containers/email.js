import React from 'react';
import request from 'superagent'

class Email extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeForm: 'quote',
    };
    this.sendEmail = this.sendEmail.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  sendEmail(e, type){
    e.preventDefault()    
    request.post('http://localhost:3000/send-email')
      .type('form')
      .send({'name' : this.state.name})
      .send({'email' : this.state.email})
      .send({'phone' : this.state.phone})
      .send({'project' : this.state.project})
      .send({'message' : this.state.message})
      .send({'emailType': type})
      .end((err, res) => {
        if(err) console.error(err);
    });
    document.getElementById('email-form').reset()
  }

  onChange(e){
    const data = e.target.getAttribute('data');
    const value = e.target.value;
    this.setState({
      [data]: value
    })
    console.log(this.state);
  }

  onClick(e){
    e.preventDefault();
    this.setState({activeForm: e.target.getAttribute('data')})
  }

  render() {  
    return (
      <section id="email" className="email-container container">
        <div className="button-container">
          <button onClick={(e) => this.onClick(e)} data="quote">Get a Quote</button>
          <button onClick={(e) => this.onClick(e)} data="testimonial">Leave a Testimonial</button>
        </div>
        { this.state.activeForm === 'quote' ?
        <div>
          <h3>Get a Free Quote</h3>
          <form onSubmit={(e) => this.sendEmail(e, 'quote')} id="email-form">
            <input placeholder="Name" data="name" onChange={(e) => this.onChange(e)}></input>
            <input placeholder="Email" data="email" onChange={(e) => this.onChange(e)}></input>
            <input placeholder="Telephone" data="phone" onChange={(e) => this.onChange(e)}></input>
            <input placeholder="Project Type" data="project" onChange={(e) => this.onChange(e)}></input>
            
            <textarea placeholder="Message" data="message" onChange={(e) => this.onChange(e)}></textarea>
            <button>Submit</button>
          </form>
        </div>
        :
        <div>
          <h3>Leave a Testimonial</h3>
          <form onSubmit={(e) => this.sendEmail(e, 'testimonial')} id="email-form">
            <input placeholder="Name" data="name" onChange={(e) => this.onChange(e)}></input>
            <input placeholder="Email" data="email" onChange={(e) => this.onChange(e)}></input>
            <input placeholder="Telephone" data="phone" onChange={(e) => this.onChange(e)}></input>            
            <textarea placeholder="Message" data="message" onChange={(e) => this.onChange(e)}></textarea>
            <button>Submit</button>
          </form>
        </div>
        }
      </section>
    )
  }
}

export default Email;