import React from "react";

export default function question1() {
  return (
    <>
      <div className="row">
        <div className="col col-sm-12 d-flex justify-content-center">
          <h1>Subscription and Payment</h1>
        </div>
      </div>
      <div className="row">
        <div className="col col-sm-8 offset-sm-2 d-column justify-content-center border-30 border-dark-tr text-center p-4 bg-success">
          <h3><strong>What features are available for free, and what features require a subscription?</strong></h3>
          <p>
          The basic features of the app, including current weather updates and limited forecasts, are available for free. Premium features, such as extended forecasts, crop-specific insights, and ad-free experience, require a subscription.
          </p>
        </div>
        <div className="col col-sm-8 offset-sm-2 d-column justify-content-center border-30 border-dark-tr text-center p-4 mt-4">
          <h3><strong>How do I subscribe to a premium plan?</strong></h3>
          <p>
          To subscribe to a premium plan, go to the "Subscription" section within the app and select the desired plan. Follow the prompts to complete the subscription process.
          </p>
        </div>
        <div className="col col-sm-8 offset-sm-2 d-column justify-content-center border-30 border-dark-tr text-center p-4 mt-4 bg-success">
          <h3><strong>Can I change or cancel my subscription at any time?</strong></h3>
          <p>
          Yes, you can manage your subscription settings, including changing or canceling your subscription, at any time through the app's settings or your device's app store.
          </p>
        </div>
      </div>
    </>
  );
}
