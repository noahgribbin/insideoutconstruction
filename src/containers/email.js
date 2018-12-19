import React from 'react';
import request from 'superagent'

class Email extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    };
    this.sendEmail = this.sendEmail.bind(this);
  }
  sendEmail(e){
    e.preventDefault()    
    request.post('http://localhost:3000/send-email')
      .type('form')
      .send({'name' : this.state.name})
      .send({'email' : this.state.email})
      .send({'phone' : this.state.phone})
      .send({'project' : this.state.project})
      .send({'message' : this.state.message})
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

  render() {  
    return (
      <section id="email" className="email-container container">
        <div>
          <h3>GET IN TOUCH</h3>
          <form onSubmit={(e) => this.sendEmail(e)} id="email-form">
            <input placeholder="Name" data="name" onChange={(e) => this.onChange(e)}></input>
            <input placeholder="Email" data="email" onChange={(e) => this.onChange(e)}></input>
            <input placeholder="Telephone" data="phone" onChange={(e) => this.onChange(e)}></input>
            <input placeholder="Project Type" data="project" onChange={(e) => this.onChange(e)}></input>
            
            <textarea placeholder="Message" data="message" onChange={(e) => this.onChange(e)}></textarea>
            <button>Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Email;