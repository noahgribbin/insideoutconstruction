import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
          <div>
            <h1>INSIDE OUT CONSTRUCTION</h1>
          </div>
          <section className="sale-container">
          <FontAwesomeIcon className="arrow-icon" icon="arrow-right" />
            <h3>Winter Rebate:  10% Discount on Jobs Contracted in January</h3>
          <FontAwesomeIcon className="arrow-icon" icon="arrow-left" />
          </section>
        </main>
      </section>
    )
  }
}

export default Home;