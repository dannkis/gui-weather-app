import React from "react";
import image1 from "../../../src/media/images/resources/crops.jpg";

// This component provides detailed, weather-based crop management advice.
export default function CropAdvisory() {
  return (
    <>
      {/* Section heading */}
      <div className="row">
        <div className="col col-sm-12 d-flex justify-content-center">
          <h1>Crop Advisory</h1>
        </div>
      </div>
      {/* Description of the crop advisory service */}
      <div className="row">
        <div className="col col-sm-10 offset-sm-1 d-flex justify-content-center align-items-center">
          <p>
            Different crops require specific advice, helping you make informed decisions based on current and forecasted weather conditions. Learn how to optimise watering, fertilising, and harvesting times to maximise yield and quality.
            <br /><br />
            <strong>Crop-Specific Advisory</strong>
            <br />
            Each crop has unique needs and responds differently to the weather. Our crop advisory section offers advice for a variety of crops, which will mitigate issues, such as:
            <br />
            - Tips on managing planting and harvest times according to weather forecasts to avoid frost or excessive heat.
            <br />
            - Guidance on using weather data to prevent disease outbreaks and optimise water use for these sensitive crops.
            <br />
            - Strategies for ensuring these crops receive the right amount of moisture without becoming waterlogged.
            <br />
            By understanding the specific requirements of your crops, you can adjust your farming practices to the current and forecasted weather, improving both yield and quality.
            <br /><br />
            Some articles: <a href="https://www.sciencedirect.com/science/article/pii/S2212096314000266" target="_blank" rel="noopener noreferrer">Science Direct</a>, <a href="https://agri.bot/docs/information-about-crop-advisory/" target="_blank" rel="noopener noreferrer">AgriBot</a>, <a href="https://adas.co.uk/services/agricultural-publications/" target="_blank" rel="noopener noreferrer">Adas</a>
          </p>
        </div>
        <div className="col col-sm-10 offset-sm-1 d-flex justify-content-center"> {/* Center the image */}
          <img 
            src={image1} 
            alt="Crops Field"
            className="img-fluid mt-4" // Ensures the image is responsive and adds margin-top for spacing
          />
        </div>
      </div>
    </>
  );
}
