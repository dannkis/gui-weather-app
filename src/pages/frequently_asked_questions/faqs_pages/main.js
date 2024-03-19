import React from "react";
import image1 from "../../../media/images/faq/image-1.png";

export default function () {
  return (
    <>
      <div className="row">
        <div className="col col-sm-12 d-flex justify-content-center">
          <h1>FAQs</h1>
        </div>
      </div>
      <div className="row">
        <div className="col col-sm-5 offset-sm-1 d-flex justify-content-center align-items-center">
        Welcome to our FAQs page! Here, you'll find answers to common questions about using our app. Whether you're a farmer, gardener, or weather enthusiast, we're here to help you make the most of our features. If you can't find what you're looking for, reach out to our support team for assistance. 
        </div>
        <img className="img-fluid col col-sm-5" src={image1} />
      </div>
    </>
  );
}
