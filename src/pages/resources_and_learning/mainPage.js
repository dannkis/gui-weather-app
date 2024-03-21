import React from "react";
import image1 from "../../../src/media/images/resources/learning.jpg"; // Make sure the path is correct

// Main Page component for the Resources and Learning section
export default function MainPage() {
  return (
    <>
      {/* Row for the title of the Resources and Learning section */}
      <div className="row">
        <div className="col col-sm-12 d-flex justify-content-center">
          <h1>Resources & Learning</h1> {/* The title of the main page */}
        </div>
      </div>
      {/* Row for the introductory text of the Resources and Learning section */}
      <div className="row">
        <div className="col col-sm-10 offset-sm-1 d-flex justify-content-center align-items-center">
          Welcome to the Resources and Learning Centre! This hub is dedicated to helping farmers, agronomists, and agricultural enthusiasts leverage weather information for better crop management. Explore our collection of guides, tutorials, and expert advice tailored to enhance your farming practices through the effective use of weather data. From understanding weather basics to mastering advanced agricultural technologies, our resources are designed to support your journey towards more informed, efficient, and sustainable farming.
        </div>
      </div>
      {/* Row for displaying the centered image under the text */}
      <div className="row justify-content-center mt-3"> {/* Added margin-top for spacing */}
        <div className="col d-flex justify-content-center"> {/* Center the image */}
          <img 
            src={image1} 
            alt="Resources and learning visual representation" // Descriptive alt text for the image
            className="img-fluid" // Responsive image class from Bootstrap
            style={{ maxWidth: "1000px", height: "auto" }} // Limits the image width to 1000px while maintaining aspect ratio
          />
        </div>
      </div>
    </>
  );
}
