import React from "react";
/**
 * FAQ question 2 component
 * Renders the content for the second question in the FAQ section related to Subscription and Payment
 */
export default function question2() {
  return (
    <>
      <div className="row">
        <div className="col col-sm-12 d-flex justify-content-center">
          <h1>Account Management</h1>
        </div>
      </div>
      <div className="row">
      <div className="col col-sm-8 offset-sm-2 d-column justify-content-center border-30 border-dark-tr text-center p-4 bg-success">
          <h3><strong>How do I create an account on the weather app?</strong></h3>
          <p>
          To create an account, simply download the app from the App Store or Google Play Store and follow the prompts to sign up using your email address or social media accounts.
          </p>
        </div>
        <div className="col col-sm-8 offset-sm-2 d-column justify-content-center border-30 border-dark-tr text-center p-4 mt-4">
          <h3><strong>Can I access my account from multiple devices?</strong></h3>
          <p>
          Yes, you can access your account from any device by logging in with the same credentials used during registration.
          </p>
        </div>
        <div className="col col-sm-8 offset-sm-2 d-column justify-content-center border-30 border-dark-tr text-center p-4 mt-4 bg-success">
          <h3><strong>What should I do if I forget my password?</strong></h3>
          <p>
          If you forget your password, you can easily reset it by selecting the "Forgot Password" option on the login screen. You will receive instructions on how to reset your password via email.
          </p>
        </div>
      </div>
    </>
  );
}
