import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/logoFix.png'

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount(){    
  }

  onClick(element) {
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
      <section className="home-container container" id="home">
        <main>
          <div className="logo-sale-container">
          <div className="logo-container">
            {/* <h1>INSIDE OUT CONSTRUCTION</h1> */}
            <img src={logo}></img>
          </div>
          </div>
        </main>
      </section>
    )
  }
}

export default Home;