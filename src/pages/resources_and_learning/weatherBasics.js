import React from "react";
import image1 from "../../../src/media/images/resources/weather-images.jpg";

// This component is designed to educate users on fundamental weather concepts and their impact on agriculture.
export default function WeatherBasics() {
  return (
    <>
      {/* Title row for the Weather Basics section. */}
      <div className="row">
        <div className="col col-sm-12 d-flex justify-content-center">
          <h1>Weather Basics</h1> {/* The main heading/title of the section */}
        </div>
      </div>
      {/* Content row for the main text of the Weather Basics section. */}
      <div className="row">
        <div className="col col-sm-10 offset-sm-1 d-flex justify-content-center align-items-center">
          <p>
            Understanding the basics of weather and its impact on farming is essential for every agriculturist. This section covers fundamental weather concepts and their implications for agricultural practices.
            <br /><br />
            Learn about the crucial aspects of meteorology, including:
            <br />
            - <strong>Temperature:</strong> Its effects on plant growth and pest behavior.
            <br />
            - <strong>Precipitation and Storms:</strong> Optimising irrigation and understanding the impact of extreme weather.
            <br />
            - <strong>Weather Systems and Patterns:</strong> Their role in agricultural planning.
            <br /><br />
            Some links: <a href="https://education.nationalgeographic.org/resource/weather/" target="_blank" rel="noopener noreferrer">National Geographic Education</a>,  <a href="https://learning-center.homesciencetools.com/article/weather-storms/" target="_blank" rel="noopener noreferrer">Home Science Tools</a>,  <a href="https://www.noaa.gov/education/resource-collections/weather-atmosphere/weather-systems-patterns" target="_blank" rel="noopener noreferrer">Weather Systems & Patterns</a>
          </p>
        </div>
      </div>
      {/* Row for displaying the centered image under the text */}
      <div className="row justify-content-center mt-3">
        <div className="col d-flex justify-content-center">
          <img 
            src={image1} 
            alt="Weather phenomena and their relevance to agriculture"
            className="img-fluid"
            style={{ maxWidth: "1000px", height: "auto" }}
          />
        </div>
      </div>
    </>
  );
}
