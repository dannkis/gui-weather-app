import React from "react";
/**
 * FAQ question 4 component
 * Renders the content for the fourth question in the FAQ section related to Subscription and Payment
 */
export default function question4() {
  return (
    <>
      <div className="row">
        <div className="col col-sm-12 d-flex justify-content-center">
          <h1>Technical Support</h1>
        </div>
      </div>
      <div className="row">
        <div className="col col-sm-8 offset-sm-2 d-column justify-content-center border-30 border-dark-tr text-center p-4 bg-success">
            <h3><strong>How can I contact technical support if I encounter any issues with the app?</strong></h3>
            <p>
            You can contact our technical support team by emailing support@weatherapp.com or using the "Contact Us" form within the app. Our support team will respond to your inquiry as soon as possible.
            </p>
          </div>
      </div>
    </>
  );
}
