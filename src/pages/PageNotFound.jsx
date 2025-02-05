import React from "react";
import "../css/pageNotFound.css";
import pageNotFoundImage from "../assets/page-not-phone.jpg";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="content">
        <img src={pageNotFoundImage} alt="404 Error" className="icon" />
        <h1 className="title">Oops! Page Not Found</h1>
      </div>
      ~
    </div>
  );
};

export default PageNotFound;
