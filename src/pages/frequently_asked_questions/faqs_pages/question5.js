import React from "react";
/**
 * FAQ question 5 component
 * Renders the content for the fifth question in the FAQ section related to Subscription and Payment
 */
export default function question5() {
  return (
    <>
      <div className="row">
        <div className="col col-sm-12 d-flex justify-content-center">
          <h1>Data Privacy and Security</h1>
        </div>
      </div>
      <div className="row">
        <div className="col col-sm-8 offset-sm-2 d-column justify-content-center border-30 border-dark-tr text-center p-4 bg-success">
            <h3><strong>How is my personal data protected within the app?</strong></h3>
            <p>
            We take data privacy and security seriously and have implemented measures to protect your personal information from unauthorised access, use, or disclosure. Your data is encrypted and stored securely on our servers.
            </p>
          </div>
          <div className="col col-sm-8 offset-sm-2 d-column justify-content-center border-30 border-dark-tr text-center p-4 mt-4">
            <h3><strong>Does the app collect any information about my usage or location, and if so, how is it used?</strong></h3>
            <p>
            The app may collect anonymous usage data and location information to improve the user experience and provide personalised features, such as local weather forecasts. Your data is anonymous to protect your privacy.
            </p>
          </div>
          <div className="col col-sm-8 offset-sm-2 d-column justify-content-center border-30 border-dark-tr text-center p-4 mt-4 bg-success">
            <h3><strong>Are there any third-party services or integrations used in the app, and how is my data handled in those cases?</strong></h3>
            <p>
            We may use third-party services or integrations to enhance the functionality of the app, such as weather data providers or analytics tools. Your data is only shared with these third parties to the extent necessary to provide the requested services, and we ensure that they adhere to strict privacy and security standards.
            </p>
        </div>
      </div>
    </>
  );
}
