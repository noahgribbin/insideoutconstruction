import React from 'react';
import MediaQuery from 'react-responsive';
import $ from 'jquery';
import SlickGallery from './slickGallery';
import outsidePic from '../assets/jobs/IOC_decks0022.jpg';
class Service extends React.Component {
  constructor(props){
    super(props)
    this.openModal = this.openModal.bind(this);
    this.state = {
      isModalOpen: false,
      category: '',
    }
  }

  openModal(e, category) {
    console.log(category);
    
    this.setState({category: category});
    this.setState({isModalOpen: true});
    $('.container').not('.service-container').hide()
    $('.service-component').hide();
    $('.service-title').hide();
    $('#app').addClass('fullscreen');
    
    console.log('im here')
  }
  
  closeModal(){
    this.setState({category: ''});
    this.setState({isModalOpen: false});
    $('.container').show()
    $('.service-component').show();
    $('.service-title').show();
    $('#app').removeClass('fullscreen');

  }

  render() {
    return (
      <section>
        {this.state.isModalOpen ? 
          <div className="service-modal">
            <SlickGallery category={this.state.category} closeModal={this.closeModal.bind(this)}/>
          </div> 
        : null }

        <section className="service-component service-right" id="out">
          <div>
            <h3>Decks and Exterior Projects</h3>
            <p>While structure and appearance are of the utmost importance, we understand that this isn't just a deck.  It's where you'll spend a great deal of your summer evenings, where you'll entertain friends at weekend barbecues, it's the backdrop for family photos.  We'll help you design your ideal deck space and decide between the myriad decking and railing options available to you.</p>
            <MediaQuery query="(min-width: 750px)">
              <button onClick={(e) => this.openModal(e, 'outside')}>See More</button>
            </MediaQuery> 
          </div>
            <img src={outsidePic}/>
            <MediaQuery query="(max-width: 750px)">
              <button onClick={(e) => this.openModal(e, 'outside')}>See More</button>
            </MediaQuery> 
        </section>


      
        <section className="service-component service-left" id="inside">
        <div>
            <h3>
              Remodels and Upgrades</h3>
            <p>
              Whether it's simply better functionality you're envisioning, a years-put-off update or, if for you, it's your happy place, a new kitchen doesn't have to break the bank.  Flooring, cabinet and appliance install, custom trim, our interior team can do it all.  And let's face it, our bathrooms are one of the last bastions of privacy and solitude available to us; let Inside Out Construction help you make it more modern or just plain more comfortable for you.</p>
          <MediaQuery query="(min-width: 750px)">
              <button onClick={(e) => this.openModal(e, 'inside')}>See More</button>
          </MediaQuery> 
        </div>
          <img src='https://lh3.googleusercontent.com/SYy9hXCvqqs6Nq5v0dNJJUqdIGTFMJoXIemf19Qxw8ePmTYPeNDgYqAk946Hz4re_Qxg0I_ywANbWakWUvqfcoBnKXfzCRMCtBdjiN8-1xdRA25aPDU82Ymuv-YwXY_XI_aMjLc6kuzGSUEd1gdk3JEyDoC2GCmXAekiKbZ3HvQYXJKT0FNXBoN4KZpm0UiB3aY8_BpHEHPGn7luTy3HAnrvDZUG5_cz6y872FaWtWWXI4a1cWJTO4jiHto20P2VbbzkhAEvxvvZgYsrZeP64kPyTN-pQQMOgdVK1P4Qq30tW9wjs14xU8M2Tvp0vGTW7toGZz8L5mOjsxpGl2spNBqFNUHkkUAdrkq3pyN-pQHMbfDk5896JvGhN8F863SYMcOBowr7JKAPA0VnNHhcnN_tdZg1i797Q1MSNnha93tWSsKSPdgorQ_YGlwT7KdOvrymkVFI2vRMvQyUQAj2v2BEgyT8DjFbYX7x99wlTizyQmN0EXcB7wsTqBSUCAg2tX-eqOhu1VIo_tAkiJlY2krH_wmaQSanIknhb41S4CB5Bt5nivoJTuT9prjaKoMGkW1Mz8hZZh47pEPqKXseIn33U3k7-2nrjI3Tus6PmQZxJsrFoY8CmCXKHLOBNqu2c6DCmzIwi6vz6b9LTA8aePYhmFsDe75NL3PQ7DaFb1uAQA0g8CLv_Y4SoylSI6qMZ0fYDnqtiqijLdhU0g=w698-h929-no'/>
          <MediaQuery query="(max-width: 750px)">
            <button onClick={(e) => this.openModal(e, 'inside')}>See More</button>
          </MediaQuery> 
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