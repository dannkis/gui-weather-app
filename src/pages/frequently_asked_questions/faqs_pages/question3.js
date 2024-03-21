import React from "react";

export default function question3() {
  return (
    <>
      <div className="row">
        <div className="col col-sm-12 d-flex justify-content-center">
          <h1>App Usage and Navigation</h1>
        </div>
      </div>
      <div className="row">
        <div className="col col-sm-8 offset-sm-2 d-column justify-content-center border-30 border-dark-tr text-center p-4 bg-success">
            <h3><strong>How do I navigate through the app to find the weather information I need?</strong></h3>
            <p>
            The app features an intuitive interface with tabs or menus for easy navigation. You can swipe or tap to access different sections, such as current weather, forecasts, and settings.
            </p>
          </div>
          <div className="col col-sm-8 offset-sm-2 d-column justify-content-center border-30 border-dark-tr text-center p-4 mt-4">
            <h3><strong>Can I customise the dashboard or layout of the app?</strong></h3>
            <p>
            Currently, the app does not support customising the dashboard or layout. However, we welcome feedback and may consider adding this feature in future updates.
            </p>
          </div>
          <div className="col col-sm-8 offset-sm-2 d-column justify-content-center border-30 border-dark-tr text-center p-4 mt-4 bg-success">
            <h3><strong>Are there any tutorials or guides available to help me understand how to use the app effectively?</strong></h3>
            <p>
            Yes, we provide tutorials and guides within the app to help users familiarise themselves with its features and functionalities. You can access these resources in the "Help" or "FAQ" section.
            </p>
        </div>
      </div>
    </>
  );
}
