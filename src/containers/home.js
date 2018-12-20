import React from 'react';
import logo from '../assets/logo.jpg'

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeLi: 1
    };
    this.toggleActiveLi = this.toggleActiveLi.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount(){    
    setInterval( this.toggleActiveLi, 2500)
  }

  toggleActiveLi(){
    return this.setState((prevState) => {
      return this.state.activeLi === 2 ? {activeLi: 1} : {activeLi: prevState.activeLi + 1};  
    })
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
      <section className="home-container contianer" id="home">
        <main>
          <div>
            <h1>INSIDE OUT CONSTRUCTION</h1>
            {/* <img src={logo}></img> */}
            {/* <ul> */}
              {/* <li className={`${this.state.activeLi === 1 ? 'active': null}`} onClick={() => this.onClick('inside')}>Inside</li> */}
              {/* <li className={`${this.state.activeLi === 2 ? 'active' : null}`} onClick={() => this.onClick('out')}>Out</li> */}
              {/* <li className={`${this.state.activeLi === 1 ? 'active': null}`} onClick={() => this.onClick('decking')}>Decking</li>
              <li className={`${this.state.activeLi === 2 ? 'active' : null}`} onClick={() => this.onClick('bath')}>Bath</li>
              <li className={`${this.state.activeLi === 3 ? 'active' : null}`} onClick={() => this.onClick('kitchen')}>Kitchens</li> */}
            {/* </ul> */}
            {/* <button>LEARN MORE</button> */}
          </div>

        </main>
      </section>
    )
  }
}

export default Home;