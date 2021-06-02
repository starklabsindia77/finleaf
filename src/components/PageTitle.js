import React from "react";
import { Link } from "react-router-dom";
function PageTitle({ pageName }) {
  return (
    <section
      className="page-title"
      style={{ backgroundImage: "url(/assets/images/background/8.jpg)" }}
    >
      <div className="auto-container">
        <div className="content">
          <h1>{pageName}</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Pages</li>
            <li>{pageName}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PageTitle;
