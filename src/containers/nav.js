import React from 'react';
// import Hamburger from '../assets/svg/hamburger.svg'
// import hamburgerUrl from '../assets/svg/hamburger.svg'
import menu from '../assets/temp/menu.png'
import logo from '../assets/logo.png'


class Nav extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      mobileMenuActive: false
    }
    this.onClick = this.onClick.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  onClick(element){
    const target = document.getElementById(element);
    const top = target.offsetTop;
    console.log(top);
    window.scrollTo({
      left: 0,
      top: top - 80,
      behavior: 'smooth',
    });
    this.setState({mobileMenuActive: false})
  }
  
  toggleMobileMenu(){
    this.setState((prevState) => {
     return {mobileMenuActive: !prevState.mobileMenuActive};
    });
    console.log(this.state);
    
  }

  render(){
    return(
      <section className="nav-container">
        <div><img src={logo}></img></div>
        {/* <div><h3>Inside Out</h3></div> */}
        {/* <Hamburger /> */}
        <img className="hamburger" src={menu} onClick={this.toggleMobileMenu}></img>
        <ul className={this.state.mobileMenuActive ? 'active-mobile-menu' : null}>
          <li className="nav-item" onClick={() => this.onClick('home')}>Home</li>
          <li className="nav-item" onClick={() => this.onClick('about')}>About</li>
          <li className="nav-item" onClick={() => this.onClick('services')}>Services</li>
          <li className="nav-item" onClick={() => this.onClick('testimonials')}>Testimonials</li>
          {/* <li className="nav-item" onClick={() => this.onClick('email')}>Contact</li> */}
          <li className="nav-item highlight" onClick={() => this.onClick('email')}>Free Quote</li>
        </ul>
      </section>
    )
  }
}

export default Nav;