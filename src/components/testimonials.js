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
              {"We hired Sam years ago to take apart our deck and build a new one.  Then he built our patio, three more decks and four arbors.  Inside our home he built a closet (now referred to as Sam's closet), installed the tiles, floors and molding in my new kitchen. Sam always does a thoughtful and precise job. We think he's the best, hence why we hire him again and again for very different jobs and skills."}
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
              {"Sam and Inside Out were great — we have used them for two projects and are thrilled with the results of both! Sam was easy to contact, responsive to inquiries and timely. He was incredibly polite, cleaned up every day, and our two decks were both finished when he said they would be! Our deck was one of the best investments we’ve made. Sam was knowledgeable about materials and helped us pick what turned out to be the perfect material and perfect color. We never felt that he was pushing us to use a certain material over another — it was really truly what our preference was but he was sure to educate us on the pros and cons of all choices. Everyone who comes over loves our deck! We’ve referred Sam to several of our friends as well. In addition, a year or two after the initial installation, one of the boards just needed some new screws which he did free of charge. I couldn’t recommend Sam and Inside Out enough! Our deck is our family hangout all summer, and no splinters, no cleaning, no maintenance! Thanks Sam!!! "}
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
              {"I first heard of Inside Out Construction through a referral service.  Our Home Owner Association needed to replace quite a bit of fencing.  At our initial meeting Sam and I walked the proposed area.  I shared thoughts and our ideas, and Sam educated me as we walked about what should be considered as we looked at options.  Our HOA felt confident in selecting Inside Out for the job.  Sam was very up front and honest about time lines and what we could expect.  Throughout the project Sam was communicative and gave us realistic expectations.  I cannot count the compliments I have received on the fence.  It is beautiful! Our HOA has used Inside Out Construction almost exclusively since.  Whether a large job or small, Sam is extremely professional and reliable.  The membership is in agreement that for smaller jobs we just call Sam, not getting multiple bids.  If I need something done personally, I contact Sam.  I know he will be honest and responsible, and give me clear expectations on the work, what it SHOULD be, and the timeline to complete."}
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
              {"I found Inside Out Construction and owner Sam Byrd through a referral service, and hit the jackpot. Sam first built a deck for me, start to finish helping me through the design process, picking out material, material purchases, etc. From start to finish, Sam has simply the BEST communication I've ever known from a contractor, and communicated via any means we needed to, whether text, email or phone, making it completely simple and easy for me to know what was going on. He let me know about things proactively ahead of time, was prompt and tidy, and most of all, his finished product was impeccable. Later, Sam remodeled a full bathroom for me on an extremely tight timeline, among myriad other jobs. More than his incredible reputation as a contractor and artist, Sam is simply one of the best men I know, and a complete pleasure to work with! I'd never use anyone else if I had my choice. "}
            </ReadMoreAndLess>
          <h4>Robin R</h4>
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
              {"We are fortunate that Dunn Lumber put us in contact with Inside Out Construction when we were seeking a contractor for several home remodel projects. It has been three years since we first met the owner of Inside Out Construction, Sam Byrd, and we have never had to look back! Sam and his team have done several large-scale projects for us.  The first project was structural work to the underside of our home that sits on a hill.  We gave Sam a 30+ page report from our Structural Engineer that Sam was then able to boil down to one page of work.  This work included reposting the entire underside of our home, in addition to the install of earthquake plates, needed tie down bolts and strapping.   Following this, we hired Inside out Construction to replace some of our Hardie plank siding, remove a failing deck, and install a larger exterior door. We then hired Inside Out Construction to replace our entire perimeter fence and build us two arbors with an original design.  And our most recent project with Inside Out Construction was the install of a cedar soffit and lighting under our composite deck.  All of which turned out beautifully. We are delighted with the terrific results from the work Inside Out Construction has performed for us.  Sam is very receptive and easy to communicate with, and asks all the right questions upfront, which makes each project we do with him a lot easier.  All our neighbors want to hire Sam and his team after they see the work he has performed for us.  We give Inside Out Construction our gold stamp of approval – they are AWESOME.  Thank you, Sam, for the quality work you have done on our home!"}
            </ReadMoreAndLess>
            <h4>Tessa & Donovan</h4>
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
              {"After going through two previous “Contractors” my husband and I were fed up and leery and then came along Sam and we were immediately put at ease. We had just finished a top to bottom remodel with the kitchen, bath and laundry room remaining. Sam and his employee were at our home every day on time as contracted and we never once had to worry about leaving them alone or wonder if they would actually show up. Since we continued to live at the home during the remodel Sam made sure each night that the project was tidy and livable. We also have two dogs that are like our kids, the guys would play with them and let them go out to the bathroom throughout the day and make sure they were always back in the home safe when we returned. (The dogs were sad when the project ended.)  The work Sam completed for us was spot on and on time. We have zero complaints and plan to have him back for a few other things in the very near future. Please don’t hesitate to contact my husband or I for a referral and we will honestly tell you we will give him 5 stars."}
            </ReadMoreAndLess>
            <h4>Yung & Deanna P</h4>
        </div>
      </section>
      </section>
    )
  }
}

export default Testimonail;