import React from "react";

function OurJourney() {
  return (
    <div>
      <section className="about-section-four">
        <div className="auto-container">
          <div className="sec-title centered">
            <div className="title">Our Journey</div>
            <h2 style={{ color: "#000" }}>
              Road to success is never easy...
              <br />
              <span
                style={{
                  color: "#9a7f59",
                  fontStyle: "italic",
                  fontFamily: "Playfair Display",
                }}
              >
                But with tiny steps can definitely be achieved..
              </span>
            </h2>
          </div>

          <div className="row clearfix">
            <div className="image-column col-lg-5 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image-1">
                  <img src="assets/images/myimages/shellyimage.jpg" alt="" />
                </div>
                {/* <div className="image-2">
                  <img src="assets/images/resource/about-3.jpg" alt="" />
                </div> */}
              </div>
            </div>

            <div className="skills-column col-lg-7 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="text">
                  <p style={{ color: "#1a1e66" }}>
                    FinLeaf The Consultants, founded by Ms. Shelly Gupta is a
                    Mentor, Consultant, Advisor, Strategist for many companies
                    in India and Overseas. FinLeaf is an established and reputed
                    consultancy firm with an excellent track record of customer
                    satisfaction which integrates honesty, integrity, and
                    business ethics at all levels of Business.
                  </p>
                  <p style={{ color: "#1a1e66" }}>
                    FinLeaf is specialized in Capital Structuring, Preparation
                    of Proposal/Pitch Deck/Valuation, Feasibility, Equity/Debt
                    Funding, Business Development, Handling Critical business
                    issues, IPO, international finance, restructuring, strategic
                    advisory, and Investments in Business, Mergers and
                    Acquisitions, Due Diligence, Seed Funding by having
                    extensive contact with Business Owners, Experts, Investors,
                    Institutions, and Financiers.
                  </p>
                  <p style={{ color: "#1a1e66" }}>
                    we primarily focus on what you want to achieve for your
                    business and what are the best efforts we can make to
                    achieve the same. with proper strategy and dedicated
                    efforts, miles can be easily achieved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurJourney;
