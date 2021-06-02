import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header2 from "../components/Header2";
import PageTitle from "../components/PageTitle";
import Footer2 from "../components/Footer2";
import ServiceSidebar from "../components/ServiceSidebar";
import SubService from "../components/SubService";
import servicesData from "../data/Services";

function ServicesSingle(props) {
  const [singleService, setSingleService] = useState([]);
  const slug = props.match.params.slug;

  useEffect(() => {
    for (var i = 0; i < servicesData.length; i++) {
      if (servicesData[i].slug === slug) {
        setSingleService(servicesData[i]);
      }
    }
  }, [slug]);

  return (
    <div className="page-wrapper">
      <Header2 pageName="Services" />
      <PageTitle pageName={singleService.title} />
      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            <ServiceSidebar />

            <div className="content-side col-lg-8 col-md-12 col-sm-12">
              <div className="services-single">
                <h4>{singleService.title}</h4>
                <div className="text">
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered altera tion in
                    some form, by injected humour, or randomised words which
                    don't look even slightly believable. If you are going to use
                    a passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden.
                  </p>
                  <p>
                    All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined chunks as necessary, making this the first
                    true generator on the Internet.
                  </p>
                </div>

                <SubService data={singleService.subServices} />

                <div className="text">
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered altera tion in
                    some form, by injected humour, or randomised words which
                    don't look even slightly believable. If you are going to use
                    a passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden.
                  </p>
                  <p>
                    All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined chunks as necessary, making this the first
                    true generator on the Internet.
                  </p>
                </div>
                <div className="more-services">
                  <div className="clearfix">
                    <div className="pull-left">
                      <Link href="#">
                        <span className="fa fa-angle-double-left"></span>{" "}
                        Previous Service
                      </Link>
                    </div>
                    <div className="pull-right">
                      <Link href="#">
                        Newer Service{" "}
                        <span className="fa fa-angle-double-right"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default ServicesSingle;
