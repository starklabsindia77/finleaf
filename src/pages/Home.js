import React from "react";
import { Link } from "react-router-dom";
import BlogSection from "../components/BlogSection";
import MapInfo from "../components/MapInfo";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import ClientBrandSection from "../components/ClientBrandSection";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import OurJourney from "../components/OurJourney";
import blogData from "../data/Blog";

function Home() {
  return (
    <div>
      <div className="page-wrapper">
        {/* <!-- Preloader --> */}
        {/* <div className="preloader"></div> */}
        {/* <!-- Main Header--> */}
        <Header pageName="Home" />
        {/* <!--End Main Header --> */}
        {/* <!--Main Slider--> */}
        <HeroSlider />
        {/* <!-- Services Section Seven--> */}
        <section className="services-section-seven">
          <div className="auto-container">
            <div className="inner-container">
              <div className="clearfix">
                {/* <!-- Services Block Ten --> */}
                <div className="services-block-ten col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInUp"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="large-icon flaticon-medal-1"></div>
                    <div className="upper-box">
                      <div className="icon-box">
                        <span className="icon flaticon-medal-1"></span>
                      </div>
                      <h4>
                        <Link>STATUTORY AND TAX AUDIT</Link>
                      </h4>
                    </div>
                    <div className="text line-clamp-2">
                      An audit is not a procedure for finding out the error in
                      the System rather it is a tool which helps management in
                      smooth running of operation by having the Complete Control
                      over the Business. So, it is mandatory by the government
                      to comply to such Audit Compliances, to determine the
                      accuracy and fair representation of company’s financial
                      position by examining its information.
                    </div>
                  </div>
                </div>

                {/* <!-- Services Block Ten --> */}
                <div className="services-block-ten col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInUp"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="large-icon flaticon-diamond-1"></div>
                    <div className="upper-box">
                      <div className="icon-box">
                        <span className="icon flaticon-diamond-1"></span>
                      </div>
                      <h4>
                        <Link>GOOD & SERVICES TAX AUDIT</Link>
                      </h4>
                    </div>
                    <div className="text line-clamp-2">
                      With the completion of more than one year since the
                      introduction of GST, it’s critical to start focusing on
                      various compliances such as input and output
                      reconciliations, preparation and filing of annual return
                      and GST audit certification. CGST Act, 2017 has prescribed
                      for the registered person whose turnover during financial
                      year exceeds the prescribed limit shall get his accounts
                      audited within the prescribed time frame provided by the
                      govt.
                    </div>
                    {/* <ul className="list-style-three">
                      <li>Finding a better credit card</li>
                      <li>Stop sneaky subscription charges</li>
                      <li>We'll never judge your daily latte</li>
                    </ul> */}
                  </div>
                </div>

                {/* <!-- Services Block Ten --> */}
                <div className="services-block-ten col-lg-4 col-md-12 col-sm-12">
                  <div
                    className="inner-box wow fadeInUp"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="large-icon flaticon-award"></div>
                    <div className="upper-box">
                      <div className="icon-box">
                        <span className="icon flaticon-award"></span>
                      </div>
                      <h4>
                        <Link>SECRETARIAL AUDIT</Link>
                      </h4>
                    </div>
                    <div className="text line-clamp-2">
                      Apart from Statutory Audit and Financial Audit,
                      Secretarial Audit is a new concept introduced by The
                      Companies Act, 2013. It is a Compliance Audit which serves
                      as an effective tool for better corporate compliance
                      management. It is covered under Section 204 of the
                      Companies Act, 2013. The wide spectrum of Secretarial
                      Audit covers the The Companies Act, 2013 (the Act), The
                      Securities Contracts (Regulation) Act, 1956 (‘SCRA’), The
                      Depositories Act, 1996, Foreign Exchange Management Act,
                      1999 , the Securities and Exchange Board of India Act,
                      1992 (‘SEBI Act’), and other industry-specific Acts.
                    </div>
                    {/* <ul className="list-style-three">
                      <li>Become a Finac member</li>
                      <li>From lowering your cable bill</li>
                      <li>We always have your security</li>
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Services Section Seven--> */}
        {/* <!-- About Section --> */}
        <section className="about-section brown">
          <div className="auto-container">
            <div className="row clearfix">
              {/* <!-- Content Column --> */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  {/* <!-- Sec Title Two --> */}
                  <div className="sec-title-two brown">
                    <div className="title">about us</div>
                    <h2>
                      We aim to provide{" "}
                      <span> expert advice & quality service</span>
                    </h2>
                  </div>

                  <div className="text">
                    <p>
                      Finleaf is a Consultancy firm which provides Consultancy
                      services in the fields of Audit, Assurance, Tax, Financial
                      analysis, Legal & Secretarial Compliance's at customised
                      rates with quality assurance. It provides all types of
                      Legal consultation and Legal services to its clients. It
                      provides the best CA and CS services in Delhi, Ghaziabad ,
                      NCR. Finleaf provides Best advisory services to its
                      clients at a very Best prices.
                    </p>
                  </div>
                  {/* <div className="row clearfix">
                    <div className="column col-lg-6 col-md-6 col-sm-12">
                      <ul className="list-style-one">
                        <li>Praesent feugiat sem mattis.</li>
                      </ul>
                    </div>
                    <div className="column col-lg-6 col-md-6 col-sm-12">
                      <ul className="list-style-one">
                        <li>A wonderful serenity.</li>
                      </ul>
                    </div>
                    <div className="column col-lg-6 col-md-6 col-sm-12">
                      <ul className="list-style-one">
                        <li>Premium services beyond you.</li>
                      </ul>
                    </div>
                    <div className="column col-lg-6 col-md-6 col-sm-12">
                      <ul className="list-style-one">
                        <li>Set a link back to this photo.</li>
                      </ul>
                    </div>
                  </div> */}
                  <div className="question">
                    Call to ask <Link to="/">any question</Link>{" "}
                    <strong>+91 8505949827</strong>{" "}
                    <span className="or">or</span>{" "}
                    <strong>+91 8766224590</strong>
                  </div>
                  <div className="signature">
                    <div className="signature-img">
                      <img src="assets/images/icons/signature-1.png" alt="" />
                    </div>
                    <h5>Shelly Gupta</h5>
                    <div className="designation">(Chairman and founder)</div>
                  </div>
                </div>
              </div>

              {/* <!-- Video Column --> */}
              <div className="video-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="video-box">
                    <figure className="image">
                      <img src="assets/images/resource/video-img.jpg" alt="" />
                    </figure>
                  </div>

                  {/* <div className="fact-counter">
                    <div className="auto-container">
                      <div className="row clearfix">
                        
                        <div className="column counter-column col-lg-4 col-md-6 col-sm-12">
                          <div
                            className="inner wow fadeInLeft"
                            data-wow-delay="0ms"
                            data-wow-duration="1500ms"
                          >
                            <div className="count-outer count-box">
                              <span
                                className="count-text"
                                data-speed="2000"
                                data-stop="1235"
                              >
                                0
                              </span>
                              <h4 className="counter-title">
                                Satisfied Clients
                              </h4>
                              <div className="text">Dolore magna aliq</div>
                            </div>
                          </div>
                        </div>

                        
                        <div className="column counter-column col-lg-4 col-md-6 col-sm-12">
                          <div
                            className="inner wow fadeInLeft"
                            data-wow-delay="300ms"
                            data-wow-duration="1500ms"
                          >
                            <div className="count-outer count-box">
                              <span
                                className="count-text"
                                data-speed="3500"
                                data-stop="1402"
                              >
                                0
                              </span>
                              +
                              <h4 className="counter-title">Completed works</h4>
                              <div className="text">
                                consectetur adipisicing
                              </div>
                            </div>
                          </div>
                        </div>

                        
                        <div className="column counter-column col-lg-4 col-md-12 col-sm-12">
                          <div
                            className="inner wow fadeInLeft"
                            data-wow-delay="600ms"
                            data-wow-duration="1500ms"
                          >
                            <div className="count-outer count-box">
                              <span
                                className="count-text"
                                data-speed="2000"
                                data-stop="35"
                              >
                                0
                              </span>
                              <h4 className="counter-title">Winning Awards</h4>
                              <div className="text">Lorem ipsum dolor</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}
        {/* <!-- Services Section Eight --> */}
        <OurJourney />
        {/* <!-- End Services Section Eight --> */}
        {/* <!-- Services Section Nine --> */}
        <section className="services-section-nine">
          <div className="auto-container">
            {/* <!-- Sec Title Two --> */}
            <div className="sec-title-two centered">
              <div className="title">Services</div>
              <h2>
                Make all the right money moves by our <span>services</span>
              </h2>
            </div>

            <div className="clearfix">
              {/* <!-- Services Block Twelve --> */}
              <div className="services-block-twelve col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-box wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="image">
                    <img src="assets/images/myimages/1.jpg" alt="" />
                    {/* <!-- Overlay Box --> */}
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="content">
                          <h4>Company Services</h4>
                          <div className="text">
                            We give advice on Company Registration in India and
                            provide the complete solution for Company Formation
                            in India, Private limited Company Formation and
                            Company Incorporation in India.
                          </div>
                          <div className="arrow-box fa fa-angle-right"></div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Overlay Box Two --> */}
                    <div className="overlay-box-two">
                      <div className="overlay-inner-two">
                        <div className="large-icon flaticon-statistics"></div>
                        <div className="content-two">
                          <div className="icon-box">
                            <span className="icon flaticon-statistics"></span>
                          </div>
                          <h4>
                            <Link to="/">Company Services</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Services Block Twelve --> */}
              <div className="services-block-twelve col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-box wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="image">
                    <img src="assets/images/myimages/2.jpg" alt="" />
                    {/* <!-- Overlay Box --> */}
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="content">
                          <h4>Intellectual Property Rights</h4>
                          <div className="text line-clamp-2">
                            We endows all the top-notch services related to
                            trademark, copyright, and patent. Before talking
                            about what Intellectual Property Law firms in Delhi
                            or IPR Law firms in Delhi are, we should first have
                            an understanding of Intellectual Properties (IPs)
                            and Intellectual Property Rights (IPRs). IPs refer
                            to the creation of the human mind which includes
                            inventions, new ideas, innovations, artistic and
                            literary work, industrial design, logos, brand
                            names, marks, etc. IPRs refer to right given for use
                            of created IPs. The rights for the created IPs are
                            given by the Government to the creator for use of
                            his or her creation for a certain period. IPRs
                            provide control to the creator over the created IPs.
                          </div>
                          <div className="arrow-box fa fa-angle-right"></div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Overlay Box Two --> */}
                    <div className="overlay-box-two">
                      <div className="overlay-inner-two">
                        <div className="large-icon flaticon-graph"></div>
                        <div className="content-two">
                          <div className="icon-box">
                            <span className="icon flaticon-graph"></span>
                          </div>
                          <h4>
                            <Link to="/">Intellectual Property Rights</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Services Block Twelve --> */}
              <div className="services-block-twelve col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-box wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="image">
                    <img src="assets/images/myimages/3.jpg" alt="" />
                    {/* <!-- Overlay Box --> */}
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="content">
                          <h4>Limited Liability Partnership</h4>
                          <div className="text">
                            Business can be setup in India in three types like
                            Formation of liaison office , Formation of Project
                            office and Formation of Branch office
                          </div>
                          <div className="arrow-box fa fa-angle-right"></div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Overlay Box Two --> */}
                    <div className="overlay-box-two">
                      <div className="overlay-inner-two">
                        <div className="large-icon flaticon-money-bag"></div>
                        <div className="content-two">
                          <div className="icon-box">
                            <span className="icon flaticon-money-bag"></span>
                          </div>
                          <h4>
                            <Link to="/">Limited Liability Partnership</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Services Block Twelve --> */}
              <div className="services-block-twelve col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-box wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="image">
                    <img src="assets/images/myimages/4.png" alt="" />
                    {/* <!-- Overlay Box --> */}
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="content">
                          <h4>Taxation Services</h4>
                          <div className="text">
                            Direct tax consultancy together with innovative tax
                            efficient strategies, provided by us form an
                            integral part of viable business decisions. These
                            help our clients attain the desired goals.
                          </div>
                          <div className="arrow-box fa fa-angle-right"></div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Overlay Box Two --> */}
                    <div className="overlay-box-two">
                      <div className="overlay-inner-two">
                        <div className="large-icon flaticon-exam"></div>
                        <div className="content-two">
                          <div className="icon-box">
                            <span className="icon flaticon-exam"></span>
                          </div>
                          <h4>
                            <Link to="/">Taxation Services</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Services Block Twelve --> */}
              <div className="services-block-twelve col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-box wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="image">
                    <img src="assets/images/myimages/5.jpg" alt="" />
                    {/* <!-- Overlay Box --> */}
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="content">
                          <h4>Registration Services</h4>
                          <div className="text">
                            We are the leading service provider around the globe
                            for Start-up Registration, RERA Registration,
                            SSI/MSME Registration, Importer Exporter Code (IEC),
                            Drug License, and Liquor License. We have presence
                            in the sector of taxation, accounting, and law since
                            last 50 years.
                          </div>
                          <div className="arrow-box fa fa-angle-right"></div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Overlay Box Two --> */}
                    <div className="overlay-box-two">
                      <div className="overlay-inner-two">
                        <div className="large-icon flaticon-money-bag"></div>
                        <div className="content-two">
                          <div className="icon-box">
                            <span className="icon flaticon-money-bag"></span>
                          </div>
                          <h4>
                            <Link to="/">Registration Services</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Services Block Twelve --> */}
              <div className="services-block-twelve col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-box wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="image">
                    <img src="assets/images/resource/service-6.jpg" alt="" />
                    {/* <!-- Overlay Box --> */}
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="content">
                          <h4>Documentation Services</h4>
                          <div className="text">
                            We assist in drafting all the documents that
                            companies require such as HIRING DOCUMENTS,
                            INVESTMENT SUPPORT, WEB OR APP-RELATED, LEGAL NOTICE
                            & DEEDS, etc.
                          </div>
                          <div className="arrow-box fa fa-angle-right"></div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Overlay Box Two --> */}
                    <div className="overlay-box-two">
                      <div className="overlay-inner-two">
                        <div className="large-icon flaticon-exam"></div>
                        <div className="content-two">
                          <div className="icon-box">
                            <span className="icon flaticon-exam"></span>
                          </div>
                          <h4>
                            <Link to="/">Documentation Services</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Case Section --> */}
        <section className="case-section alternate">
          <div className="auto-container">
            <div className="sec-title-two">
              <div className="clearfix">
                <div className="pull-left">
                  <div className="title">Way to Connect</div>
                  <h2>
                    Online ease <span>local reach</span>
                  </h2>
                </div>
                <div className="pull-right">
                  <div className="text">
                    We utilise a mix of technology and human touch to deliver
                    quality business services, at scale across india. With a
                    network of over 300 professionals spread across over 17+
                    cities and towns, we have local reach while being highly
                    accessible through the internet and smart phone.
                  </div>
                </div>
              </div>
            </div>

            <div className="clearfix">
              {/* <!-- Case Block --> */}
              <div className="case-block style-two col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img src="assets/images/resource/author-1.jpg" alt="" />
                  </div>
                  {/* <div className="title">Core business</div> */}
                  <h5>
                    <Link to="/">Core business</Link>
                  </h5>
                  <div className="text line-clamp-5">
                    1. Government schemes related to grants, equity, and debt
                    for the people who got affected during the COVID pandemic.
                    <br />
                    2. A joint venture from an international client if the
                    company is into the manufacturing business. <br />
                    3. International Equity or Debt for turnover of more than
                    100 cores.
                    <br /> 4. Placement of Shares with institutions and HNI if
                    it is listed in NSE/BSE. <br /> 5. Private Equity from the
                    market if the company is 3 years old and the turnover is 100
                    crores. <br /> 6. Seed capital for start-up companies if the
                    company is less than 1 year old and huge growth prospects.{" "}
                    <br /> 7. SME listing and funding for the companies more
                    than 20 crore turnover. <br />
                    8. Bank restructuring or distress funding for companies
                    facing problem with banks. <br />
                    9. Discounting facilities for export turnover companies.
                    <br />
                    10. The settlement with debtors if the company is facing a
                    crisis in finance. <br />
                    11. Bigger orders or contracts for the companies where the
                    product value is more than 50 lacs. <br />
                    12. Strategy for the companies who are looking to increase
                    turnover or more customers. <br />
                    13. Automation solution strategy for the companies who want
                    to reduce manpower and increase profitability in another 2
                    years. <br />
                    14. Business Enhancement and Growth prospects.
                    <br />
                    15. Cash Projections. <br />
                  </div>
                  <Link className="arrow">
                    <span className="flaticon-direction"></span>
                  </Link>
                </div>
              </div>

              {/* <!-- Case Block --> */}
              <div className="case-block style-two col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img src="assets/images/resource/author-2.jpg" alt="" />
                  </div>
                  {/* <div className="title">Sustainability</div> */}
                  <h5>
                    <Link to="/">
                      Services for business owners and entrepreneurs.
                    </Link>
                  </h5>
                  <div className="text line-clamp-5">
                    1. Business analysis. Very important to analyze your current
                    business level and also to estimate the future.
                    <br /> 2. Financial analysis. To check your current company
                    status financially and also to identify the appetite of
                    equity and debt funding possibilities to your business.
                    <br /> 3. Business intelligence. It is very ideal for those
                    who want to be relaxed/ automate while doing business. It
                    will help you and control the entire business, customers,
                    financials, logistics, or whatever in a dashboard.
                    <br /> 4. Digital strategy. It is very important to generate
                    leads for your business either by branding, positioning, and
                    marketing. The purpose of doing this to do indirect lead
                    generation.
                    <br /> 5. Digital Marketing. Creating leads for your
                    business.
                    <br /> 6. Valuation. Very important to selling the business,
                    getting equity investors, ESOP, private placements.
                    <br /> 7. Financial Strategy. For those having financial
                    stress in the company. It is to identify opportunity or way
                    to come out of the financial issues.
                    <br /> 8. Pitchbook or information memorandum. It is a key
                    factor to circulate to investors after identifying the
                    potential people.
                    <br /> 9. Detailed project report or feasibility report. It
                    is very accurate to measure future business potential or
                    financial potential. By doing this, you can eliminate lots
                    of future problems and current problem solutions.
                    <br /> 10. Due Diligence of the Company: It is done in all
                    respects for assessing the viability of project and Company.
                    <br /> 11. Legal Spectrum: Legal Advise and Consultation is
                    provided in all respects
                  </div>
                  <Link className="arrow">
                    <span className="flaticon-direction"></span>
                  </Link>
                </div>
              </div>

              {/* <!-- Case Block --> */}
              <div className="case-block style-two col-lg-4 col-md-12 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img src="assets/images/resource/author-3.jpg" alt="" />
                  </div>
                  {/* <div className="title">Investing</div> */}
                  <h5>
                    <Link to="/">Highlights</Link>
                  </h5>
                  <div className="text line-clamp-5">
                    • Advised, Structured, and Helped more than 1000
                    transactions.
                    <br />• Seed Funding Expert .<br />• Due Diligence Experts.
                    <br />• Agreements like Share Holders Agreement, Promoters
                    Agreement, Policymaking, etc.
                    <br />• Advised more than 100 Equity Investments for our
                    side investors.
                    <br />• Massive Investors Network and Clients Network.
                    <br />• Currently advising sizable portfolio on investments.
                    <br />• Experts in handling issues and advisory functions.
                    <br />• We have associate offices in Bombay, Delhi, Chennai,
                    Madras, Tamil Naidu, Mumbai, Pune, Malaysia, Singapore,
                    Dubai, London, and Japan
                  </div>
                  <Link className="arrow">
                    <span className="flaticon-direction"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Case Section --> */}
        {/* <!-- Call To Action --> */}
        {/* <section
          className="call-to-action"
          style={{ backgroundImage: "url(assets/images/background/3.jpg)" }}
        >
          <div className="auto-container">
            <div className="sec-title-two">
              <h2>
                Have a great opportunity for <span>finance</span>
              </h2>
            </div>
            <div className="btns-box">
              <Link to="/">
                <img src="assets/images/icons/app-btn.png" alt="" />
              </Link>
              <Link to="/">
                <img src="assets/images/icons/google-btn.png" alt="" />
              </Link>
            </div>
            <div
              className="image wow jello"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <img src="assets/images/resource/app-mobile.png" alt="" />
            </div>
          </div>
        </section> */}
        {/* <!-- End Call To Action --> */}
        {/* <!-- Testimonial Section Three --> */}
        <Testimonial />
        {/* <!-- End Testimonial Section Three --> */}
        {/* <!-- News Section Two --> */}
        <BlogSection data={blogData} />
        {/* <!--Map Info Section--> */}
        <MapInfo />
        {/* <!--End Map Info Section--> */}
        {/* <!--Sponsors Section--> */}
        <ClientBrandSection />
        {/* <!--End Sponsors Section--> */}
        {/* <!--Main Footer--> */}
        <Footer />
      </div>
    </div>
  );
}

export default Home;
