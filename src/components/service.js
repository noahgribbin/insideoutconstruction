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
          <img src='https://lh3.googleusercontent.com/LwFAHOQr9Uehn8jGZHYLTzDO6SfYs-LfGejxTKjLc6yOdqGkrOz46fxztZ5GASXQjkQCQcOkiOvjmBjuX5KMV03VwHC8CgVtKK138E8hEt1EcYUyPrvagH8MUwbJxqhDTjNl-J43xjzLFkFscHvSU-2WvQ0RZ7O9rLaG9AuUjJiEP8DwnDEuta8y0aEHmmaGIc_O6gTVuuDm9YXdh36_qL5tuzcdrSAqL2daanfUxFrj7ixOKylXPWpx1V2-sODVUgueDGcFqHn6gW35l0waxl6Nc6ani67O4_u-B_uQ7Dp6LgnloLvRVcXnW4BI38_jYe9SedoAgWndwmpWAUfJnJbTGYvzer8KRjkOi6Tb5WqNj9WGjFPjignx_azuaN0ntoZGM85TckYeacxEw-xra25Q_T2qYX45-C9jWpYELZ6rj4S5HKK6rtqh5A_Gf9_8rVMIA9u5_ar3NED7j1V_YFy9gxxB7JDE5uBTJWFeGuqYfn2TK1KHayYc2_BrIOjxuXCyzrO1L_8xUaTbN3g1VBiBxO33cQXknzLCdtwXLLhPKWvQCQmpABPOCfc9e9AKNyStfth_e9THF0MTwZvIob9zMztv9BcoP7FZFzIyRPBRmlFAPVAFv7ojeZ40mkU9yVW32fqgi7eyNzQqCoJYaBA=w698-h929-no'/>
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