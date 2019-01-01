import React from 'react';
import Truncate from 'react-truncate';
import ReadMoreAndLess from 'react-read-more-less';

class Testimonail extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // showMore: false,
    }
    // this.toggleMoreLess = this.toggleMoreLess.bind(this); 
  }
  // toggleMoreLess(){
  //   this.setState((prevState) => {
  //     return {showMore: !prevState.showMore}
  //   })
  // }

  render() {
    return (
      <section>
      <section className="testimonial-component">
        <div className="testimonial-sub-container">
            <ReadMoreAndLess
              ref={this.ReadMore}
              className="read-more-content"
              charLimit={350}
              readMoreText="Read more"
              readLessText="Read less"
            >
            {"We hired Sam years ago to take apart our deck, then build us a patio and three more deck, then he built us 4 arbors, then a closet, and he installed the tiles, floors, and molding in my new kitchen. Sam always does a thoughtful and precise job. We think he's the best, hence why we hired him again and again for different jobs and skills."}
            {/* <p>"We hired Sam years ago to take apart our deck, then build us a patio and three more deck, then he built us 4 arbors, then a closet, and he installed the tiles, floors, and molding in my new kitchen. Sam always does a thoughtful and precise job. We think he's the best, hence why we hired him again and again for different jobs and skills."</p> */}
            </ReadMoreAndLess>
          <h4>Fran F</h4>
        </div>
      </section>
      <section className="testimonial-component">
        <div className="testimonial-sub-container">
            <ReadMoreAndLess
              ref={this.ReadMore}
              className="read-more-content"
              charLimit={350}
              readMoreText="Read more"
              readLessText="Read less"
            >   
            {"Sam and Inside Out were great — we have used them for two projects and thrilled with the results of both! Sam was easy to contact, responsive to inquiries and timely. He was incredibly polite, cleaned up every day, and our two decks were both finished when he said they would be! Our deck was one of the best investments we’ve made. Sam was knowledgeable about materials, and helped us pick what turned out to be the perfect material and perfect color. We never felt that he was pushing us to use a certain material over another — it was really truly what our preference was but he was sure to educate us on the pros and cons of all choices. Everyone who comes over loves our deck! We’ve referred Sam to several of our friends as well. In addition, a year or two after the initial installation, one of the boards just needed some new screws which he did free of charge. Couldn’t recommend Sam and Inside Out enough! Our deck is our family hangout all summer, and no splinters, no cleaning, no maintenance! Thanks Sam!"}
            </ReadMoreAndLess>
            <h4>Maida C</h4>
        </div>
      </section>
      <section className={`testimonial-component`}>
        <div className="testimonial-sub-container">
            <ReadMoreAndLess
              ref={this.ReadMore}
              className="read-more-content"
              charLimit={350}
              readMoreText="Read more"
              readLessText="Read less"
            >
            {"I first heard of Inside Out Construction through a neighbors referral. Our Home Owner Association needed to replace quite a bit of fencing. At our initial meeting Sam and I walked the proposed area. I shared thoughts and out ideas, and Sam educated e as we walked on what should be considered as we looked at options. Hour HOA felt confident in selecting Inside Out for the job. Sam was communicative and gave us realistic expectations. I cannot count the compliments I have received on the fence. It is beautiful! Our HOA has used Inside Out Construction almost exclusively since. Whether large jobs or small, Sam us extremely professional and reliable. The membership is in agreement that for smaller jobs we just call Sam, not getting multiple bids. If I need something done personally, I contact Sam. I know he will be honest and responsible, and give me clear expectations on the work, what it should be, and the timeline to complete."}
            </ReadMoreAndLess>
          <h4>Mary J</h4>
        </div>
      </section>
      <section className={`testimonial-component`}>
        <div className="testimonial-sub-container">
              <ReadMoreAndLess
                ref={this.ReadMore}
                className="read-more-content"
                charLimit={350}
                readMoreText="Read more"
                readLessText="Read less"
              >
            {"I found Inside Out Construction and owner Sam Byrd through a referral service, and hit the jackpot. Sam first built a deck for me, start to finish helping me through the design process, picking out material, material purchases etc. From start to finish, Sam has simply the BEST communication I've ever know from a contractor, and communicated via any means we needed to, whether text, email, or phone, making it completely simple and easy for me to know what was going on. He let me know about thinks proactively ahead of time, was prompt and tidy, and most of all, his finished product was impeccable. Later, Sam remodeled a full bathroom for me on an extremely tight timeline, among myriad other jobs. More than his incredible reputation as a contractor and artist, Sam is simply one of the best men I know, and a complete pleasure to work with! I'd never use anyone else if I had a choice."}
            </ReadMoreAndLess>
          <h4>Robin R</h4>
          <h3>Bathroom Tiling</h3>
        </div>
      </section>
      {/* <button onClick={this.toggleMoreLess}>
        {this.state.showMore ? 'Show Less' : 'Show More' }
      </button> */}
      </section>
    )
  }
}

export default Testimonail;