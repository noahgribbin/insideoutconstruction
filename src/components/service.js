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
          <img src='https://lh3.googleusercontent.com/zkUVHjV7pylyut5_T71O0b7mPnrvDgOQulFaXyHf6sKxH4hZVJdEFVPBomKoXR2UIhScyfL3PJ7UFSc4sDlDWHpyY8TWg1rR7j-ttnrY1B362lizpk-uLfTfJb_-7fKL53C7B-BkQCQMnt408Gzh6oEyFejQ_mnf9jwv6MxB3HcFEDnkU8qylhj9xXolFRRJP_YGV4eYRyhgbA_UUcNocOILxuYiAMv6m0B6rhx0HF-MR8jOBmUQUd4C3Wr8VH2hLC41GHz_jDYx2Zr_WRBBjmta03ex_q0XYLjVhAIGx2XXBurisFvnKkcEtU6JOY0jehpbuyZwxJ1uGp4e2ncpUSxj2fePRP4psJlMUCjGpLSeBTInbyRcUNcYdmJtDAEl610pvm4ZCKitSKY1_U5ufMzO0GEhmuSxtWQwdYGHYa_Z5EHnTIpfOM0ZxsytSyMBBApXkm2CeaCEextEzA5p3_WlD7AzTbJjF5azZ8UM2j_wLJQggNQUTunF5zeH0mJgrTsTa3fO3qY8SQgz-eAQykWlQ1H_zdfzVD_Kll3Pqzb-k-WrGaaL8vT-U5Hq0mX1FD2SdcDhrb_LKLVbwDWNSPfRCVs2qIMBUCgSmEzs75n4RjTS7o1wxGvT68MhC19D6M6q162uqZnqpntazlL_Zes=w698-h929-no://lh3.googleusercontent.com/sRLC30ByAadkKhTc7qs0W4JtYRbdIMFaOit_DVvwYtHJwJsxCYDwr5NETHryrt20JYnd07v5uKCyvaDFuS4vZNuvbwu9Ahpfn9GNELqqL_6ZUMjP4hZ4G3W15N2LNDRoajgfjig5yemHM6tPvmrltXMiDRrrRZHI8LgXCOGMpr_LgenX4uIKKgRdb3j43ZD7Di5S7iG_hWmxxTOkJQvRbUpQyBTkApQ1dTRTR_aMINywDic1kek99v3ZCcOtRaamCngw8d8Nn0EPsb-mIvDZbhmj2o23NohdgwjtGr37xzesCmEovmzdCwlmf5CK8lbQYnouzzR9g39qzsqSgQiToP6llrgspmCm9tbGlH_jfrRvR_7nxti36pCvMV9UQjY3mNZ3WdAQuCLzrxc2oGPlIgt-tbsmgd0WEkvtQGSf4Aqv-M35NuwrhTEpdQc5A0BGS7shn3lcepaBprJt6cnWuhtxN6tfbFW9FrnuUZTFcwcif-dT6WKktLmRsypQ0iengz5kBc4fEr2TTE-VTIkXCm3IaKEhRwSa_t003VluXNoFpDnT7gZx7kB9MNH3XiHQCb6lP1Amc7Vz_OPH2G_I-ojUJcOuI4jPUgKzTUyZ-bJdcCth8AtgcIGfFc2ycxn96ZK7LqUk2LG1ciYTapfshWs=w698-h929-no'/>
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